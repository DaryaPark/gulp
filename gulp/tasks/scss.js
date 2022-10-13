import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename'

import cleanCss from 'gulp-clean-css';//Сжатие CSS файла
import webpcss from 'gulp-webpcss';//Вывод webp изображений
import autoprefixer from 'gulp-autoprefixer';//добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries';//Групировка медиа запросов

const sass = gulpSass(dartSass);
export const scss = () => {
    return app.gulp.src(app.path.dev.scss, { sourcemaps:true })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
          title:"SCSS",
          message:"Error: <%= error.message %>"
        })))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
          outputStyle:'expanded'
    }))
    .pipe(groupCssMediaQueries())
    .pipe(webpcss(
      {
        webClass:".webp",
        nowebpClass:".no-webp"
      }
    ))
    .pipe(autoprefixer({
      grid:true,
      overrideBrowserslist:["last 3 versions"],
      cascade:true
    }))
    //Раскоментировать если нужен не сжатый дубль файла стилей
    // .pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanCss())
    .pipe(rename({
        extname:".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream())
}
