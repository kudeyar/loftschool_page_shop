"use strict";

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    opn = require('opn');

gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true
    });
    opn('http://127.0.0.8:8080/');
});

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

//слежка
gulp.task('watch', function(){
    gulp.watch(['app/*.html'], ['html']);
    gulp.watch(['app/js/*.js'], ['js']);
    gulp.watch(['app/css/*.css'], ['css']);
})

//default
gulp.task('default', ['connect', 'watch']);

