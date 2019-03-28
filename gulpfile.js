const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

gulp.task('browserSync', () => {
    browserSync.init({
        server: {
            baseDir: 'www'
        },
        open: true
    })
});

gulp.task('sass', () => (
    gulp.src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./www/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
));

gulp.task('watch', () => {
    gulp.watch('src/scss/**/*.scss', ['sass'])
        .on('change', (event) => {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
    gulp.watch('src/*.html', browserSync.reload);
});

gulp.task('sass:watch', ['browserSync', 'sass'], () => (
    gulp
        .watch('src/scss/**/*.scss', ['sass'])
));

gulp.task('serve', ['sass', 'sass:watch']);

gulp.task('build', ['sass']);
