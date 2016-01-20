var gulp = require('gulp');
var liveReload = require('gulp-livereload');

gulp.task('watch', function(){
   var server = liveReload();
    gulp.watch('app/**/*.*', function(file){
       server.change(file.path);
    });
});