'use strict';

import Navbar from './navbar/navbar.directive';
import TopicsTab from './topicsTab/topicsTab.directive';
import TabTag from './tabTag/tabTag.directive';
import Pager from './pager/pager.directive';
import Loader from './loader/loader.directive';
import DateCountFilter from './filters/dateCount.filter';

angular
  .module('app.components', [])
  .filter('dateCount', DateCountFilter)
  .directive('cnodeNavbar', Navbar)
  .directive('topicsTab', TopicsTab)
  .directive('tabTag', TabTag)
  .directive('cnodePager', Pager)
  .directive('cnodeLoader', Loader);
