
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
import splitFiles  from 'gulp-split-files';



//Set Proxy server
var proxy = "https://admin.roya.com/sites/Site-ac712f76-d550-4684-bd64-1430ec6caa9a";

var settings = {
  targetFile:"about.html",
  globalIncludes:'sass/includes/', // Set Global Includes
  compileAmp:false, // Enable if AMP compilation
  folderName:'BASE SITE SASS/TEMPLATE', // Set Custom Path Folder Name

  // SET PROXY FOR LIVE RELOAD
  compiledCSSpath:'default.css',  // Set Compiled CSS
  compiledCSSpath2:'site.css',  // Set Compiled CSS
  compiledCSSpath3:'color-scheme.css',  // Set Compiled CSS

  // SET Existing file to replace
  fileReplacePath:`${proxy}/styles/default.css`,
  fileRemovePath1: `${proxy}/styles/site.css`,
  fileRemovePath2: `${proxy}/styles/color_scheme_1.css`

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
  // return gulp.src([`sass/${settings.folderName}/*.scss`])
  return gulp.src([`sass/${settings.folderName}/main.scss`])
  .pipe(plumber({
    errorHandler: function(error) {
      console.log(error.message);
      this.emit('end');
    }
   }))
  .pipe(sass({
  //outputStyle: 'expanded',
  outputStyle: 'nested',
  // outputStyle: 'compressed',
  includePaths: [`${settings.globalIncludes}`]
  }))
  .pipe(gulpIf(settings.compileAmp, gcmq())) //enable if AMP
  .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'ff 17', 'opera 12.1', 'ios 6', 'android 4'))
  .pipe(gulpIf(settings.compileAmp, cssnano({normalizeUrl:{stripWWW:false}}))) //enable if AMP
  .pipe(gulp.dest(`dist/styles/${settings.folderName}`))
  // .pipe(browserSync.stream())
});

gulp.task('browserSync', function(){
browserSync.init({
  proxy: `${proxy}/${settings.targetFile}`,
  files: ['./dist'],
  serveStatic: ['./dist'],
  rewriteRules: [
      {
        match: new RegExp(settings.fileReplacePath),
        fn: function() {
            return `/styles/${settings.folderName}/${settings.compiledCSSpath}`;
        }
    },
      {
        match: new RegExp(settings.fileRemovePath1),
        fn: function() {
            return `/styles/${settings.folderName}/${settings.compiledCSSpath2}`;
        }
    },
      {
        match: new RegExp(settings.fileRemovePath2),
        fn: function() {
            return `/styles/${settings.folderName}/${settings.compiledCSSpath3}`;
        }
      }
  ]
});

gulp.watch(`sass/${settings.folderName}/*.scss`, gulp.series('compile',"split")).on('change',
    gulp.parallel('compile',[browserSync.reload])
);

});

//Split Compile CSS to multiple Files
gulp.task("split", function () {
  return gulp.src(`dist/styles/${settings.folderName}/main.css`)
  .pipe(splitFiles())
  .pipe(gulp.dest(`dist/styles/${settings.folderName}`));
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
