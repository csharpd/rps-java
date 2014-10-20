module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'public/css/style.css' : 'src/sass/style.sass'
				}
			}
		},
    haml: {
      compile: {
        files: {
          'public/index.html': './src/haml/index.haml'
        }
      }
    },
		watch: {
			css: {
				files: '**/*.sass',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-haml2html');
	grunt.registerTask('default',['sass', 'haml:compile']);
}