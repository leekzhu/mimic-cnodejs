'use strict';

export default function CnodeDataService($http, $q) {
  'ngInject';

  let service = {
    getTopics,
    getSingleTopic
  };

  return service;

  /**
   * Get all topics
   * @param page  number of pages to get
   * @param tab   categories
   * @param limit number of topics per page
   * @param mdrender if enable markdown
   * @returns {*|promise}
   */
  function getTopics({page, tab, limit, mdrender}) {
    let deferred = $q.defer();

    $http({
      method: 'GET',
      url: '/topics',
      params: {page, tab, limit, mdrender}
    }).then((res) => {
      deferred.resolve(res.data);
    }, (err) => {
      deferred.reject(err.data);
    });

    return deferred.promise;
  }

  /**
   * Get single topic content by id
   * @param id
   * @returns {*}
   */
  function getSingleTopic(id) {
    let deferred = $q.defer();

    $http({
      method: 'GET',
      url: '/topic/' + id
    }).then((res) => {
      deferred.resolve(res.data);
    }, (err) => {
      deferred.reject(err.data);
    });

    return deferred.promise;
  }
}
