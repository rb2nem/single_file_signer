var packageObject = require('./package.json');

module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
                exec: {
			uglify: 'uglifyjs tmp/renderer.browserified.js > tmp/bundle.js'
		},
		browserify: {
			scripts: {
				src: "src/renderer.js",
				dest: "tmp/renderer.browserified.js"
			}
			
		},
		combine: {
			single: {
				input: "src/index.html",
				output: "dist/offline_signer.html",
				tokens: [
					{ token: "//bundle.js", file: "./tmp/bundle.js" },
				]
			}
		}

,
		
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
        grunt.loadNpmTasks('grunt-browserify');
        grunt.loadNpmTasks('grunt-exec');
	grunt.registerTask("default", ["browserify", "exec:uglify", "combine:single"]);
};

