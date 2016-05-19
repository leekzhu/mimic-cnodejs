'use strict';

import TopicsController from './layout/topics/topics.controller';
import TopicController from './layout/topic/topic.controller';

export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('topics', {
      abstract: true,
      url: '/',
      templateUrl: 'app/layout/topics/topics.html'
    })
    .state('topics.all', {
      url: 'all/:page',
      templateUrl: 'app/layout/topics/topicsList.html',
      controller: TopicsController,
      controllerAs: 'topics'
    })
    .state('topics.good', {
      url: 'good/:page',
      templateUrl: 'app/layout/topics/topicsList.html',
      controller: TopicsController,
      controllerAs: 'topics'
    })
    .state('topics.share', {
      url: 'share/:page',
      templateUrl: 'app/layout/topics/topicsList.html',
      controller: TopicsController,
      controllerAs: 'topics'
    })
    .state('topics.ask', {
      url: 'ask/:page',
      templateUrl: 'app/layout/topics/topicsList.html',
      controller: TopicsController,
      controllerAs: 'topics'
    })
    .state('topics.job', {
      url: 'job/:page',
      templateUrl: 'app/layout/topics/topicsList.html',
      controller: TopicsController,
      controllerAs: 'topics'
    })
    .state('topic', {
      url: '/article/:id',
      templateUrl: 'app/layout/topic/topic.html',
      controller: TopicController,
      controllerAs: 'topic'
    });

  $urlRouterProvider.otherwise('/all/1');
}
