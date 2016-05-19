'use strict';

export default function tabTag() {
  'ngInject';

  let directive = {
    restrict: 'EA',
    templateUrl: 'app/components/tabTag/tabTag.html',
    scope: {
      tab: '=cnodeTab',
      isTop: '=',
      isGood: '='
    },
    link
  };

  return directive;

  function link(scope) {
    scope.translateTab = (tab) => {
      let dict = {
        top: { label: '顶置', highlight: true },
        good: { label: '精华', highlight: true },
        share: { label: '分享', hightlight: false },
        ask: { label: '问答', highlight: false },
        job: { label: '招聘', highlight : false },
        other: { label: '其他', highlight: false }
      };

      if (scope.isTop) {
        return dict.top;
      } else if (scope.isGood) {
        return dict.good
      }

      return dict[tab] ? dict[tab] : dict.other;
    }
  }
}
