defmodule Carbon.PaginatorHelper do
  use Phoenix.HTML
  import Carbon.Router.Helpers
  alias Carbon.Paginator

  def paginate(conn, paginator = %Paginator{}, module) do
    content_tag :div, class: "ui center aligned container" do
      [
        get_previous_link(conn, paginator, module),
        get_links(conn, paginator, module),
        get_next_link(conn, paginator, module)
      ]
    end
  end

  defp get_previous_link(conn, paginator = %Paginator{}, module) do
    css_class = if paginator.page == 1 do "disabled" else "basic" end

    link content_tag(:i, "", class: "ui icon angle left"),
      to: generate_url(conn, module, [page: paginator.page-1, length: paginator.length]),
      class: "ui button " <> css_class
  end

  defp get_next_link(conn, paginator = %Paginator{}, module) do
    css_class = if paginator.page == paginator.number_of_pages do "disabled" else "basic" end

    link content_tag(:i, "", class: "ui icon angle right"),
      to: generate_url(conn, module, [page: paginator.page+1, length: paginator.length]),
      class: "ui button " <> css_class
  end

  defp get_links(conn, paginator = %Paginator{}, module) do
    links = for page_number <- 1..paginator.number_of_pages do
      url_path = generate_url(conn, module, [page: page_number, length: paginator.length])

      css_class = if page_number == paginator.page do " active" else "" end

      link page_number,
        to: url_path,
        class: "ui button basic" <> css_class
    end
    links
  end

  defp generate_url(conn, module, args) do
    Kernel.apply Carbon.Router.Helpers,
      String.to_atom("#{module}_path"),
      [conn, String.to_atom("#{conn.private.phoenix_action}"), args]
  end
end
