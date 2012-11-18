requirejs.config({
  'paths': {
    // Libraries
    'jquery':         ['https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min', 'lib/jquery-1.8.2']
  , 'underscore':     'lib/underscore'
  , 'backbone':       'lib/backbone'
    // Modules
  , 'application':    'app/index'
  , 'plugins':        'plugin/index'
    // Plugins
  , 'jquery.easing':  'plugin/jquery.easing.1.3'
  }
});

require(['application']);