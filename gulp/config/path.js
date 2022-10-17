//Получить имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const devFolder = `./dev`;

export const path = {
  build: {
    js:`${buildFolder}/js/`,
    css:`${buildFolder}/css/`,
    html:`${buildFolder}/`,
    images:`${buildFolder}/img/`,
    fonts:`${buildFolder}/fonts/`,
    files:`${buildFolder}/files/`
  },

  dev: {
  js:`${devFolder}/js/app.js`,
  images:`${devFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
  svg:`${devFolder}/img/**/*.svg`,
  scss:`${devFolder}/scss/style.scss`,
  html:`${devFolder}/*.html`,
  files:`${devFolder}/files/**/*.*`,
  svgicons:`${devFolder}/svgicons/*.svg`,
},
  watch: {
    js:`${devFolder}/js/**/*.js`,
    scss:`${devFolder}/scss/**/*.scss`,
    html:`${devFolder}/**/*.html`,
    images:`${devFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    files:`${devFolder}/files/**/*.*`
  },
  clean: buildFolder,
  buildFolder: devFolder,
  rootFalder: rootFolder,
  ftp: ``
}