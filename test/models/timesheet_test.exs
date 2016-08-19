defmodule Carbon.TimesheetTest do
  use Carbon.ModelCase

  alias Carbon.Timesheet

  test "can extract total of billables and non billables minutes" do
    timesheet = %{
      entries: [
        %{duration_in_minutes: 10, billable: true},
        %{duration_in_minutes: 10, billable: true},
        %{duration_in_minutes: 1, billable: true},
        %{duration_in_minutes: 22, billable: false},
        %{duration_in_minutes: 2, billable: false},
      ]
    }
    assert Timesheet.total_billables_and_non_billables(timesheet) == {21, 42}
  end

end
