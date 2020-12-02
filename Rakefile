require 'nanoc3/tasks'
require 'html-proofer'

task :default => [:test]

desc "Compile the site"
task :compile do
  `nanoc compile`
end

desc "Test the output"
task :test => [:clean, :compile] do
  HTMLProofer.check_directory("output/",
                              alt_ignore: [/screenshots/],
                              # Disable checking external links on atom feed.
                              # It references new items that have not been deployed yet when checking links on CI
                              url_ignore: [/changelog/, /feed/, /roqua.zendesk.com/]).run
end
