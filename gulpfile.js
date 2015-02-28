var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber');

//console log something
gulp.task('log', function(){
    console.log('hello world');
});

//uglify files
gulp.task('uglify', function(){
    gulp.src('app/scripts/controllers/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('app/scripts/controllers/build'));
});

//watch a task
gulp.task('watch', function(){
    gulp.watch('app/scripts/controllers/*.js', ['uglify']);
});


gulp.task('default',['log', 'watch']);

