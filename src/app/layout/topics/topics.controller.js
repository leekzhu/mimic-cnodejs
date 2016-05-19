'use strict';

export default class TopicsController {
  constructor ($state, $stateParams, cnodeDataService, $log) {
    'ngInject';

    let vm = this;
    vm.loaded = false;
    vm.getTopics = getTopics;

    activate();

    function activate() {
      vm.getTopics({
        page: $stateParams.page,
        tab: $state.current.name.replace(/^topics\./, '')
      }).then((topics) => {
          vm.topics = topics.data;
          vm.loaded = true;
        }, (err) => {
          $log(err);
        });
    }

    function getTopics(params) {
      return cnodeDataService.getTopics(params);
    }
  }
}
