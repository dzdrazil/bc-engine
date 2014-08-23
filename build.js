var rjs = require('requirejs');

// core
rjs.optimize(
    {
        name: 'src/index',
        out: 'dist/bcengine.min.js',
        paths: {
            jquery: 'empty:',
            lodash: 'empty:',
            EventBus: 'empty:'
        }
    },
    function(result) {
        console.log(result);
    }
);

