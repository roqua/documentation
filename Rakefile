require 'nanoc3/tasks'
require 'html/proofer'

task :default => [:test]

desc "Compile the site"
task :compile do
  `nanoc compile`
end

desc "Test the output"
task :test => [:clean, :compile] do
  HTML::Proofer.new("./output", alt_ignore: [/screenshots/]).run
end

desc "Publish to S3"
task :publish => [:clean] do
  File.open("~/.fog", "w") do |file|
    file.puts "aws:"
    file.puts "  aws_access_key_id: #{ENV["AWS_ACCESS_KEY_ID"]}"
    file.puts "  aws_secret_access_key: #{ENV["AWS_SECRET_ACCESS_KEY"]}"
  end

  FileUtils.rm_r('output') if File.exist?('output')

  sh "bundle exec nanoc compile"
  sh "bundle exec nanoc publish"
end
