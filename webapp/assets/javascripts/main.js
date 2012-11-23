requirejs.config({
  'paths': {
  // Libraries
    'jquery':               ['https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min', 'lib/jquery-1.8.2']
  , 'underscore':           'lib/underscore'
  , 'backbone':             'lib/backbone'
  // Application
  , 'application':          'app/index'
  // Plugins
  , 'plugin':               'plugin/index'
  , 'plugin.jquery.easing': 'plugin/jquery.easing.1.3'
  }
});

require(['application']);