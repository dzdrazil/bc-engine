define(function(require) {
    'use strict';

    return {
        // core
        Engine: require('./Engine'),
        BCEngine: require('./BCEngine'),
        ElementMap: require('./parsers/ElementMap'),

        // parsers
        Parser: require('./parsers/Parser'),
        BehaviorParser: require('./parsers/BehaviorParser'),
        ComponentParser: require('./parsers/ComponentParser'),

        // loaders
        Loader: require('./loaders/Loader'),
        BehaviorLoader: require('./loaders/BehaviorLoader')
    };
});
