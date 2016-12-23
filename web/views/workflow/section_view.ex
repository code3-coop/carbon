defmodule Carbon.Workflow.SectionView do
  use Carbon.Web, :view

  def field_type_select do
      %{
        "Long text": "long_text",
        "Short text": "text",
        "Integer": "integer",
        "Money amount": "currency",
        "Decimal": "decimal",
        "Date": "date",
        "Enumaration": "enum",
        "Reference": "referebce",
        "Yes/No": "boolean",
      }
  end
end
