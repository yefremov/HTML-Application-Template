({
  'baseUrl':        '.'
, 'mainConfigFile': 'main.js'
, 'paths': {
    'jquery':       'lib/jquery-1.8.2'
  }
, 'locale':         'en-us'
, 'optimize':       'uglify'
, 'name':           'lib/almond.js'
, 'include':        ['main']
, 'insertRequire':  ['main']
, 'out':            'main-built.js'
, 'wrap':           true
})