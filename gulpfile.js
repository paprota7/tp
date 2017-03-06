var gulp = require('gulp'),
    compass = require('gulp-compass'),
    minifyCSS = require('gulp-minify-css');

gulp.task('compass', function() {
    gulp.src('./app/scss/*.scss')
        .pipe(compass({
            css: 'app/css',
            sass: 'app/scss',
            image: 'app/images'
        }))
        .on('error', function(error) {
            // Would like to catch the error here
            console.log(error);
            this.emit('end');
        })
        .pipe(minifyCSS())
        .pipe(gulp.dest('app/css'));
});

gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', ['compass']);
});

gulp.task('default', ['compass', 'watch']);
