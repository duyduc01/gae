//https://topdev.vn/blog/markdown-la-gi-cach-su-dung-markdown cach-su-dung-markdown

*nghiêng* hoặc _nghiêng_ là nghiêng
**đậm** hoặc __đậm__ là đậm
[tên link](đường dẫn) là link
![tên ảnh](link đến ảnh) giống link nhưng cho ảnh
# Chương 1, ## Mục 1, ### Mục 1.1
Tạo list

List gạch đầu dòng:
  - Lorem ipsum
  - Dolo sit amet
  - Consecteur...
    
  List đánh số:
  1. Lorem ipsum
  2. Dolo sit amet
  3. Consecteur...
  4. 
# Note drupal composer issue
remove composer.json in require section:
    "drupal/core-recommended": "^8.8",
    "drupal/core-composer-scaffold": "^8.8",


    [RuntimeException]
    Could not delete /Applications/MAMP/htdocs/sites/default/default.settings.php:
     chmod u+w /Applications/MAMP/htdocs/sites/default
     chmod u+w /Applications/MAMP/htdocs/web/sites/default

# Check list change drupal site to new structure
https://www.morpht.com/blog/drupal-and-composer-part-2-managing-drupal-8-site-composer
https://drupal.stackexchange.com/questions/258452/how-do-i-convert-a-pre-existing-site-to-a-composer-managed-application
https://www.jeffgeerling.com/blog/2019/converting-non-composer-drupal-codebase-use-composer

1. Backup db
2. Backup folder htdocs
3. Backup configuration 
4. Extract UUID of old site
5. Extract version of all contrib module
6. Install new site
7. Change UUID of new site to old site
8. Install all contrib module of same version 
    * note JS, CSS, HTML libraries of some modules needs to install manually by composer by add
    * Install libraries CS, JS, HTML via composer:
    ## Slick:  https://www.drupal.org/project/slick/issues/2855190#comment-13824992
            -- write to Require section =>  run `composer update` or `composer update <package name>`. or  run composer update --lock right after manually editing the composer.json file (this is a general rule not related to Slick).
            -- run composer install =>
9.  Import site configuration.
10. Retest

# Update drupal 8 to drupal 9
https://stefvanlooveren.me/blog/how-upgrade-drupal-8-9-composer

        "drupal/core-recommended": "^8.8",
# install drush: 
     https://docs.drush.org/en/9.x/install/
     Install a site-local Drush and Drush Launcher.
        It is recommended that Drupal 8 sites be built using Composer, with Drush listed as a dependency. That project already includes Drush in its composer.json. If your Composer project doesn't yet depend on Drush, run composer require drush/drush to add it. After this step, you may call Drush via vendor/bin/drush.
        Optional. To be able to call drush from anywhere, install the Drush Launcher. That is a small program which listens on your $PATH and hands control to a site-local Drush that is in the /vendor directory of your Composer project.
            https://github.com/drush-ops/drush-launcher
# drupal github
https://youtu.be/zj10WEnEWIo
## gitignooe file => can get this folder and file by run compore require 
    /drush/contrib/
    /vendor/
    /web/core/
    /web/modules/contrib/
    /web/profiles/contrib/
    /web/themes/contrib/
## git command basic
    git init Tao local directory
    git clone  Clone foler tu git web directory
    git pull    Day file tu git web ve web local
    git add / git add .         Add file vao git
    git commit -m "first commit"     Commit file vao local reposity
    git push        Day file commit tu local repository len web repository
    git log         Check thong tin commit gan nhat
    git status      Check trang thai 
    git brand <name branch>          Tao branch tren git
    git checkout <name brach>       chuyen lenh sang branch de lam viec tiep
    git status --ignored   *check ignore file
    git check-ignore -v example.log   * check ignore file specific exp: git check-ignore -v <file name>
1. git init     * create local repository
2. git status *check file commit status
3. git add .    * add all files to local repository
4. git status   
# terminal command
1. pwd      *check path of folder running command
2. ls       *check file in the folder running command
3. cd name-sub-folder 
4. cd ../  *back to one level

# Composer command: 
    https://drupalize.me/tutorial/use-composer-your-drupal-project?p=3233#composerize
    https://smartbees.co/blog/how-install-drupal-composer-practical-guide
    https://resazipblog.wordpress.com/2020/10/08/composer-require-va-require-dev/
        Browse the website of related/module- theme: composer browse drupal/token

        Composer is not designed to manage JS, CSS or HTML framework assets. It is for PHP. Then come Composer plugins, and other workarounds to make Composer workflow easier. 
        https://git.drupalcode.org/project/blazy/-/blob/8.x-2.x/docs/COMPOSER.md
        
