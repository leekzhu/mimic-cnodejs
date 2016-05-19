/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

angular
  .module('wallstreetCnode', [
    /* angular modules */
    'ngAnimate', 'ngSanitize', 'ngAria',
    /* third-party modules */
    'ui.router', 'ui.bootstrap', 'toastr',
    /* app modules */
    'app.components', 'app.services', 'app.layout'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock);
