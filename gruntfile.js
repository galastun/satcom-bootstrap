module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/satcom-bootstrap.min.css': ['src/satcom-bootstrap.scss', 'src/bootstrap-grid.scss']
                }
            }
        },
        watch: {
		  sass: {
			  files: ['**/*.scss'],
			  tasks: ['sass:dist']
		  }
	    }, 
        postcss: {
            options: {
                processors: [
                    require('postcss-import')(),
                    require('postcss-cssnext')(),
                    require('postcss-extend')(),
                    require('postcss-mixins')(),
                    require('postcss-flexbox')(),
                    require('postcss-nested')(),
                    require('postcss-conditionals')(),
                    require('postcss-simple-vars')(),
                    require('cssnano')()
                ]
            },
            dist: {
                src: 'src/satcom-bootstrap.pcss',
                dest: 'dist/satcom-bootstrap.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass']);
};