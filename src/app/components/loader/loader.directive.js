'use strict';

export default function Loader() {
  'ngInject';

  let directive = {
    restrict: 'EA',
    templateUrl: 'app/components/loader/loader.html',
    scope: {}
  };

  return directive;
}
