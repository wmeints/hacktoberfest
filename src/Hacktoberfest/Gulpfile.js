var gulp = require('gulp');
var sass = require('gulp-sass');

exports.compileStylesheets = function compileStylesheets() {
    return gulp.src('Stylesheets/site.scss').pipe(sass({ outputStyle: 'compressed' })).pipe(gulp.dest('wwwroot/css'));
};

exports.default = gulp.series([exports.compileStylesheets]);
