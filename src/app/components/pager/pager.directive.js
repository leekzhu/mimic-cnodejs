'use strict';

export default function PagerDirective($state, $stateParams) {
  'ngInject';

  let directive = {
    restrict: 'EA',
    templateUrl: 'app/components/pager/pager.html',
    scope: {},
    link
  };

  return directive;

  function link(scope) {
    scope.totalItems = 431 * 40;

    scope.pageChanged = () => {
      if ($stateParams.page !== scope.currentPage) {
        $state.go($state.current.name, {page: scope.currentPage});
      }
    }
  }
}
