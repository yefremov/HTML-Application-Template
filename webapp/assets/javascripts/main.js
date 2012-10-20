requirejs.config({
  'paths': {
    // Modules
    'application': 'app/index'
  , 'plugins': 'plugin/index'
    // Libraries
  , 'jquery': ['https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min', 'lib/jquery-1.8.2']
  , 'underscore': 'lib/underscore'
  , 'backbone': 'lib/backbone'
    // Plugins
  , 'jquery.easing': 'plugin/jquery.easing.1.3'
  }
});

require(['application']);