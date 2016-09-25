module.exports = function (grunt) {
    [
        'grunt-cafe-mocha',
        'grunt-contrib-jshint',
        'grunt-exec'
    ].forEach(function (task) {
        grunt.loadNpmTasks(task);
    });
    grunt.initConfig({
        cafemocha: {
            all: {src: 'qa/tests-unit.js', options: {ui: 'tdd'}}
        },
        jshint: {
            app: ['meadowlark.hs', 'public/js/**/*js', 'lib/**/*.js'],
            qa: ['gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js']
        },
        exec: {
            linkchecker:
            {cmd: 'linkchecker http://localhost:3000'}
        }
    });
    grunt.registerTask('default', ['cafemocha', 'jshint', 'exec']);
};
