defmodule Carbon.AttachmentController do
  use Carbon.Web, :controller
  alias Carbon.{ Account, Attachment }

  def show(conn, %{"id" => id}) do
    current_user = conn.assigns[:current_user]
    attachment = Repo.one(from a in Attachment, where: a.id == ^id and (not a.private or a.user_id == ^current_user.id))
    conn
    |> put_resp_content_type(attachment.mimetype)
    |> put_resp_header("Content-Disposition", ~s[attachment; filename="#{ attachment.name }"])
    |> send_resp(200, Base.decode64!(attachment.base64_content))
  end

  def index(conn, %{"account_id" => account_id}) do
    current_user = conn.assigns[:current_user]
    query = from a in Attachment,
      where: a.account_id == ^account_id and (not a.private or a.user_id == ^current_user.id),
      select: [ :id, :name, :description, :private, :mimetype, :inserted_at, :user_id ],
      order_by: [ asc: :name ],
      preload: :user
    conn
    |> assign(:attachments, Repo.all(query))
    |> assign(:account, Repo.get(Account, account_id))
    |> render("index.html")
  end

  def new(conn, %{"account_id" => account_id}) do
    conn
    |> assign(:changeset, Attachment.changeset(%Attachment{}))
    |> assign(:account_id, account_id)
    |> render("new.html")
  end

  def create(conn, %{"account_id" => account_id} = params) do
    current_user = conn.assigns[:current_user]
    attachment = %Carbon.Attachment{user: current_user, account: Repo.get(Account, account_id)} 
    upload = get_in(params, ["attachment", "file"])
    attachment_params = %{
      "mimetype" => upload.content_type,
      "name" => upload.filename,
      "private" => get_in(params, ["attachment", "private"]),
      "description" => get_in(params, ["attachment", "description"]),
      "base64_content" => upload.path |> File.read! |> Base.encode64,
    }
    changeset = Carbon.Attachment.changeset(attachment, attachment_params)

    case Repo.insert(changeset) do
      {:ok, attachment} ->
        Carbon.Activity.new("account", String.to_integer(account_id), current_user.id, :create, "attachment", attachment.id, changeset)
        conn
        |> put_flash(:info, "Attachment added successfully.")
        |> redirect(to: account_attachment_path(conn, :index, account_id))
      {:error, changeset} ->
        conn
        |> assign(:changeset, changeset)
        |> assign(:account_id, account_id)
        |> render("new.html")
    end
  end

  def edit(conn, %{"account_id" => account_id, "id" => id}) do
    current_user = conn.assigns[:current_user]
    attachment = Repo.one from(a in Attachment, where: a.id == ^id and (not a.private or a.user_id == ^current_user.id), select: [ :id, :description, :private ])
    conn
    |> assign(:changeset, Attachment.changeset(attachment))
    |> assign(:account_id, account_id)
    |> assign(:id, id)
    |> render("edit.html")
  end

  def update(conn, %{"account_id" => account_id, "id" => id, "attachment" => attachment_params}) do
    current_user = conn.assigns[:current_user]
    attachment = Repo.one from(a in Attachment, where: a.id == ^id and (not a.private or a.user_id == ^current_user.id), select: [ :id, :description, :private ])
    changeset = Attachment.update_changeset attachment, attachment_params
    case Repo.update(changeset) do
      {:ok, attachment} ->
        Carbon.Activity.new("account", String.to_integer(account_id), current_user.id, :update, "attachment", attachment.id, changeset)
        conn
        |> put_flash(:info, "Attachment updated successfully.")
        |> redirect(to: account_attachment_path(conn, :index, account_id))
      {:error, changeset} ->
        conn
        |> assign(:changeset, changeset)
        |> assign(:account_id, account_id)
        |> assign(:id, id)
        |> render("edit.html")
    end
  end

  def delete(conn, %{"account_id" => account_id, "id" => id}) do
    current_user = conn.assigns[:current_user]
    case Repo.delete_all(where(Attachment, id: ^id)) do
      { 1, _ } ->
        Carbon.Activity.new("account", String.to_integer(account_id), current_user.id, :remove, "attachment", String.to_integer(id), nil)
        conn
        |> put_flash(:info, "Attachment removed successfully.")
        |> redirect(to: account_attachment_path(conn, :index, account_id))
      _ ->
        conn
        |> put_flash(:info, "Failed to remove the attachment.")
        |> redirect(to: account_attachment_path(conn, :index, account_id))
    end
  end
end
