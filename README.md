HTML Application Template
=============
This is bootstrap for applications using Backbone and RequireJS.

To build whole project using RequireJS Optimizer:

    $ cd webapp/assets/javascripts
    $ node ../../../r.js -o app.build.js
    
or if you want optimize single file using Almond:

    $ cd webapp/assets/javascripts
    $ node ../../../r.js -o app.build.almond.js