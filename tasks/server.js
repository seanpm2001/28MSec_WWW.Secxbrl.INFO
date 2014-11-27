'use strict';

var gulp = require('gulp');

var Config = require('./config');

var browserSync = require('browser-sync');

var modRewrite = require('connect-modrewrite');
var rewriteRules = [
  '!\\.html|\\.xml|\\images|\\.js|\\.css|\\.png|\\.jpg|\\.woff|\\.ttf|\\.svg /index.html [L]'
];

gulp.task('server:dist', function() {
  browserSync({
    port: 9000,
    notify: false,
    logPrefix: 'www.secxbrl.info',
    server: {
      baseDir: ['dist'],
      middleware: [
        modRewrite(rewriteRules)
      ]
    }
  });
});

//run the server after having built generated files, and watch for changes
gulp.task('server:dev', function() {
  browserSync({
    port: 9000,
    notify: false,
    logPrefix: 'www.secxbrl.info',
    server: {
      baseDir: ['.', Config.paths.app],
      middleware: [
        modRewrite(rewriteRules)
      ]
    },
    browser: 'default'
  });
});
