'use strict';

angular.module('agileThoughts.version', [
  'agileThoughts.version.interpolate-filter',
  'agileThoughts.version.version-directive'
])

.value('version', '0.1');
