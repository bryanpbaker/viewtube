server '[YOUR_SERVIER]', user: "[YOUR_USER]", roles: %w{app}

set :branch, "[YOUR_BRANCH]"
set :deploy_to, "[DEPLOY_PATH]"

set :ssh_options, {
  forward_agent: true,
}

#namespace :deploy do
#    task :config_file do
#      on roles :all do
#      execute "rm -r #{release_path}/wp-config.php"
#        execute "mv #{release_path}/wp-config-production.php #{release_path}/wp-config.php"
#      end
#    end
#    after :updated, :config_file
#end
