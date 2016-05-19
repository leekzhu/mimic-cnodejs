'use strict';

export default function TopicsTabDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/topicsTab/topicsTab.html',
    scope: {},
    controller: TopicsTabController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class TopicsTabController {
  constructor ($state) {
    'ngInject';

    let vm = this;
    vm.tabs = [
      { label: '全部', toState: 'topics.all' },
      { label: '精华', toState: 'topics.good' },
      { label: '分享', toState: 'topics.share' },
      { label: '问答', toState: 'topics.ask' },
      { label: '招聘', toState: 'topics.job' }
    ];

    vm.goToState = goToState;

    activate();

    function activate() {
      for (let i = 0; i < vm.tabs.length; i++) {
        if ($state.current.name === vm.tabs[i].toState) {
          vm.active = i;
          break;
        }
      }
    }

    /**
     * Go to according page when certain tab is selected
     * @param toState
     */
    function goToState(toState) {
      if ($state.current.name !== toState) {
        $state.go(toState, {page: 1});
      }
    }
  }
}
