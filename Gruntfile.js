var packageObject = require('./package.json');

module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		combine: {
			single: {
				input: "src/index.html",
				output: "./index.html",
				tokens: [
					{ token: "//bundle.js", file: "./dist/bundle.js" },
				]
			}
		},
		
		lineending: {               // Task
			dist: {                   // Target
				options: {              // Target options
					eol: 'lf'
				},
				files: {                // Files to process
					'./bitaddress.org.html': ['./bitaddress.org.html']
				}
			}
		}
	});

	grunt.file.defaultEncoding = 'utf-8';
	grunt.loadNpmTasks("grunt-combine");
	grunt.loadNpmTasks('grunt-lineending');
	grunt.registerTask("default", ["combine:single", "lineending"]);
};

