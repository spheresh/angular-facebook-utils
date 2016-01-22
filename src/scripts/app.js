'use strict';

var defaultSettings = {
  'appID'          : '',
  'permissions'    : '',
  'channelFile'    : 'bower_components/angular-facebook-utils/channel.html'
};

var application = angular.module('facebookUtils', [])
  .constant('facebookConfigDefaults', defaultSettings)
  .constant('facebookConfigSettings', defaultSettings)
  .run([
    'facebookConfigSettings', 'facebookConfigDefaults', '$rootScope', '$location', 'facebookUser',
    function(facebookConfigSettings, facebookConfigDefaults, $rootScope, $location, facebookUser) {
      
    }
  ]);