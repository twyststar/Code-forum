/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'code-forum',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    firebase: {
      apiKey: "AIzaSyAbKZRk0JYFvXt_5jcHqPr2PSC56rqB7ek",
    authDomain: "code-forum-92d1c.firebaseapp.com",
    databaseURL: "https://code-forum-92d1c.firebaseio.com",
    projectId: "code-forum-92d1c",
    storageBucket: "code-forum-92d1c.appspot.com",
    messagingSenderId: "846099158066"
      },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
