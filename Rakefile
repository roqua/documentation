require 'nanoc3/tasks'
require 'html-proofer'

task :default => [:test]

desc "Compile the site"
task :compile do
  `nanoc compile`
end

desc "Test the output"
task :test => [:clean, :compile] do
  puts 'ssl_verifypeer disabled on 2016-11-14, may want to try enabling again'
  HTMLProofer.check_directory("output/",
                              alt_ignore: [/screenshots/],
                              # Disable checking external links on atom feed.
                              # It references new items that have not been deployed yet when checking links on CI
                              url_ignore: [/changelog/, /feed/],
                              typhoeus: {ssl_verifypeer: false}).run
end
