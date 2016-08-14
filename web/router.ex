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
    put "/accounts/:id/restore", AccountController, :restore
    
    resources "/accounts", AccountController do
      get "/activities", ActivityController, :index
      put "/deals/:id/restore", DealController, :restore
      resources "/deals", DealController
      put "/events/:id/restore", EventController, :restore
      resources "/events", EventController do
        post   "/reminders", ReminderController, :create
        get    "/reminders/new", ReminderController, :new
        delete "/reminders/:id", ReminderController, :delete
        put    "/reminders/:id", ReminderController, :restore
      end
    end
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
