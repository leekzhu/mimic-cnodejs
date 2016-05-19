'use strict';

import CnodeDataService from './cnode/cnode.service';

angular
  .module('app.services', [])
  .factory('cnodeDataService', CnodeDataService);
