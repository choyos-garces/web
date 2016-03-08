module.exports = function(grunt) {
    grunt.initConfig({
        typescript: {
            main: {
                src: [
                    'src/app/**/*.ts',
                    'typings/main.d.ts'
                ],
                dest: 'build/app/',
                options: {
                    target: 'ES5',
                    module: 'commonjs',
                    moduleResolution: 'node',
                    sourceMap: true,
                    experimentalDecorators: true,
                    emitDecoratorMetadata: true,
                    removeComents: false,
                    noImplicitAny: false

                }
            }
        },

        sass: {
            dist: {
                options: {
                    trace: true,
                    style: "nested"
                },
                files: {
                    'build/styles/default.css': 'src/styles/sass/default.sass'
                }
            }
        },

        copy: {
            libs : {
                files : [
                    { expand:true, flatten: true, src: [ "node_modules/bootstrap/dist/css/bootstrap.min.css", "node_modules/bootstrap/dist/css/bootstrap.min.css.map", "node_modules/bootstrap/dist/js/bootstrap.min.js"], dest: "src/lib/bootstrap" },
                    { expand:true, flatten: true, src: ["node_modules/jquery/dist/jquery.min.js", "node_modules/jquery/dist/jquery.min.map"], dest: "src/lib/jquery" },
                    { expand:true, flatten: true, src: ["node_modules/angular2/bundles/angular2.dev.js", "node_modules/angular2/bundles/http.js", "node_modules/angular2/bundles/angular2-polyfills.js"], dest: "src/lib/angular2" },
                    { expand:true, flatten: true, src: ["node_modules/systemjs/dist/system.js", "node_modules/systemjs/dist/system.js.map", "node_modules/systemjs/dist/system-polyfills.js", "node_modules/systemjs/dist/system-polyfills.js.map"], dest: "src/lib/system" },
                    { expand:true, flatten: true, src: ["node_modules/rxjs/bundles/Rx.min.js", "node_modules/rxjs/bundles/Rx.min.js.map"], dest: "src/lib/rxjs" },
                    { expand: true, flatten: true, src: ["node_modules/es6-shim/es6-shim.min.js", "node_modules/es6-shim/es6-shim.map"], dest: "src/lib/es6-shim" }
                ]

            },
            build: {
                files : [
                    { expand:true, cwd: "src/lib", src: "**", dest: "build/lib/" },
                    { expand:true, cwd: "src/img", src: "**", dest: "build/img/" },
                    { expand:true, cwd: "src/styles/fonts", src: "**", dest: "build/styles/fonts/" },
                    { expand:true, cwd: "src", src: "**/*.html", dest: "build/"},
                    { expand:true, cwd: "src", src: "**/favicon.png", dest: "build/"}
                ]
            },

            html : {
                files: [
                    { expand:true, cwd: "src", src: "**/*.html", dest: "build/" }
                ]
            },

            img : {
                files: [
                    { expand:true, cwd: "src/img", src: "**", dest: "build/img/" }
                ]
            },

            dist: {
                files : [
                    { expand: true, cwd: "build", src: ['**', '!**/*.map', "!app/**/*.js", "!styles/**/*.css"], dest: "dist/" }
                ]
            }
        },

        watch : {
            styles : {
                files: ['src/styles/sass/**/*.sass'], tasks: ['sass']
            },

            ts: {
                files: ['src/app/**/*.ts'], tasks: ['typescript']
            },

            html : {
                files: ['src/**/*.html'], tasks: ['copy:html']
            },

            img : {
                files: ['src/img/**/*'], tasks: ['copy:img']
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'build/**/*'
                    ]
                },
                options: {
                    watchTask: true,
                    proxy: 'http://localhost/web'
                }
            }
        },

        uglify: {
            app: {
                files: [
                    {expand: true, cwd: 'build/app', src: '**/*.js', dest: 'dist/app'},
                    {expand: true, cwd: 'build/scripts', src: '**/*.js', dest: 'dist/scripts'}
                ]
            }
        },

        cssmin: {
            target: {
                files: [
                    {expand: true, cwd: 'build', src: '**/*.css', dest: 'dist', ext: '.css'}
                ]
            }
        },

        clean: {
            build: ["build/**/*"],
            dist: ["dist/**/*"]
        }
    });

    grunt.registerTask("build", ["clean:build", "typescript", "sass", "copy:libs","copy:build"]);
    grunt.registerTask("start", ["build", "watch"]);
    grunt.registerTask("server", ["build", "browserSync", "watch"]);
    grunt.registerTask("dist", ["build", "clean:dist", "copy:dist", "uglify", "cssmin"]);

    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-typescript");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-browser-sync");
};
