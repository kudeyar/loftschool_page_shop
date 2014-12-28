"use strict";

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    opn = require('opn'),
    wiredep = require('wiredep').stream,
    livereload = require('gulp-livereload');

//
gulp.task('wiredep', function () {
    gulp.src('app/*.html')
        .pipe(wiredep({
            directory: 'app/bower_components'
        }))
        .pipe(gulp.dest('./app'));
});

// server
gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true
    });
    opn('http://127.0.0.8:8080/');
});

//php
gulp.task('php', function(){
    gulp.src('app/*.php')
        .pipe(connect.reload());
})

//html
gulp.task('html', function(){
    gulp.src('app/*.html')
        .pipe(connect.reload());
})

//js
gulp.task('js', function(){
    gulp.src('app/js/*.js')
        .pipe(connect.reload());
})

//css
gulp.task('css', function(){
    gulp.src('app/css/*.css')
        .pipe(connect.reload());
})

gulp.task('watch', function(){
    livereload.listen();
    gulp.watch('app/*.php', ['php']).on('change', livereload.changed);
});

//слежка
gulp.task('watch', function(){
    gulp.watch(['app/*.html'], ['html']);
    gulp.watch(['app/js/*.js'], ['js']);
    gulp.watch(['app/css/*.css'], ['css']);
    gulp.watch('bower.json', ['wiredep']);
})

//default
gulp.task('default', ['connect', 'watch']);

