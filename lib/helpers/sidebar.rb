# <div class="js-toggle-list sidebar-module expandable">
#   <ul>
#     <% @section.children.sort_by { |topic| topic[:sort] || 0 }.each do |topic| %>
#       <% if topic.children.any? %>
#         <li class="js-topic">
#           <h3>
#             <a href="#" class="js-expand-btn collapsed arrow-btn" data-proofer-ignore></a>
#             <a href="<%= topic.identifier %>"><%= topic[:title] %></a>
#           </h3>
#           <ul class="js-guides">
#             <% topic.children.sort_by {|guide| guide[:sort] || 0 }.each do |guide| %>
#               <li><a href="<%= guide.identifier %>"><%= guide[:title] %></a></li>
#             <% end %>
#           </ul>
#         </li>
#       <% else %>
#         <li>
#           <h3><a href="<%= topic.identifier %>"><%= topic[:title] %></a></h3>
#         </li>
#       <% end %>
#     <% end %>
#   </ul>
# </div> <!-- /sidebar-module -->

module SidebarHelper
  def sidebar(item)
    area = item
    ancestors = [area]
    while area.identifier.count("/") > 2
      area = area.parent
      ancestors << area
    end

    tag(:div) do
      area.children.sort_by {|i| i[:sort] || 0 }.map do |category|
        tag(:div, class: "sidebar-module sidebar-category js-toggle-list expandable") do
          content = []
          content << tag(:header) do
            tag(:a, href: category.identifier) { category[:title] }
          end

          if ancestors.include?(category)
            content << category_list(category)
          end

          content
        end
      end
    end
  end

  def category_list(category)
    tag(:ul) do
      category.children.sort_by {|i| i[:sort] || 0 }.map do |section|
        if section.children.any?
          tag(:li, class: 'js-topic') do
            content = []

            content << tag(:h3) do
              [
                tag(:a, href: '#', class: "js-expand-btn collapsed arrow-btn", 'data-proofer-ignore' => true) { "" },
                tag(:a, href: section.identifier) { section[:title] }
              ]
            end

            content << tag(:ul, class: 'js-guides') do
              section.children.sort_by {|i| i[:sort] || 0 }.map do |subsection|
                tag(:li) do
                  tag(:a, href: subsection.identifier) { subsection[:title] }
                end
              end
            end

            content
          end
        else
          tag(:li) do
            tag(:h3) { tag(:a, href: section.identifier) { section[:title] } }
          end
        end
      end
    end
  end

  def tag(tagname, attrs = {})
    attributes = attrs.map do |k,v|
      if v == true
        "#{k}"
      else
        "#{k}=\"#{v}\""
      end
    end.join(" ")

    content = yield
    content = content.join("\n") if content.is_a?(Array)

    "<#{tagname} #{attributes}>
      #{content}
    </#{tagname}>"
  end
end

include SidebarHelper
