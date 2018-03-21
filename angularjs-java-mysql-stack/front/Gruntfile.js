"use strict";

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: [ 'dist', '.tmp' ] 
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/app/',
                    src: ['**', '!**/*.js', '!controllers/**', '!services/**', '!vendor/**', '!**/*.css'],
                    dest: 'dist/'
                }, {
                    expand: true,
                    cwd: 'vendor/bootstrap/dist/',
                    src: ['fonts/*.*'],
                    dest: 'dist/'
                }, {
                    expand: true,
                    cwd: 'src',
                    src: ['app/views/**'],
                    dest: 'dist/'
                }, {
                    expand: true,
                    cwd: 'src',
                    src: ['js/*.*'],
                    dest: 'dist/'
                }]
            },
            html: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['app/views/**'],
                    dest: 'dist/'
                }]
            }
        },
        useminPrepare: {
            options: {
                dest: 'dist/',
                flow: {
                    dev: {
                        steps: { 'js': [ 'concat' ], 'css': [ 'concat' ] },
                        post: []
                    },
                    prod: {
                        steps: { 'js': [ 'concat', 'uglifyjs' ], 'css': [ 'concat', 'uglifyjs' ] },
                        post: []
                    }
                }
            },
            prod: { src: 'src/app/index.html' },
            dev: { src: 'src/app/index.html' },
        },
        usemin: {
            prod: 'dist/index.html',
            dev: 'dist/index.html' 
        },
        uglify: {
            options: {
                report: 'min',
                mangle: false
            }
        },
        watch: {
            scripts: {
                files: ['src/**/*.js', 'src/**/*.css'],
                tasks: ['build'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['src/**/*.html'],
                tasks: ['copy:html'],
                options: {
                    livereload: true
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'dist/app/**/*.js',
                        'dist/app/**/*.html',
                        'dist/app/**/*.css'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './dist'
                    },
                    port: 3000
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-http');

    grunt.registerTask('all', 'Exécution de toutes les tâches', [ 'clean', 'copy', 'useminPrepare:dev', 'concat', 'uglify', 'usemin:dev', 'browserSync:dev', 'watch' ])
};
