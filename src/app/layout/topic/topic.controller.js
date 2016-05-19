'use strict';

export default class TopicController {
  constructor ($log, $stateParams, cnodeDataService) {
    'ngInject';

    let vm = this;
    vm.article = {};
    vm.loaded = false;
    vm.getTopic = getTopic;

    activate();

    function activate() {
      vm.getTopic()
        .then((res) => {
          vm.article = res.data;
          vm.loaded = true;
        }, (err) => {
          $log(err.message);
        })
    }

    function getTopic() {
      vm.loaded = false;
      return cnodeDataService.getSingleTopic($stateParams.id);
    }
  }
}
