module.exports = function (grunt) {
	var SRC_DIR = 'src';

	grunt.initConfig({
		csslint: {
			options: {
				csslintrc: '.csslintrc',
				formatters: [
					// {id: 'csslint-xml', dest: 'report/csslint.xml'}
					//{id: require('csslint-stylish'), dest: 'report/csslint_stylish.xml'}
				],
				quiet: false,
				quiet_all: false
			},
			main: {
				src: [
					SRC_DIR + '/**/*.css',
					'!' + SRC_DIR + '/**/reset.css',
					'!' + SRC_DIR + '/**/normalize.css'
				]
			}
		},
		watch: {
			sources: {
				files: [
					SRC_DIR + '/**/*.js',
					SRC_DIR + '/**/*.css',
					SRC_DIR + '/**/*.html'
				],
				//tasks: ['jshint'],
				options: {
					interrupt: true,
					livereload: 35729
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('start', ['watch']);
	grunt.registerTask('lint', ['csslint']);
};