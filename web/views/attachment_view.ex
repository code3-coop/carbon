defmodule Carbon.AttachmentView do
  use Carbon.Web, :view

  def icon_name_by_mimetype("application/vnd.ms-excel"),                                                  do: "file excel outline"
  def icon_name_by_mimetype("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),         do: "file excel outline"
  def icon_name_by_mimetype("application/msword"),                                                        do: "file word outline"
  def icon_name_by_mimetype("application/vnd.openxmlformats-officedocument.wordprocessingml.document"),   do: "file word outline"
  def icon_name_by_mimetype("application/vnd.ms-powerpoint"),                                             do: "file powerpoint outline"
  def icon_name_by_mimetype("application/vnd.openxmlformats-officedocument.presentationml.presentation"), do: "file powerpoint outline"
  def icon_name_by_mimetype("application/pdf"),                                                           do: "file pdf outline"
  def icon_name_by_mimetype("application/x-gzip"),                                                        do: "file archive outline"
  def icon_name_by_mimetype("application/x-tar"),                                                         do: "file archive outline"
  def icon_name_by_mimetype("audio/" <> _),                                                               do: "file audio outline"
  def icon_name_by_mimetype("image/" <> _),                                                               do: "file image outline"
  def icon_name_by_mimetype("video/" <> _),                                                               do: "file video outline"
  def icon_name_by_mimetype("text/" <> _),                                                                do: "file text outline"
  def icon_name_by_mimetype(_),                                                                           do: "file outline"

  def icon_color_by_mimetype("application/vnd.ms-excel"),                                                  do: "green"
  def icon_color_by_mimetype("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),         do: "green"
  def icon_color_by_mimetype("application/msword"),                                                        do: "blue"
  def icon_color_by_mimetype("application/vnd.openxmlformats-officedocument.wordprocessingml.document"),   do: "blue"
  def icon_color_by_mimetype("application/vnd.ms-powerpoint"),                                             do: "orange"
  def icon_color_by_mimetype("application/vnd.openxmlformats-officedocument.presentationml.presentation"), do: "orange"
  def icon_color_by_mimetype("application/pdf"),                                                           do: "red"
  def icon_color_by_mimetype(_),                                                                           do: "teal"

end
