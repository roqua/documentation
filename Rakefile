require 'nanoc3/tasks'
require 'html/proofer'

task :default => [:test]

desc "Compile the site"
task :compile do
  `nanoc compile`
end

desc "Test the output"
task :test => [:clean, :compile] do
  HTML::Proofer.new("./output",
                    alt_ignore: [/screenshots/],
                    typhoeus: {ssl_verifypeer: false} # https://tools.ietf.org is failing 2016-11, enable at will.
                   ).run
end

desc "Publish to S3"
task :publish => [:clean] do
  File.open(File.expand_path("~/.fog"), "w") do |file|
    file.puts "default:"
    file.puts "  aws_access_key_id: #{ENV["AWS_ACCESS_KEY_ID"]}"
    file.puts "  aws_secret_access_key: #{ENV["AWS_SECRET_ACCESS_KEY"]}"
  end

  FileUtils.rm_r('output') if File.exist?('output')

  sh "bundle exec nanoc compile"
  sh "bundle exec nanoc deploy"
end
