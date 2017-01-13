defmodule Carbon.Release.Tasks do
  def migrate do
    {:ok, _} = Application.ensure_all_started(:carbon)

    path = Application.app_dir(:carbon, "priv/repo/migrations")

    Ecto.Migrator.run(Carbon.Repo, path, :up, all: true)

    :init.stop()
  end
end
