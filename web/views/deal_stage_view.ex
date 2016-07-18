defmodule Galaxy.DealStageView do
  use Galaxy.Web, :view

  def render("index.json", %{deal_stages: deal_stages}) do
    %{data: render_many(deal_stages, Galaxy.DealStageView, "deal_stage.json")}
  end

  def render("show.json", %{deal_stage: deal_stage}) do
    %{data: render_one(deal_stage, Galaxy.DealStageView, "deal_stage.json")}
  end

  def render("deal_stage.json", %{deal_stage: deal_stage}) do
    %{
      id: deal_stage.id,
      key: deal_stage.key,
      color: deal_stage.color,
      active: deal_stage.active,
    }
  end
end
