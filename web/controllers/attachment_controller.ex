defmodule Carbon.AttachmentController do
  use Carbon.Web, :controller

  def show(conn, %{"id" => id}) do
    current_user = conn.assigns[:current_user]
    attachment = Repo.one(from a in Carbon.Attachment, where: a.id == ^id and (not a.private or a.user_id == ^current_user.id))

    conn
    |> put_resp_content_type(attachment.mimetype)
    |> put_resp_header("Content-Disposition", ~s[attachment; filename="#{ attachment.name }"])
    |> send_resp(200, Base.decode64!(attachment.base64_content))
  end

  def index(conn, params) do
    current_user = conn.assigns[:current_user]
    owner = conn.assigns[:foreign_key]
    owner_id = params[owner |> Atom.to_string]
    query = from a in Carbon.Attachment,
      where: field(a, ^owner) == ^owner_id and (not a.private or a.user_id == ^current_user.id),
      select: [ :id, :name, :description, :private, :mimetype, :inserted_at, :user_id ],
      order_by: [ asc: :name ],
      preload: :user

    conn
    |> assign(:attachments, Repo.all(query))
    |> assign(:add_new_path, path(conn, :new, owner, owner_id))
    |> render("index.html")
  end

  def new(conn, params) do
    conn
    |> assign(:changeset, Carbon.Attachment.changeset(%Carbon.Attachment{}))
    |> render("new.html")
  end

  def create(conn, params) do
    current_user = conn.assigns[:current_user]
    owner = conn.assigns[:foreign_key]
    owner_id = params[owner |> Atom.to_string]
    %Plug.Upload{path: path, content_type: mimetype, filename: name} = get_in(params, ["attachment", "file"])

    attachment_params = %{}
    |> Map.put(:mimetype, mimetype)
    |> Map.put(:name, name)
    |> Map.put(:private, get_in(params, ["attachment", "private"]))
    |> Map.put(:description, get_in(params, ["attachment", "description"]))
    |> Map.put(:base64_content, path |> File.read! |> Base.encode64)
    |> Map.put(owner, owner_id)

    changeset = %Carbon.Attachment{user: current_user} |> Carbon.Attachment.changeset(attachment_params)

    case Repo.insert(changeset) do
      {:ok, _attachment} ->
        conn
        |> put_flash(:info, "Attachment added successfully.")
        |> redirect(to: path(conn, :index, owner, owner_id))
      {:error, changeset} ->
        conn
        |> assign(:changeset, changeset)
        |> render("new.html")
    end
  end

  def delete(conn, %{"id" => id}) do
    { 1, _returning } = from(a in Carbon.Attachment, where: a.id == ^id) |> Repo.delete_all
  end

  defp path(conn, action, :account_id, account_id) do
    account_attachment_path(conn, action, account_id)
  end
end
