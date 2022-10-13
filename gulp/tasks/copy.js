export const copy = () => {
return app.gulp.src(app.path.dev.files)
.pipe(app.gulp.dest(app.path.build.files))
}