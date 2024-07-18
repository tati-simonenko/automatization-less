import gulp from 'gulp';
import less from 'gulp-less';

export const styles = () => {
    return gulp.src('less/style.less', {sourcemaps: true})
        .pipe(less())
        .pipe(gulp.dest('css', {sourcemaps: '.'}))
};

export default gulp.series(
    styles
);
  