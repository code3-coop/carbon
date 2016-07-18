defmodule Galaxy.DealStageController do
  use Galaxy.Web, :controller

  alias Galaxy.DealStage

  def index(conn, _params) do
    deal_stages = Repo.all(DealStage)
    render(conn, "index.json", deal_stages: deal_stages)
  end

  def create(conn, %{"deal_stage" => deal_stage_params}) do
    changeset = DealStage.changeset(%DealStage{}, deal_stage_params)

    case Repo.insert(changeset) do
      {:ok, deal_stage} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", deal_stage_path(conn, :show, deal_stage))
        |> render("show.json", deal_stage: deal_stage)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Galaxy.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    deal_stage = Repo.get!(DealStage, id)
    render(conn, "show.json", deal_stage: deal_stage)
  end

  def update(conn, %{"id" => id, "deal_stage" => deal_stage_params}) do
    deal_stage = Repo.get!(DealStage, id)
    changeset = DealStage.changeset(deal_stage, deal_stage_params)

    case Repo.update(changeset) do
      {:ok, deal_stage} ->
        render(conn, "show.json", deal_stage: deal_stage)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Galaxy.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    deal_stage = Repo.get!(DealStage, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(deal_stage)

    send_resp(conn, :no_content, "")
  end
end
