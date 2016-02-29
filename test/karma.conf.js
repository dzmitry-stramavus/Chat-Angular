module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/app/app.module.js',
      'src/app/*.js',
      'src/app/**/*.js',
      'test/unit/**/*.js',
      'test/unit/*.js'
    ],

    autoWatch : true,

    frameworks: [
      'jasmine',
      'jasmine-matchers'
    ],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-jasmine-matchers'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    singleRun: false

  });
};