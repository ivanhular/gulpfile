
import gulp from 'gulp';
// import babel from 'gulp-babel';
import compass from 'gulp-compass';
import autoprefixer from 'gulp-autoprefixer';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import minifyCSS from 'gulp-minify-css';
import useref from 'gulp-useref';
import uglify from 'gulp-uglify';
import gulpIf from 'gulp-if';
import cssnano from 'gulp-cssnano';
import download from 'gulp-download';
import cache from 'gulp-cache';
import imagemin from 'gulp-imagemin';
import gcmq from 'gulp-group-css-media-queries';
import browserSync from 'browser-sync';
// browserSync from('browser-sync').create();
import autoreload  from 'autoreload-gulp';


var settings = {
  compileAmp:true, // Enable if AMP compilation SASS default Folder

  folderName:'BASE SITE SASS/VET/SVP', // Set Custom Path Folder Name
  sourceFile:'main.scss', // Set Custom Source
  compiledCSSpath:'main.css',  // Set Compiled CSS

  // SET PROXY FOR LIVE RELOAD
  proxy:'https://admin.roya.com/sites/Site-76363599-20b1-4cb1-9927-df4ad6f81d6c/index-amp',
  // SET Existing file to replace
  fileReplacePath:'https://admin.roya.com/sites/Site-76363599-20b1-4cb1-9927-df4ad6f81d6c/styles/edits.css',
};

/**********************************************************************/
//compile js - css  single file
gulp.task('useref', function() {
  return gulp.src('build/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist/compile/'))

    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist/compile/'))
});


gulp.task('images', function() {
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
});
/**********************************************************************/

// Compile Styles
gulp.task('compile', function() {
  return gulp.src([`sass/${settings.folderName}/${settings.sourceFile}`])
  .pipe(plumber({
    errorHandler: function(error) {
      console.log(error.message);
      this.emit('end');
    }
  }))
  .pipe(sass({
  // outputStyle: 'expanded',
  outputStyle: 'nested',
  // outputStyle: 'compressed',
  }))
  .pipe(gulpIf(settings.compileAmp, gcmq())) //enable if AMP
  .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'ff 17', 'opera 12.1', 'ios 6', 'android 4'))
  .pipe(gulpIf(settings.compileAmp, cssnano({normalizeUrl:{stripWWW:false}}))) //enable if AMP
  .pipe(gulp.dest('dist/styles'))
  // .pipe(browserSync.stream())
});

gulp.task('browserSync', function(){
browserSync.init({
  proxy: settings.proxy,
  files: ['./dist'],
  serveStatic: ['./dist'],
  rewriteRules: [
      {
        match: new RegExp(settings.fileReplacePath),
        fn: function() {
            return `/styles/${settings.compiledCSSpath}`;
        }
      }
  ]
});

gulp.watch(`sass/${settings.folderName}/*.scss`, gulp.series('compile')).on('change',
    gulp.parallel('compile',browserSync.reload)
);

});


gulp.task('default',  gulp.series('browserSync',function(){
    gulp.series('gulp-autoreload');
}));


/**

4 different globbing in Node

*.scss

!not-me.scss

*.+(scss|sass)

*/
