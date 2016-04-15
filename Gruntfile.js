'use strict';

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  var config = {
    app: 'src',
    dist: 'dist',
    name: 'sselab.org'
  };

  grunt.initConfig({

    // Project settings
    appConfig: config,

    // use ngAnnotate instead og ngMin
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    watch: {
      js: {
        files: [
          '<%= appConfig.app %>/app/**/*.js',
          '<%= appConfig.app %>/components/**/*.js',
          '<%= appConfig.app %>/assets/js/*.js'
        ],
        tasks: ['newer:jshint:all']
      },
      // jsTest: {
      //   files: ['test/spec/{,*/}*.js'],
      //   tasks: ['newer:jshint:test', 'karma']
      // },
      styles: {
        files: [
          '<%= appConfig.app %>/app/**/*.css',
          '<%= appConfig.app %>/components/**/*.css',
          '<%= appConfig.app %>/assets/css/*.css',
          '<%= appConfig.app %>/../node_modules/bootstrap/dist/css/bootstrap.min.css',
          '<%= appConfig.app %>/../node_modules/highlightjs/styles/github.css'
        ],
        tasks: ['newer:copy:styles', 'postcss']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      }
      // livereload: {
      //   options: {
      //     livereload: '<%= connect.options.livereload %>'
      //   },
      //   files: [
      //     '<%= appConfig.app %>/app/**/*.html',
      //     '<%= appConfig.app %>/*.html',
      //     '<%= appConfig.app %>/components/**/*.html',
      //     '.tmp/styles/{,*/}*.css',
      //     '<%= appConfig.app %>/assets/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
      //   ]
      // }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= appConfig.app %>/app/**/*.js',
          '<%= appConfig.app %>/components/**/*.js',
          '<%= appConfig.app %>/assets/js/*.js'
        ]
      }
      // test: {
      //   options: {
      //     jshintrc: 'test/.jshintrc'
      //   },
      //   src: ['test/spec/{,*/}*.js']
      // }
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= appConfig.dist %>/{,*/}*',
            '!<%= appConfig.dist %>/.git*'
          ]
        }]
      }
    },

    // Add vendor prefixed styles
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({browsers: ['last 2 versions']})
        ]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= appConfig.app %>/index.html',
      options: {
        dest: '<%= appConfig.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= appConfig.dist %>/{,*/}*.html'],
      options: {
        assetsDirs: ['<%= appConfig.dist %>','<%= appConfig.dist %>/assets']
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    cssmin: {
      dist: {
        files: {
          '<%= appConfig.dist %>/assets/css/main.css': [
            '.tmp/styles/*.css'
          ]
        }
      }
    },

    uglify: {
      options: {
        mangle: {
          // 是否不支持 ie8
          'screw_ie8': false
        },
        preserveComments: false,
        compress: {
          'screw_ie8': false,
          sequences: true,
          'dead_code': true,
          conditionals: true,
          booleans: true,
          unused: true,
          'if_return': true,
          'join_vars': true,
          'drop_console': true
        },
        banner: '/*! <%= appConfig.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      }
    },
    // concat: {
    //   dist: {}
    // },

    concurrent: {
      dist: [
        'copy:styles',
        'imagemin'
      ]
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= appConfig.app %>/assets/images',
          // src: '{,*/}*.{gif, jpeg, jpg, png}',
          src: 'assets/images/**/*.{gif, jpeg, jpg, png}',
          dest: '<%= appConfig.dist %>/assets/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= appConfig.dist %>',
          src: [
            '*.html',
            'app/**/*.html',
            'components/**/*.html'
          ],
          dest: '<%= appConfig.dist %>'
        }]
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= appConfig.app %>',
          dest: '<%= appConfig.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            // 'assets/styles/*',
            'assets/images/**/*',
            'data/**/*',
            'assets/js/html5shiv.js',
            'assets/js/respond.min.js'
          ]
        }, {
          // copy fonts
          expand : true,
          cwd: '<%= appConfig.app %>',
          dest: '<%= appConfig.dist %>',
          src: ['assets/fonts/**/*.{eot,svg,ttf,woff,woff2,css}']
        }, {
          expand : true,
          cwd: '<%= appConfig.app %>',
          dest: '<%= appConfig.dist %>',
          src: ['app/**/*.html', 'components/**/*.html']
        }]
      },
      styles: {
        expand: true,
        flatten: true,
        cwd: '<%= appConfig.app %>',
        dest: '.tmp/styles/',
        src: '{components,app,assets/css}/**/*.css'
      }
    },

    // Test settings
    // karma: {
    //   unit: {
    //     configFile: 'test/karma.conf.js',
    //     singleRun: true
    //   }
    // }
  });

  // grunt.registerTask('test', [
  //   'clean:server',
  //   'wiredep',
  //   'concurrent:test',
  //   'postcss',
  //   'connect:test',
  //   'karma'
  // ]);

  grunt.registerTask('build', [
    // 'test',
    'clean:dist',
    'useminPrepare',
    'concurrent:dist',
    'postcss',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cssmin',
    'uglify',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('buildSkipTests', [
    'clean:dist',
    'useminPrepare',
    'concurrent:dist',
    'postcss',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cssmin',
    'uglify',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    // 'newer:jshint',
    /*
     * Since we dont have test (or up to date) there is no reason to keep this task
     * I am commented this, but can be changed in the future (if someone want to implement front tests).
    'test',
    */
    'build'
  ]);

};
