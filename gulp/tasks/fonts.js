'use strict';

// ==================================
//
// Load modules.
//
// ==================================

var config = require('../config.js');
var gulp = require('gulp');

// ==================================
//
// Fonts
//
// ==================================

gulp.task('fonts', function () {

	return gulp.src([config.fonts.src])
		.pipe(gulp.dest(config.fonts.dest));
});
