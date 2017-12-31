var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var watch = require('gulp-watch');
var ts = require("gulp-typescript");

gulp.task('default', ['sass', 'watch']);

gulp.task('sass', function(){
    sass('src/sass/*.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('build/css'))
});

gulp.task('typescript', function () {

    return gulp.src('src/ts/*.ts')
    .pipe(ts({
        noImplicitAny: true,
    }))
    .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function(){
    gulp.watch('src/sass/*.scss',['sass']);
});


