'use strict';

module.exports = function(grunt) {
  grunt.registerTask('updatereferences', 'Update references folder with core theme and any other dependent themes', function() {
    var done = this.async(),

    grunt.util.spawn({ cmd: 'bower cache clean' }, function(err) {
      if (err) grunt.fail.warn('Cache clean failed: ' + err.message);
      ([4,5]).reduceRight(function(cb, ver) {
        return function() {
          grunt.util.spawn({
            cmd: 'bower install core' + ver + '=mozu/core-theme#^' + ver + ' --production --config.directory="references"'
          }, cb);
        }
      }, done)();
    });
  });
}