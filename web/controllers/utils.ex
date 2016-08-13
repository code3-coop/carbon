defmodule Carbon.ControllerUtils do
  import Ecto.Query, only: [from: 2]
  alias Carbon.Repo

  def get_tags_from(_module, %{"tags_id" => ""}), do: []
  def get_tags_from(module, %{"tags_id" => tags_id_param}) do
    ids = tags_id_param |> String.split(~r{\s*,\s*}) |> Enum.map(&String.to_integer/1)
    Repo.all(from t in module, where: t.id in ^ids)
  end
end
