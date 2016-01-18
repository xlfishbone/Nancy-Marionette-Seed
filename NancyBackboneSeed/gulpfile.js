/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/


var gulp = require('gulp');                     //gulp
var _ = require('lodash');                      // utilty belt for JS
var del = require('del');                       // Deletes files.
var bower = require('gulp-bower');              //let gulp run bower
var notify = require('gulp-notify');            //OS level notifications
var watchify = require('watchify');             // watches for changes
var browserify = require('browserify');         //CommonJS bundler
var source = require('vinyl-source-stream');    //puts stuff in a stream
var buffer = require('vinyl-buffer');           //buffers a stream for plugins
var gutil = require('gulp-util');               //utility helpers for gulp              
var sourcemaps = require('gulp-sourcemaps');    //create source maps
var jstify = require('jstify');                 //compiles jst templates into js 
var rename = require("gulp-rename");            // rename files
var uglify = require('gulp-uglify');            // uglify 
var gulpif = require('gulp-if');                // use if in pipe


var config = {
    isProduction: true,
    buildConfiguration: process.env.NODE_ENV
};

// add custom browserify options here
var paths = {
    css: [],
    app_js: "./Scripts/main.js",
    templates: []

};

//set options for template compiler
var tmpOpts = {
    //engine: 'lodash',
    templateOpts: {
        //interpolate: '/\{\{[^=,-](.+?)\}\}/g',
        interpolate: /\{\{(.+?)\}\}/g,
        evaluate: /\{\{\=(.+?)\}\}/g,
        escape: /\{\{\-(.+?)\}\}/g,
        variable: 'vm'
    },
    minifierOpts: {
        removeComments: true,
        removeRedundantAttributes: true
    }
};


function handleErrors() {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
        title: 'Compile Error',
        message: '<%= error.message %>'
    }).apply(this, args);
    this.emit('end'); // Keep gulp from hanging on this task
    return;
}

function runBrowswerify(file, opts, mode) {


    //take any passed in options and add them to the defaults
    //passed in options win

    opts = opts || {};

    _.assign(opts, {
        entries: [file],
        debug: true//!config.isProduction

    });

    var bundler;


    if (mode === 'watch') {
        bundler = browserify(_.assign(opts, {
            cache: {},
            packageCache: {},
        }));

        bundler.plugin(watchify);
        bundler.on('update', function () {
            rebundle();
            gutil.log('Rebundled...');
        });
    }
    else {
        bundler = browserify(opts);
    }

    //transform any required templates
    bundler.transform('jstify', tmpOpts);

    function rebundle() {
        var stream = bundler.bundle();
        return stream
          .on('error', handleErrors)
          .pipe(source(file))
          .pipe(rename("bundle.js"))
          .pipe(buffer())
          .pipe(sourcemaps.init({ loadMaps: true })) // loads map from browserify file
          .pipe(gulpif(config.isProduction, uglify())).on('error', gutil.log)
          .pipe(sourcemaps.write('./')) // writes .map file in the same directory as js
          .pipe(gulp.dest('./Scripts/_dist'));
    }


    return rebundle();
}



//get bower packages
gulp.task('bower', function () {
    return bower({ layout: "byComponent" });
});

//clean up _dist folder
gulp.task('cleanjs', function (cb) {
    return del(['./Scripts/_dist/*'], cb);
});

gulp.task('js', ['cleanjs'], function () {
    return runBrowswerify(paths.app_js, null, 'build');
}); 

gulp.task('watchjs', function () {
    return runBrowswerify(paths.app_js, null, 'watch');
});


gulp.task('default', ['js']);