* Install libraries CS, JS, HTML via composer:
          Slick:  https://www.drupal.org/project/slick/issues/2855190#comment-13824992
            -- write to Require section =>  run `composer update` or `composer update <package name>`. or  run composer update --lock right after manually editing the composer.json file (this is a general rule not related to Slick).
            -- run composer install =>

        # Install module/theme:   composer require 'drupal/<modulename>:<version>'
            composer require 'drupal/token:^1.5'
            composer require 'drupal/simple_fb_connect:~3.0'
                 
            composer require "drupal/admin_toolbar:2.5.0"
            composer require "drupal/asset_injector:2.8.0" 
            drupal/backup_migrate
            drupal/coffee
            
            "drupal/colorbox:1.7.0"
                need to install library "jackmoore/colorbox" => need to add to composer.json first => #12  https://www.drupal.org/project/colorbox/issues/2869067
            drupal/colorbox_inline
                "drupal/ng_lightbox:2.0.0-beta1" (already included)
            drupal/colorbox_load
            drupal/ctools
            drupal/devel
            drupal/entity
            drupal/entity_clone
            drupal/field_formatter_class
            drupal/fivestar
            drupal/flexslider
            drupal/fontawesome
            drupal/fontawesome_menu_icons
            drupal/fontyourface
            drupal/iframe
            drupal/imce
            drupal/libraries
            
            drupal/pathauto
            drupal/quick_node_clone
            "drupal/rate:2.0.0-alpha1"
            drupal/search_api
            "drupal/search_api_autocomplete:1.5.0"
            drupal/search_autocomplete
            drupal/simple_popup_blocks
            "drupal/slick:2.4.0"
            "drupal/slick_views:2.5.0"
            "drupal/slick_extras:1.0.0-rc5"
            drupal/superfish
            drupal/token
            drupal/views_bootstrap
            drupal/votingapi
            "drupal/bootstrap:3.23.0"
            drupal/bootstrap_business
            drupal/danland
            drupal/startupgrowth_lite
            drupal/upgrade_status

            "drupal/blazy:2.5.0"
            "drupal/search_api:1.21.0"




            
        Install drupal
            composer create-project drupal/recommended-project my-project
            composer create-project drupal/recommended-project:8.9.7 site_game    
            mv site_game/.* ./
            rm -rf site_game

        If you want to update to the latest stable release, use the following command, substituting the short name of the project to be updated for geofield:

            composer update drupal/geofield --with-dependencies
        show all verion of module/theme:
            composer show drupal/bootstrap_business --all
            composer show drupal/devel --all

        Save configuration of all module/theme drupal site
            https://www.drupal.org/node/2416545
            https://www.drupal.org/docs/configuration-management/managing-your-sites-configuration
        
        Set version php and check 
            export PATH=/Applications/MAMP/bin/php/php7.4.12/bin/:$PATH
            php -r "echo ini_get('memory_limit').PHP_EOL;"
            uuid drupal 8 old: 13e0142f-d127-4c98-a3eb-96e533c5fe44
            drush config-get "system.site" uuid                         
            drush config-set "system.site" uuid "13e0142f-d127-4c98-a3eb-96e533c5fe44"

        Speed up composer
            composer self-update
            composer global require hirak/prestissimo
            to uninstall            composer global remove hirak/prestissimo
        Drush command   
            # Remove the current version of drush.
                composer global remove drush/drush
            # Install drush version 10.
                composer require drush/drush:10.*
            Install the lastest version 
                composer require --dev drush/drush
            Rebuild cache drush 
                drush cache-rebuild
            Check module enable drupal
                drush pm-list --type=module --no-core --status=enabled
                drush pm-list --type=module --no-core
        Move some module from module/. to module/contrib/.
            1. For me the following strategy worked.
                rm -rf vendor
                rm -rf modules
                rm -rf composer.lock

                composer install

                then
                drush cr
                drush updb

            2. This only happens when assertions are enabled in settings.php:
                assert_options(ASSERT_ACTIVE, TRUE);
                \Drupal\Component\Assertion\Handle::register();
                Temporarily removing these lines allows the cr to work and detect the new module path.

                As others have mentioned, you might also need to clear the APC cache.
            3. A workaround is to truncate the cache_container table manually.
            4. I had the same issue, when I drush cr it doesn't work, I used drupal cr and it works correctly without restart apache
            5. for drupal 9
                drush ev "drupal_flush_all_caches();"
                drush cr   
            6.I could not even run drush ev so I had to write a database update that contained drupal_flush_all_caches(). Then I ran drush updb -y and that fixed it. 
        Convert normal site to composerazed site drupal
            https://www.jeffgeerling.com/blog/2019/converting-non-composer-drupal-codebase-use-composer

            Delete theme drupal 
                Yes, just delete the respective theme directory, making sure you're not deleting the active theme. Clear your cache.

                The themes that are in the /themes folder are Core themes distributed by Drupal. These are pre-made themes used for several different reasons, and are not meant to be modified.

                The themes that are in the /sites/all/themes or /sites/default/themes are contributed or custom created themes installed by the webmaster.

                Same philosophy applies to the /modules and /sites/%/modules directories.




        

