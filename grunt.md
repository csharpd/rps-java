#Grunt
For this project I trialed grunt in order to compile my haml & sass.

##Tree Structure

├── Gruntfile.js
├── package.json
├── public
│   ├── css
│   │   ├── style.css
│   │   └── style.css.map
│   ├── index.html
│   └── js
│       ├── rpsJava.js
│       └── vendor
├── spec
│   ├── SpecHelper.js
│   └── rpsJavaSpec.js
└── src
    ├── haml
    │   └── index.haml
    └── sass
        └── style.sass
###setup
1. `npm install -g grunt-cli`
2. `npm install grunt --save-dev`
3. `npm install grunt-contrib-sass`
4. `npm install grunt-contrib-watch --save-dev
`
5. `npm install grunt-haml2html --save-dev
`


###package.json
+ can do `nmp init` OR
```
{
  "name": "my-project-name",
  "version": "0.1.0",
  "devDependencies": {
    "grunt": "~0.4.5",
    "grunt-contrib-jshint": "~0.10.0",
    "grunt-contrib-nodeunit": "~0.4.1",
    "grunt-contrib-uglify": "~0.5.0"
  }
}
```

###gruntfile.js
	```
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
    coffee: {
      compile: {
        options: {
          bare: false
        },
        files: {
          './public/js/janban.js': ['./src/coffee/*.coffee']
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
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-haml2html');
	grunt.registerTask('default',['coffee:compile', 'sass', 'haml:compile']);
}

	```