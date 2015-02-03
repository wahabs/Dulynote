source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.0'
gem 'rails_12factor'
# Use postgresql as the database for Active Record
gem 'pg'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

gem 'newrelic_rpm'
gem 'ejs' # adds embedded javascript
gem 'backbone-on-rails' # implements backbone js
gem 'jbuilder' # adds jbuilder
  gem 'bcrypt' # encryption for user authentication, password digesting, etc.
  gem 'draper' # enables better decorators

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'

  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

group :development do
  gem 'annotate' # add comment summarizing the current schema to relevant files
  gem 'better_errors' # better HTTP request errors
  gem 'binding_of_caller' # inputs a live console into better_errors
  gem 'pry-rails' # run the rails console through pry
  gem 'quiet_assets' # turns off the Rails asset pipeline log
  gem 'rspec-rails' # allows rspec for testing
  gem 'factory_girl_rails' # replaces fixtures with factories
end

group :test do
  gem 'guard-rspec' # allows automated testing
  gem 'shoulda-matchers' # better model testing
  gem 'faker' # generates fake filler data for factories
  gem 'capybara' # better integration testing
  gem 'launchy' # allows launching the browser
end
