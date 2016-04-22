/**
 * @license
 * Copyright 2015 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

goog.provide('shaka.util.HolaApi');


/**
 * @namespace shaka.util.HolaApi
 * @summary Hola API functions.
 */


/**
 * Call specific Hola API if defined.
 * @param {!string} name API to execute with params
 * @param {...*} var_args
 * @return {?}
 */
shaka.util.HolaApi = function(name, var_args) {
  var api = window.hola_cdn && window.hola_cdn.api;
  if (!api || !api[name])
    return;
  var args = Array.prototype.slice.call(arguments, 1);
  return api[name].apply(api, args);
};


/**
 * Create new XMLHttpRequest through HolaCDN service.
 * @param {!Object} request
 * @return {XMLHttpRequest}
 */
shaka.util.HolaApi.newHttpRequest = function(request) {
  return shaka.util.HolaApi('new_http_request', request);
};
