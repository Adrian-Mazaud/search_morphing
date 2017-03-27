'use strict';

//--------------------- REQUIRE --------------------------
var gulp = require('gulp');
var sass = require('gulp-sass');



// CONFIGURATION FOLDER  // 'D' == DESTINATION
var folder = {

        scss : 'dev/assets/sass/**/*.scss',
        cssD : 'dist/assets/css',

        html : 'dev/index.html',
        htmlD : 'dist/',

        js : 'dev/app/*.js',
        jsD : 'dist/app/'
}

//--------------------- TASK --------------------------

// LIB SASS
gulp.task('sass', function(){
    return gulp.src(folder.scss)
        .pipe(sass({outputStyle: 'minified'}).on('error', sass.logError))
        .pipe(gulp.dest(folder.cssD));
});

// JAVASCRIPT
gulp.task('compress', function(){
    return gulp.src(folder.js)
        .pipe(uglify())
        .pipe(gulp.dest(folder.jsD));
});

// COPY THE HTML FORM dev TO dist FOR DEV
gulp.task('html', function(){
    return gulp.src(folder.html)
        .pipe(gulp.dest(folder.htmlD));
});

// HTML MINIFY FOR PRODUCTION


gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };

  return gulp.src(folder.html)
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest(folder.htmlD));
});

gulp.task('default', ['sass', 'minify-html', 'compress'], function(){

});

//--------------------- WATCH --------------------------

// LIVE CHANGE ON SASS AND HTML
gulp.task('live', ['sass', 'html'], function(){
    gulp.watch(folder.scss, ['sass']).on('change', function(event){
        console.log('Le fichier :' + event.path  + ' a ete modifie !')
    });
    gulp.watch(folder.html, ['html']).on('change', function(event){
        console.log('Le fichier :' + event.path + ' a ete modifie !')
    });
});
