defmodule Carbon.Router do
  use Carbon.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :auth do
    plug Carbon.SessionPlug
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Carbon do
    pipe_through [:browser, :auth]

    get "/", PageController, :index
    resources "/accounts", AccountController
    get "/accounts/:id/events", AccountController, :event_list
  end

  scope "/session", Carbon do
    pipe_through :browser

    get "/", SessionController, :index
    post "/", SessionController, :create_and_send_session_link
    get "/validate/:token", SessionController, :validate_token
    get "/logout", SessionController, :logout
  end

  scope "/api", Carbon do
    pipe_through :api
  end

  if Mix.env == :dev do
    forward "/sent_emails", Bamboo.EmailPreviewPlug
  end
end
