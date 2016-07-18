defmodule Galaxy.DealStageControllerTest do
  use Galaxy.ConnCase

  alias Galaxy.DealStage
  @valid_attrs %{}
  @invalid_attrs %{}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, deal_stage_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    deal_stage = Repo.insert! %DealStage{}
    conn = get conn, deal_stage_path(conn, :show, deal_stage)
    assert json_response(conn, 200)["data"] == %{"id" => deal_stage.id}
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, deal_stage_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, deal_stage_path(conn, :create), deal_stage: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(DealStage, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, deal_stage_path(conn, :create), deal_stage: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    deal_stage = Repo.insert! %DealStage{}
    conn = put conn, deal_stage_path(conn, :update, deal_stage), deal_stage: @valid_attrs
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(DealStage, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    deal_stage = Repo.insert! %DealStage{}
    conn = put conn, deal_stage_path(conn, :update, deal_stage), deal_stage: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    deal_stage = Repo.insert! %DealStage{}
    conn = delete conn, deal_stage_path(conn, :delete, deal_stage)
    assert response(conn, 204)
    refute Repo.get(DealStage, deal_stage.id)
  end
end
