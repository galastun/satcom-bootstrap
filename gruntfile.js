module.exports = function(grunt) {
    grunt.initConfig({
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
                    require('postcss-simple-vars')()
                ]
            },
            dist: {
                src: 'src/satcom-bootstrap.pcss',
                dest: 'dist/satcom-bootstrap.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-postcss');
    grunt.registerTask('default', ['postcss']);
};