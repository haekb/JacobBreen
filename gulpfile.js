/**
 * Created by Jake on 6/14/2015.
 */
var gulp = require('gulp'),
    less = require('gulp-less'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    notify = require('gulp-notify'),
    source_directory = "./resources/",
    build_directory  = "./public/",
    vendor_directory = "./vendor/",
    vendor_files     = [
        vendor_directory+'angular/angular.js',
        vendor_directory+'angular-loader/angular-loader.js',
        //'angular-loader/angular-mocks.js',
        vendor_directory+'angular-route/angular-route.js',
        vendor_directory+'jquery/dist/jquery.js'
    ]

// JSHint task
gulp.task('lint', function() {
    gulp.src(source_directory+'/*.js')
        .pipe(jshint())
        // You can look into pretty reporters as well, but that's another story
        .pipe(jshint.reporter('default'));
});

// Browserify task
gulp.task('merge', function() {
    // Single point of entry (make sure not to src ALL your files, browserify will figure it out for you)

    // Vendor Source Files
    gulp.src(vendor_files)
        // Bundle to a single file
        .pipe(concat('vendor.js'))
        // Output it to our dist folder
        .pipe(gulp.dest(build_directory+'assets/js'));

    // Resource Source Files
    gulp.src([source_directory+'/*.js', source_directory+'/**/*.js'])
        // Bundle to a single file
        .pipe(concat('app.js'))
        // Output it to our dist folder
        .pipe(gulp.dest(build_directory+'assets/js'));
});

// Views task
gulp.task('views', function() {
    // Any other view files from app/views
    gulp.src(source_directory+'/partials/**/*')
        // Will be put in the dist/views folder
        .pipe(gulp.dest(build_directory+'/assets/partials/'));
});

gulp.task('less', function() {
    gulp.src(source_directory+'/styles/less/*.less')
        .pipe(less())
        .pipe(gulp.dest(build_directory+'/assets/css/'));
});

gulp.task('watch', ['lint','merge','views','less'], function() {
    // Watch our scripts
    gulp.watch([source_directory+'/*.js', source_directory+'/**/*.js'],[
        'lint',
        'merge',
        'views',
        'less'
    ]);
});
