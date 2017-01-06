defmodule Carbon.ProjectController do
  use Carbon.Web, :controller

  import Carbon.ControllerUtils

  alias Carbon.Project
  alias Carbon.Account

  def index(conn, %{"account_id" => account_id}) do
    query = from p in Project,
      where: p.account_id == ^account_id and p.active == true,
      order_by: p.updated_at,
      preload: [:tags]

    conn
    |> assign(:account, Repo.get(Account, account_id))
    |> assign(:projects, Repo.all(query))
    |> render("index.html")
  end

  def new(conn, _params) do
    conn
    |> assign(:changeset, Project.changeset(%Project{}))
    |> render("new.html")
  end

  def create(conn, %{"account_id" => account_id, "project" => project_params}) do
    current_user = conn.assigns[:current_user]
    tags = get_tags_from(Carbon.ProjectTag, project_params)
    project = %Project{account: Repo.get(Account, account_id)}
    changeset = Project.update_changeset(project, scrub(project_params), tags)

    case Repo.insert(changeset) do
      {:ok, project} ->
        Carbon.Activity.new("account", String.to_integer(account_id), current_user.id, :create, "project", project.id, changeset)
        conn
        |> put_flash(:info, "Project created successfully.")
        |> redirect(to: account_project_path(conn, :index, account_id))
      {:error, changeset} ->
        conn
        |> put_flash(:info, "Project could not be created.")
        |> assign(:changeset, changeset)
        |> render("new.html")
    end
  end

  def edit(conn, %{"id" => project_id}) do
    query = from p in Project,
      where: p.id == ^project_id,
      preload: [:tags]
    project = Repo.one(query)
    changeset = Project.changeset(project)

    conn
    |> assign(:project, project)
    |> assign(:changeset, changeset)
    |> render("edit.html")
  end

  def delete(conn, %{"account_id" => account_id, "id" => project_id}) do
    current_user = conn.assigns[:current_user]
    project = Repo.get(Project, project_id)
    changeset = Project.archive_changeset(project, %{active: false})

    case Repo.update(changeset) do
      {:ok, project} ->
        Carbon.Activity.new("account", String.to_integer(account_id), current_user.id, :remove, "project", project.id, changeset)
        conn
        |> put_flash(:deleted_project, project)
        |> redirect(to: account_project_path(conn, :index, account_id))
      {:error, changeset} ->
        conn
        |> assign(:changeset, changeset)
        |> put_flash(:info, "Failed to delete project.")
        |> render(account_project_path(conn, :index, account_id))
    end
  end

  def restore(conn, %{"account_id" => account_id, "id" => project_id}) do
    current_user = conn.assigns[:current_user]
    project = Repo.get(Project, project_id)
    changeset = Project.archive_changeset(project, %{active: true})

    case Repo.update(changeset) do
      {:ok, project} ->
        Carbon.Activity.new("account", String.to_integer(account_id), current_user.id, :restore, "project", project.id, changeset)
        conn
        |> redirect(to: account_project_path(conn, :index, account_id))
      {:error, changeset} ->
        conn
        |> assign(:changeset, changeset)
        |> put_flash(:info, "Failed to restore project.")
        |> render(account_project_path(conn, :index, account_id))
    end
  end

  def update(conn, %{"account_id" => account_id, "id" => id, "project" => project_params}) do
    current_user = conn.assigns[:current_user]
    tags = get_tags_from(Carbon.ProjectTag, project_params)
    project = Project |> Repo.get!(id) |> Repo.preload([:tags])
    changeset = Project.update_changeset(project, scrub(project_params), tags)

    case Repo.update(changeset) do
      {:ok, _project} ->
        Carbon.Activity.new("account", String.to_integer(account_id), current_user.id, :update, "project", project.id, changeset)
        conn
        |> put_flash(:info, "Project updated successfully.")
        |> redirect(to: account_project_path(conn, :index, account_id))
      {:error, changeset} ->
        conn
        |> assign(:project, project)
        |> assign(:changeset, changeset)
        |> render("edit.html")
    end
  end

  defp scrub(params) do
    params
    |> Map.update("estimate_min", nil, &empty_to_nil/1)
    |> Map.update("estimate_max", nil, &empty_to_nil/1)
  end
  defp empty_to_nil(""), do: nil
  defp empty_to_nil(x), do: x

end
