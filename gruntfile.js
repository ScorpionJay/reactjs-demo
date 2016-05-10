module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({
    connect:{
        server:{
            options:{
                port:8000,
                livereload:35729,
                open:true,// auto open default bowser
                base:'./'
            }
        }
    },

    watch:{
      livereload: {
  		  options: { livereload: true },
  		  files: ['./{,*/}*.*'],
		},
	}
	
	
  });

  

  grunt.registerTask('default');

  grunt.registerTask('serve',[
    'connect:server',
    'watch'
  ]);

};