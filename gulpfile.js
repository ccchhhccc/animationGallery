var gulp = require('gulp')
var imagemin = require('gulp-imagemin')
var cache = require('gulp-cache');
//确保本地已安装imagemin-pngquant [cnpm install imagemin-pngquant --save-dev]
var pngquant = require('imagemin-pngquant')
 
gulp.task('imagemin', function () {
    gulp.src('./src/*/*.{png,jpg,gif,ico}')
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        })))
        .pipe(gulp.dest('dist/'));
});

gulp.task('clear', () =>
    cache.clearAll()
);