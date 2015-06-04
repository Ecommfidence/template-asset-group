module.exports = function(grunt) {

    require('jit-grunt')(grunt);

    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: false,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "./assets/default/css/styles.css": "./assets/default/less/styles.less" // destination file and source file
                }
            }
        },
        watch: {
            styles: {
                files: ['./assets/default/less/**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.registerTask('default', ['less', 'watch']);

};