'use strict';

describe('directive navbar', function () {
  let vm;
  let element;

  beforeEach(angular.mock.module('wallstreetCnode'));

  beforeEach(inject(($compile, $rootScope) => {
    element = angular.element(`
      <cnode-navbar></cnode-navbar>
    `);

    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    vm = element.isolateScope().vm;
  }));

  it('should be compiled', () => {
    expect(element.html()).not.toEqual(null);
  });

  it('should have isolate scope with instantiated members', () => {
    expect(vm).toEqual(jasmine.any(Object));

    expect(vm.menuItems).toEqual(jasmine.any(Array));
  })
});
