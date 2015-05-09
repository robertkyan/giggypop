module ApplicationHelper
  def page_id
    "#{controller.controller_name}_#{controller.action_name}"
  end
  def page_class
    "#{controller.controller_name}"
  end
end
