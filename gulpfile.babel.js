
/****************IGNORE THIS SECTION**********************/
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
import autoreload  from 'autoreload-gulp';
import splitFiles  from 'gulp-split-files';
/****************IGNORE THIS SECTION**********************/

/*
IMPORTANT NOTE:
If you wish to compile AMP and use browserSync Set this link on your amp-layout
<link href="{root}styles/amp.css" rel="stylesheet">
*/

/****************MODIFY THIS SECTION ONLY**********************/
//Set Proxy server
var project = {
  0: {
      projectName:"DENTAL THEME 4",
      proxy:"https://admin.roya.com/sites/Site-a64dee50-9333-4a60-a4f2-e9a982401d38",
      compileAmp:false,
      folderName:'BASE SITE SASS/DENTAL/DENTAL THEME 4'
  },
  1: {
      projectName:"faulknerplasticsurgery.com",
      proxy:"https://admin.roya.com/sites/Site-d304aa63-65c4-4a8f-8e2a-eb95028cbd74",
      compileAmp:false,
      folderName:'CUSTOM BUILD/faulknerplasticsurgery.com',
      targetFile:"coolscupting",
      setOveride:{
          localCSSname:"main.css",
          targetOverideCSSname:"overide.css",
      }
  },
}
/****************MODIFY THIS SECTION ONLY**********************/


/****************IGNORE THIS SECTION**********************/
var settings = {
  globalIncludes:'sass/includes/', // Sets Global Includes
  targetFile: project[1].compileAmp ? "index-amp" : `${project[1].targetFile}`,
  compileAmp: project[1].compileAmp ? project[1].compileAmp : false ,
  folderName:`${project[1].folderName}`, // Sets Custom Path Folder Name

  // SET PROXY FOR LIVE RELOAD
  compiledCSSpath1:'default.css',  // Sets Compiled CSS
  compiledCSSpath2:'site.css',  // Sets Compiled CSS
  compiledCSSpath3:'color-scheme.css',  // Sets Compiled CSS
  compiledCSSpath4:'amp.css',  // Sets Compiled CSS
  compiledCSSpath5:`${project[1].setOveride.localCSSname}`,  // Sets Compiled CSS

  // SET Existing file to replace
  fileRemovePath1:`${project[1].proxy}/styles/default.css`,
  fileRemovePath2: `${project[1].proxy}/styles/site.css`,
  fileRemovePath3: `${project[1].proxy}/styles/color_scheme_1.css`,
  fileRemovePath4: `${project[1].proxy}/styles/amp.css`,
  fileRemovePath5: `${project[1].proxy}/styles/overide.css`,
  fileRemovePath5: `${project[1].proxy}/styles/${project[1].setOveride.targetOverideCSSname}`

};
/****************IGNORE THIS SECTION**********************/


/****************IGNORE THIS SECTION**********************/
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
let setFile = ()=> {
  if(settings.compileAmp){
    return gulp.src([`sass/${settings.folderName}/amp.scss`])
  }else{
    return gulp.src([`sass/${settings.folderName}/main.scss`])
  }
}
// Compile Styles
gulp.task('compile', function() {
  setFile()
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

let setRewriteRules = ()=> {
  var obj;
  if(settings.compileAmp){
    obj = [
        {
          match: new RegExp(settings.fileRemovePath4),
          fn: function() {
              return `/styles/${settings.folderName}/${settings.compiledCSSpath4}`;
          }
      },
    ];
  }else if(project[1].setOveride != undefined){
    obj = [
        {
          match: new RegExp(settings.fileRemovePath5),
          fn: function() {
              return `/styles/${settings.folderName}/${settings.compiledCSSpath5}`;
          }
      }
    ];
  }else{
    obj = [
        {
          match: new RegExp(settings.fileRemovePath1),
          fn: function() {
              return `/styles/${settings.folderName}/${settings.compiledCSSpath1}`;
          }
      },
        {
          match: new RegExp(settings.fileRemovePath2),
          fn: function() {
              return `/styles/${settings.folderName}/${settings.compiledCSSpath2}`;
          }
      },
        {
          match: new RegExp(settings.fileRemovePath3),
          fn: function() {
              return `/styles/${settings.folderName}/${settings.compiledCSSpath3}`;
          }
        }
    ];
  }
  return obj;
}

gulp.task('browserSync', function(){
  browserSync.init({
    proxy: `${project[1].proxy}/${settings.targetFile}`,
    files: ['./dist'],
    serveStatic: ['./dist'],
    rewriteRules: setRewriteRules()
  });

  gulp.watch(`sass/${settings.folderName}/*.scss`).on('change',
      gulp.parallel('compile','split',[browserSync.reload])
  );

});

//Split Compile CSS to multiple Files
gulp.task('split', function () {
  return gulp.src(`dist/styles/${settings.folderName}/main.css`)
  .pipe(splitFiles())
  .pipe(gulp.dest(`dist/styles/${settings.folderName}`));
});

gulp.task('default',  gulp.series('browserSync',function(){
    gulp.series('gulp-autoreload');
}));
/****************IGNORE THIS SECTION**********************/


/**

4 different globbing in Node

*.scss

!not-me.scss

*.+(scss|sass)

*/
