# NOTE CUSTOM CODE
## COLORBOX MODULE
### Edit file in web/modules/contrib/colorbox/src/Plugin/Field/FieldFormatter/ColorboxFormatter.php

public function settingsForm(array $form, FormStateInterface $form_state) {
    ...
    $gallery = [
      'post' => $this->t('Per post gallery'),
      'page' => $this->t('Per page gallery'),
      'field_post' => $this->t('Per field in post gallery'),
      'field_page' => $this->t('Per field in page gallery'),
      'custom' => $this->t('Custom (with tokens)'),
      **// CUSTOM CODE FOR SECTIONS OF HOME PAGES**
      'custom_new' => $this->t('Custom for new game'),
      'custom_popular' => $this->t('Custom for popular game'),
      'custom_strategy' => $this->t('Custom for strategy game'),
      'custom_skill' => $this->t('Custom for skill game'),
      'custom_number' => $this->t('Custom for number game'),
      'custom_logic' => $this->t('Custom for logic game'),
      **// END CUSTOM CODE**
      'none' => $this->t('No gallery'),
    ];
    ...
}

### Edit file in web/modules/contrib/colorbox/src/GalleryIdHelper.php

public function generateId(ContentEntityInterface $entity, FieldItemInterface $item, array $settings) {
    ...
    case 'custom':
        $gallery_id = $this->token->replace(
          $settings['colorbox_gallery_custom'],
          [$entity_type => $entity, 'file' => $item],
          ['clear' => TRUE]
        );
        break;
        **// CUSTOM CODE FOR HOME PAGE: ADD GALLERY FOR EACH SECTION OF HOME PAGE**
        case 'custom_new':
          $gallery_id = 'gallery-' . $entity_id . '-new';
          break;

        case 'custom_popular':
          $gallery_id = 'gallery-' . $entity_id . '-popular';
          break;
        
        case 'custom_strategy':
          $gallery_id = 'gallery-' . $entity_id . '-strategy';
          break;  
        
        case 'custom_skill':
          $gallery_id = 'gallery-' . $entity_id . '-skill';
          break;  
          
        case 'custom_number':
          $gallery_id = 'gallery-' . $entity_id . '-number';
          break;

        case 'custom_logic':
          $gallery_id = 'gallery-' . $entity_id . '-logic';
          break;
        
        **//END CUSTOM CODE**
        
      default:
        $gallery_id = '';
    ...
}

# change file web/sites/default/settings.php
https://www.altagrade.com/blog/how-install-devel-and-kint-drupal-9
/**
 * Increase kint speed
 * Open the settings.php or, better if enabled, the settings.local.phpfile and paste the following code. If Kint's output is fast enough, then you can play with the above setting raising it to 4 or 5.
 * 
 */
include_once(DRUPAL_ROOT . './../vendor/kint-php/kint/src/Kint.php');
  if (class_exists('Kint')) {
    Kint::$max_depth = 3;
   } 


# search api, class of a module
https://www.google.com/search?q=api+refernce+for+colorbox&oq=api+refernce+for+colorbox&aqs=chrome..69i57j69i64.9421j0j4&sourceid=chrome&ie=UTF-8

# pathauto module
  Need to recheck the url alias recreate to update new url alias

# game category structure
strategy
logic
trivia
number
thinking
random
playlist
all games a-z

# compile scss and live reload with css changed
https://www.youtube.com/watch?v=crE3lcy_gW0 
## live reload  
1. need config generated sourced map to see the orginal file scss while inspect

## css
1. position
   1. absolute: not save orginal position
   2. relative: save orginal position

2. Playvideo mp4 on hover
   1. https://stackoverflow.com/questions/55477699/playing-video-and-showing-text-on-hovering-over-image