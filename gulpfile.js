const gulp = require('gulp');

// Compilação do SASS
const sass = require('gulp-sass')(require('sass'));

function compilaSass() {
    return gulp.src('./source/styles/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build'));
}

exports.compilaSass = compilaSass;

// Compressão de imagens disponibilizadas no Material de apoio;
const imagemin = require('gulp-imagemin');

function comprimeImagem() {
    return gulp.src('./source/imagens/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/imagens'))
}

exports.comprimeImagem = comprimeImagem;

// Compressão de código JavaScript
const uglify = require('gulp-uglify');

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

exports.comprimeJavaScript = comprimeJavaScript;