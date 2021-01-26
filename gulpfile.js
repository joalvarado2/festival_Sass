const {series, src, dest, watch, parallel} = require("gulp");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const notify = require("gulp-notify");
const webp = require("gulp-webp");
const concat = require("gulp-concat")

// función que compila sass

const paths = {
    imagenes: "src/img/**/*",
    scss: "src/scss/**/*.scss",
    js: "src/js/**/*.js"
}

function css () {
    return src(paths.scss)
        .pipe( sass({
            outputStyle: "expanded"
        }))
        .pipe( dest("build/css"))
}

function minificarCss () {
    return src(paths.scss)
        .pipe( sass({
            outputStyle: "compressed"
        }))
        .pipe( dest("build/css"))
}

function javascript() {
    return src(paths.js)
        .pipe(concat("buldle.js"))
        .pipe(dest("./build/js"))
}

function imagenes() {
    return src(paths.imagenes)
        .pipe(imagemin())
        .pipe(dest("./build/img"))
        .pipe(notify({message:"imagen minificada"}));
}

function versionWebp() {
    return src(paths.imagenes)
        .pipe(webp())
        .pipe(dest("./build/img"))
        .pipe(notify({message: "version webp lista"}))
}

function watchArchivos() {
    watch(paths.scss, css ); // * = la carpeta actual - ** = todos los archivos con esa extensión
    watch(paths.js, javascript);
}

exports.css = css;
exports.minificarCss = minificarCss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;
exports.default = series(css, javascript, imagenes, versionWebp, watchArchivos);