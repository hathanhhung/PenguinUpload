(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vue = __webpack_require__(2);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueRouter = __webpack_require__(3);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _routes = __webpack_require__(4);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	__webpack_require__(51);
	
	__webpack_require__(91);
	
	__webpack_require__(97);
	
	__webpack_require__(99);
	
	var _vueMaterial = __webpack_require__(101);
	
	var _vueMaterial2 = _interopRequireDefault(_vueMaterial);
	
	__webpack_require__(102);
	
	var _App = __webpack_require__(104);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vueRouter2.default);
	_vue2.default.use(_vueMaterial2.default);
	
	var router = new _vueRouter2.default({
	  routes: _routes2.default
	});
	
	router.afterEach(function (currentRoute) {
	  var mainContent = document.querySelector('.main-content');
	
	  if (mainContent) {
	    mainContent.scrollTop = 0;
	  }
	});
	
	_vue2.default.material.registerTheme({
	  apptheme: {
	    primary: {
	      color: 'cyan',
	      hue: 700
	    },
	    accent: {
	      color: 'light-blue',
	      hue: 600
	    }
	  }
	});
	
	_vue2.default.material.setCurrentTheme('apptheme');
	
	var YASApp = _vue2.default.component('app', _App2.default);
	
	var app = new YASApp({
	  el: '#app',
	  router: router
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("vue");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("vue-router");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _notFound = __webpack_require__(5);
	
	var _notFound2 = _interopRequireDefault(_notFound);
	
	var _landing = __webpack_require__(11);
	
	var _landing2 = _interopRequireDefault(_landing);
	
	var _about = __webpack_require__(21);
	
	var _about2 = _interopRequireDefault(_about);
	
	var _download = __webpack_require__(27);
	
	var _download2 = _interopRequireDefault(_download);
	
	var _dashboard = __webpack_require__(33);
	
	var _dashboard2 = _interopRequireDefault(_dashboard);
	
	var _myfiles = __webpack_require__(39);
	
	var _myfiles2 = _interopRequireDefault(_myfiles);
	
	var _profile = __webpack_require__(45);
	
	var _profile2 = _interopRequireDefault(_profile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var main = [{
	  path: '/',
	  name: 'landing',
	  component: _landing2.default
	}, {
	  path: '/home',
	  redirect: '/'
	}, {
	  path: '/about',
	  name: 'About',
	  component: _about2.default
	}, {
	  path: '/u',
	  name: 'dashboard',
	  component: _dashboard2.default
	}, {
	  path: '/files',
	  name: 'my files',
	  component: _myfiles2.default
	}, {
	  path: '/files/:dir',
	  name: 'my files navigation',
	  component: _myfiles2.default,
	  props: true
	}, {
	  path: '/p',
	  name: 'profile',
	  component: _profile2.default
	}, {
	  path: '/d/:id/:pass',
	  name: 'download (with pass)',
	  component: _download2.default
	}, {
	  path: '/d/:id',
	  name: 'download',
	  component: _download2.default
	}];
	
	var error = [{
	  path: '*',
	  name: 'error',
	  component: _notFound2.default
	}];
	
	exports.default = [].concat(main, error);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(6)
	
	/* template */
	var __vue_template__ = __webpack_require__(10)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\layouts\\notFound.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0f76d7a9"
	if (__vue_options__.functional) {console.error("[vue-loader] notFound.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _intro = __webpack_require__(7);
	
	var _intro2 = _interopRequireDefault(_intro);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    Intro: _intro2.default
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(8)
	
	/* template */
	var __vue_template__ = __webpack_require__(9)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\intro.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-d5663926"
	if (__vue_options__.functional) {console.error("[vue-loader] intro.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['viewTitle'],
	  data: function data() {
	    return {
	      appTitle: 'PenguinUpload'
	    };
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "intro"
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('h1', {
	    staticClass: "app-title"
	  }, [_vm._v(_vm._s(_vm.viewTitle || _vm.appTitle))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "not-found"
	  }, [_c('div', {
	    staticClass: "container",
	    attrs: {
	      "id": "app"
	    }
	  }, [_c('div', {
	    staticClass: "row",
	    attrs: {
	      "id": "intro-area"
	    }
	  }, [_c('div', {
	    staticClass: "twelve columns"
	  }, [_c('intro')], 1)]), _vm._v(" "), _vm._m(0)])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "not-found-content"
	  }, [_c('h1', [_vm._v("404. That's an error.")]), _vm._v(" "), _c('h3', [_vm._v("The page you were looking for couldn't be found.")])])
	}]}
	module.exports.render._withStripped = true

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(12)
	
	/* template */
	var __vue_template__ = __webpack_require__(20)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\layouts\\landing.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-bcce5e66"
	if (__vue_options__.functional) {console.error("[vue-loader] landing.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _intro = __webpack_require__(7);
	
	var _intro2 = _interopRequireDefault(_intro);
	
	var _devCredits = __webpack_require__(13);
	
	var _devCredits2 = _interopRequireDefault(_devCredits);
	
	var _login = __webpack_require__(16);
	
	var _login2 = _interopRequireDefault(_login);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    Intro: _intro2.default,
	    Login: _login2.default,
	    devCredits: _devCredits2.default
	  },
	  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
	    next(function (vm) {
	      if (vm.$root.loggedIn) {
	        vm.$router.replace('/u');
	      }
	    });
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(14)
	
	/* template */
	var __vue_template__ = __webpack_require__(15)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\devCredits.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-26988fd8"
	if (__vue_options__.functional) {console.error("[vue-loader] devCredits.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {};
	  }
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "dev-credits"
	  }, [_c('h6', {
	    staticClass: "credit-text"
	  }, [_vm._v("Made by "), _c('a', {
	    attrs: {
	      "href": "https://0xfireball.me",
	      "target": "_blank"
	    }
	  }, [_vm._v("0xFireball")]), _vm._v(" of "), _c('a', {
	    attrs: {
	      "href": "https://iridiumion.xyz",
	      "target": "_blank"
	    }
	  }, [_vm._v("IridiumIon Software")])])])
	}]}
	module.exports.render._withStripped = true

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(17)
	
	/* template */
	var __vue_template__ = __webpack_require__(19)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\login.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0a3eb42c"
	if (__vue_options__.functional) {console.error("[vue-loader] login.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _axios = __webpack_require__(18);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var axiosRequestConfig = {
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 500;
	  }
	};
	exports.default = {
	  name: 'login',
	  data: function data() {
	    return {
	      login: {
	        username: '',
	        password: '',
	        err: '',
	        e: true },
	      register: {
	        username: '',
	        password: '',
	        confirm: '',
	        iaccept: '',
	        inviteKey: '',
	        err: '',
	        e: true }
	    };
	  },
	
	  methods: {
	    tryLogin: function tryLogin() {
	      var vm = this;
	      if (!vm.login.e) return;
	      if (!vm.login.password || !vm.login.username) {
	        vm.login.err = 'credentials cannot be empty';
	        return;
	      }
	      vm.login.e = false;
	
	      vm.login.err = '';
	
	      _axios2.default.post('/login', {
	        username: vm.login.username,
	        password: vm.login.password
	      }).then(function (response) {
	        if (response.status === 200) {
	          vm.$root.u.key = response.data.apikey;
	          vm.$root.u.name = response.data.user.username;
	
	          vm.$router.push('/u');
	        } else if (response.status == 401) {
	          vm.login.err = response.data;
	        }
	        vm.login.e = true;
	      }).catch(function (error) {
	        if (error) {
	          vm.login.err = 'invalid login credentials';
	        }
	        vm.login.e = true;
	      });
	    },
	    tryRegister: function tryRegister() {
	      var vm = this;
	      if (!vm.register.e) return;
	
	      if (vm.register.username.length < 3) {
	        vm.register.err = 'username must be at least 3 characters. this is also validated on the server';
	        return;
	      }
	      if (vm.register.password.length < 8) {
	        vm.register.err = 'password must be at least 8 characters. this is also validated on the server';
	        return;
	      }
	      if (!vm.register.iaccept) {
	        vm.register.err = 'you must accept the terms and conditions';
	        return;
	      }
	      if (vm.register.password !== vm.register.confirm) {
	        vm.register.err = 'password confirmation does not match';
	        return;
	      }
	      vm.register.e = false;
	
	      vm.register.err = '';
	
	      _axios2.default.post('/register', {
	        username: vm.register.username,
	        password: vm.register.password,
	        inviteKey: vm.register.inviteKey
	      }, axiosRequestConfig).then(function (response) {
	        if (response.status === 200) {
	          vm.$root.showPopup('Registration succeeded! You may now log in.', 'Success');
	        } else if (response.status === 401) {
	          vm.register.err = response.data;
	        }
	        vm.register.e = true;
	      }).catch(function (error) {
	        if (error) {
	          console.log(error);
	        }
	        vm.register.e = true;
	      });
	    }
	  }
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("axios");

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "login"
	  }, [_c('md-tabs', {
	    ref: "authOptionTabs",
	    staticClass: "md-accent"
	  }, [_c('md-tab', {
	    attrs: {
	      "id": "t-login",
	      "md-label": "Log In"
	    }
	  }, [_c('form', {
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	        _vm.tryLogin($event)
	      }
	    }
	  }, [_c('md-input-container', [_c('label', [_vm._v("Username")]), _vm._v(" "), _c('md-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.login.username),
	      expression: "login.username"
	    }],
	    domProps: {
	      "value": (_vm.login.username)
	    },
	    on: {
	      "input": function($event) {
	        _vm.login.username = $event
	      }
	    }
	  })], 1), _vm._v(" "), _c('md-input-container', {
	    attrs: {
	      "md-has-password": ""
	    }
	  }, [_c('label', [_vm._v("Password")]), _vm._v(" "), _c('md-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.login.password),
	      expression: "login.password"
	    }],
	    attrs: {
	      "type": "password"
	    },
	    domProps: {
	      "value": (_vm.login.password)
	    },
	    on: {
	      "input": function($event) {
	        _vm.login.password = $event
	      }
	    }
	  })], 1), _vm._v(" "), _c('p', {
	    staticClass: "error-message"
	  }, [_vm._v(_vm._s(_vm.login.err))]), _vm._v(" "), _c('input', {
	    staticClass: "invisible",
	    attrs: {
	      "type": "submit"
	    }
	  }), _vm._v(" "), _c('md-button', {
	    staticClass: "md-raised md-primary",
	    attrs: {
	      "disabled": !_vm.login.e
	    },
	    on: {
	      "click": _vm.tryLogin
	    }
	  }, [_vm._v("Log In")])], 1)]), _vm._v(" "), _c('md-tab', {
	    attrs: {
	      "id": "t-signup",
	      "md-label": "Sign Up"
	    }
	  }, [_c('form', {
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	        _vm.tryRegister($event)
	      }
	    }
	  }, [_c('md-input-container', [_c('label', [_vm._v("Username")]), _vm._v(" "), _c('md-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.register.username),
	      expression: "register.username"
	    }],
	    domProps: {
	      "value": (_vm.register.username)
	    },
	    on: {
	      "input": function($event) {
	        _vm.register.username = $event
	      }
	    }
	  })], 1), _vm._v(" "), _c('md-input-container', {
	    attrs: {
	      "md-has-password": ""
	    }
	  }, [_c('label', [_vm._v("Password")]), _vm._v(" "), _c('md-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.register.password),
	      expression: "register.password"
	    }],
	    attrs: {
	      "type": "password"
	    },
	    domProps: {
	      "value": (_vm.register.password)
	    },
	    on: {
	      "input": function($event) {
	        _vm.register.password = $event
	      }
	    }
	  })], 1), _vm._v(" "), _c('md-input-container', [_c('label', [_vm._v("Confirm Password")]), _vm._v(" "), _c('md-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.register.confirm),
	      expression: "register.confirm"
	    }],
	    attrs: {
	      "type": "password"
	    },
	    domProps: {
	      "value": (_vm.register.confirm)
	    },
	    on: {
	      "input": function($event) {
	        _vm.register.confirm = $event
	      }
	    }
	  })], 1), _vm._v(" "), _c('md-input-container', [_c('label', [_vm._v("Invite Key (optional)")]), _vm._v(" "), _c('md-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.register.inviteKey),
	      expression: "register.inviteKey"
	    }],
	    attrs: {
	      "type": "password"
	    },
	    domProps: {
	      "value": (_vm.register.inviteKey)
	    },
	    on: {
	      "input": function($event) {
	        _vm.register.inviteKey = $event
	      }
	    }
	  })], 1), _vm._v(" "), _c('md-checkbox', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.register.iaccept),
	      expression: "register.iaccept"
	    }],
	    domProps: {
	      "value": (_vm.register.iaccept)
	    },
	    on: {
	      "input": function($event) {
	        _vm.register.iaccept = $event
	      }
	    }
	  }, [_vm._v("I accept the Terms and Conditions")]), _vm._v(" "), _c('p', {
	    staticClass: "error-message"
	  }, [_vm._v(_vm._s(_vm.register.err))]), _vm._v(" "), _c('input', {
	    staticClass: "invisible",
	    attrs: {
	      "type": "submit"
	    }
	  }), _vm._v(" "), _c('md-button', {
	    staticClass: "md-raised md-primary",
	    attrs: {
	      "disabled": !_vm.register.e
	    },
	    on: {
	      "click": _vm.tryRegister
	    }
	  }, [_vm._v("Sign Up")])], 1)])], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "shrink-layout"
	  }, [_c('div', {
	    staticClass: "row intro-area"
	  }, [_c('div', {
	    staticClass: "twelve columns"
	  }, [_c('intro')], 1)]), _vm._v(" "), _c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "six columns offset-by-three"
	  }, [_c('login')], 1)]), _vm._v(" "), _c('devCredits')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(22)
	
	/* template */
	var __vue_template__ = __webpack_require__(26)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\layouts\\about.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-5fc55ec3"
	if (__vue_options__.functional) {console.error("[vue-loader] about.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _intro = __webpack_require__(7);
	
	var _intro2 = _interopRequireDefault(_intro);
	
	var _aboutWidget = __webpack_require__(23);
	
	var _aboutWidget2 = _interopRequireDefault(_aboutWidget);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    Intro: _intro2.default,
	    About: _aboutWidget2.default
	  }
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(24)
	
	/* template */
	var __vue_template__ = __webpack_require__(25)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\aboutWidget.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4ce1a81c"
	if (__vue_options__.functional) {console.error("[vue-loader] aboutWidget.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {
	      appName: 'PenguinUpload',
	      appVersion: window.$appVersion
	    };
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "aboutWidget"
	  }, [_c('h5', [_vm._v("About " + _vm._s(_vm.appName))]), _vm._v(" "), _c('p', [_vm._v("\n    PenguinUpload is a self-hostable, fully featured web application that lets users upload and share files.\n  ")]), _vm._v(" "), _c('h6', [_vm._v("\n    PenguinUpload version " + _vm._s(_vm.appVersion) + "\n  ")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "about"
	  }, [_c('div', {
	    staticClass: "container",
	    attrs: {
	      "id": "app"
	    }
	  }, [_c('div', {
	    staticClass: "row",
	    attrs: {
	      "id": "intro-area"
	    }
	  }, [_c('div', {
	    staticClass: "twelve columns"
	  }, [_c('intro')], 1)]), _vm._v(" "), _c('div', {
	    staticClass: "about-content"
	  }, [_c('about')], 1)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(28)
	
	/* template */
	var __vue_template__ = __webpack_require__(32)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\layouts\\download.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3edc2342"
	if (__vue_options__.functional) {console.error("[vue-loader] download.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _intro = __webpack_require__(7);
	
	var _intro2 = _interopRequireDefault(_intro);
	
	var _devCredits = __webpack_require__(13);
	
	var _devCredits2 = _interopRequireDefault(_devCredits);
	
	var _downloadItem = __webpack_require__(29);
	
	var _downloadItem2 = _interopRequireDefault(_downloadItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    Intro: _intro2.default,
	    downloadItem: _downloadItem2.default,
	    devCredits: _devCredits2.default
	  }
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(30)
	
	/* template */
	var __vue_template__ = __webpack_require__(31)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\downloadItem.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-02fa184a"
	if (__vue_options__.functional) {console.error("[vue-loader] downloadItem.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _axios = __webpack_require__(18);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var axiosRequestConfig = {
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 500;
	  }
	};
	
	exports.default = {
	  props: ['itemId', 'itemPass'],
	  data: function data() {
	    return {
	      loading: true,
	      file: {
	        name: 'Loading',
	        size: 'retrieving information from server',
	        id: null,
	        pass: ''
	      },
	      error: false,
	      cItemPass: ''
	    };
	  },
	  methods: {
	    downloadFile: function downloadFile() {
	      window.location.href = '/api/download/' + this.file.id + (this.file.pass ? '!' + this.file.pass : '');
	    },
	    updateFileInfo: function updateFileInfo(key) {
	      var vm = this;
	      var suffix = key ? '!' + key : '';
	      vm.file.id = vm.itemId;
	      _axios2.default.get('/api/fileinfo/' + vm.file.id + suffix, axiosRequestConfig).then(function (response) {
	        if (response.status == 200) {
	          vm.file.name = response.data.name;
	          vm.file.sizeText = vm.$root.humanFileSize(response.data.size);
	          vm.loading = false;
	          if (suffix) {
	            vm.file.pass = key;
	          }
	        } else if (response.status == 401) {
	          vm.$root.showPrompt('Enter password', 'File password', function (r) {
	            var responded = true;
	            if (r) {
	              setTimeout(function () {
	                vm.updateFileInfo(r);
	              }, 500);
	            } else {
	              vm.file.name = 'Incorrect Password';
	              vm.file.sizeText = 'Access Denied';
	              vm.loading = false;
	              vm.error = true;
	            }
	          });
	        }
	      }).catch(function (error) {
	        console.log(error);
	
	        vm.file.name = 'File Not Found';
	        vm.file.sizeText = 'Error';
	        vm.loading = false;
	        vm.error = true;
	      });
	    }
	  },
	  mounted: function mounted() {
	    if (this.itemPass) {
	      try {
	        this.cItemPass = window.atob(this.itemPass);
	      } catch (e) {
	        this.cItemPass = null;
	      }
	    }
	    this.updateFileInfo(this.cItemPass);
	  }
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "download-item"
	  }, [_c('div', {
	    staticClass: "md-title"
	  }, [_vm._v("File Download")]), _vm._v(" "), _c('div', {
	    staticClass: "download-area-padding"
	  }, [(_vm.loading) ? _c('div', [_c('md-spinner', {
	    attrs: {
	      "md-stroke": 1.5,
	      "md-indeterminate": ""
	    }
	  }), _vm._v(" "), _c('h5', [_vm._v("Loading File Information")])], 1) : _c('div', [_c('md-icon', {
	    staticClass: "md-primary",
	    attrs: {
	      "md-theme": "light-blue"
	    }
	  }, [_vm._v("insert_drive_file")]), _vm._v(" "), _c('h5', [_vm._v(_vm._s(_vm.file.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.file.sizeText))]), _vm._v(" "), (!_vm.error) ? _c('div', [_c('div', {
	    staticClass: "right"
	  }, [_c('md-button', {
	    on: {
	      "click": _vm.downloadFile
	    }
	  }, [(_vm.file.pass.length > 0) ? _c('md-icon', [_vm._v("lock")]) : _vm._e(), _vm._v(" "), _c('span', [_vm._v("\n            Download\n          ")])], 1)], 1)]) : _vm._e()], 1)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "shrink-layout"
	  }, [_c('div', {
	    staticClass: "row download-area"
	  }, [_c('div', {
	    staticClass: "twelve columns"
	  }, [_c('intro')], 1)]), _vm._v(" "), _c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "six columns offset-by-three"
	  }, [_c('downloadItem', {
	    attrs: {
	      "itemId": _vm.$route.params.id,
	      "itemPass": _vm.$route.params.pass
	    }
	  })], 1)]), _vm._v(" "), _c('devCredits')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(34)
	
	/* template */
	var __vue_template__ = __webpack_require__(38)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\layouts\\dashboard.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-73b58b4a"
	if (__vue_options__.functional) {console.error("[vue-loader] dashboard.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _intro = __webpack_require__(7);
	
	var _intro2 = _interopRequireDefault(_intro);
	
	var _fileUploadWidget = __webpack_require__(35);
	
	var _fileUploadWidget2 = _interopRequireDefault(_fileUploadWidget);
	
	var _devCredits = __webpack_require__(13);
	
	var _devCredits2 = _interopRequireDefault(_devCredits);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    Intro: _intro2.default,
	    fileUploadWidget: _fileUploadWidget2.default,
	    devCredits: _devCredits2.default
	  },
	  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
	    next(function (vm) {
	      if (!vm.$root.loggedIn) {
	        vm.$router.replace('/');
	      }
	    });
	  }
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(36)
	
	/* template */
	var __vue_template__ = __webpack_require__(37)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\fileUploadWidget.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-7e171d50"
	if (__vue_options__.functional) {console.error("[vue-loader] fileUploadWidget.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _axios = __webpack_require__(18);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var axiosRequestConfig = {
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 500;
	  }
	};
	
	exports.default = {
	  data: function data() {
	    return {
	      progressIndicators: [],
	
	      completedFiles: [],
	
	      uploadDestination: '/'
	    };
	  },
	
	  computed: {
	    uploadingFiles: function uploadingFiles() {
	      return this.progressIndicators.length;
	    },
	    uploading: function uploading() {
	      return this.uploadingFiles > 0;
	    }
	  },
	  methods: {
	    viewMyFiles: function viewMyFiles() {
	      this.$router.push('/files');
	    },
	    browseForFiles: function browseForFiles() {
	      this.$refs.browse.click();
	    },
	    onFilesUploaded: function onFilesUploaded(e) {
	      var browse = this.$refs.browse;
	      var fileCount = browse.files.length;
	      for (var i = 0; i < fileCount; i++) {
	        var f = browse.files[i];
	        var progress = {
	          value: 0,
	          fileRef: f,
	          name: f.name
	        };
	        this.progressIndicators.push(progress);
	        this.uploadFile(f, progress);
	      }
	    },
	    handleDragDropUpload: function handleDragDropUpload(e) {
	      for (var i = 0; i < e.dataTransfer.files.length; i++) {
	        var f = e.dataTransfer.files[i];
	        var progress = {
	          value: 0,
	          fileRef: f,
	          name: f.name,
	          error: false,
	          message: ''
	        };
	        this.progressIndicators.push(progress);
	        this.uploadFile(f, progress);
	      }
	    },
	    cancelUpload: function cancelUpload(progress) {
	      var vm = this;
	      progress.xhr.abort();
	      vm.progressIndicators.splice(vm.progressIndicators.indexOf(progress), 1);
	    },
	    uploadFile: function uploadFile(file, progress) {
	      var vm = this;
	      var xhr = new XMLHttpRequest();
	      progress.xhr = xhr;
	      xhr.open("POST", "/api/upload");
	      xhr.onload = function () {
	        if (xhr.status === 200) {
	          vm.progressIndicators.splice(vm.progressIndicators.indexOf(progress), 1);
	
	          var response = JSON.parse(xhr.responseText);
	          vm.completedFiles.push({
	            name: progress.name,
	            downloadPage: '/#/d/' + response.fileId
	          });
	        } else {
	          progress.error = true;
	
	          vm.$set(progress, 'message', xhr.responseText);
	        }
	      };
	      xhr.upload.onprogress = function (e) {
	        if (e.lengthComputable) {
	          progress.value = Math.floor(e.loaded / e.total * 100);
	        }
	      };
	      var form = new FormData();
	      form.append("apikey", vm.$root.u.key);
	      form.append("dir", vm.uploadDestination);
	      form.append("file", file);
	      xhr.send(form);
	    },
	    visitUrl: function visitUrl(u) {
	      window.open(u, '_blank');
	    }
	  }
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "file-upload-widget"
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "ten columns offset-by-one"
	  }, [_c('div', {
	    staticClass: "left sep-b"
	  }, [_c('md-button', {
	    staticClass: "md-raised md-primary",
	    on: {
	      "click": _vm.viewMyFiles
	    }
	  }, [_vm._v("View my files")])], 1), _vm._v(" "), _c('div', {
	    staticClass: "upload-here",
	    on: {
	      "drop": function($event) {
	        $event.stopPropagation();
	        $event.preventDefault();
	        _vm.handleDragDropUpload($event)
	      },
	      "dragenter": function($event) {
	        $event.stopPropagation();
	        $event.preventDefault();
	      },
	      "dragleave": function($event) {
	        $event.stopPropagation();
	        $event.preventDefault();
	      },
	      "dragover": function($event) {
	        $event.stopPropagation();
	        $event.preventDefault();
	      }
	    }
	  }, [_c('div', {
	    staticClass: "md-title"
	  }, [_vm._v("Upload Files")]), _vm._v(" "), _c('div', {
	    staticClass: "row upload-settings-section"
	  }, [_c('div', {
	    staticClass: "six columns offset-by-three"
	  }, [_c('md-input-container', [_c('label', [_vm._v("Upload Destination")]), _vm._v(" "), _c('md-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.uploadDestination),
	      expression: "uploadDestination"
	    }],
	    domProps: {
	      "value": (_vm.uploadDestination)
	    },
	    on: {
	      "input": function($event) {
	        _vm.uploadDestination = $event
	      }
	    }
	  })], 1)], 1)]), _vm._v(" "), _c('div', {
	    staticClass: "md-subhead"
	  }, [_vm._v("Drag and drop or click")]), _vm._v(" "), _c('div', {
	    staticClass: "upload-area-padding",
	    on: {
	      "click": _vm.browseForFiles
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "upload-progress-indicators"
	  }, [_c('md-list', {
	    staticClass: "custom-list md-double-line"
	  }, [(_vm.progressIndicators.length > 0) ? _c('md-subheader', [_vm._v("Uploading")]) : _vm._e(), _vm._v(" "), _vm._l((_vm.progressIndicators), function(prInd, ix) {
	    return _c('md-list-item', [(!prInd.error) ? _c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("cloud_queue")]) : _c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("error")]), _vm._v(" "), _c('div', {
	      staticClass: "md-list-text-container"
	    }, [_c('span', [_vm._v(" " + _vm._s(prInd.name) + " ")]), _vm._v(" "), (!prInd.error) ? [_c('span', [_vm._v(_vm._s((prInd.value < 100) ? ("Uploading... (" + (prInd.value) + "%)") : 'Uploaded, Processing...'))]), _vm._v(" "), _c('md-progress', {
	      attrs: {
	        "md-progress": prInd.value
	      }
	    })] : _c('span', [_vm._v(" " + _vm._s('Upload error: ' + prInd.message))])], 2), _vm._v(" "), _c('md-button', {
	      staticClass: "md-icon-button md-list-action",
	      on: {
	        "click": function($event) {
	          _vm.cancelUpload(prInd)
	        }
	      }
	    }, [_c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("cancel")])], 1), _vm._v(" "), _c('md-button', {
	      staticClass: "md-icon-button md-list-action"
	    }, [_c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("file_upload")])], 1), _vm._v(" "), _c('md-divider', {
	      staticClass: "md-inset"
	    })], 1)
	  }), _vm._v(" "), (_vm.completedFiles.length > 0) ? _c('md-subheader', [_vm._v("Completed")]) : _vm._e(), _vm._v(" "), _vm._l((_vm.completedFiles), function(cmplFile, ix) {
	    return _c('md-list-item', {
	      on: {
	        "click": function($event) {
	          _vm.visitUrl(cmplFile.downloadPage)
	        }
	      }
	    }, [_c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("cloud_done")]), _vm._v(" "), _c('div', {
	      staticClass: "md-list-text-container"
	    }, [_c('span', [_vm._v(" " + _vm._s(cmplFile.name))]), _vm._v(" "), _c('span', [_vm._v("Upload Complete!")])]), _vm._v(" "), _c('md-button', {
	      staticClass: "md-icon-button md-list-action"
	    }, [_c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("done")])], 1), _vm._v(" "), _c('md-divider', {
	      staticClass: "md-inset"
	    })], 1)
	  })], 2), _vm._v(" "), (_vm.completedFiles.length > 0) ? _c('md-button', {
	    on: {
	      "click": function($event) {
	        _vm.completedFiles = []
	      }
	    }
	  }, [_vm._v("Clear All")]) : _vm._e()], 1), _vm._v(" "), _c('input', {
	    ref: "browse",
	    staticClass: "invisible",
	    attrs: {
	      "type": "file",
	      "multiple": ""
	    },
	    on: {
	      "change": _vm.onFilesUploaded
	    }
	  })])])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "shrink-layout"
	  }, [_c('intro', {
	    attrs: {
	      "view-title": "Dashboard"
	    }
	  }), _vm._v(" "), _c('fileUploadWidget'), _vm._v(" "), _c('devCredits')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(40)
	
	/* template */
	var __vue_template__ = __webpack_require__(44)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\layouts\\myfiles.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-12a2b501"
	if (__vue_options__.functional) {console.error("[vue-loader] myfiles.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _intro = __webpack_require__(7);
	
	var _intro2 = _interopRequireDefault(_intro);
	
	var _myFilesList = __webpack_require__(41);
	
	var _myFilesList2 = _interopRequireDefault(_myFilesList);
	
	var _devCredits = __webpack_require__(13);
	
	var _devCredits2 = _interopRequireDefault(_devCredits);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    Intro: _intro2.default,
	    myFilesList: _myFilesList2.default,
	    devCredits: _devCredits2.default
	  },
	  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
	    next(function (vm) {
	      if (!vm.$root.loggedIn) {
	        vm.$router.replace('/');
	      }
	    });
	  }
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(42)
	
	/* template */
	var __vue_template__ = __webpack_require__(43)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\myFilesList.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0f94832a"
	if (__vue_options__.functional) {console.error("[vue-loader] myFilesList.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _axios = __webpack_require__(18);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var axiosRequestConfig = {
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 500;
	  }
	};
	
	exports.default = {
	  props: ['dir'],
	  data: function data() {
	    return {
	      dirStructure: {},
	      files: [],
	      dirs: [],
	      loadFinished: false,
	      error: false,
	      currentDir: this.dir
	    };
	  },
	
	  computed: {
	    noItems: function noItems() {
	      return this.files.length == 0 && this.dirs.length == 0;
	    }
	  },
	  methods: {
	    uploadMoreFiles: function uploadMoreFiles() {
	      this.$router.push('/u');
	    },
	    visitUrl: function visitUrl(u) {
	      window.open(u, '_blank');
	    },
	    visitDownloadPage: function visitDownloadPage(ix) {
	      var _this = this;
	
	      var f = this.files[ix];
	      if (f.locked) {
	        (function () {
	          var vm = _this;
	          vm.$root.showConfirm('\nThis file is password protected. Do you want to encode the <br>\npassword in the link? If you don\'t do this, anyone who visits <br>\nyour link will need to enter the file password to view the file.\n', 'Include password?', function (r) {
	            if (r) {
	              setTimeout(function () {
	                vm.showDownloadLinkWithPass(ix);
	              }, 400);
	            } else {
	              var dlPage = '/#/d/' + f.fileId;
	              window.open(dlPage, '_blank');
	            }
	          }, 'Yes', 'No');
	        })();
	      } else {
	        var dlPage = '/#/d/' + f.fileId;
	        window.open(dlPage, '_blank');
	      }
	    },
	    showDownloadLinkWithPass: function showDownloadLinkWithPass(ix) {
	      var vm = this;
	      var f = vm.files[ix];
	      _axios2.default.get('/api/getpass/' + f.fileId, vm.$root.getAuthRequestParams()).then(function (res) {
	        var dlPage = window.location.href.split("#")[0] + '#/d/' + f.fileId + '/' + window.btoa(res.data);
	        vm.$root.showPopup('\nDownload link with password encoded:<br>\n<a target="_blank" href="' + dlPage + '">' + dlPage + '</a>\n            ', 'Link Created');
	      });
	    },
	    downloadFile: function downloadFile(ix) {
	      var f = this.files[ix];
	
	      window.location.href = '/api/fdownload/' + f.fileId + '?apikey=' + this.$root.u.key;
	    },
	    lockFile: function lockFile(ix) {
	      var vm = this;
	      var f = vm.files[ix];
	      vm.$root.showPrompt('Enter password', 'Password', function (r) {
	        if (r) {
	          _axios2.default.patch('/api/lock/' + f.fileId + '!' + r, {}, vm.$root.getAuthRequestParams()).then(function (res) {
	            f.locked = true;
	          });
	        }
	      });
	    },
	    unlockFile: function unlockFile(ix) {
	      var vm = this;
	      var f = vm.files[ix];
	      vm.$root.showConfirm('Are you sure you want to remove the password on this file?', 'Confirm Unlock', function (r) {
	        if (r) {
	          _axios2.default.patch('/api/unlock/' + f.fileId, {}, vm.$root.getAuthRequestParams()).then(function (res) {
	            f.locked = false;
	          });
	        }
	      });
	    },
	    deleteFile: function deleteFile(ix) {
	      var vm = this;
	      var f = vm.files[ix];
	      vm.$root.showConfirm('Are you sure you want to delete this file? It cannot be recovered.', 'Confirm Delete', function (r) {
	        if (r) {
	          _axios2.default.delete('/api/delete/' + f.fileId, vm.$root.getAuthRequestParams()).then(function (res) {
	            vm.files.splice(ix, 1);
	          });
	        }
	      });
	    },
	    updateFilesDirs: function updateFilesDirs() {
	      var segments = this.currentDir.split('/');
	
	      segments = segments.filter(Boolean);
	
	      var workingDirStructure = this.dirStructure;
	
	      var _loop = function _loop(i) {
	        var currentSegment = segments[i];
	        console.log(currentSegment);
	        workingDirStructure = workingDirStructure.dirs.find(function (d) {
	          return d.name == currentSegment;
	        });
	      };
	
	      for (var i = 0; i < segments.length; i++) {
	        _loop(i);
	      }
	
	      this.files = workingDirStructure.files;
	      this.dirs = workingDirStructure.dirs;
	    }
	  },
	  mounted: function mounted() {
	    var vm = this;
	    vm.currentDir = vm.currentDir || '/';
	    vm.$root.getAuthRequestParams();
	    _axios2.default.get('/api/files', vm.$root.getAuthRequestParams()).then(function (response) {
	      console.log(response.data);
	      vm.dirStructure = response.data;
	      vm.updateFilesDirs();
	      vm.loadFinished = true;
	    }).catch(function (error) {
	      if (error) {
	        console.log(error);
	        vm.error = true;
	      }
	      vm.loadFinished = true;
	    });
	  }
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "my-files-list"
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "ten columns offset-by-one"
	  }, [_c('div', {
	    staticClass: "left sep-b"
	  }, [_c('md-button', {
	    staticClass: "md-raised md-primary",
	    on: {
	      "click": _vm.uploadMoreFiles
	    }
	  }, [_vm._v("Upload Files")])], 1), _vm._v(" "), _c('div', {
	    staticClass: "uploaded-files-list"
	  }, [_c('div', {
	    staticClass: "md-title"
	  }, [_vm._v("All My Files")]), _vm._v(" "), (_vm.loadFinished) ? _c('div', [(_vm.error) ? _c('div', [_c('p', [_vm._v("Error")])]) : (_vm.noItems) ? _c('div', [_c('p', [_vm._v("No Files")])]) : _vm._e(), _vm._v(" "), _c('md-list', {
	    staticClass: "custom-list md-double-line"
	  }, _vm._l((_vm.files), function(file, ix) {
	    return _c('md-list-item', [_c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("cloud_done")]), _vm._v(" "), _c('div', {
	      staticClass: "md-list-text-container"
	    }, [_c('span', [_vm._v(" " + _vm._s(file.name))]), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(file.hrSize))])]), _vm._v(" "), (!file.locked) ? _c('md-button', {
	      staticClass: "md-icon-button md-list-action",
	      on: {
	        "click": function($event) {
	          _vm.lockFile(ix)
	        }
	      }
	    }, [_c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("lock_open")])], 1) : _c('md-button', {
	      staticClass: "md-icon-button md-list-action",
	      on: {
	        "click": function($event) {
	          _vm.unlockFile(ix)
	        }
	      }
	    }, [_c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("lock")])], 1), _vm._v(" "), _c('md-button', {
	      staticClass: "md-icon-button md-list-action",
	      on: {
	        "click": function($event) {
	          _vm.downloadFile(ix)
	        }
	      }
	    }, [_c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("file_download")])], 1), _vm._v(" "), _c('md-menu', {
	      attrs: {
	        "md-align-trigger": ""
	      }
	    }, [_c('md-button', {
	      staticClass: "md-icon-button md-list-action",
	      attrs: {
	        "md-menu-trigger": ""
	      }
	    }, [_c('md-icon', {
	      staticClass: "md-primary"
	    }, [_vm._v("more_horiz")])], 1), _vm._v(" "), _c('md-menu-content', [_c('md-menu-item', {
	      on: {
	        "click": function($event) {
	          _vm.visitDownloadPage(ix)
	        }
	      }
	    }, [_vm._v("Download Page")]), _vm._v(" "), _c('md-menu-item', {
	      on: {
	        "click": function($event) {
	          _vm.deleteFile(ix)
	        }
	      }
	    }, [_vm._v("Delete")])], 1)], 1), _vm._v(" "), _c('md-divider', {
	      staticClass: "md-inset"
	    })], 1)
	  }))], 1) : _c('div', [_c('md-spinner', {
	    attrs: {
	      "md-stroke": 1.5,
	      "md-indeterminate": ""
	    }
	  }), _vm._v(" "), _c('h5', [_vm._v("Retrieving Data")])], 1)])])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "shrink-layout"
	  }, [_c('intro', {
	    attrs: {
	      "view-title": "My Files"
	    }
	  }), _vm._v(" "), _c('myFilesList'), _vm._v(" "), _c('devCredits')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(46)
	
	/* template */
	var __vue_template__ = __webpack_require__(50)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\layouts\\profile.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-e2e5f142"
	if (__vue_options__.functional) {console.error("[vue-loader] profile.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _intro = __webpack_require__(7);
	
	var _intro2 = _interopRequireDefault(_intro);
	
	var _myProfile = __webpack_require__(47);
	
	var _myProfile2 = _interopRequireDefault(_myProfile);
	
	var _devCredits = __webpack_require__(13);
	
	var _devCredits2 = _interopRequireDefault(_devCredits);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    Intro: _intro2.default,
	    myProfile: _myProfile2.default,
	    devCredits: _devCredits2.default
	  },
	  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
	    next(function (vm) {
	      if (!vm.$root.loggedIn) {
	        vm.$router.replace('/');
	      }
	    });
	  }
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(48)
	
	/* template */
	var __vue_template__ = __webpack_require__(49)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\myProfile.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-a6174b44"
	if (__vue_options__.functional) {console.error("[vue-loader] myProfile.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _axios = __webpack_require__(18);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var axiosRequestConfig = {
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 500;
	  }
	};
	
	exports.default = {
	  data: function data() {
	    return {
	      updatePassword: {
	        old: '',
	        password: '',
	        confirm: '',
	        err: '',
	        e: true },
	      uInfo: {
	        quota: null,
	        usage: null,
	        loaded: false
	      }
	    };
	  },
	
	  methods: {
	    generateNewApiKey: function generateNewApiKey() {
	      var vm = this;
	      vm.$root.showConfirm('Are you sure you want a new API key? The old one will no longer work. You will then be logged out.', 'Confirm Action', function (r) {
	        if (r) {
	          _axios2.default.patch('/api/newkey', {}, vm.$root.getAuthRequestParams()).then(function (res) {
	            vm.$root.u.key = '';
	            vm.$root.showPopup('New API key generated. Please log in again.', 'Success');
	            vm.$router.replace('/');
	          });
	        }
	      });
	    },
	    deleteAllFiles: function deleteAllFiles() {
	      var vm = this;
	      vm.$root.showConfirm('Are you absolutely sure? All files that you have uploaded will be permanently removed. You will then be logged out.', 'Confirm Action', function (r) {
	        if (r) {
	          _axios2.default.delete('/api/nuke/files', vm.$root.getAuthRequestParams()).then(function (res) {});
	
	          vm.$root.u.key = '';
	          vm.$router.replace('/');
	        }
	      });
	    },
	    deleteAccount: function deleteAccount() {
	      var vm = this;
	      vm.$root.showConfirm('Are you absolutely sure? Your account and all files that you have uploaded will be permanently removed.', 'Confirm Action', function (r1) {
	        if (r1) {
	          if (window.confirm('Your account will be deleted. Are you certain you would like to proceed?')) {
	            _axios2.default.delete('/api/nuke/user', vm.$root.getAuthRequestParams()).then(function (res) {});
	
	            vm.$root.u.key = '';
	            vm.$router.replace('/');
	          }
	        }
	      });
	    },
	    tryUpdatePassword: function tryUpdatePassword() {
	      var vm = this;
	      if (!vm.updatePassword.e) return;
	
	      if (vm.updatePassword.password.length < 8) {
	        vm.updatePassword.err = 'password must be at least 8 characters. this is also validated on the server';
	        return;
	      }
	      if (vm.updatePassword.password !== vm.updatePassword.confirm) {
	        vm.updatePassword.err = 'password confirmation does not match';
	        return;
	      }
	      vm.updatePassword.e = false;
	
	      vm.updatePassword.err = '';
	
	      _axios2.default.patch('/changepassword', {
	        username: vm.$root.u.name,
	        oldPassword: vm.updatePassword.old,
	        newPassword: vm.updatePassword.password
	      }, axiosRequestConfig).then(function (response) {
	        if (response.status === 200) {
	          vm.$root.showPopup('Password change succeeded! Please log in again.');
	
	          vm.$root.u.key = '';
	          vm.$router.replace('/');
	        } else if (response.status === 401) {
	          vm.updatePassword.err = response.data;
	        }
	        vm.updatePassword.e = true;
	      }).catch(function (error) {
	        if (error) {
	          console.log(error);
	        }
	        vm.updatePassword.e = true;
	      });
	    }
	  },
	  mounted: function mounted() {
	    var vm = this;
	    vm.$root.getAuthRequestParams().params.apikey = vm.$root.u.key;
	
	    _axios2.default.get('/api/userinfo', vm.$root.getAuthRequestParams()).then(function (res) {
	      vm.uInfo = {
	        quota: vm.$root.humanFileSize(res.data.quota),
	        usage: vm.$root.humanFileSize(res.data.usage),
	        loaded: true
	      };
	    });
	  }
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "my-profile left"
	  }, [_c('h4', [_vm._v("Manage Account (" + _vm._s(_vm.$root.u.name) + ")")]), _vm._v(" "), _c('div', {
	    staticClass: "p-section"
	  }, [_c('h5', [_vm._v("Resource Usage")]), _vm._v(" "), (_vm.uInfo.loaded) ? _c('div', [_c('p', [_vm._v("\n        Using\n        "), _c('b', [_vm._v(_vm._s(_vm.uInfo.usage))]), _vm._v(" of "), _c('b', [_vm._v(_vm._s(_vm.uInfo.quota))])])]) : _c('div', [_c('md-spinner', {
	    attrs: {
	      "md-stroke": 1.5,
	      "md-indeterminate": ""
	    }
	  }), _vm._v(" "), _c('p', [_vm._v("Retrieving Data")])], 1), _vm._v(" "), _c('p')]), _vm._v(" "), _c('div', {
	    staticClass: "p-section"
	  }, [_c('h5', [_vm._v("API")]), _vm._v(" "), _c('h6', [_vm._v("API Key: "), _c('code', [_vm._v(_vm._s(_vm.$root.u.key))])]), _vm._v(" "), _c('md-button', {
	    staticClass: "md-primary md-raised",
	    on: {
	      "click": _vm.generateNewApiKey
	    }
	  }, [_vm._v("Generate New")])], 1), _vm._v(" "), _c('div', {
	    staticClass: "p-section"
	  }, [_c('h5', [_vm._v("Security")]), _vm._v(" "), _c('form', {
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	        _vm.tryUpdatePassword($event)
	      }
	    }
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "eight columns"
	  }, [_c('md-input-container', [_c('label', [_vm._v("Current password")]), _vm._v(" "), _c('md-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.updatePassword.old),
	      expression: "updatePassword.old"
	    }],
	    attrs: {
	      "type": "password"
	    },
	    domProps: {
	      "value": (_vm.updatePassword.old)
	    },
	    on: {
	      "input": function($event) {
	        _vm.updatePassword.old = $event
	      }
	    }
	  })], 1)], 1)]), _vm._v(" "), _c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "six columns"
	  }, [_c('md-input-container', {
	    attrs: {
	      "md-has-password": ""
	    }
	  }, [_c('label', [_vm._v("New Password")]), _vm._v(" "), _c('md-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.updatePassword.password),
	      expression: "updatePassword.password"
	    }],
	    attrs: {
	      "type": "password"
	    },
	    domProps: {
	      "value": (_vm.updatePassword.password)
	    },
	    on: {
	      "input": function($event) {
	        _vm.updatePassword.password = $event
	      }
	    }
	  })], 1)], 1), _vm._v(" "), _c('div', {
	    staticClass: "six columns"
	  }, [_c('md-input-container', [_c('label', [_vm._v("Confirm New Password")]), _vm._v(" "), _c('md-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.updatePassword.confirm),
	      expression: "updatePassword.confirm"
	    }],
	    attrs: {
	      "type": "password"
	    },
	    domProps: {
	      "value": (_vm.updatePassword.confirm)
	    },
	    on: {
	      "input": function($event) {
	        _vm.updatePassword.confirm = $event
	      }
	    }
	  })], 1)], 1)]), _vm._v(" "), _c('p', {
	    staticClass: "error-message"
	  }, [_vm._v(_vm._s(_vm.updatePassword.err))]), _vm._v(" "), _c('input', {
	    staticClass: "invisible",
	    attrs: {
	      "type": "submit"
	    }
	  }), _vm._v(" "), _c('md-button', {
	    staticClass: "md-raised md-primary",
	    attrs: {
	      "disabled": !_vm.updatePassword.e
	    },
	    on: {
	      "click": _vm.tryUpdatePassword
	    }
	  }, [_vm._v("Change Password")])], 1)]), _vm._v(" "), _c('div', [_c('h5', [_vm._v("Danger Zone")]), _vm._v(" "), _c('md-button', {
	    staticClass: "md-raised md-warn",
	    on: {
	      "click": _vm.deleteAllFiles
	    }
	  }, [_vm._v("Delete All Files")]), _vm._v(" "), _c('md-button', {
	    staticClass: "md-raised md-warn",
	    on: {
	      "click": _vm.deleteAccount
	    }
	  }, [_vm._v("Delete Account")])], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "shrink-layout"
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('intro', {
	    attrs: {
	      "view-title": "User Profile"
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "twelve columns"
	  }, [_c('myProfile')], 1)]), _vm._v(" "), _c('devCredits')], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(90)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./global.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./global.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(53)();
	// imports
	
	
	// module
	exports.push([module.id, "/* roboto-100 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 100;\r\n    src: local('Roboto Thin'), local('Roboto-Thin'), url(" + __webpack_require__(54) + ") format('woff2'), \r\n    url(" + __webpack_require__(55) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-100italic - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: italic;\r\n    font-weight: 100;\r\n    src: local('Roboto Thin Italic'), local('Roboto-ThinItalic'), url(" + __webpack_require__(56) + ") format('woff2'), \r\n    url(" + __webpack_require__(57) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-300 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 300;\r\n    src: local('Roboto Light'), local('Roboto-Light'), url(" + __webpack_require__(58) + ") format('woff2'), \r\n    url(" + __webpack_require__(59) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-300italic - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: italic;\r\n    font-weight: 300;\r\n    src: local('Roboto Light Italic'), local('Roboto-LightItalic'), url(" + __webpack_require__(60) + ") format('woff2'), \r\n    url(" + __webpack_require__(61) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-regular - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: local('Roboto'), local('Roboto-Regular'), url(" + __webpack_require__(62) + ") format('woff2'), \r\n    url(" + __webpack_require__(63) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-italic - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: italic;\r\n    font-weight: 400;\r\n    src: local('Roboto Italic'), local('Roboto-Italic'), url(" + __webpack_require__(64) + ") format('woff2'), \r\n    url(" + __webpack_require__(65) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-500 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    src: local('Roboto Medium'), local('Roboto-Medium'), url(" + __webpack_require__(66) + ") format('woff2'), \r\n    url(" + __webpack_require__(67) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-500italic - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: italic;\r\n    font-weight: 500;\r\n    src: local('Roboto Medium Italic'), local('Roboto-MediumItalic'), url(" + __webpack_require__(68) + ") format('woff2'), \r\n    url(" + __webpack_require__(69) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-700 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    src: local('Roboto Bold'), local('Roboto-Bold'), url(" + __webpack_require__(70) + ") format('woff2'), \r\n    url(" + __webpack_require__(71) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-700italic - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: italic;\r\n    font-weight: 700;\r\n    src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url(" + __webpack_require__(72) + ") format('woff2'), \r\n    url(" + __webpack_require__(73) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-900italic - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: italic;\r\n    font-weight: 900;\r\n    src: local('Roboto Black Italic'), local('Roboto-BlackItalic'), url(" + __webpack_require__(74) + ") format('woff2'), \r\n    url(" + __webpack_require__(75) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-900 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 900;\r\n    src: local('Roboto Black'), local('Roboto-Black'), url(" + __webpack_require__(76) + ") format('woff2'), \r\n    url(" + __webpack_require__(77) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* raleway-300 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Raleway';\r\n    font-style: normal;\r\n    font-weight: 300;\r\n    src: local('Raleway Light'), local('Raleway-Light'), url(" + __webpack_require__(78) + ") format('woff2'), \r\n    url(" + __webpack_require__(79) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* raleway-regular - latin */\r\n\r\n@font-face {\r\n    font-family: 'Raleway';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: local('Raleway'), local('Raleway-Regular'), url(" + __webpack_require__(80) + ") format('woff2'), \r\n    url(" + __webpack_require__(81) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* raleway-500 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Raleway';\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    src: local('Raleway Medium'), local('Raleway-Medium'), url(" + __webpack_require__(82) + ") format('woff2'), \r\n    url(" + __webpack_require__(83) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* raleway-600 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Raleway';\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    src: local('Raleway SemiBold'), local('Raleway-SemiBold'), url(" + __webpack_require__(84) + ") format('woff2'), \r\n    url(" + __webpack_require__(85) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* raleway-700 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Raleway';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    src: local('Raleway Bold'), local('Raleway-Bold'), url(" + __webpack_require__(86) + ") format('woff2'), \r\n    url(" + __webpack_require__(87) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* raleway-800 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Raleway';\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    src: local('Raleway ExtraBold'), local('Raleway-ExtraBold'), url(" + __webpack_require__(88) + ") format('woff2'), \r\n    url(" + __webpack_require__(89) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\nbody {\r\n    background-color: #fafafa;\r\n}", ""]);
	
	// exports


/***/ },
/* 53 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-100.8ce5988.woff2";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-100.654cb4d.woff";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-100italic.acee0ea.woff2";

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-100italic.42de898.woff";

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-300.16ddb15.woff2";

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-300.ecce92d.woff";

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-300italic.3ddb748.woff2";

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-300italic.4d08dae.woff";

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-regular.7e367be.woff2";

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-regular.16e1d93.woff";

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-italic.984ae37.woff2";

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-italic.1e65e7e.woff";

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-500.bb474f1.woff2";

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-500.57af64f.woff";

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-500italic.9e7beee.woff2";

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-500italic.b670694.woff";

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-700.0d7e71f.woff2";

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-700.525d5b4.woff";

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-700italic.7394ca9.woff2";

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-700italic.ad0e74f.woff";

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-900italic.4faec83.woff2";

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-900italic.3b9590e.woff";

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-900.f4e8dc5.woff2";

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-900.de984c0.woff";

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-300.e746e03.woff2";

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-300.78dd5ab.woff";

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-regular.9106435.woff2";

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-regular.290ee38.woff";

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-500.e5a3212.woff2";

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-500.81e9558.woff";

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-600.cd90392.woff2";

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-600.a4b6f17.woff";

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-700.06f1c86.woff2";

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-700.c864d84.woff";

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-800.041a4b8.woff2";

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-800.2a3a9cf.woff";

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(92);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(90)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./material-icons.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./material-icons.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(53)();
	// imports
	
	
	// module
	exports.push([module.id, "@font-face {\r\n    font-family: 'Material Icons';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url(" + __webpack_require__(93) + ");\r\n    /* For IE6-8 */\r\n    src: local('Material Icons'), local('MaterialIcons-Regular'), url(" + __webpack_require__(94) + ") format('woff2'), url(" + __webpack_require__(95) + ") format('woff'), url(" + __webpack_require__(96) + ") format('truetype');\r\n}\r\n\r\n.material-icons {\r\n    font-family: 'Material Icons';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 24px;\r\n    /* Preferred icon size */\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: nowrap;\r\n    direction: ltr;\r\n    /* Support for all WebKit browsers. */\r\n    -webkit-font-smoothing: antialiased;\r\n    /* Support for Safari and Chrome. */\r\n    text-rendering: optimizeLegibility;\r\n    /* Support for Firefox. */\r\n    -moz-osx-font-smoothing: grayscale;\r\n    /* Support for IE. */\r\n    font-feature-settings: 'liga';\r\n}", ""]);
	
	// exports


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/MaterialIcons-Regular.e79bfd8.eot";

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/MaterialIcons-Regular.570eb83.woff2";

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/MaterialIcons-Regular.012cf6a.woff";

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/MaterialIcons-Regular.a37b0c0.ttf";

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(98);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(90)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./normalize.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./normalize.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(53)();
	// imports
	
	
	// module
	exports.push([module.id, "/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\r\n\r\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\r\n\r\nhtml {\r\n  font-family: sans-serif; /* 1 */\r\n  -ms-text-size-adjust: 100%; /* 2 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove default margin.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/* HTML5 display definitions\r\n   ========================================================================== */\r\n\r\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\r\n\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmain,\r\nmenu,\r\nnav,\r\nsection,\r\nsummary {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * 1. Correct `inline-block` display not defined in IE 8/9.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\r\n\r\naudio,\r\ncanvas,\r\nprogress,\r\nvideo {\r\n  display: inline-block; /* 1 */\r\n  vertical-align: baseline; /* 2 */\r\n}\r\n\r\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\r\n\r\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0;\r\n}\r\n\r\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\r\n */\r\n\r\n[hidden],\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/* Links\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\r\n\r\na:active,\r\na:hover {\r\n  outline: 0;\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: 1px dotted;\r\n}\r\n\r\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bold;\r\n}\r\n\r\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\r\n\r\ndfn {\r\n  font-style: italic;\r\n}\r\n\r\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 8/9.\r\n */\r\n\r\nmark {\r\n  background: #ff0;\r\n  color: #000;\r\n}\r\n\r\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove border when inside `a` element in IE 8/9/10.\r\n */\r\n\r\nimg {\r\n  border: 0;\r\n}\r\n\r\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\r\n\r\nsvg:not(:root) {\r\n  overflow: hidden;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\r\n\r\nfigure {\r\n  margin: 1em 40px;\r\n}\r\n\r\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\r\n\r\nhr {\r\n  -moz-box-sizing: content-box;\r\n  box-sizing: content-box;\r\n  height: 0;\r\n}\r\n\r\n/**\r\n * Contain overflow in all browsers.\r\n */\r\n\r\npre {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\r\n\r\n/**\r\n * 1. Correct color not being inherited.\r\n *    Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  color: inherit; /* 1 */\r\n  font: inherit; /* 2 */\r\n  margin: 0; /* 3 */\r\n}\r\n\r\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\r\n\r\nbutton {\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\r\n\r\nbutton,\r\nselect {\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\r\n\r\nbutton,\r\nhtml input[type=\"button\"], /* 1 */\r\ninput[type=\"reset\"],\r\ninput[type=\"submit\"] {\r\n  -webkit-appearance: button; /* 2 */\r\n  cursor: pointer; /* 3 */\r\n}\r\n\r\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n  cursor: default;\r\n}\r\n\r\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n  border: 0;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\r\n\r\ninput {\r\n  line-height: normal;\r\n}\r\n\r\n/**\r\n * It's recommended that you don't attempt to style these elements.\r\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\r\n *\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\r\n\r\ninput[type=\"number\"]::-webkit-inner-spin-button,\r\ninput[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\r\n\r\ninput[type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  -moz-box-sizing: content-box;\r\n  -webkit-box-sizing: content-box; /* 2 */\r\n  box-sizing: content-box;\r\n}\r\n\r\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button,\r\ninput[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * Define consistent border, margin, and padding.\r\n */\r\n\r\nfieldset {\r\n  border: 1px solid #c0c0c0;\r\n  margin: 0 2px;\r\n  padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n */\r\n\r\nlegend {\r\n  border: 0; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * Don't inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\r\n\r\noptgroup {\r\n  font-weight: bold;\r\n}\r\n\r\n/* Tables\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove most spacing between table cells.\r\n */\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\ntd,\r\nth {\r\n  padding: 0;\r\n}", ""]);
	
	// exports


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(100);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(90)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./ffskeleton.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./ffskeleton.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(53)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n* Skeleton V2.0.4\r\n* Copyright 2014, Dave Gamache\r\n* www.getskeleton.com\r\n* Free to use under the MIT license.\r\n* http://www.opensource.org/licenses/mit-license.php\r\n* 12/29/2014\r\n*/\r\n\r\n\r\n/* Table of contents\r\n––––––––––––––––––––––––––––––––––––––––––––––––––\r\n- Grid\r\n- Base Styles\r\n- Typography\r\n- Links\r\n- Buttons\r\n- Forms\r\n- Lists\r\n- Code\r\n- Tables\r\n- Spacing\r\n- Utilities\r\n- Clearing\r\n- Media Queries\r\n*/\r\n\r\n\r\n/* Grid\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.container {\r\n  position: relative;\r\n  width: 100%;\r\n  max-width: 960px;\r\n  margin: 0 auto;\r\n  padding: 0 20px;\r\n  box-sizing: border-box; }\r\n.column,\r\n.columns {\r\n  width: 100%;\r\n  float: left;\r\n  box-sizing: border-box; }\r\n\r\n/* For devices larger than 400px */\r\n@media (min-width: 400px) {\r\n  .container {\r\n    width: 85%;\r\n    padding: 0; }\r\n}\r\n\r\n/* For devices larger than 550px */\r\n@media (min-width: 550px) {\r\n  .container {\r\n    width: 80%; }\r\n  .column,\r\n  .columns {\r\n    margin-left: 4%; }\r\n  .column:first-child,\r\n  .columns:first-child {\r\n    margin-left: 0; }\r\n\r\n  .one.column,\r\n  .one.columns                    { width: 4.66666666667%; }\r\n  .two.columns                    { width: 13.3333333333%; }\r\n  .three.columns                  { width: 22%;            }\r\n  .four.columns                   { width: 30.6666666667%; }\r\n  .five.columns                   { width: 39.3333333333%; }\r\n  .six.columns                    { width: 48%;            }\r\n  .seven.columns                  { width: 56.6666666667%; }\r\n  .eight.columns                  { width: 65.3333333333%; }\r\n  .nine.columns                   { width: 74.0%;          }\r\n  .ten.columns                    { width: 82.6666666667%; }\r\n  .eleven.columns                 { width: 91.3333333333%; }\r\n  .twelve.columns                 { width: 100%; margin-left: 0; }\r\n\r\n  .one-third.column               { width: 30.6666666667%; }\r\n  .two-thirds.column              { width: 65.3333333333%; }\r\n\r\n  .one-half.column                { width: 48%; }\r\n\r\n  /* Offsets */\r\n  .offset-by-one.column,\r\n  .offset-by-one.columns          { margin-left: 8.66666666667%; }\r\n  .offset-by-two.column,\r\n  .offset-by-two.columns          { margin-left: 17.3333333333%; }\r\n  .offset-by-three.column,\r\n  .offset-by-three.columns        { margin-left: 26%;            }\r\n  .offset-by-four.column,\r\n  .offset-by-four.columns         { margin-left: 34.6666666667%; }\r\n  .offset-by-five.column,\r\n  .offset-by-five.columns         { margin-left: 43.3333333333%; }\r\n  .offset-by-six.column,\r\n  .offset-by-six.columns          { margin-left: 52%;            }\r\n  .offset-by-seven.column,\r\n  .offset-by-seven.columns        { margin-left: 60.6666666667%; }\r\n  .offset-by-eight.column,\r\n  .offset-by-eight.columns        { margin-left: 69.3333333333%; }\r\n  .offset-by-nine.column,\r\n  .offset-by-nine.columns         { margin-left: 78.0%;          }\r\n  .offset-by-ten.column,\r\n  .offset-by-ten.columns          { margin-left: 86.6666666667%; }\r\n  .offset-by-eleven.column,\r\n  .offset-by-eleven.columns       { margin-left: 95.3333333333%; }\r\n\r\n  .offset-by-one-third.column,\r\n  .offset-by-one-third.columns    { margin-left: 34.6666666667%; }\r\n  .offset-by-two-thirds.column,\r\n  .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }\r\n\r\n  .offset-by-one-half.column,\r\n  .offset-by-one-half.columns     { margin-left: 52%; }\r\n\r\n}\r\n\r\n\r\n/* Base Styles\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n/* NOTE\r\nhtml is set to 62.5% so that all the REM measurements throughout Skeleton\r\nare based on 10px sizing. So basically 1.5rem = 15px :) */\r\nhtml {\r\n  font-size: 62.5%; }\r\nbody {\r\n  font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */\r\n  line-height: 1.6;\r\n  font-weight: 400;\r\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  color: #222; }\r\n\r\n\r\n/* Typography\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nh1, h2, h3, h4, h5, h6 {\r\n  margin-top: 0;\r\n  margin-bottom: 2rem;\r\n  font-weight: 300; }\r\nh1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}\r\nh2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }\r\nh3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }\r\nh4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }\r\nh5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }\r\nh6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }\r\n\r\n/* Larger than phablet */\r\n@media (min-width: 550px) {\r\n  h1 { font-size: 5.0rem; }\r\n  h2 { font-size: 4.2rem; }\r\n  h3 { font-size: 3.6rem; }\r\n  h4 { font-size: 3.0rem; }\r\n  h5 { font-size: 2.4rem; }\r\n  h6 { font-size: 1.5rem; }\r\n}\r\n\r\np {\r\n  margin-top: 0; }\r\n\r\n\r\n/* Links\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\na {\r\n  color: #1EAEDB; }\r\na:hover {\r\n  color: #0FA0CE; }\r\n\r\n\r\n/* Lists\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nul {\r\n  list-style: circle inside; }\r\nol {\r\n  list-style: decimal inside; }\r\nol, ul {\r\n  padding-left: 0;\r\n  margin-top: 0; }\r\nul ul,\r\nul ol,\r\nol ol,\r\nol ul {\r\n  margin: 1.5rem 0 1.5rem 3rem;\r\n  font-size: 90%; }\r\nli {\r\n  margin-bottom: 1rem; }\r\n\r\n\r\n/* Code\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\ncode {\r\n  padding: .2rem .5rem;\r\n  margin: 0 .2rem;\r\n  font-size: 90%;\r\n  white-space: nowrap;\r\n  background: #F1F1F1;\r\n  border: 1px solid #E1E1E1;\r\n  border-radius: 4px; }\r\npre > code {\r\n  display: block;\r\n  padding: 1rem 1.5rem;\r\n  white-space: pre; }\r\n\r\n\r\n/* Tables\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nth,\r\ntd {\r\n  padding: 12px 15px;\r\n  text-align: left;\r\n  border-bottom: 1px solid #E1E1E1; }\r\nth:first-child,\r\ntd:first-child {\r\n  padding-left: 0; }\r\nth:last-child,\r\ntd:last-child {\r\n  padding-right: 0; }\r\n\r\n\r\n/* Spacing\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n/*button,\r\n.button {\r\n  margin-bottom: 1rem; }\r\ninput,\r\ntextarea,\r\nselect,\r\nfieldset {\r\n  margin-bottom: 1.5rem; }\r\npre,\r\nblockquote,\r\ndl,\r\nfigure,\r\ntable,\r\np,\r\nul,\r\nol,\r\nform {\r\n  margin-bottom: 2.5rem; }*/\r\n\r\n\r\n/* Utilities\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.u-full-width {\r\n  width: 100%;\r\n  box-sizing: border-box; }\r\n.u-max-full-width {\r\n  max-width: 100%;\r\n  box-sizing: border-box; }\r\n.u-pull-right {\r\n  float: right; }\r\n.u-pull-left {\r\n  float: left; }\r\n\r\n\r\n/* Misc\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nhr {\r\n  margin-top: 3rem;\r\n  margin-bottom: 3.5rem;\r\n  border-width: 0;\r\n  border-top: 1px solid #E1E1E1; }\r\n\r\n\r\n/* Clearing\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n\r\n/* Self Clearing Goodness */\r\n.container:after,\r\n.row:after,\r\n.u-cf {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both; }\r\n\r\n\r\n/* Media Queries\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n/*\r\nNote: The best way to structure the use of media queries is to create the queries\r\nnear the relevant code. For example, if you wanted to change the styles for buttons\r\non small devices, paste the mobile query code up in the buttons section and style it\r\nthere.\r\n*/\r\n\r\n\r\n/* Larger than mobile */\r\n@media (min-width: 400px) {}\r\n\r\n/* Larger than phablet (also point when grid becomes active) */\r\n@media (min-width: 550px) {}\r\n\r\n/* Larger than tablet */\r\n@media (min-width: 750px) {}\r\n\r\n/* Larger than desktop */\r\n@media (min-width: 1000px) {}\r\n\r\n/* Larger than Desktop HD */\r\n@media (min-width: 1200px) {}\r\n", ""]);
	
	// exports


/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = require("vue-material");

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(103);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(90)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./vue-material.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./vue-material.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(53)();
	// imports
	
	
	// module
	exports.push([module.id, "/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-avatar {\n  width: 40px;\n  min-width: 40px;\n  height: 40px;\n  min-height: 40px;\n  margin: auto;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: relative;\n  border-radius: 40px;\n  vertical-align: middle;\n}\n.md-avatar.md-large {\n    width: 64px;\n    min-width: 64px;\n    height: 64px;\n    min-height: 64px;\n    border-radius: 64px;\n}\n.md-avatar.md-large .md-icon {\n      width: 40px;\n      min-width: 40px;\n      height: 40px;\n      min-height: 40px;\n      font-size: 40px;\n      line-height: 40px;\n}\n.md-avatar.md-avatar-icon {\n    background-color: rgba(0, 0, 0, 0.38);\n}\n.md-avatar.md-avatar-icon .md-icon {\n      color: #fff;\n}\n.md-avatar .md-icon {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n.md-avatar img {\n    width: 100%;\n    height: 100%;\n    display: block;\n}\n.md-avatar .md-ink-ripple {\n    border-radius: 50%;\n}\n.md-avatar .md-ink-ripple .md-ripple.md-active {\n      animation-duration: .9s;\n}\n.md-avatar-tooltip.md-tooltip-top {\n  margin-top: -8px;\n}\n.md-avatar-tooltip.md-tooltip-right {\n  margin-left: 8px;\n}\n.md-avatar-tooltip.md-tooltip-bottom {\n  margin-top: 8px;\n}\n.md-avatar-tooltip.md-tooltip-left {\n  margin-left: -8px;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-backdrop {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 99;\n  pointer-events: none;\n  background-color: rgba(0, 0, 0, 0.54);\n  transform: translate3d(0, 0, 0);\n  opacity: 0;\n  transition: all 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n}\n.md-backdrop.md-active {\n    opacity: 1;\n    pointer-events: auto;\n}\n.md-backdrop.md-transparent {\n    background: rgba(0, 0, 0, 0.005);\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-bottom-bar {\n  width: 100%;\n  min-width: 100%;\n  height: 56px;\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-bottom-bar-item {\n  max-width: 168px;\n  min-width: 80px;\n  height: 100%;\n  padding: 8px 12px 10px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column nowrap;\n      flex-flow: column nowrap;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex: 1;\n      flex: 1;\n  position: relative;\n  cursor: pointer;\n  border: none;\n  background: transparent;\n  transform: translate3d(0, 0, 0);\n  color: currentColor;\n  font-family: inherit;\n  font-size: 14px;\n  line-height: 1em;\n  text-decoration: none;\n}\n.md-bottom-bar-item.md-active {\n    padding-top: 6px;\n}\n.md-bottom-bar-item.md-active .md-text {\n      transform: scale(1) translate3d(0, 0, 0);\n}\n.md-bottom-bar-item.md-active .md-text,\n    .md-bottom-bar-item.md-active .md-icon {\n      color: currentColor;\n}\n.md-bottom-bar-item[disabled] {\n    opacity: .38;\n}\n.md-bottom-bar.md-shift .md-bottom-bar-item {\n    min-width: 56px;\n    max-width: 96px;\n    position: static;\n    -ms-flex: 1 1 32px;\n        flex: 1 1 32px;\n    transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-property: flex, min-width, max-width;\n    transition-property: flex, min-width, max-width, -ms-flex;\n}\n.md-bottom-bar.md-shift .md-bottom-bar-item .md-icon {\n      transform: translate3d(0, 8px, 0);\n}\n.md-bottom-bar.md-shift .md-bottom-bar-item .md-text {\n      opacity: 0;\n      transform: scale(1) translate3d(0, 6px, 0);\n}\n.md-bottom-bar.md-shift .md-bottom-bar-item.md-active {\n      min-width: 96px;\n      max-width: 168px;\n      -ms-flex: 1 1 72px;\n          flex: 1 1 72px;\n}\n.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-icon,\n      .md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-text {\n        opacity: 1;\n}\n.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-icon {\n        transform: scale(1) translate3d(0, 0, 0);\n}\n.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-text {\n        transform: scale(1) translate3d(0, 2px, 0);\n}\n.md-bottom-bar-item .md-text {\n    transform: scale(0.8571) translateY(2px);\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), color 0.15s linear, opacity 0.15s linear;\n}\n.md-bottom-bar-item .md-icon {\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), color 0.15s linear;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-button {\n  min-width: 88px;\n  min-height: 36px;\n  margin: 6px 8px;\n  padding: 0 16px;\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  outline: none;\n  background: none;\n  border: 0;\n  border-radius: 2px;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  color: currentColor;\n  font-family: inherit;\n  font-size: 14px;\n  font-style: inherit;\n  font-variant: inherit;\n  font-weight: 500;\n  letter-spacing: inherit;\n  line-height: 36px;\n  text-align: center;\n  text-transform: uppercase;\n  text-decoration: none;\n  vertical-align: top;\n  white-space: nowrap;\n}\n.md-button:focus {\n    outline: none;\n}\n.md-button::-moz-focus-inner {\n    border: 0;\n}\n.md-button:hover:not([disabled]):not(.md-raised) {\n    background-color: rgba(153, 153, 153, 0.2);\n    text-decoration: none;\n}\n.md-button:hover:not([disabled]).md-raised {\n    background-color: rgba(0, 0, 0, 0.12);\n}\n.md-button:active:not([disabled]) {\n    background-color: rgba(153, 153, 153, 0.4);\n}\n.md-button.md-raised:not([disabled]) {\n    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);\n}\n.md-button.md-dense {\n    min-height: 32px;\n    line-height: 32px;\n    font-size: 13px;\n}\n.md-button.md-icon-button .md-icon, .md-button.md-fab .md-icon {\n    margin-top: 1px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n.md-button.md-icon-button {\n    width: 40px;\n    min-width: 40px;\n    height: 40px;\n    margin: 0 6px;\n    padding: 8px;\n    border-radius: 50%;\n    line-height: 24px;\n}\n.md-button.md-icon-button:not([disabled]):hover {\n      background: none;\n}\n.md-button.md-icon-button.md-dense {\n      width: 32px;\n      min-width: 32px;\n      height: 32px;\n      min-height: 32px;\n      padding: 4px;\n      line-height: 32px;\n}\n.md-button.md-icon-button .md-ink-ripple {\n      border-radius: 50%;\n}\n.md-button.md-icon-button .md-ink-ripple .md-ripple {\n        top: 0 !important;\n        right: 0 !important;\n        bottom: 0 !important;\n        left: 0 !important;\n}\n.md-button.md-icon-button .md-ripple.md-active {\n      animation-duration: .9s;\n}\n.md-button.md-fab {\n    width: 56px;\n    height: 56px;\n    min-width: 0;\n    overflow: hidden;\n    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);\n    border-radius: 56px;\n    line-height: 56px;\n    background-clip: padding-box;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-property: background-color, box-shadow, transform;\n}\n.md-button.md-fab:hover, .md-button.md-fab:focus {\n      box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px rgba(0, 0, 0, 0.14), 0 1px 14px rgba(0, 0, 0, 0.12);\n}\n.md-button.md-fab.md-fab-top-left {\n      position: absolute;\n      top: 16px;\n      left: 16px;\n      z-index: 10;\n}\n.md-button.md-fab.md-fab-top-center {\n      position: absolute;\n      top: 16px;\n      left: 50%;\n      z-index: 10;\n      transform: translateX(-50%);\n}\n.md-button.md-fab.md-fab-top-right {\n      position: absolute;\n      top: 16px;\n      right: 16px;\n      z-index: 10;\n}\n.md-button.md-fab.md-fab-bottom-left {\n      position: absolute;\n      bottom: 16px;\n      left: 16px;\n      z-index: 10;\n}\n.md-button.md-fab.md-fab-bottom-center {\n      position: absolute;\n      bottom: 16px;\n      left: 50%;\n      transform: translateX(-50%);\n      z-index: 10;\n}\n.md-button.md-fab.md-fab-bottom-right {\n      position: absolute;\n      right: 16px;\n      bottom: 16px;\n      z-index: 10;\n}\n.md-button.md-fab.md-mini {\n      width: 40px;\n      height: 40px;\n      line-height: 40px;\n}\n.md-button.md-fab .md-ink-ripple {\n      border-radius: 56px;\n}\n.md-button[disabled] {\n    color: rgba(0, 0, 0, 0.26);\n    cursor: default;\n}\n.md-button[disabled].md-raised, .md-button[disabled].md-fab {\n      background-color: rgba(0, 0, 0, 0.12);\n}\n.md-button[disabled].md-fab {\n      box-shadow: none;\n}\n.md-button:after {\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-button .md-ink-ripple {\n    border-radius: 2px;\n    background-clip: padding-box;\n    overflow: hidden;\n}\n.md-button.md-icon-button .md-icon,\n.md-button.md-fab .md-icon {\n  display: block;\n}\n.md-button-tooltip.md-tooltip-top {\n  margin-top: -8px;\n}\n.md-button-tooltip.md-tooltip-right {\n  margin-left: 8px;\n}\n.md-button-tooltip.md-tooltip-bottom {\n  margin-top: 8px;\n}\n.md-button-tooltip.md-tooltip-left {\n  margin-left: -8px;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-button-toggle {\n  width: auto;\n  display: -ms-flexbox;\n  display: flex;\n}\n.md-button-toggle > .md-button {\n    margin: 0;\n    overflow: hidden;\n    border-width: 1px 0 1px 1px;\n    border-radius: 0;\n    text-align: center;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.md-button-toggle > .md-button:first-child {\n      border-radius: 2px 0 0 2px;\n}\n.md-button-toggle > .md-button:last-child {\n      border-right-width: 1px;\n      border-radius: 0 2px 2px 0;\n}\n.md-button-toggle > .md-button:not([disabled]) {\n      color: rgba(0, 0, 0, 0.54);\n}\n.md-button-toggle > .md-button:not([disabled]):hover:not(.md-toggle):not(.md-raised) {\n        background-color: rgba(153, 153, 153, 0.2);\n        text-decoration: none;\n}\n.md-button-toggle > .md-button .md-ink-ripple {\n      border-radius: 2px;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n/* Image aspect ratio calculator */\n/* Responsive breakpoints */\n.md-card {\n  overflow: auto;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  position: relative;\n  z-index: 1;\n  border-radius: 2px;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);\n}\n.md-card.md-with-hover {\n    cursor: pointer;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-property: box-shadow;\n}\n.md-card.md-with-hover:hover {\n      z-index: 2;\n      box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.md-card .md-card-media {\n    position: relative;\n}\n.md-card .md-card-media.md-16-9 {\n      overflow: hidden;\n}\n.md-card .md-card-media.md-16-9:before {\n        width: 100%;\n        padding-top: 56.25%;\n        display: block;\n        content: \" \";\n}\n.md-card .md-card-media.md-16-9 img {\n        position: absolute;\n        top: 50%;\n        right: 0;\n        left: 0;\n        transform: translateY(-50%);\n}\n.md-card .md-card-media.md-4-3 {\n      overflow: hidden;\n}\n.md-card .md-card-media.md-4-3:before {\n        width: 100%;\n        padding-top: 75%;\n        display: block;\n        content: \" \";\n}\n.md-card .md-card-media.md-4-3 img {\n        position: absolute;\n        top: 50%;\n        right: 0;\n        left: 0;\n        transform: translateY(-50%);\n}\n.md-card .md-card-media.md-1-1 {\n      overflow: hidden;\n}\n.md-card .md-card-media.md-1-1:before {\n        width: 100%;\n        padding-top: 100%;\n        display: block;\n        content: \" \";\n}\n.md-card .md-card-media.md-1-1 img {\n        position: absolute;\n        top: 50%;\n        right: 0;\n        left: 0;\n        transform: translateY(-50%);\n}\n.md-card .md-card-media + .md-card-header {\n      padding-top: 24px;\n}\n.md-card .md-card-media + .md-card-content:last-child {\n      padding-bottom: 16px;\n}\n.md-card .md-card-media img {\n      width: 100%;\n}\n.md-card .md-card-header {\n    padding: 16px;\n}\n.md-card .md-card-header:first-child > .md-title:first-child,\n    .md-card .md-card-header:first-child > .md-card-header-text > .md-title:first-child {\n      margin-top: 8px;\n}\n.md-card .md-card-header:last-child {\n      margin-bottom: 8px;\n}\n.md-card .md-card-header.md-card-header-flex {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.md-card .md-card-header + .md-card-content {\n      padding-top: 0;\n}\n.md-card .md-card-header + .md-card-actions:not(:last-child) {\n      padding: 0 8px;\n}\n.md-card .md-card-header .md-avatar {\n      margin-right: 16px;\n      float: left;\n}\n.md-card .md-card-header .md-avatar ~ .md-title {\n        font-size: 14px;\n}\n.md-card .md-card-header .md-avatar ~ .md-title,\n      .md-card .md-card-header .md-avatar ~ .md-subhead {\n        font-weight: 500;\n        line-height: 20px;\n}\n.md-card .md-card-header .md-button {\n      margin: 0;\n}\n.md-card .md-card-header .md-button:last-child {\n        margin-right: -4px;\n}\n.md-card .md-card-header .md-button + .md-button {\n        margin-left: 8px;\n}\n.md-card .md-card-header .md-card-header-text {\n      -ms-flex: 1;\n          flex: 1;\n}\n.md-card .md-card-header .md-card-media {\n      width: 80px;\n      -ms-flex: 0 0 80px;\n          flex: 0 0 80px;\n      height: 80px;\n      margin-left: 16px;\n}\n.md-card .md-card-header .md-card-media.md-medium {\n        width: 120px;\n        -ms-flex: 0 0 120px;\n            flex: 0 0 120px;\n        height: 120px;\n}\n.md-card .md-card-header .md-card-media.md-big {\n        width: 160px;\n        -ms-flex: 0 0 160px;\n            flex: 0 0 160px;\n        height: 160px;\n}\n.md-card .md-subhead,\n  .md-card .md-title,\n  .md-card .md-subheading {\n    margin: 0;\n    font-weight: 400;\n}\n.md-card .md-subhead {\n    opacity: .54;\n    font-size: 14px;\n    letter-spacing: .01em;\n    line-height: 20px;\n}\n.md-card .md-subhead + .md-title {\n      margin-top: 4px;\n}\n.md-card .md-title {\n    font-size: 24px;\n    letter-spacing: 0;\n    line-height: 32px;\n}\n.md-card .md-card-media-actions {\n    padding: 16px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n}\n.md-card .md-card-media-actions .md-card-media {\n      max-width: 240px;\n      max-height: 240px;\n      -ms-flex: 1;\n          flex: 1;\n}\n.md-card .md-card-media-actions .md-card-actions {\n      margin-left: 16px;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.md-card .md-card-media-actions .md-card-actions .md-button + .md-button {\n        margin: 8px 0 0;\n}\n.md-card .md-card-content {\n    padding: 16px;\n    font-size: 14px;\n    line-height: 22px;\n}\n.md-card .md-card-content:last-child {\n      padding-bottom: 24px;\n}\n.md-card .md-card-actions {\n    padding: 8px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n    -ms-flex-align: center;\n        align-items: center;\n}\n.md-card .md-card-actions .md-button {\n      margin: 0;\n}\n.md-card .md-card-actions .md-button:first-child {\n        margin-left: 0;\n}\n.md-card .md-card-actions .md-button:last-child {\n        margin-right: 0;\n}\n.md-card .md-card-actions .md-button + .md-button {\n        margin-left: 4px;\n}\n.md-card .md-card-area {\n    position: relative;\n}\n.md-card > .md-card-area:not(:last-child) {\n    position: relative;\n}\n.md-card > .md-card-area:not(:last-child):after {\n      height: 1px;\n      position: absolute;\n      bottom: 0;\n      content: \" \";\n}\n.md-card > .md-card-area:not(:last-child):not(.md-inset):after {\n      right: 0;\n      left: 0;\n}\n.md-card > .md-card-area:not(:last-child).md-inset:after {\n      right: 16px;\n      left: 16px;\n}\n.md-card .md-card-media-cover {\n    position: relative;\n    color: #fff;\n}\n.md-card .md-card-media-cover.md-text-scrim .md-card-backdrop {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 1;\n}\n.md-card .md-card-media-cover .md-card-area {\n      position: absolute;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 2;\n}\n.md-card .md-card-media-cover .md-card-header + .md-card-actions {\n      padding-top: 0;\n}\n.md-card .md-card-media-cover .md-subhead {\n      opacity: 1;\n}\n.md-card .md-card-expand {\n    overflow: hidden;\n}\n.md-card .md-card-expand.md-active [md-expand-trigger] {\n      transform: rotateZ(180deg) translate3D(0, 0, 0);\n}\n.md-card .md-card-expand.md-active .md-card-content {\n      margin-top: 0 !important;\n      opacity: 1;\n}\n.md-card .md-card-expand .md-card-actions {\n      padding-top: 0;\n      position: relative;\n      z-index: 2;\n}\n.md-card .md-card-expand [md-expand-trigger] {\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      will-change: transform;\n}\n.md-card .md-card-expand .md-card-content {\n      padding-top: 4px;\n      position: relative;\n      z-index: 1;\n      opacity: 0;\n      transform: translate3D(0, 0, 0);\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      will-change: margin;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-checkbox {\n  width: auto;\n  margin: 16px 8px 16px 0;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  position: relative;\n}\n.md-checkbox .md-checkbox-container {\n    width: 20px;\n    height: 20px;\n    position: relative;\n    border-radius: 2px;\n    border: 2px solid rgba(0, 0, 0, 0.54);\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-checkbox .md-checkbox-container:focus {\n      outline: none;\n}\n.md-checkbox .md-checkbox-container:before {\n      width: 48px;\n      height: 48px;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      border-radius: 50%;\n      transform: translate(-50%, -50%);\n      transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n      content: \" \";\n}\n.md-checkbox .md-checkbox-container:after {\n      width: 6px;\n      height: 13px;\n      position: absolute;\n      top: 0;\n      left: 5px;\n      border: 2px solid #fff;\n      border-top: 0;\n      border-left: 0;\n      opacity: 0;\n      transform: rotate(45deg) scale3D(0.15, 0.15, 1);\n      transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n      content: \" \";\n}\n.md-checkbox .md-checkbox-container input {\n      position: absolute;\n      left: -999em;\n}\n.md-checkbox .md-checkbox-container .md-ink-ripple {\n      top: -16px;\n      right: -16px;\n      bottom: -16px;\n      left: -16px;\n      border-radius: 50%;\n      color: rgba(0, 0, 0, 0.54);\n}\n.md-checkbox .md-checkbox-container .md-ink-ripple .md-ripple {\n        width: 48px !important;\n        height: 48px !important;\n        top: 0 !important;\n        right: 0 !important;\n        bottom: 0 !important;\n        left: 0 !important;\n}\n.md-checkbox .md-checkbox-label {\n    height: 20px;\n    padding-left: 8px;\n    line-height: 20px;\n}\n.md-checkbox.md-checked .md-checkbox-container:after {\n  opacity: 1;\n  transform: rotate(45deg) scale3D(1, 1, 1);\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-chip {\n  height: 32px;\n  padding: 8px 12px;\n  display: inline-block;\n  border-radius: 32px;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  font-size: 13px;\n  line-height: 16px;\n  white-space: nowrap;\n}\n.md-chip.md-deletable {\n    position: relative;\n    padding-right: 32px;\n}\n.md-chip:focus, .md-chip:active {\n    outline: none;\n}\n.md-chip:focus:not(.md-disabled), .md-chip:active:not(.md-disabled) {\n      cursor: pointer;\n      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);\n}\n.md-chip.md-disabled .md-button {\n    pointer-events: none;\n    cursor: default;\n}\n.md-chip .md-button.md-delete {\n    width: 24px;\n    min-width: 24px;\n    height: 24px;\n    min-height: 24px;\n    margin: 0;\n    padding: 0;\n    position: absolute;\n    top: 4px;\n    right: 4px;\n    border-radius: 24px;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-chip .md-button.md-delete .md-icon {\n      width: 20px;\n      min-width: 20px;\n      height: 20px;\n      min-height: 20px;\n      margin: 0;\n      font-size: 20px;\n}\n.md-chip .md-button.md-delete .md-ink-ripple {\n      border-radius: 32px;\n}\n.md-chip .md-button.md-delete .md-ripple {\n      opacity: .54;\n}\n.md-chips .md-chip {\n  margin-right: 8px;\n  margin-bottom: 4px;\n}\n.md-chips .md-input-container {\n  min-height: 54px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.md-chips .md-input {\n  width: 128px;\n  -ms-flex: 1;\n      flex: 1;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-ink-ripple {\n  pointer-events: none;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-mask-image: radial-gradient(circle, white 100%, black 100%);\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n.md-ripple {\n  position: absolute;\n  background-color: currentColor;\n  border-radius: 50%;\n  opacity: .2;\n  transform: scale(0) translateZ(0);\n  transition: none;\n  will-change: background-color, opacity, transform, width, height, top, left;\n}\n.md-ripple.md-active {\n    animation: ripple 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;\n}\n.md-ripple.md-active.md-fadeout {\n      opacity: 0 !important;\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition-duration: .6s;\n}\n@keyframes ripple {\nto {\n    transform: scale(2.2) translateZ(0);\n}\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-dialog-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column;\n      flex-flow: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 108;\n}\n.md-dialog-container.md-active {\n    pointer-events: auto;\n}\n.md-dialog-container.md-active .md-dialog {\n      opacity: 1 !important;\n      transform: scale(1) !important;\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition-property: opacity, transform;\n}\n.md-dialog-backdrop {\n  position: fixed;\n  z-index: 109;\n}\n.md-dialog {\n  min-width: 280px;\n  max-width: 80%;\n  max-height: 80%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column;\n      flex-flow: column;\n  overflow: hidden;\n  position: relative;\n  z-index: 110;\n  outline: none;\n  border-radius: 2px;\n  opacity: 0;\n  box-shadow: 0 7px 9px -4px rgba(0, 0, 0, 0.2), 0 14px 21px 2px rgba(0, 0, 0, 0.14), 0 5px 26px 4px rgba(0, 0, 0, 0.12);\n  transform: scale(0.9, 0.85);\n  transform-origin: center center;\n  transition: opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.4s 0.05s cubic-bezier(0.25, 0.8, 0.25, 1);\n  will-change: opacity, transform;\n}\n.md-dialog.md-reference {\n    transform-origin: top center;\n}\n.md-dialog.md-transition-off {\n    transition: none !important;\n}\n.md-dialog p {\n    margin: 0;\n}\n.md-dialog-title {\n  margin-bottom: 20px;\n  padding: 24px 24px 0;\n}\n.md-dialog-content {\n  padding: 0 24px 24px;\n  -ms-flex: 1;\n      flex: 1;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n  overflow: auto;\n  position: relative;\n  background: linear-gradient(to bottom, #fff 0, #fff 1px, transparent 1px), linear-gradient(to top, #fff 0, #fff 3px, transparent 3px), linear-gradient(to bottom, rgba(0, 0, 0, 0.12) 0, rgba(0, 0, 0, 0.12) 1px, transparent 1px), linear-gradient(to top, rgba(0, 0, 0, 0.2) 1px, rgba(0, 0, 0, 0.2) 2px, transparent 2px);\n  background-attachment: local, local, scroll, scroll;\n}\n.md-dialog-content:first-child {\n    padding-top: 24px;\n}\n.md-dialog-content p:first-child:not(:only-child) {\n    margin-top: 0;\n}\n.md-dialog-content p:last-child:not(:only-child) {\n    margin-bottom: 0;\n}\n.md-dialog-body {\n  margin: 0 -24px;\n  padding: 0 24px;\n  overflow: auto;\n}\n.md-dialog-actions {\n  min-height: 52px;\n  padding: 8px 8px 8px 24px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n  position: relative;\n}\n.md-dialog-actions:before {\n    height: 1px;\n    position: absolute;\n    top: -1px;\n    right: 0;\n    left: 0;\n    background-color: #fff;\n    content: \" \";\n}\n.md-dialog-actions .md-button {\n    min-width: 64px;\n    margin: 0;\n    padding: 0 8px;\n}\n.md-dialog-actions .md-button + .md-button {\n      margin-left: 8px;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-divider {\n  height: 1px;\n  margin: 0;\n  padding: 0;\n  display: block;\n  border: 0;\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.md-divider.md-inset {\n    margin-left: 72px;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-file {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1;\n}\n.md-file input[type=\"file\"] {\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    padding: 0;\n    overflow: hidden;\n    position: absolute;\n    clip: rect(0 0 0 0);\n    border: 0;\n}\n.md-file .md-icon {\n    cursor: pointer;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-icon {\n  width: 24px;\n  min-width: 24px;\n  height: 24px;\n  min-height: 24px;\n  font-size: 24px;\n  margin: auto;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n      align-items: center;\n  fill: currentColor;\n  text-rendering: optimizeLegibility;\n  vertical-align: middle;\n}\n.md-icon.md-size-2x {\n    width: 48px;\n    min-width: 48px;\n    height: 48px;\n    min-height: 48px;\n    font-size: 48px;\n}\n.md-icon.md-size-3x {\n    width: 72px;\n    min-width: 72px;\n    height: 72px;\n    min-height: 72px;\n    font-size: 72px;\n}\n.md-icon.md-size-4x {\n    width: 96px;\n    min-width: 96px;\n    height: 96px;\n    min-height: 96px;\n    font-size: 96px;\n}\n.md-icon.md-size-5x {\n    width: 120px;\n    min-width: 120px;\n    height: 120px;\n    min-height: 120px;\n    font-size: 120px;\n}\n.md-icon svg {\n    width: 100%;\n    height: 100%;\n}\nimg.md-icon {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-image {\n  opacity: 0;\n  filter: saturate(20%);\n}\n.md-image.md-black-output {\n    filter: brightness(0.4) saturate(20%);\n}\n.md-image.md-loaded {\n    opacity: 1;\n    filter: saturate(100%);\n    transition: opacity 1.1s cubic-bezier(0.25, 0.8, 0.25, 1), filter 2.2s 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-input-container {\n  width: 100%;\n  min-height: 48px;\n  margin: 4px 0 24px;\n  padding-top: 16px;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n}\n.md-input-container:after {\n    height: 1px;\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.12);\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    content: \" \";\n}\n.md-input-container label {\n    position: absolute;\n    top: 23px;\n    left: 0;\n    pointer-events: none;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-duration: .3s;\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 16px;\n    line-height: 20px;\n}\n.md-input-container input,\n  .md-input-container textarea {\n    width: 100%;\n    height: 32px;\n    padding: 0;\n    display: block;\n    -ms-flex: 1;\n        flex: 1;\n    border: none;\n    background: none;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-property: font-size;\n    color: rgba(0, 0, 0, 0.54);\n    font-family: inherit;\n    font-size: 1px;\n    line-height: 32px;\n}\n.md-input-container input:focus,\n    .md-input-container textarea:focus {\n      outline: none;\n}\n.md-input-container input::-webkit-input-placeholder,\n    .md-input-container textarea::-webkit-input-placeholder {\n      color: rgba(0, 0, 0, 0.54);\n      font-size: 16px;\n      text-shadow: none;\n      -webkit-text-fill-color: initial;\n}\n.md-input-container input ~ .md-icon:not(.md-icon-delete),\n    .md-input-container textarea ~ .md-icon:not(.md-icon-delete) {\n      margin-left: 12px;\n}\n.md-input-container input ~ .md-icon:not(.md-icon-delete):after,\n      .md-input-container textarea ~ .md-icon:not(.md-icon-delete):after {\n        right: 0;\n        left: auto;\n}\n.md-input-container textarea {\n    min-height: 32px;\n    max-height: 230px;\n    padding: 5px 0;\n    resize: none;\n    line-height: 1.3em;\n}\n.md-input-container .md-error,\n  .md-input-container .md-count {\n    height: 20px;\n    position: absolute;\n    top: 50px;\n    font-size: 12px;\n}\n.md-input-container .md-error {\n    display: block !important;\n    opacity: 0;\n    transform: translate3d(0, -8px, 0);\n    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n.md-input-container .md-count {\n    right: 0;\n}\n.md-input-container .md-icon:not(.md-icon-delete) {\n    margin: 4px auto;\n    color: rgba(0, 0, 0, 0.54);\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-input-container .md-icon:not(.md-icon-delete):after {\n      width: 36px;\n      height: 2px;\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      z-index: 2;\n      content: \"\";\n}\n.md-input-container .md-icon:not(.md-icon-delete) ~ label {\n      left: 36px;\n}\n.md-input-container .md-icon:not(.md-icon-delete) ~ .md-input,\n    .md-input-container .md-icon:not(.md-icon-delete) ~ .md-textarea,\n    .md-input-container .md-icon:not(.md-icon-delete) ~ .md-file {\n      margin-left: 12px;\n}\n.md-input-container.md-input-placeholder label {\n  pointer-events: auto;\n  top: 10px;\n  opacity: 0;\n  font-size: 12px;\n}\n.md-input-container.md-input-placeholder input,\n.md-input-container.md-input-placeholder textarea {\n  font-size: 16px;\n}\n.md-input-container.md-input-focused label, .md-input-container.md-has-value label {\n  pointer-events: auto;\n  top: 0;\n  opacity: 1;\n  font-size: 12px;\n}\n.md-input-container.md-input-focused input,\n.md-input-container.md-input-focused textarea, .md-input-container.md-has-value input,\n.md-input-container.md-has-value textarea {\n  font-size: 16px;\n}\n.md-input-container.md-has-value input,\n.md-input-container.md-has-value textarea {\n  color: rgba(0, 0, 0, 0.87);\n}\n.md-input-container.md-input-inline label {\n  pointer-events: none;\n}\n.md-input-container.md-input-inline.md-input-focused label {\n  top: 23px;\n  font-size: 16px;\n}\n.md-input-container.md-input-inline.md-has-value label {\n  opacity: 0;\n}\n.md-input-container.md-input-disabled:after {\n  background: bottom left repeat-x;\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.38) 0%, rgba(0, 0, 0, 0.38) 33%, transparent 0%);\n  background-size: 4px 1px;\n}\n.md-input-container.md-input-disabled label,\n.md-input-container.md-input-disabled input,\n.md-input-container.md-input-disabled textarea {\n  color: rgba(0, 0, 0, 0.38);\n}\n.md-input-container.md-has-password.md-input-focused .md-toggle-password {\n  color: rgba(0, 0, 0, 0.54);\n}\n.md-input-container.md-has-password .md-toggle-password {\n  margin: 0;\n  position: absolute;\n  right: 0;\n  bottom: -2px;\n  color: rgba(0, 0, 0, 0.38);\n}\n.md-input-container.md-has-password .md-toggle-password .md-ink-ripple {\n    color: rgba(0, 0, 0, 0.87);\n}\n.md-input-container.md-input-invalid .md-error {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n.md-input-container.md-input-required label:after {\n  position: absolute;\n  top: 2px;\n  right: 0;\n  transform: translateX(calc(100% + 2px));\n  content: \"*\";\n  font-size: 12px;\n  line-height: 1em;\n  vertical-align: top;\n}\n.md-input-container.md-has-select:hover .md-select:not(.md-disabled):after {\n  color: rgba(0, 0, 0, 0.87);\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n/* Image aspect ratio calculator */\n/* Responsive breakpoints */\n/* Rows and Columns */\n.md-layout {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex: 1;\n      flex: 1;\n}\n.md-row {\n  -ms-flex-direction: row;\n      flex-direction: row;\n}\n.md-column {\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n/* Container */\n.md-layout.md-container {\n  width: 100%;\n  max-width: 1200px;\n}\n.md-layout.md-container.md-centered {\n    margin: 0 auto;\n}\n\n/* Alignments */\n.md-align-start {\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n}\n.md-align-center {\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n.md-align-end {\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n}\n\n/* Gutter Size */\n.md-gutter:not(.md-column) {\n  margin-right: -12px;\n  margin-left: -12px;\n}\n.md-gutter:not(.md-column) > .md-layout {\n    padding-right: 12px;\n    padding-left: 12px;\n}\n.md-gutter .md-column {\n  margin-top: -12px;\n  margin-bottom: -12px;\n}\n.md-gutter .md-column > .md-layout {\n    padding-top: 12px;\n    padding-bottom: 12px;\n}\n@media (max-width: 944px) {\n.md-gutter:not(.md-column) {\n    margin-right: -8px;\n    margin-left: -8px;\n}\n.md-gutter:not(.md-column) > .md-layout {\n      padding-right: 8px;\n      padding-left: 8px;\n}\n.md-gutter .md-column {\n    margin-top: -8px;\n    margin-bottom: -8px;\n}\n.md-gutter .md-column > .md-layout {\n      padding-top: 8px;\n      padding-bottom: 8px;\n}\n}\n.md-gutter-8:not(.md-column) {\n  margin-right: -4px;\n  margin-left: -4px;\n}\n.md-gutter-8:not(.md-column) > .md-layout {\n    padding-right: 4px;\n    padding-left: 4px;\n}\n.md-gutter-8 .md-column {\n  margin-top: -4px;\n  margin-bottom: -4px;\n}\n.md-gutter-8 .md-column > .md-layout {\n    padding-top: 4px;\n    padding-bottom: 4px;\n}\n.md-gutter-16:not(.md-column) {\n  margin-right: -8px;\n  margin-left: -8px;\n}\n.md-gutter-16:not(.md-column) > .md-layout {\n    padding-right: 8px;\n    padding-left: 8px;\n}\n.md-gutter-16 .md-column {\n  margin-top: -8px;\n  margin-bottom: -8px;\n}\n.md-gutter-16 .md-column > .md-layout {\n    padding-top: 8px;\n    padding-bottom: 8px;\n}\n.md-gutter-24:not(.md-column) {\n  margin-right: -12px;\n  margin-left: -12px;\n}\n.md-gutter-24:not(.md-column) > .md-layout {\n    padding-right: 12px;\n    padding-left: 12px;\n}\n.md-gutter-24 .md-column {\n  margin-top: -12px;\n  margin-bottom: -12px;\n}\n.md-gutter-24 .md-column > .md-layout {\n    padding-top: 12px;\n    padding-bottom: 12px;\n}\n.md-gutter-40:not(.md-column) {\n  margin-right: -20px;\n  margin-left: -20px;\n}\n.md-gutter-40:not(.md-column) > .md-layout {\n    padding-right: 20px;\n    padding-left: 20px;\n}\n.md-gutter-40 .md-column {\n  margin-top: -20px;\n  margin-bottom: -20px;\n}\n.md-gutter-40 .md-column > .md-layout {\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n\n/* Flex Size */\n.md-flex {\n  -ms-flex: 1 1;\n      flex: 1 1;\n}\n.md-flex-33 {\n  min-width: 33.33333%;\n  -ms-flex: 0 1 33.33333%;\n      flex: 0 1 33.33333%;\n}\n.md-flex-66 {\n  min-width: 33.33333%;\n  -ms-flex: 0 1 66.66666%;\n      flex: 0 1 66.66666%;\n}\n.md-flex-offset-33 {\n  margin-left: 33.33333%;\n}\n.md-flex-offset-66 {\n  margin-left: 66.66666%;\n}\n.md-flex-5 {\n  min-width: 5%;\n  -ms-flex: 0 1 5%;\n      flex: 0 1 5%;\n}\n.md-flex-offset-5 {\n  margin-left: 5%;\n}\n.md-flex-10 {\n  min-width: 10%;\n  -ms-flex: 0 1 10%;\n      flex: 0 1 10%;\n}\n.md-flex-offset-10 {\n  margin-left: 10%;\n}\n.md-flex-15 {\n  min-width: 15%;\n  -ms-flex: 0 1 15%;\n      flex: 0 1 15%;\n}\n.md-flex-offset-15 {\n  margin-left: 15%;\n}\n.md-flex-20 {\n  min-width: 20%;\n  -ms-flex: 0 1 20%;\n      flex: 0 1 20%;\n}\n.md-flex-offset-20 {\n  margin-left: 20%;\n}\n.md-flex-25 {\n  min-width: 25%;\n  -ms-flex: 0 1 25%;\n      flex: 0 1 25%;\n}\n.md-flex-offset-25 {\n  margin-left: 25%;\n}\n.md-flex-30 {\n  min-width: 30%;\n  -ms-flex: 0 1 30%;\n      flex: 0 1 30%;\n}\n.md-flex-offset-30 {\n  margin-left: 30%;\n}\n.md-flex-35 {\n  min-width: 35%;\n  -ms-flex: 0 1 35%;\n      flex: 0 1 35%;\n}\n.md-flex-offset-35 {\n  margin-left: 35%;\n}\n.md-flex-40 {\n  min-width: 40%;\n  -ms-flex: 0 1 40%;\n      flex: 0 1 40%;\n}\n.md-flex-offset-40 {\n  margin-left: 40%;\n}\n.md-flex-45 {\n  min-width: 45%;\n  -ms-flex: 0 1 45%;\n      flex: 0 1 45%;\n}\n.md-flex-offset-45 {\n  margin-left: 45%;\n}\n.md-flex-50 {\n  min-width: 50%;\n  -ms-flex: 0 1 50%;\n      flex: 0 1 50%;\n}\n.md-flex-offset-50 {\n  margin-left: 50%;\n}\n.md-flex-55 {\n  min-width: 55%;\n  -ms-flex: 0 1 55%;\n      flex: 0 1 55%;\n}\n.md-flex-offset-55 {\n  margin-left: 55%;\n}\n.md-flex-60 {\n  min-width: 60%;\n  -ms-flex: 0 1 60%;\n      flex: 0 1 60%;\n}\n.md-flex-offset-60 {\n  margin-left: 60%;\n}\n.md-flex-65 {\n  min-width: 65%;\n  -ms-flex: 0 1 65%;\n      flex: 0 1 65%;\n}\n.md-flex-offset-65 {\n  margin-left: 65%;\n}\n.md-flex-70 {\n  min-width: 70%;\n  -ms-flex: 0 1 70%;\n      flex: 0 1 70%;\n}\n.md-flex-offset-70 {\n  margin-left: 70%;\n}\n.md-flex-75 {\n  min-width: 75%;\n  -ms-flex: 0 1 75%;\n      flex: 0 1 75%;\n}\n.md-flex-offset-75 {\n  margin-left: 75%;\n}\n.md-flex-80 {\n  min-width: 80%;\n  -ms-flex: 0 1 80%;\n      flex: 0 1 80%;\n}\n.md-flex-offset-80 {\n  margin-left: 80%;\n}\n.md-flex-85 {\n  min-width: 85%;\n  -ms-flex: 0 1 85%;\n      flex: 0 1 85%;\n}\n.md-flex-offset-85 {\n  margin-left: 85%;\n}\n.md-flex-90 {\n  min-width: 90%;\n  -ms-flex: 0 1 90%;\n      flex: 0 1 90%;\n}\n.md-flex-offset-90 {\n  margin-left: 90%;\n}\n.md-flex-95 {\n  min-width: 95%;\n  -ms-flex: 0 1 95%;\n      flex: 0 1 95%;\n}\n.md-flex-offset-95 {\n  margin-left: 95%;\n}\n.md-flex-100 {\n  min-width: 100%;\n  -ms-flex: 0 1 100%;\n      flex: 0 1 100%;\n}\n.md-flex-offset-100 {\n  margin-left: 100%;\n}\n\n/* Responsive Breakpoints */\n@media (min-width: 1904px) {\n.md-row-xlarge {\n    -ms-flex-direction: row;\n        flex-direction: row;\n}\n.md-column-xlarge {\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\n.md-flex-xlarge {\n    -ms-flex: 1 1;\n        flex: 1 1;\n}\n.md-flex-xlarge-33 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 33.33333%;\n        flex: 0 1 33.33333%;\n}\n.md-flex-xlarge-66 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 66.66666%;\n        flex: 0 1 66.66666%;\n}\n.md-flex-offset-xlarge-33 {\n    margin-left: 33.33333%;\n}\n.md-flex-offset-xlarge-66 {\n    margin-left: 66.66666%;\n}\n.md-flex-xlarge-5 {\n    min-width: 5%;\n    -ms-flex: 0 1 5%;\n        flex: 0 1 5%;\n}\n.md-flex-offset-xlarge-5 {\n    margin-left: 5%;\n}\n.md-flex-xlarge-10 {\n    min-width: 10%;\n    -ms-flex: 0 1 10%;\n        flex: 0 1 10%;\n}\n.md-flex-offset-xlarge-10 {\n    margin-left: 10%;\n}\n.md-flex-xlarge-15 {\n    min-width: 15%;\n    -ms-flex: 0 1 15%;\n        flex: 0 1 15%;\n}\n.md-flex-offset-xlarge-15 {\n    margin-left: 15%;\n}\n.md-flex-xlarge-20 {\n    min-width: 20%;\n    -ms-flex: 0 1 20%;\n        flex: 0 1 20%;\n}\n.md-flex-offset-xlarge-20 {\n    margin-left: 20%;\n}\n.md-flex-xlarge-25 {\n    min-width: 25%;\n    -ms-flex: 0 1 25%;\n        flex: 0 1 25%;\n}\n.md-flex-offset-xlarge-25 {\n    margin-left: 25%;\n}\n.md-flex-xlarge-30 {\n    min-width: 30%;\n    -ms-flex: 0 1 30%;\n        flex: 0 1 30%;\n}\n.md-flex-offset-xlarge-30 {\n    margin-left: 30%;\n}\n.md-flex-xlarge-35 {\n    min-width: 35%;\n    -ms-flex: 0 1 35%;\n        flex: 0 1 35%;\n}\n.md-flex-offset-xlarge-35 {\n    margin-left: 35%;\n}\n.md-flex-xlarge-40 {\n    min-width: 40%;\n    -ms-flex: 0 1 40%;\n        flex: 0 1 40%;\n}\n.md-flex-offset-xlarge-40 {\n    margin-left: 40%;\n}\n.md-flex-xlarge-45 {\n    min-width: 45%;\n    -ms-flex: 0 1 45%;\n        flex: 0 1 45%;\n}\n.md-flex-offset-xlarge-45 {\n    margin-left: 45%;\n}\n.md-flex-xlarge-50 {\n    min-width: 50%;\n    -ms-flex: 0 1 50%;\n        flex: 0 1 50%;\n}\n.md-flex-offset-xlarge-50 {\n    margin-left: 50%;\n}\n.md-flex-xlarge-55 {\n    min-width: 55%;\n    -ms-flex: 0 1 55%;\n        flex: 0 1 55%;\n}\n.md-flex-offset-xlarge-55 {\n    margin-left: 55%;\n}\n.md-flex-xlarge-60 {\n    min-width: 60%;\n    -ms-flex: 0 1 60%;\n        flex: 0 1 60%;\n}\n.md-flex-offset-xlarge-60 {\n    margin-left: 60%;\n}\n.md-flex-xlarge-65 {\n    min-width: 65%;\n    -ms-flex: 0 1 65%;\n        flex: 0 1 65%;\n}\n.md-flex-offset-xlarge-65 {\n    margin-left: 65%;\n}\n.md-flex-xlarge-70 {\n    min-width: 70%;\n    -ms-flex: 0 1 70%;\n        flex: 0 1 70%;\n}\n.md-flex-offset-xlarge-70 {\n    margin-left: 70%;\n}\n.md-flex-xlarge-75 {\n    min-width: 75%;\n    -ms-flex: 0 1 75%;\n        flex: 0 1 75%;\n}\n.md-flex-offset-xlarge-75 {\n    margin-left: 75%;\n}\n.md-flex-xlarge-80 {\n    min-width: 80%;\n    -ms-flex: 0 1 80%;\n        flex: 0 1 80%;\n}\n.md-flex-offset-xlarge-80 {\n    margin-left: 80%;\n}\n.md-flex-xlarge-85 {\n    min-width: 85%;\n    -ms-flex: 0 1 85%;\n        flex: 0 1 85%;\n}\n.md-flex-offset-xlarge-85 {\n    margin-left: 85%;\n}\n.md-flex-xlarge-90 {\n    min-width: 90%;\n    -ms-flex: 0 1 90%;\n        flex: 0 1 90%;\n}\n.md-flex-offset-xlarge-90 {\n    margin-left: 90%;\n}\n.md-flex-xlarge-95 {\n    min-width: 95%;\n    -ms-flex: 0 1 95%;\n        flex: 0 1 95%;\n}\n.md-flex-offset-xlarge-95 {\n    margin-left: 95%;\n}\n.md-flex-xlarge-100 {\n    min-width: 100%;\n    -ms-flex: 0 1 100%;\n        flex: 0 1 100%;\n}\n.md-flex-offset-xlarge-100 {\n    margin-left: 100%;\n}\n.md-align-xlarge-start {\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n}\n.md-align-xlarge-center {\n    -ms-flex-pack: center;\n        justify-content: center;\n}\n.md-align-xlarge-end {\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n}\n.md-hide-xlarge {\n    display: none;\n}\n}\n@media (max-width: 1903px) {\n.md-row-large {\n    -ms-flex-direction: row;\n        flex-direction: row;\n}\n.md-column-large {\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\n.md-flex-large {\n    -ms-flex: 1 1;\n        flex: 1 1;\n}\n.md-flex-large-33 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 33.33333%;\n        flex: 0 1 33.33333%;\n}\n.md-flex-large-66 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 66.66666%;\n        flex: 0 1 66.66666%;\n}\n.md-flex-offset-large-33 {\n    margin-left: 33.33333%;\n}\n.md-flex-offset-large-66 {\n    margin-left: 66.66666%;\n}\n.md-flex-large-5 {\n    min-width: 5%;\n    -ms-flex: 0 1 5%;\n        flex: 0 1 5%;\n}\n.md-flex-offset-large-5 {\n    margin-left: 5%;\n}\n.md-flex-large-10 {\n    min-width: 10%;\n    -ms-flex: 0 1 10%;\n        flex: 0 1 10%;\n}\n.md-flex-offset-large-10 {\n    margin-left: 10%;\n}\n.md-flex-large-15 {\n    min-width: 15%;\n    -ms-flex: 0 1 15%;\n        flex: 0 1 15%;\n}\n.md-flex-offset-large-15 {\n    margin-left: 15%;\n}\n.md-flex-large-20 {\n    min-width: 20%;\n    -ms-flex: 0 1 20%;\n        flex: 0 1 20%;\n}\n.md-flex-offset-large-20 {\n    margin-left: 20%;\n}\n.md-flex-large-25 {\n    min-width: 25%;\n    -ms-flex: 0 1 25%;\n        flex: 0 1 25%;\n}\n.md-flex-offset-large-25 {\n    margin-left: 25%;\n}\n.md-flex-large-30 {\n    min-width: 30%;\n    -ms-flex: 0 1 30%;\n        flex: 0 1 30%;\n}\n.md-flex-offset-large-30 {\n    margin-left: 30%;\n}\n.md-flex-large-35 {\n    min-width: 35%;\n    -ms-flex: 0 1 35%;\n        flex: 0 1 35%;\n}\n.md-flex-offset-large-35 {\n    margin-left: 35%;\n}\n.md-flex-large-40 {\n    min-width: 40%;\n    -ms-flex: 0 1 40%;\n        flex: 0 1 40%;\n}\n.md-flex-offset-large-40 {\n    margin-left: 40%;\n}\n.md-flex-large-45 {\n    min-width: 45%;\n    -ms-flex: 0 1 45%;\n        flex: 0 1 45%;\n}\n.md-flex-offset-large-45 {\n    margin-left: 45%;\n}\n.md-flex-large-50 {\n    min-width: 50%;\n    -ms-flex: 0 1 50%;\n        flex: 0 1 50%;\n}\n.md-flex-offset-large-50 {\n    margin-left: 50%;\n}\n.md-flex-large-55 {\n    min-width: 55%;\n    -ms-flex: 0 1 55%;\n        flex: 0 1 55%;\n}\n.md-flex-offset-large-55 {\n    margin-left: 55%;\n}\n.md-flex-large-60 {\n    min-width: 60%;\n    -ms-flex: 0 1 60%;\n        flex: 0 1 60%;\n}\n.md-flex-offset-large-60 {\n    margin-left: 60%;\n}\n.md-flex-large-65 {\n    min-width: 65%;\n    -ms-flex: 0 1 65%;\n        flex: 0 1 65%;\n}\n.md-flex-offset-large-65 {\n    margin-left: 65%;\n}\n.md-flex-large-70 {\n    min-width: 70%;\n    -ms-flex: 0 1 70%;\n        flex: 0 1 70%;\n}\n.md-flex-offset-large-70 {\n    margin-left: 70%;\n}\n.md-flex-large-75 {\n    min-width: 75%;\n    -ms-flex: 0 1 75%;\n        flex: 0 1 75%;\n}\n.md-flex-offset-large-75 {\n    margin-left: 75%;\n}\n.md-flex-large-80 {\n    min-width: 80%;\n    -ms-flex: 0 1 80%;\n        flex: 0 1 80%;\n}\n.md-flex-offset-large-80 {\n    margin-left: 80%;\n}\n.md-flex-large-85 {\n    min-width: 85%;\n    -ms-flex: 0 1 85%;\n        flex: 0 1 85%;\n}\n.md-flex-offset-large-85 {\n    margin-left: 85%;\n}\n.md-flex-large-90 {\n    min-width: 90%;\n    -ms-flex: 0 1 90%;\n        flex: 0 1 90%;\n}\n.md-flex-offset-large-90 {\n    margin-left: 90%;\n}\n.md-flex-large-95 {\n    min-width: 95%;\n    -ms-flex: 0 1 95%;\n        flex: 0 1 95%;\n}\n.md-flex-offset-large-95 {\n    margin-left: 95%;\n}\n.md-flex-large-100 {\n    min-width: 100%;\n    -ms-flex: 0 1 100%;\n        flex: 0 1 100%;\n}\n.md-flex-offset-large-100 {\n    margin-left: 100%;\n}\n.md-align-large-start {\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n}\n.md-align-large-center {\n    -ms-flex-pack: center;\n        justify-content: center;\n}\n.md-align-large-end {\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n}\n.md-hide-large {\n    display: none;\n}\n}\n@media (max-width: 1264px) {\n.md-row-medium {\n    -ms-flex-direction: row;\n        flex-direction: row;\n}\n.md-column-medium {\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\n.md-flex-medium {\n    -ms-flex: 1 1;\n        flex: 1 1;\n}\n.md-flex-medium-33 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 33.33333%;\n        flex: 0 1 33.33333%;\n}\n.md-flex-medium-66 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 66.66666%;\n        flex: 0 1 66.66666%;\n}\n.md-flex-offset-medium-33 {\n    margin-left: 33.33333%;\n}\n.md-flex-offset-medium-66 {\n    margin-left: 66.66666%;\n}\n.md-flex-medium-5 {\n    min-width: 5%;\n    -ms-flex: 0 1 5%;\n        flex: 0 1 5%;\n}\n.md-flex-offset-medium-5 {\n    margin-left: 5%;\n}\n.md-flex-medium-10 {\n    min-width: 10%;\n    -ms-flex: 0 1 10%;\n        flex: 0 1 10%;\n}\n.md-flex-offset-medium-10 {\n    margin-left: 10%;\n}\n.md-flex-medium-15 {\n    min-width: 15%;\n    -ms-flex: 0 1 15%;\n        flex: 0 1 15%;\n}\n.md-flex-offset-medium-15 {\n    margin-left: 15%;\n}\n.md-flex-medium-20 {\n    min-width: 20%;\n    -ms-flex: 0 1 20%;\n        flex: 0 1 20%;\n}\n.md-flex-offset-medium-20 {\n    margin-left: 20%;\n}\n.md-flex-medium-25 {\n    min-width: 25%;\n    -ms-flex: 0 1 25%;\n        flex: 0 1 25%;\n}\n.md-flex-offset-medium-25 {\n    margin-left: 25%;\n}\n.md-flex-medium-30 {\n    min-width: 30%;\n    -ms-flex: 0 1 30%;\n        flex: 0 1 30%;\n}\n.md-flex-offset-medium-30 {\n    margin-left: 30%;\n}\n.md-flex-medium-35 {\n    min-width: 35%;\n    -ms-flex: 0 1 35%;\n        flex: 0 1 35%;\n}\n.md-flex-offset-medium-35 {\n    margin-left: 35%;\n}\n.md-flex-medium-40 {\n    min-width: 40%;\n    -ms-flex: 0 1 40%;\n        flex: 0 1 40%;\n}\n.md-flex-offset-medium-40 {\n    margin-left: 40%;\n}\n.md-flex-medium-45 {\n    min-width: 45%;\n    -ms-flex: 0 1 45%;\n        flex: 0 1 45%;\n}\n.md-flex-offset-medium-45 {\n    margin-left: 45%;\n}\n.md-flex-medium-50 {\n    min-width: 50%;\n    -ms-flex: 0 1 50%;\n        flex: 0 1 50%;\n}\n.md-flex-offset-medium-50 {\n    margin-left: 50%;\n}\n.md-flex-medium-55 {\n    min-width: 55%;\n    -ms-flex: 0 1 55%;\n        flex: 0 1 55%;\n}\n.md-flex-offset-medium-55 {\n    margin-left: 55%;\n}\n.md-flex-medium-60 {\n    min-width: 60%;\n    -ms-flex: 0 1 60%;\n        flex: 0 1 60%;\n}\n.md-flex-offset-medium-60 {\n    margin-left: 60%;\n}\n.md-flex-medium-65 {\n    min-width: 65%;\n    -ms-flex: 0 1 65%;\n        flex: 0 1 65%;\n}\n.md-flex-offset-medium-65 {\n    margin-left: 65%;\n}\n.md-flex-medium-70 {\n    min-width: 70%;\n    -ms-flex: 0 1 70%;\n        flex: 0 1 70%;\n}\n.md-flex-offset-medium-70 {\n    margin-left: 70%;\n}\n.md-flex-medium-75 {\n    min-width: 75%;\n    -ms-flex: 0 1 75%;\n        flex: 0 1 75%;\n}\n.md-flex-offset-medium-75 {\n    margin-left: 75%;\n}\n.md-flex-medium-80 {\n    min-width: 80%;\n    -ms-flex: 0 1 80%;\n        flex: 0 1 80%;\n}\n.md-flex-offset-medium-80 {\n    margin-left: 80%;\n}\n.md-flex-medium-85 {\n    min-width: 85%;\n    -ms-flex: 0 1 85%;\n        flex: 0 1 85%;\n}\n.md-flex-offset-medium-85 {\n    margin-left: 85%;\n}\n.md-flex-medium-90 {\n    min-width: 90%;\n    -ms-flex: 0 1 90%;\n        flex: 0 1 90%;\n}\n.md-flex-offset-medium-90 {\n    margin-left: 90%;\n}\n.md-flex-medium-95 {\n    min-width: 95%;\n    -ms-flex: 0 1 95%;\n        flex: 0 1 95%;\n}\n.md-flex-offset-medium-95 {\n    margin-left: 95%;\n}\n.md-flex-medium-100 {\n    min-width: 100%;\n    -ms-flex: 0 1 100%;\n        flex: 0 1 100%;\n}\n.md-flex-offset-medium-100 {\n    margin-left: 100%;\n}\n.md-align-medium-start {\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n}\n.md-align-medium-center {\n    -ms-flex-pack: center;\n        justify-content: center;\n}\n.md-align-medium-end {\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n}\n.md-hide-medium {\n    display: none;\n}\n}\n@media (max-width: 944px) {\n.md-row-small {\n    -ms-flex-direction: row;\n        flex-direction: row;\n}\n.md-column-small {\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\n.md-flex-small {\n    -ms-flex: 1 1;\n        flex: 1 1;\n}\n.md-flex-small-33 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 33.33333%;\n        flex: 0 1 33.33333%;\n}\n.md-flex-small-66 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 66.66666%;\n        flex: 0 1 66.66666%;\n}\n.md-flex-offset-small-33 {\n    margin-left: 33.33333%;\n}\n.md-flex-offset-small-66 {\n    margin-left: 66.66666%;\n}\n.md-flex-small-5 {\n    min-width: 5%;\n    -ms-flex: 0 1 5%;\n        flex: 0 1 5%;\n}\n.md-flex-offset-small-5 {\n    margin-left: 5%;\n}\n.md-flex-small-10 {\n    min-width: 10%;\n    -ms-flex: 0 1 10%;\n        flex: 0 1 10%;\n}\n.md-flex-offset-small-10 {\n    margin-left: 10%;\n}\n.md-flex-small-15 {\n    min-width: 15%;\n    -ms-flex: 0 1 15%;\n        flex: 0 1 15%;\n}\n.md-flex-offset-small-15 {\n    margin-left: 15%;\n}\n.md-flex-small-20 {\n    min-width: 20%;\n    -ms-flex: 0 1 20%;\n        flex: 0 1 20%;\n}\n.md-flex-offset-small-20 {\n    margin-left: 20%;\n}\n.md-flex-small-25 {\n    min-width: 25%;\n    -ms-flex: 0 1 25%;\n        flex: 0 1 25%;\n}\n.md-flex-offset-small-25 {\n    margin-left: 25%;\n}\n.md-flex-small-30 {\n    min-width: 30%;\n    -ms-flex: 0 1 30%;\n        flex: 0 1 30%;\n}\n.md-flex-offset-small-30 {\n    margin-left: 30%;\n}\n.md-flex-small-35 {\n    min-width: 35%;\n    -ms-flex: 0 1 35%;\n        flex: 0 1 35%;\n}\n.md-flex-offset-small-35 {\n    margin-left: 35%;\n}\n.md-flex-small-40 {\n    min-width: 40%;\n    -ms-flex: 0 1 40%;\n        flex: 0 1 40%;\n}\n.md-flex-offset-small-40 {\n    margin-left: 40%;\n}\n.md-flex-small-45 {\n    min-width: 45%;\n    -ms-flex: 0 1 45%;\n        flex: 0 1 45%;\n}\n.md-flex-offset-small-45 {\n    margin-left: 45%;\n}\n.md-flex-small-50 {\n    min-width: 50%;\n    -ms-flex: 0 1 50%;\n        flex: 0 1 50%;\n}\n.md-flex-offset-small-50 {\n    margin-left: 50%;\n}\n.md-flex-small-55 {\n    min-width: 55%;\n    -ms-flex: 0 1 55%;\n        flex: 0 1 55%;\n}\n.md-flex-offset-small-55 {\n    margin-left: 55%;\n}\n.md-flex-small-60 {\n    min-width: 60%;\n    -ms-flex: 0 1 60%;\n        flex: 0 1 60%;\n}\n.md-flex-offset-small-60 {\n    margin-left: 60%;\n}\n.md-flex-small-65 {\n    min-width: 65%;\n    -ms-flex: 0 1 65%;\n        flex: 0 1 65%;\n}\n.md-flex-offset-small-65 {\n    margin-left: 65%;\n}\n.md-flex-small-70 {\n    min-width: 70%;\n    -ms-flex: 0 1 70%;\n        flex: 0 1 70%;\n}\n.md-flex-offset-small-70 {\n    margin-left: 70%;\n}\n.md-flex-small-75 {\n    min-width: 75%;\n    -ms-flex: 0 1 75%;\n        flex: 0 1 75%;\n}\n.md-flex-offset-small-75 {\n    margin-left: 75%;\n}\n.md-flex-small-80 {\n    min-width: 80%;\n    -ms-flex: 0 1 80%;\n        flex: 0 1 80%;\n}\n.md-flex-offset-small-80 {\n    margin-left: 80%;\n}\n.md-flex-small-85 {\n    min-width: 85%;\n    -ms-flex: 0 1 85%;\n        flex: 0 1 85%;\n}\n.md-flex-offset-small-85 {\n    margin-left: 85%;\n}\n.md-flex-small-90 {\n    min-width: 90%;\n    -ms-flex: 0 1 90%;\n        flex: 0 1 90%;\n}\n.md-flex-offset-small-90 {\n    margin-left: 90%;\n}\n.md-flex-small-95 {\n    min-width: 95%;\n    -ms-flex: 0 1 95%;\n        flex: 0 1 95%;\n}\n.md-flex-offset-small-95 {\n    margin-left: 95%;\n}\n.md-flex-small-100 {\n    min-width: 100%;\n    -ms-flex: 0 1 100%;\n        flex: 0 1 100%;\n}\n.md-flex-offset-small-100 {\n    margin-left: 100%;\n}\n.md-align-small-start {\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n}\n.md-align-small-center {\n    -ms-flex-pack: center;\n        justify-content: center;\n}\n.md-align-small-end {\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n}\n.md-hide-small {\n    display: none;\n}\n}\n@media (max-width: 600px) {\n.md-row-xsmall {\n    -ms-flex-direction: row;\n        flex-direction: row;\n}\n.md-column-xsmall {\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\n.md-flex-xsmall {\n    -ms-flex: 1 1;\n        flex: 1 1;\n}\n.md-flex-xsmall-33 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 33.33333%;\n        flex: 0 1 33.33333%;\n}\n.md-flex-xsmall-66 {\n    min-width: 33.33333%;\n    -ms-flex: 0 1 66.66666%;\n        flex: 0 1 66.66666%;\n}\n.md-flex-offset-xsmall-33 {\n    margin-left: 33.33333%;\n}\n.md-flex-offset-xsmall-66 {\n    margin-left: 66.66666%;\n}\n.md-flex-xsmall-5 {\n    min-width: 5%;\n    -ms-flex: 0 1 5%;\n        flex: 0 1 5%;\n}\n.md-flex-offset-xsmall-5 {\n    margin-left: 5%;\n}\n.md-flex-xsmall-10 {\n    min-width: 10%;\n    -ms-flex: 0 1 10%;\n        flex: 0 1 10%;\n}\n.md-flex-offset-xsmall-10 {\n    margin-left: 10%;\n}\n.md-flex-xsmall-15 {\n    min-width: 15%;\n    -ms-flex: 0 1 15%;\n        flex: 0 1 15%;\n}\n.md-flex-offset-xsmall-15 {\n    margin-left: 15%;\n}\n.md-flex-xsmall-20 {\n    min-width: 20%;\n    -ms-flex: 0 1 20%;\n        flex: 0 1 20%;\n}\n.md-flex-offset-xsmall-20 {\n    margin-left: 20%;\n}\n.md-flex-xsmall-25 {\n    min-width: 25%;\n    -ms-flex: 0 1 25%;\n        flex: 0 1 25%;\n}\n.md-flex-offset-xsmall-25 {\n    margin-left: 25%;\n}\n.md-flex-xsmall-30 {\n    min-width: 30%;\n    -ms-flex: 0 1 30%;\n        flex: 0 1 30%;\n}\n.md-flex-offset-xsmall-30 {\n    margin-left: 30%;\n}\n.md-flex-xsmall-35 {\n    min-width: 35%;\n    -ms-flex: 0 1 35%;\n        flex: 0 1 35%;\n}\n.md-flex-offset-xsmall-35 {\n    margin-left: 35%;\n}\n.md-flex-xsmall-40 {\n    min-width: 40%;\n    -ms-flex: 0 1 40%;\n        flex: 0 1 40%;\n}\n.md-flex-offset-xsmall-40 {\n    margin-left: 40%;\n}\n.md-flex-xsmall-45 {\n    min-width: 45%;\n    -ms-flex: 0 1 45%;\n        flex: 0 1 45%;\n}\n.md-flex-offset-xsmall-45 {\n    margin-left: 45%;\n}\n.md-flex-xsmall-50 {\n    min-width: 50%;\n    -ms-flex: 0 1 50%;\n        flex: 0 1 50%;\n}\n.md-flex-offset-xsmall-50 {\n    margin-left: 50%;\n}\n.md-flex-xsmall-55 {\n    min-width: 55%;\n    -ms-flex: 0 1 55%;\n        flex: 0 1 55%;\n}\n.md-flex-offset-xsmall-55 {\n    margin-left: 55%;\n}\n.md-flex-xsmall-60 {\n    min-width: 60%;\n    -ms-flex: 0 1 60%;\n        flex: 0 1 60%;\n}\n.md-flex-offset-xsmall-60 {\n    margin-left: 60%;\n}\n.md-flex-xsmall-65 {\n    min-width: 65%;\n    -ms-flex: 0 1 65%;\n        flex: 0 1 65%;\n}\n.md-flex-offset-xsmall-65 {\n    margin-left: 65%;\n}\n.md-flex-xsmall-70 {\n    min-width: 70%;\n    -ms-flex: 0 1 70%;\n        flex: 0 1 70%;\n}\n.md-flex-offset-xsmall-70 {\n    margin-left: 70%;\n}\n.md-flex-xsmall-75 {\n    min-width: 75%;\n    -ms-flex: 0 1 75%;\n        flex: 0 1 75%;\n}\n.md-flex-offset-xsmall-75 {\n    margin-left: 75%;\n}\n.md-flex-xsmall-80 {\n    min-width: 80%;\n    -ms-flex: 0 1 80%;\n        flex: 0 1 80%;\n}\n.md-flex-offset-xsmall-80 {\n    margin-left: 80%;\n}\n.md-flex-xsmall-85 {\n    min-width: 85%;\n    -ms-flex: 0 1 85%;\n        flex: 0 1 85%;\n}\n.md-flex-offset-xsmall-85 {\n    margin-left: 85%;\n}\n.md-flex-xsmall-90 {\n    min-width: 90%;\n    -ms-flex: 0 1 90%;\n        flex: 0 1 90%;\n}\n.md-flex-offset-xsmall-90 {\n    margin-left: 90%;\n}\n.md-flex-xsmall-95 {\n    min-width: 95%;\n    -ms-flex: 0 1 95%;\n        flex: 0 1 95%;\n}\n.md-flex-offset-xsmall-95 {\n    margin-left: 95%;\n}\n.md-flex-xsmall-100 {\n    min-width: 100%;\n    -ms-flex: 0 1 100%;\n        flex: 0 1 100%;\n}\n.md-flex-offset-xsmall-100 {\n    margin-left: 100%;\n}\n.md-align-xsmall-start {\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n}\n.md-align-xsmall-center {\n    -ms-flex-pack: center;\n        justify-content: center;\n}\n.md-align-xsmall-end {\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n}\n.md-hide-xsmall {\n    display: none;\n}\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-list {\n  margin: 0;\n  padding: 8px 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column nowrap;\n      flex-flow: column nowrap;\n  position: relative;\n  list-style: none;\n}\n.md-list.md-dense {\n    padding: 4px 0;\n}\n.md-list.md-dense .md-list-item.md-inset .md-list-item-container {\n      padding-left: 72px;\n}\n.md-list.md-dense .md-list-item .md-list-item-container {\n      min-height: 40px;\n      font-size: 13px;\n}\n.md-list.md-dense .md-list-item .md-list-item-container .md-avatar:first-child {\n        margin-right: 24px;\n}\n.md-list.md-dense .md-avatar {\n      width: 32px;\n      min-width: 32px;\n      height: 32px;\n      min-height: 32px;\n}\n.md-list.md-dense .md-list-item-expand {\n      min-height: 40px;\n}\n.md-list.md-double-line.md-dense .md-list-item .md-list-item-container {\n    min-height: 60px;\n}\n.md-list.md-double-line.md-dense .md-list-item .md-avatar {\n    width: 36px;\n    min-width: 36px;\n    height: 36px;\n    min-height: 36px;\n}\n.md-list.md-double-line.md-dense .md-list-item .md-avatar:first-child {\n      margin-right: 20px;\n}\n.md-list.md-double-line.md-dense .md-list-text-container > :nth-child(1) {\n    font-size: 13px;\n}\n.md-list.md-double-line.md-dense .md-list-text-container > :nth-child(2) {\n    font-size: 13px;\n}\n.md-list.md-double-line .md-list-item .md-list-item-container {\n    min-height: 72px;\n}\n.md-list.md-triple-line.md-dense .md-list-item .md-list-item-container {\n    min-height: 76px;\n}\n.md-list.md-triple-line.md-dense .md-list-item .md-avatar {\n    width: 36px;\n    min-width: 36px;\n    height: 36px;\n    min-height: 36px;\n}\n.md-list.md-triple-line.md-dense .md-list-item .md-avatar:first-child {\n      margin-right: 20px;\n}\n.md-list.md-triple-line.md-dense .md-list-text-container > :nth-child(1) {\n    font-size: 13px;\n}\n.md-list.md-triple-line.md-dense .md-list-text-container > :nth-child(2) {\n    font-size: 13px;\n}\n.md-list.md-triple-line .md-list-item .md-list-item-container {\n    min-height: 88px;\n}\n.md-list.md-triple-line .md-avatar {\n    margin: 0;\n}\n.md-list.md-triple-line .md-list-item-container {\n    -ms-flex-align: start;\n        align-items: flex-start;\n}\n.md-list .md-subheader.md-inset {\n    padding-left: 72px;\n}\n.md-list > .md-subheader:first-of-type {\n    margin-top: -8px;\n}\n.md-list-item {\n  height: auto;\n  position: relative;\n}\n.md-list-item.md-inset .md-list-item-container {\n    padding-left: 72px;\n}\n.md-list-item .md-list-item-holder {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: row nowrap;\n        flex-flow: row nowrap;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    -ms-flex: 1;\n        flex: 1;\n}\n.md-list-item .md-list-item-holder > .md-ink-ripple {\n      border-radius: 0;\n}\n.md-list-item .md-list-item-holder > .md-icon:first-child {\n      margin-right: 32px;\n}\n.md-list-item .md-list-item-holder .md-avatar:first-child {\n      margin-right: 16px;\n}\n.md-list-item .md-list-item-holder .md-list-action {\n      margin: 0 -2px 0 0;\n}\n.md-list-item .md-list-item-holder .md-list-action:nth-child(3) {\n        margin: 0 -2px 0 16px;\n}\n.md-list-item .md-list-item-container {\n    width: 100%;\n    min-height: 48px;\n    margin: 0;\n    padding: 0 16px;\n    position: relative;\n    border-radius: 0;\n    font-size: 16px;\n    font-weight: 400;\n    text-align: left;\n    text-transform: none;\n}\n.md-list-item .md-divider {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    left: 0;\n}\n.md-list-item .md-icon,\n  .md-list-item .md-avatar {\n    margin: 0;\n}\n.md-list-item .md-icon:first-of-type + *,\n    .md-list-item .md-avatar:first-of-type + * {\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n.md-list-item .md-avatar {\n    margin-top: 8px;\n    margin-bottom: 8px;\n}\n.md-list-item .md-icon {\n    color: rgba(0, 0, 0, 0.54);\n}\n.md-list-item .md-ink-ripple {\n    border-radius: 0;\n}\n.md-list-item-expand {\n  min-height: 48px;\n  -ms-flex-flow: column wrap;\n      flex-flow: column wrap;\n  overflow: hidden;\n}\n.md-list-item-expand:before, .md-list-item-expand:after {\n    height: 1px;\n    position: absolute;\n    right: 0;\n    left: 0;\n    z-index: 3;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    content: \" \";\n}\n.md-list-item-expand:before {\n    top: 0;\n}\n.md-list-item-expand:after {\n    bottom: 0;\n}\n.md-list-item-expand.md-active {\n    position: relative;\n}\n.md-list-item-expand.md-active:before, .md-list-item-expand.md-active:after {\n      background-color: rgba(0, 0, 0, 0.12);\n}\n.md-list-item-expand.md-active:first-of-type:before {\n      background: none;\n}\n.md-list-item-expand.md-active:last-of-type:after {\n      background: none;\n}\n.md-list-item-expand.md-active > .md-list-item-container .md-list-expand-indicator {\n      transform: rotateZ(180deg) translate3D(0, 0, 0);\n}\n.md-list-item-expand.md-active > .md-list-expand {\n      margin-bottom: 0 !important;\n}\n.md-list-item-expand > .md-list-item-container > .md-list-item-holder {\n    position: relative;\n    z-index: 2;\n}\n.md-list-item-expand .md-expansion-indicator,\n  .md-list-item-expand .md-list-item-container,\n  .md-list-item-expand .md-icon {\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-list-item-expand .md-list-expand {\n    position: relative;\n    z-index: 1;\n    transform: translate3D(0, 0, 0);\n    will-change: margin-bottom;\n    transition: all 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n}\n.md-list-item-expand .md-list-expand.md-transition-off {\n      transition: none !important;\n}\n.md-list-item-expand .md-list-expand .md-list {\n      padding: 0;\n}\n.md-list-text-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column nowrap;\n      flex-flow: column nowrap;\n  -ms-flex: 1;\n      flex: 1;\n  overflow: hidden;\n  line-height: 1.25em;\n  text-overflow: ellipsis;\n  white-space: normal;\n}\n.md-list-text-container > :nth-child(1) {\n    font-size: 16px;\n}\n.md-list-text-container > :nth-child(2),\n  .md-list-text-container > :nth-child(3) {\n    margin: 0;\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 14px;\n}\n.md-list-text-container > :nth-child(2):not(:last-child) {\n    color: rgba(0, 0, 0, 0.87);\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-menu {\n  display: inline-block;\n}\n.md-menu-content {\n  width: 168px;\n  min-width: 84px;\n  max-width: 392px;\n  min-height: 64px;\n  max-height: calc(100vh - 32px);\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: absolute;\n  z-index: 120;\n  transform: scale(0.9, 0.85) translateZ(0);\n  border-radius: 2px;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);\n  opacity: 0;\n  transition: width 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.25s cubic-bezier(0.55, 0, 0.55, 0.2), margin 0.2s cubic-bezier(0.55, 0, 0.55, 0.2), transform 0s 0.25s cubic-bezier(0.55, 0, 0.55, 0.2);\n  will-change: transform, opacity, width;\n}\n.md-menu-content.md-direction-bottom-right {\n    margin-top: -20px;\n    margin-left: -8px;\n    transform-origin: top left;\n}\n.md-menu-content.md-direction-bottom-right.md-active {\n      margin-top: -11px;\n}\n.md-menu-content.md-direction-bottom-left {\n    margin-top: -20px;\n    margin-left: 8px;\n    transform-origin: top right;\n}\n.md-menu-content.md-direction-bottom-left.md-active {\n      margin-top: -11px;\n}\n.md-menu-content.md-direction-top-right {\n    margin-top: 20px;\n    margin-left: -8px;\n    transform-origin: bottom left;\n}\n.md-menu-content.md-direction-top-right.md-active {\n      margin-top: 11px;\n}\n.md-menu-content.md-direction-top-left {\n    margin-top: 20px;\n    margin-left: 8px;\n    transform-origin: bottom right;\n}\n.md-menu-content.md-direction-top-left.md-active {\n      margin-top: 11px;\n}\n.md-menu-content.md-align-trigger {\n    margin: 0;\n}\n.md-menu-content.md-size-1 {\n    width: 84px;\n}\n.md-menu-content.md-size-2 {\n    width: 112px;\n}\n.md-menu-content.md-size-3 {\n    width: 168px;\n}\n.md-menu-content.md-size-4 {\n    width: 224px;\n}\n.md-menu-content.md-size-5 {\n    width: 280px;\n}\n.md-menu-content.md-size-6 {\n    width: 336px;\n}\n.md-menu-content.md-size-7 {\n    width: 392px;\n}\n.md-menu-content.md-active {\n    pointer-events: auto;\n    opacity: 1;\n    transform: scale(1) translateZ(0);\n    transition: width 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.35s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.25s 0.05s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-menu-content.md-active .md-list {\n      opacity: 1;\n      transition: opacity 0.2s 0.15s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-menu-content .md-list {\n    opacity: 0;\n    transition: opacity 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-menu-item {\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 1.2em;\n}\n.md-menu-item[disabled] {\n    cursor: default;\n}\n.md-menu-item .md-list-item-holder {\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-progress {\n  width: 100%;\n  height: 4px;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-progress.md-indeterminate .md-progress-track {\n    right: 0;\n}\n.md-progress.md-indeterminate .md-progress-track:before, .md-progress.md-indeterminate .md-progress-track:after {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      will-change: left, right;\n      content: '';\n}\n.md-progress.md-indeterminate .md-progress-track:before {\n      animation: progress-indeterminate 2.3s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n}\n.md-progress.md-indeterminate .md-progress-track:after {\n      animation: progress-indeterminate-short 2.3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n      animation-delay: 1.15s;\n}\n.md-progress.md-progress-enter, .md-progress.md-progress-leave-active {\n    opacity: 0;\n    transform: scaleY(0) translateZ(0);\n}\n.md-progress.md-progress-enter-active {\n    transform: scaleY(1) translateZ(0);\n}\n.md-progress-track {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n@keyframes progress-indeterminate {\n0% {\n    right: 100%;\n    left: -35%;\n}\n60% {\n    right: -100%;\n    left: 100%;\n}\n100% {\n    right: -100%;\n    left: 100%;\n}\n}\n@keyframes progress-indeterminate-short {\n0% {\n    right: 100%;\n    left: -200%;\n}\n60% {\n    right: -8%;\n    left: 107%;\n}\n100% {\n    right: -8%;\n    left: 107%;\n}\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-radio {\n  width: auto;\n  margin: 16px 8px 16px 0;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  position: relative;\n}\n.md-radio .md-radio-container {\n    width: 20px;\n    height: 20px;\n    position: relative;\n    border-radius: 50%;\n    border: 2px solid rgba(0, 0, 0, 0.54);\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-radio .md-radio-container:after {\n      position: absolute;\n      top: 3px;\n      right: 3px;\n      bottom: 3px;\n      left: 3px;\n      border-radius: 50%;\n      opacity: 0;\n      transform: scale3D(0.38, 0.38, 1);\n      transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n      content: \" \";\n}\n.md-radio .md-radio-container input {\n      position: absolute;\n      left: -999em;\n}\n.md-radio .md-radio-container .md-ink-ripple {\n      top: -16px;\n      right: -16px;\n      bottom: -16px;\n      left: -16px;\n      border-radius: 50%;\n      color: rgba(0, 0, 0, 0.54);\n}\n.md-radio .md-radio-container .md-ink-ripple .md-ripple {\n        width: 48px !important;\n        height: 48px !important;\n        top: 0 !important;\n        right: 0 !important;\n        bottom: 0 !important;\n        left: 0 !important;\n}\n.md-radio .md-radio-label {\n    height: 20px;\n    padding-left: 8px;\n    line-height: 20px;\n}\n.md-radio.md-checked .md-radio-container:after {\n  opacity: 1;\n  transform: scale3D(1, 1, 1);\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-select {\n  width: 100%;\n  min-width: 128px;\n  height: 32px;\n  position: relative;\n}\n.md-select:focus {\n    outline: none;\n}\n.md-select:after {\n    margin-top: 2px;\n    position: absolute;\n    top: 50%;\n    right: 0;\n    transform: translateY(-50%) scaleY(0.45) scaleX(0.85);\n    transition: all 0.15s linear;\n    content: \"\\25BC\";\n}\n.md-select.md-active .md-select-menu {\n    top: -8px;\n    pointer-events: auto;\n    opacity: 1;\n    transform: translateY(-8px) scale3D(1, 1, 1);\n    transform-origin: center top;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-duration: .25s;\n    transition-property: opacity, transform, top;\n}\n.md-select.md-active .md-select-menu > * {\n      opacity: 1;\n      transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n      transition-duration: .15s;\n      transition-delay: .1s;\n}\n.md-select.md-disabled {\n    pointer-events: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    user-drag: none;\n}\n.md-select select {\n    position: absolute;\n    left: -999em;\n}\n.md-select .md-menu {\n    width: 100%;\n    height: 32px;\n    display: block;\n    position: relative;\n}\n.md-select .md-select-value {\n    width: 100%;\n    height: 32px;\n    padding-right: 24px;\n    display: block;\n    cursor: pointer;\n    overflow: hidden;\n    position: relative;\n    z-index: 2;\n    font-size: 16px;\n    line-height: 33px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.md-select .md-subheader {\n    color: rgba(117, 117, 117, 0.87);\n    text-transform: uppercase;\n}\n.md-select .md-subheader:first-child {\n      margin-top: -8px;\n}\n.md-select-content {\n  width: auto;\n  max-height: 256px;\n}\n.md-select-content.md-direction-bottom-right {\n    margin-top: -15px;\n    margin-left: -16px;\n}\n.md-select-content .md-menu-item .md-list-item-holder {\n    overflow: visible;\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n}\n.md-select-content.md-multiple .md-checkbox {\n    margin: 0;\n}\n.md-select-content.md-multiple .md-checkbox-label {\n    padding-left: 16px;\n    cursor: pointer;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-sidenav.md-left .md-sidenav-content {\n  left: 0;\n  transform: translate3D(-100%, 0, 0);\n}\n.md-sidenav.md-right .md-sidenav-content {\n  right: 0;\n  transform: translate3D(100%, 0, 0);\n}\n.md-sidenav.md-fixed .md-sidenav-content,\n.md-sidenav.md-fixed .md-sidenav-backdrop {\n  position: fixed;\n}\n.md-sidenav .md-sidenav-content {\n  width: 304px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 100;\n  pointer-events: none;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: transform;\n  will-change: transform;\n}\n.md-sidenav .md-backdrop {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 99;\n  pointer-events: none;\n  background-color: rgba(0, 0, 0, 0.54);\n  opacity: 0;\n  transition: all 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  transition-property: opacity;\n  will-change: opacity;\n}\n.md-sidenav.md-active .md-sidenav-content {\n  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);\n  pointer-events: auto;\n  transform: translate3D(0, 0, 0);\n}\n.md-sidenav.md-active .md-sidenav-backdrop {\n  opacity: 1;\n  pointer-events: auto;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n/* Image aspect ratio calculator */\n/* Responsive breakpoints */\n.md-snackbar {\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 120;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: margin-top, margin-bottom;\n}\n.md-snackbar.md-position-top-center, .md-snackbar.md-position-bottom-center {\n    -ms-flex-pack: center;\n        justify-content: center;\n}\n.md-snackbar.md-position-top-right, .md-snackbar.md-position-bottom-right {\n    margin-right: 24px;\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n}\n.md-snackbar.md-position-top-left, .md-snackbar.md-position-bottom-left {\n    margin-left: 24px;\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n}\n.md-snackbar.md-position-top-right, .md-snackbar.md-position-top-left, .md-snackbar.md-position-top-center {\n    margin-top: 24px;\n}\n.md-snackbar.md-position-bottom-right, .md-snackbar.md-position-bottom-left {\n    margin-bottom: 24px;\n}\n.md-snackbar.md-position-top-center, .md-snackbar.md-position-top-right, .md-snackbar.md-position-top-left {\n    top: 0;\n}\n.md-snackbar.md-position-top-center .md-snackbar-container, .md-snackbar.md-position-top-right .md-snackbar-container, .md-snackbar.md-position-top-left .md-snackbar-container {\n      transform: translate3D(0, calc(-100% - 24px), 0);\n}\n.md-snackbar.md-position-bottom-center, .md-snackbar.md-position-bottom-right, .md-snackbar.md-position-bottom-left {\n    bottom: 0;\n}\n.md-snackbar.md-position-bottom-center .md-snackbar-container, .md-snackbar.md-position-bottom-right .md-snackbar-container, .md-snackbar.md-position-bottom-left .md-snackbar-container {\n      transform: translate3D(0, calc(100% + 24px), 0);\n}\n.md-snackbar.md-active .md-snackbar-container {\n    transform: translate3D(0, 0, 0);\n}\n.md-snackbar.md-active .md-snackbar-content {\n    opacity: 1;\n    transition: opacity 0.4s 0.1s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n@media (max-width: 600px) {\n.md-snackbar {\n      margin: 0 !important;\n}\n}\n.md-snackbar .md-snackbar-content {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    opacity: 0;\n    transition: opacity 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);\n    will-change: opacity;\n}\n.md-snackbar .md-button {\n    min-width: 64px;\n    margin: -8px -16px;\n}\n.md-snackbar .md-button:last-child {\n      margin-left: 48px;\n}\n.md-snackbar-container {\n  width: auto;\n  min-width: 288px;\n  max-width: 568px;\n  min-height: 48px;\n  padding: 14px 24px;\n  overflow: hidden;\n  border-radius: 2px;\n  background-color: #323232;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  color: #fff;\n  font-size: 14px;\n}\n@media (max-width: 600px) {\n.md-snackbar-container {\n      width: 100%;\n      max-width: 100%;\n      border-radius: 0;\n}\n}\n.md-has-toast-top-right .md-fab.md-fab-top-right {\n  transform: translate3D(0, 68px, 0);\n}\n@media (max-width: 600px) {\n.md-has-toast-top-right .md-fab.md-fab-top-right {\n      transform: translate3D(0, 48px, 0);\n}\n}\n.md-has-toast-top-center .md-fab.md-fab-top-center {\n  transform: translate3D(-50%, 68px, 0);\n}\n@media (max-width: 600px) {\n.md-has-toast-top-center .md-fab.md-fab-top-center {\n      transform: translate3D(-50%, 48px, 0);\n}\n}\n.md-has-toast-top-left .md-fab.md-fab-top-left {\n  transform: translate3D(0, 68px, 0);\n}\n@media (max-width: 600px) {\n.md-has-toast-top-left .md-fab.md-fab-top-left {\n      transform: translate3D(0, 48px, 0);\n}\n}\n.md-has-toast-bottom-right .md-fab.md-fab-bottom-right {\n  transform: translate3D(0, -68px, 0);\n}\n@media (max-width: 600px) {\n.md-has-toast-bottom-right .md-fab.md-fab-bottom-right {\n      transform: translate3D(0, -48px, 0);\n}\n}\n.md-has-toast-bottom-center .md-fab.md-fab-bottom-center {\n  transform: translate3D(-50%, -68px, 0);\n}\n@media (max-width: 600px) {\n.md-has-toast-bottom-center .md-fab.md-fab-bottom-center {\n      transform: translate3D(-50%, -48px, 0);\n}\n}\n.md-has-toast-bottom-left .md-fab.md-fab-bottom-left {\n  transform: translate3D(0, -68px, 0);\n}\n@media (max-width: 600px) {\n.md-has-toast-bottom-left .md-fab.md-fab-bottom-left {\n      transform: translate3D(0, -48px, 0);\n}\n}\n@media (max-width: 600px) {\n.md-has-toast .md-fab.md-fab-top-right,\n  .md-has-toast .md-fab.md-fab-top-center,\n  .md-has-toast .md-fab.md-fab-top-left {\n    transform: translate3D(0, 44px, 0);\n}\n}\n@media (max-width: 600px) {\n.md-has-toast .md-fab.md-fab-bottom-right,\n  .md-has-toast .md-fab.md-fab-bottom-center,\n  .md-has-toast .md-fab.md-fab-bottom-left {\n    transform: translate3D(0, -44px, 0);\n}\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-spinner {\n  display: inline-block;\n  position: relative;\n  pointer-events: none;\n  will-change: transform, opacity;\n}\n.md-spinner.md-indeterminate .md-spinner-draw {\n    animation: spinner-rotate 1.9s linear infinite;\n    transform: rotate(0deg) translateZ(0);\n}\n.md-spinner.md-indeterminate .md-spinner-path {\n    stroke-dasharray: 2, 200;\n    animation: spinner-dash 1.425s ease-in-out infinite;\n}\n.md-spinner.md-spinner-leave-active {\n    opacity: 0;\n    transform: scale(0.8) translateZ(0);\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-spinner:not(.md-indeterminate).md-spinner-enter-active {\n    transition-duration: 2s;\n}\n.md-spinner:not(.md-indeterminate).md-spinner-enter-active .md-spinner-draw {\n      animation: spinner-initial-rotate 1.98s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;\n}\n.md-spinner-draw {\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  transform: rotate(270deg) translateZ(0);\n  transform-origin: center center;\n  will-change: transform, opacity;\n}\n.md-spinner-path {\n  fill: none;\n  stroke-dashoffset: 0;\n  stroke-miterlimit: 10;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n@keyframes spinner-rotate {\nto {\n    transform: rotate(360deg) translateZ(0);\n}\n}\n@keyframes spinner-initial-rotate {\n0% {\n    opacity: 0;\n    transform: rotate(-90deg) translateZ(0);\n}\n20% {\n    opacity: 1;\n}\n100% {\n    transform: rotate(270deg) translateZ(0);\n}\n}\n@keyframes spinner-dash {\n0% {\n    stroke-dasharray: 2, 200;\n    stroke-dashoffset: 0;\n}\n50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n}\n100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n}\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-subheader {\n  min-height: 48px;\n  padding: 0 16px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 14px;\n  font-weight: 500;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-switch {\n  width: auto;\n  margin: 16px 8px 16px 0;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  position: relative;\n}\n.md-switch .md-switch-container {\n    width: 34px;\n    height: 14px;\n    position: relative;\n    border-radius: 14px;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    background-color: rgba(0, 0, 0, 0.38);\n}\n.md-switch .md-switch-container .md-switch-thumb {\n      width: 20px;\n      height: 20px;\n      position: absolute;\n      top: 50%;\n      left: 0;\n      background-color: #fafafa;\n      border-radius: 50%;\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n      transition: all 0.15s linear;\n}\n.md-switch .md-switch-container input {\n      position: absolute;\n      left: -999em;\n}\n.md-switch .md-switch-container .md-ink-ripple {\n      top: -16px;\n      right: -16px;\n      bottom: -16px;\n      left: -16px;\n      border-radius: 50%;\n      color: rgba(0, 0, 0, 0.54);\n}\n.md-switch .md-switch-container .md-ink-ripple .md-ripple {\n        width: 48px !important;\n        height: 48px !important;\n        top: 0 !important;\n        right: 0 !important;\n        bottom: 0 !important;\n        left: 0 !important;\n}\n.md-switch .md-switch-container .md-switch-holder {\n      width: 40px;\n      height: 40px;\n      margin: 0;\n      padding: 0;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      z-index: 2;\n      background: none;\n      border: none;\n      transform: translate(-50%, -50%);\n}\n.md-switch .md-switch-container .md-switch-holder:focus {\n        outline: none;\n}\n.md-switch .md-switch-label {\n    height: 14px;\n    padding-left: 8px;\n    line-height: 14px;\n}\n.md-switch.md-dragging .md-switch-thumb {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n.md-switch.md-disabled .md-switch-thumb {\n  cursor: default;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-table {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column wrap;\n      flex-flow: column wrap;\n  overflow-x: auto;\n}\n.md-table.md-transition-off .md-table-cell,\n  .md-table.md-transition-off .md-checkbox .md-checkbox-container,\n  .md-table.md-transition-off .md-checkbox .md-checkbox-container:after {\n    transition: none !important;\n}\n.md-table table {\n    width: 100%;\n    border-spacing: 0;\n    border-collapse: collapse;\n    overflow: hidden;\n}\n.md-table tbody .md-table-row {\n    border-top: 1px solid #e0e0e0;\n}\n.md-table tbody .md-table-row.md-selected .md-table-cell {\n      background-color: #f5f5f5;\n}\n.md-table tbody .md-table-row:hover .md-table-cell {\n      background-color: #eee;\n}\n.md-table .md-table-head {\n    padding: 0;\n    position: relative;\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 12px;\n    line-height: 16px;\n    text-align: left;\n}\n.md-table .md-table-head:last-child .md-table-head-container .md-table-head-text {\n      padding-right: 24px;\n}\n.md-table .md-table-head.md-numeric {\n      text-align: right;\n}\n.md-table .md-table-head .md-icon {\n      width: 16px;\n      min-width: 16px;\n      height: 16px;\n      min-height: 16px;\n      font-size: 16px;\n      color: rgba(0, 0, 0, 0.54);\n}\n.md-table .md-table-head .md-icon:not(.md-sortable-icon) {\n        margin: 0 4px;\n}\n.md-table .md-table-head .md-icon:first-child {\n        margin-left: 0;\n}\n.md-table .md-table-head .md-icon:last-child {\n        margin-right: 0;\n}\n.md-table .md-table-head-container {\n    height: 56px;\n    padding: 14px 0;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-table .md-table-head-text {\n    height: 28px;\n    padding-right: 32px;\n    padding-left: 24px;\n    display: inline-block;\n    position: relative;\n    overflow: hidden;\n    line-height: 28px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.md-table .md-sortable {\n    cursor: pointer;\n}\n.md-table .md-sortable:first-of-type .md-sortable-icon {\n      left: auto;\n      right: 10px;\n}\n.md-table .md-sortable:hover, .md-table .md-sortable.md-sorted {\n      color: rgba(0, 0, 0, 0.87);\n}\n.md-table .md-sortable:hover .md-sortable-icon, .md-table .md-sortable.md-sorted .md-sortable-icon {\n        opacity: 1;\n}\n.md-table .md-sortable.md-sorted .md-sortable-icon {\n      color: rgba(0, 0, 0, 0.87);\n}\n.md-table .md-sortable.md-sorted-descending .md-sortable-icon {\n      transform: translateY(-50%) rotate(180deg);\n}\n.md-table .md-sortable .md-sortable-icon {\n      position: absolute;\n      top: 50%;\n      left: 2px;\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transform: translateY(-50%);\n      opacity: 0;\n      color: rgba(0, 0, 0, 0.38);\n}\n.md-table .md-sortable .md-ink-ripple {\n      color: rgba(0, 0, 0, 0.87);\n}\n.md-table .md-table-cell {\n    height: 48px;\n    position: relative;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    color: rgba(0, 0, 0, 0.87);\n    font-size: 13px;\n    line-height: 18px;\n}\n.md-table .md-table-cell:last-child .md-table-cell-container {\n      padding-right: 24px;\n}\n.md-table .md-table-cell.md-numeric {\n      text-align: right;\n}\n.md-table .md-table-cell.md-numeric .md-table-cell-container {\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n.md-table .md-table-cell.md-has-action .md-table-cell-container {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n          align-items: center;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.md-table .md-table-cell .md-table-cell-container {\n      padding: 6px 32px 6px 24px;\n}\n.md-table .md-table-cell .md-button {\n      width: 36px;\n      min-width: 36px;\n      height: 36px;\n      min-height: 36px;\n}\n.md-table .md-table-cell .md-button:last-child {\n        margin: 0 -10px 0 0;\n}\n.md-table .md-table-cell .md-button .md-icon {\n        width: 18px;\n        min-width: 18px;\n        height: 18px;\n        min-height: 18px;\n        margin: 0;\n        color: rgba(0, 0, 0, 0.54);\n        font-size: 18px;\n}\n.md-table .md-table-selection {\n    width: 60px;\n    position: relative;\n    vertical-align: middle;\n}\n.md-table .md-table-selection + .md-table-cell .md-table-cell-container,\n    .md-table .md-table-selection + .md-table-head .md-table-head-container .md-table-head-text {\n      padding-left: 8px;\n}\n.md-table .md-table-selection .md-table-cell-container {\n      padding-right: 16px;\n      padding-left: 24px;\n}\n.md-table .md-table-selection .md-checkbox {\n      margin: 0;\n}\n.md-table .md-table-selection .md-checkbox-container {\n      width: 18px;\n      height: 18px;\n      margin-top: 1px;\n}\n.md-table .md-table-selection .md-checkbox-container:after {\n        top: -1px;\n        left: 4px;\n}\n.md-table .md-select {\n    min-width: 84px;\n}\n.md-table .md-select-value,\n  .md-table .md-option {\n    font-size: 13px;\n}\n.md-table-edit-trigger {\n  display: inline-block;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.38);\n}\n.md-table-edit-trigger.md-edited {\n    color: rgba(0, 0, 0, 0.87);\n}\n.md-table-dialog {\n  max-height: 0;\n  margin: 0;\n  padding: 0 24px 2px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 24px;\n  z-index: 60;\n  overflow: hidden;\n  pointer-events: none;\n  border-radius: 2px;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);\n  background-color: #fff;\n  opacity: 0;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), max-height 0s 0.5s;\n  transition-duration: .3s;\n  transform: translate3D(0, -8px, 0);\n}\n.md-table-dialog.md-active {\n    max-height: 400px;\n    pointer-events: auto;\n    transform: translate3D(#000);\n    opacity: 1;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-duration: .3s;\n}\n.md-table-dialog.md-large {\n    padding: 12px 24px 2px;\n}\n.md-table-dialog .md-input-container {\n    margin-top: 0;\n    margin-bottom: 16px;\n}\n.md-table-dialog .md-input-container.md-input-placeholder input {\n      font-size: 13px;\n}\n.md-table-dialog .md-input-container.md-input-placeholder input::-webkit-input-placeholder {\n        font-size: 13px;\n}\n.md-table-dialog .md-char-counter {\n    font-size: 13.5px;\n    color: rgba(0, 0, 0, 0.54);\n}\n.md-table-dialog .md-button {\n    min-width: 64px;\n}\n.md-table-card {\n  overflow: visible;\n}\n.md-table-card .md-toolbar {\n    padding-left: 16px;\n    background-color: #fff;\n}\n.md-table-card .md-title {\n    -ms-flex: 1;\n        flex: 1;\n    font-size: 20px;\n}\n.md-table-card .md-table-pagination {\n    height: 56px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex: 1;\n        flex: 1;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n    border-top: 1px solid #e0e0e0;\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 12px;\n}\n.md-table-card .md-table-pagination .md-table-pagination-previous {\n      margin-right: 2px;\n      margin-left: 18px;\n}\n.md-table-card .md-table-pagination .md-select {\n      width: auto;\n      min-width: 36px;\n      margin: 0 32px;\n}\n.md-table-card .md-table-pagination .md-select:after {\n        margin-top: 0;\n}\n.md-table-card .md-table-pagination .md-select .md-select-value {\n        padding: 0;\n        border: none;\n        font-size: 13px;\n}\n.md-table-card .md-table-pagination .md-button:not([disabled]) {\n      color: rgba(0, 0, 0, 0.87);\n}\n.md-table-card .md-table-pagination .md-button[disabled] .md-icon {\n      color: rgba(0, 0, 0, 0.26);\n}\n.md-pagination-select.md-direction-bottom-right {\n  margin-top: -16px;\n}\n.md-pagination-select .md-list-item-holder {\n  font-size: 13px;\n}\n.md-table-alternate-header {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  pointer-events: none;\n  opacity: 0;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: .3s;\n}\n.md-table-alternate-header.md-active {\n    pointer-events: auto;\n    opacity: 1;\n    transform: translate3D(#000);\n}\n.md-table-alternate-header .md-counter {\n    margin-left: 8px;\n    -ms-flex: 1;\n        flex: 1;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-tabs {\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column;\n      flex-flow: column;\n  position: relative;\n}\n.md-tabs.md-transition-off * {\n    transition: none !important;\n}\n.md-tabs.md-dynamic-height .md-tabs-content {\n    transition: height 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-tabs .md-tabs-navigation {\n    height: 48px;\n    min-height: 48px;\n    position: relative;\n    z-index: 1;\n    display: -ms-flexbox;\n    display: flex;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-tabs .md-tabs-navigation.md-has-icon.md-has-label {\n      min-height: 72px;\n}\n.md-tabs .md-tabs-navigation.md-has-icon.md-has-label .md-icon {\n        margin-bottom: 10px;\n}\n.md-tabs .md-tabs-navigation.md-centered {\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.md-tabs .md-tabs-navigation.md-fixed .md-tab-header {\n      -ms-flex: 1;\n          flex: 1;\n}\n.md-tabs .md-tabs-navigation.md-right {\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.md-tabs .md-tab-header {\n    min-width: 72px;\n    max-width: 264px;\n    margin: 0;\n    padding: 0 12px;\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n    border: 0;\n    background: none;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    font-family: inherit;\n    font-size: 14px;\n    font-weight: 500;\n    text-transform: uppercase;\n}\n.md-tabs .md-tab-header.md-disabled {\n      cursor: default;\n      pointer-events: none;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n      -webkit-user-drag: none;\n}\n.md-tabs .md-tab-header-container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: column;\n        flex-flow: column;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n}\n.md-tabs .md-tab-header-container .md-icon {\n      margin: 0;\n}\n.md-tabs .md-tab-indicator {\n    height: 2px;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    transform: translate3D(0, 0, 0);\n}\n.md-tabs .md-tab-indicator.md-transition-off {\n      transition: none !important;\n}\n.md-tabs .md-tab-indicator.md-to-right {\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1), right 0.15s cubic-bezier(0.35, 0, 0.25, 1);\n}\n.md-tabs .md-tab-indicator.md-to-left {\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), right 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.15s cubic-bezier(0.35, 0, 0.25, 1);\n}\n.md-tabs .md-tabs-content {\n    width: 100%;\n    height: 0;\n    position: relative;\n    overflow: hidden;\n}\n.md-tabs .md-tabs-wrapper {\n    width: 9999em;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    transform: translate3d(0, 0, 0);\n    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.md-tabs .md-tab {\n    padding: 16px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-toolbar {\n  min-height: 64px;\n  padding: 0 8px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n  position: relative;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transform: translate3D(0, 0, 0);\n}\n.md-toolbar.md-dense {\n    min-height: 48px;\n}\n.md-toolbar.md-dense.md-medium {\n      min-height: 72px;\n}\n.md-toolbar.md-dense.md-large {\n      min-height: 96px;\n}\n.md-toolbar.md-dense .md-toolbar-container {\n      height: 48px;\n}\n.md-toolbar.md-medium {\n    min-height: 88px;\n}\n.md-toolbar.md-medium .md-toolbar-container:nth-child(2) .md-title:first-child {\n      margin-left: 56px;\n}\n.md-toolbar.md-large {\n    min-height: 128px;\n    -ms-flex-line-pack: inherit;\n        align-content: inherit;\n}\n.md-toolbar.md-large .md-toolbar-container:nth-child(2) .md-title:first-child {\n      margin-left: 56px;\n}\n.md-toolbar.md-account-header {\n    min-height: 164px;\n}\n.md-toolbar.md-account-header .md-ink-ripple {\n      color: #fff;\n}\n.md-toolbar.md-account-header .md-list-item-container:hover:not([disabled]) {\n      background-color: rgba(255, 255, 255, 0.12);\n}\n.md-toolbar.md-account-header .md-avatar-list {\n      margin: 16px 0 8px;\n}\n.md-toolbar.md-account-header .md-avatar-list .md-list-item-container {\n        -ms-flex-align: start;\n            align-items: flex-start;\n}\n.md-toolbar.md-account-header .md-avatar-list .md-avatar + .md-avatar {\n        margin-left: 16px;\n}\n.md-toolbar .md-toolbar-container {\n    width: 100%;\n    height: 64px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n}\n.md-toolbar .md-toolbar-container > .md-button:first-child {\n      margin-left: 0;\n      margin-right: 16px;\n}\n.md-toolbar .md-toolbar-container > .md-button + .md-button {\n      margin-left: 0;\n}\n.md-toolbar > .md-button:first-child {\n    margin-left: 0;\n    margin-right: 16px;\n}\n.md-toolbar > .md-button + .md-button {\n    margin-left: 0;\n}\n.md-toolbar .md-button:hover:not([disabled]):not(.md-raised):not(.md-icon-button):not(.md-fab) {\n    background-color: rgba(255, 255, 255, 0.1);\n}\n.md-toolbar .md-title {\n    margin: 0;\n    font-size: 20px;\n    font-weight: 400;\n}\n.md-toolbar .md-title:first-child {\n      margin-left: 8px;\n}\n.md-toolbar .md-list {\n    padding: 0;\n    margin: 0 -8px;\n    -ms-flex: 1;\n        flex: 1;\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-tooltip {\n  height: 20px;\n  padding: 0 8px;\n  position: fixed;\n  z-index: 200;\n  pointer-events: none;\n  background-color: rgba(97, 97, 97, 0.87);\n  border-radius: 2px;\n  opacity: 0;\n  transform-origin: center top;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: .3s;\n  transition-delay: 0s;\n  color: #fff;\n  font-family: Roboto, \"Noto Sans\", Noto, sans-serif;\n  font-size: 10px;\n  line-height: 20px;\n  text-transform: none;\n  white-space: nowrap;\n}\n.md-tooltip.md-active {\n    opacity: 1;\n    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n    transition-duration: .3s;\n}\n.md-tooltip:not(.md-active) {\n    transition-delay: 0s !important;\n}\n.md-tooltip.md-transition-off {\n    transition: none !important;\n}\n.md-tooltip.md-tooltip-top {\n    margin-top: -14px;\n    transform: translate(-50%, 8px);\n}\n.md-tooltip.md-tooltip-top.md-active {\n      transform: translate(-50%, 0);\n}\n.md-tooltip.md-tooltip-right {\n    margin-left: 14px;\n    transform: translate(-8px, 50%);\n}\n.md-tooltip.md-tooltip-right.md-active {\n      transform: translate(0, 50%);\n}\n.md-tooltip.md-tooltip-bottom {\n    margin-top: 14px;\n    transform: translate(-50%, -8px);\n}\n.md-tooltip.md-tooltip-bottom.md-active {\n      transform: translate(-50%, 0);\n}\n.md-tooltip.md-tooltip-left {\n    margin-left: -14px;\n    transform: translate(8px, 50%);\n}\n.md-tooltip.md-tooltip-left.md-active {\n      transform: translate(0, 50%);\n}\n/* Common */\n/* Responsive Breakpoints */\n/* Transitions - Based on Angular Material */\n/* Elevation - Based on Angular Material */\n.md-whiteframe {\n  position: relative;\n  z-index: 1;\n}\n.md-whiteframe-1dp {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-2dp {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-3dp {\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2), 0 3px 4px rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-4dp {\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px rgba(0, 0, 0, 0.14), 0 1px 10px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-5dp {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px rgba(0, 0, 0, 0.14), 0 1px 14px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-6dp {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-7dp {\n  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.2), 0 7px 10px 1px rgba(0, 0, 0, 0.14), 0 2px 16px 1px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-8dp {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-9dp {\n  box-shadow: 0 5px 6px -3px rgba(0, 0, 0, 0.2), 0 9px 12px 1px rgba(0, 0, 0, 0.14), 0 3px 16px 2px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-10dp {\n  box-shadow: 0 6px 6px -3px rgba(0, 0, 0, 0.2), 0 10px 14px 1px rgba(0, 0, 0, 0.14), 0 4px 18px 3px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-11dp {\n  box-shadow: 0 6px 7px -4px rgba(0, 0, 0, 0.2), 0 11px 15px 1px rgba(0, 0, 0, 0.14), 0 4px 20px 3px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-12dp {\n  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-13dp {\n  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-14dp {\n  box-shadow: 0 7px 9px -4px rgba(0, 0, 0, 0.2), 0 14px 21px 2px rgba(0, 0, 0, 0.14), 0 5px 26px 4px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-15dp {\n  box-shadow: 0 8px 9px -5px rgba(0, 0, 0, 0.2), 0 15px 22px 2px rgba(0, 0, 0, 0.14), 0 6px 28px 5px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-16dp {\n  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-17dp {\n  box-shadow: 0 8px 11px -5px rgba(0, 0, 0, 0.2), 0 17px 26px 2px rgba(0, 0, 0, 0.14), 0 6px 32px 5px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-18dp {\n  box-shadow: 0 9px 11px -5px rgba(0, 0, 0, 0.2), 0 18px 28px 2px rgba(0, 0, 0, 0.14), 0 7px 34px 6px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-19dp {\n  box-shadow: 0 9px 12px -6px rgba(0, 0, 0, 0.2), 0 19px 29px 2px rgba(0, 0, 0, 0.14), 0 7px 36px 6px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-20dp {\n  box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-21dp {\n  box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 21px 33px 3px rgba(0, 0, 0, 0.14), 0 8px 40px 7px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-22dp {\n  box-shadow: 0 10px 14px -6px rgba(0, 0, 0, 0.2), 0 22px 35px 3px rgba(0, 0, 0, 0.14), 0 8px 42px 7px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-23dp {\n  box-shadow: 0 11px 14px -7px rgba(0, 0, 0, 0.2), 0 23px 36px 3px rgba(0, 0, 0, 0.14), 0 9px 44px 8px rgba(0, 0, 0, 0.12);\n}\n.md-whiteframe-24dp {\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n\n/*# sourceMappingURL=vue-material.css.map*/", ""]);
	
	// exports


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(105)
	
	/* template */
	var __vue_template__ = __webpack_require__(110)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\App.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	if (__vue_options__.functional) {console.error("[vue-loader] App.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(106);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _toolbar = __webpack_require__(107);
	
	var _toolbar2 = _interopRequireDefault(_toolbar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      u: {
	        key: '',
	        name: ''
	      },
	      dialog: {
	        title: ' ',
	        content: ' '
	      },
	      confirm: {
	        title: ' ',
	        content: ' ',
	        ok: 'OK',
	        cancel: 'Cancel',
	        callback: null
	      },
	      prompt: {
	        title: '',
	        ok: 'OK',
	        cancel: 'Cancel',
	        placeholder: '',
	
	        resp: '',
	        callback: null
	      }
	    };
	  },
	
	  computed: {
	    loggedIn: function loggedIn() {
	      if (!this.u.key) return false;
	      return true;
	    }
	  },
	  watch: {
	    loggedIn: function loggedIn(nowLoggedIn) {
	      localStorage.setItem('u', (0, _stringify2.default)(this.u));
	    }
	  },
	  components: {
	    Toolbar: _toolbar2.default
	  },
	  methods: {
	    showPopup: function showPopup(content, title) {
	      this.dialog.content = content;
	      this.dialog.title = title;
	      this.$refs.modalDialog.open();
	    },
	    showConfirm: function showConfirm(content, title, cb, y, n) {
	      y = y || 'OK';
	      n = n || 'Cancel';
	      this.confirm.ok = y;
	      this.confirm.cancel = n;
	      this.confirm.content = content;
	      this.confirm.title = title;
	      this.confirm.callback = cb;
	      this.$refs.confirmDialog.open();
	    },
	    showPrompt: function showPrompt(title, placeholder, cb) {
	      this.prompt.title = title;
	      this.prompt.placeholder = placeholder;
	      this.prompt.callback = cb;
	      this.$refs.promptDialog.open();
	    },
	    onPromptClose: function onPromptClose(result) {
	      if (result == 'ok') {
	        this.prompt.callback(this.prompt.resp);
	      }
	
	      this.prompt.resp = '';
	      this.prompt.callback = null;
	    },
	    onConfirmClose: function onConfirmClose(result) {
	      this.confirm.callback(result == 'ok');
	      this.confirm.callback = null;
	    },
	
	    humanFileSize: function humanFileSize(bytes) {
	      var thresh = 1024;
	      if (Math.abs(bytes) < thresh) {
	        return bytes + ' B';
	      }
	      var units = ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
	      var u = -1;
	      do {
	        bytes /= thresh;
	        ++u;
	      } while (Math.abs(bytes) >= thresh && u < units.length - 1);
	      return bytes.toFixed(2) + ' ' + units[u];
	    },
	    getAuthRequestParams: function getAuthRequestParams() {
	      return {
	        params: {
	          apikey: this.u.key
	        }
	      };
	    }
	  },
	  created: function created() {
	    var savedU = localStorage.getItem('u');
	    if (savedU) {
	      this.u = JSON.parse(savedU);
	    }
	  }
	};

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/json/stringify");

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	
	/* script */
	__vue_exports__ = __webpack_require__(108)
	
	/* template */
	var __vue_template__ = __webpack_require__(109)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\Nihal.Talur19\\Documents\\GitHub\\PenguinUpload\\PenguinUpload\\src\\PenguinUpload\\ClientApp\\components\\toolbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-221f72bc"
	if (__vue_options__.functional) {console.error("[vue-loader] toolbar.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _axios = __webpack_require__(18);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      appName: 'PenguinUpload'
	    };
	  },
	
	  methods: {
	    visitGitHub: function visitGitHub() {
	      window.open('https://github.com/0xFireball/PenguinUpload');
	    },
	    toggleLeftSidenav: function toggleLeftSidenav() {
	      this.$refs.leftSidenav.toggle();
	    },
	    closeSidenav: function closeSidenav() {
	      this.$refs.leftSidenav.close();
	    },
	    logout: function logout() {
	      this.$root.u.key = '';
	      this.$router.push('/');
	    },
	    routerGo: function routerGo(u) {
	      this.$router.push(u);
	    }
	  },
	  created: function created() {
	    this.$router.beforeEach(function (to, from, next) {
	      next();
	    });
	  }
	};

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "toolbar"
	  }, [_c('md-toolbar', [_c('md-button', {
	    staticClass: "md-icon-button",
	    on: {
	      "click": _vm.toggleLeftSidenav
	    }
	  }, [_c('md-icon', [_vm._v("menu")])], 1), _vm._v(" "), _c('h2', {
	    staticClass: "md-title toolbar-title"
	  }, [_vm._v(_vm._s(_vm.appName))]), _vm._v(" "), (_vm.$root.loggedIn) ? _c('div', [_c('md-menu', {
	    attrs: {
	      "md-align-trigger": ""
	    }
	  }, [_c('md-button', {
	    attrs: {
	      "md-menu-trigger": ""
	    }
	  }, [_c('md-icon', [_vm._v("account_circle")]), _vm._v(" "), _c('span', {
	    staticClass: "account-username"
	  }, [_vm._v("\n            " + _vm._s(_vm.$root.u.name) + "\n          ")])], 1), _vm._v(" "), _c('md-menu-content', [_c('md-menu-item', {
	    on: {
	      "click": function($event) {
	        _vm.routerGo('/p')
	      }
	    }
	  }, [_vm._v("\n            Account\n          ")]), _vm._v(" "), _c('md-menu-item', {
	    on: {
	      "click": function($event) {
	        _vm.routerGo('/u')
	      }
	    }
	  }, [_vm._v("\n            Dashboard\n          ")]), _vm._v(" "), _c('md-menu-item', {
	    on: {
	      "click": function($event) {
	        _vm.routerGo('/files')
	      }
	    }
	  }, [_vm._v("\n            My Files\n          ")]), _vm._v(" "), _c('md-divider'), _vm._v(" "), _c('md-menu-item', {
	    on: {
	      "click": _vm.logout
	    }
	  }, [_vm._v("\n            Log Out\n          ")])], 1)], 1)], 1) : _c('div', [_c('md-button', {
	    staticClass: "md-icon-button",
	    on: {
	      "click": _vm.visitGitHub
	    }
	  }, [_c('md-icon', [_vm._v("favorite")])], 1)], 1)], 1), _vm._v(" "), _c('md-sidenav', {
	    ref: "leftSidenav",
	    staticClass: "main-sidenav md-left md-fixed"
	  }, [_c('md-toolbar', {
	    staticClass: "md-large"
	  }, [_c('div', {
	    staticClass: "md-toolbar-container"
	  }, [_c('h2', {
	    staticClass: "md-title"
	  }, [_vm._v(_vm._s(_vm.appName))])])]), _vm._v(" "), _c('div', {
	    staticClass: "toolbar-content"
	  }, [_c('div', {
	    staticClass: "sidebar-links"
	  }, [_c('md-list', {
	    staticClass: "md-dense"
	  }, [(_vm.$root.loggedIn) ? [_c('md-list-item', {
	    on: {
	      "click": _vm.closeSidenav
	    }
	  }, [_c('router-link', {
	    attrs: {
	      "exact": "",
	      "to": "/p"
	    }
	  }, [_vm._v("Account")])], 1), _vm._v(" "), _c('md-list-item', {
	    on: {
	      "click": _vm.closeSidenav
	    }
	  }, [_c('router-link', {
	    attrs: {
	      "exact": "",
	      "to": "/u"
	    }
	  }, [_vm._v("Dashboard")])], 1), _vm._v(" "), _c('md-list-item', {
	    on: {
	      "click": _vm.closeSidenav
	    }
	  }, [_c('router-link', {
	    attrs: {
	      "exact": "",
	      "to": "/files"
	    }
	  }, [_vm._v("Files")])], 1)] : _c('md-list-item', {
	    on: {
	      "click": _vm.closeSidenav
	    }
	  }, [_c('router-link', {
	    attrs: {
	      "exact": "",
	      "to": "/"
	    }
	  }, [_vm._v("Home")])], 1), _vm._v(" "), _c('md-list-item', {
	    on: {
	      "click": _vm.closeSidenav
	    }
	  }, [_c('router-link', {
	    attrs: {
	      "exact": "",
	      "to": "/about"
	    }
	  }, [_vm._v("About")])], 1), _vm._v(" "), _c('md-list-item', [_c('span', [_vm._v("Support")]), _vm._v(" "), _c('md-list-expand', [_c('md-list', [_c('md-list-item', {
	    staticClass: "md-inset",
	    attrs: {
	      "target": "_blank",
	      "href": "https://github.com/0xFireball/PenguinUpload"
	    }
	  }, [_vm._v("\n                  GitHub\n                ")]), _vm._v(" "), _c('md-list-item', {
	    staticClass: "md-inset",
	    attrs: {
	      "href": "https://github.com/0xFireball"
	    }
	  }, [_vm._v("\n                  Donate\n                ")])], 1)], 1)], 1)], 2)], 1)])], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: "content-container"
	  }, [_c('toolbar'), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "md-router"
	    }
	  }, [_c('div', {
	    staticClass: "page-content page-view"
	  }, [_c('router-view')], 1)])], 1), _vm._v(" "), _c('md-dialog-alert', {
	    ref: "modalDialog",
	    attrs: {
	      "md-title": _vm.dialog.title,
	      "md-content-html": _vm.dialog.content
	    }
	  }), _vm._v(" "), _c('md-dialog-confirm', {
	    ref: "confirmDialog",
	    attrs: {
	      "md-title": _vm.confirm.title,
	      "md-content-html": _vm.confirm.content,
	      "md-ok-text": _vm.confirm.ok,
	      "md-cancel-text": _vm.confirm.cancel
	    },
	    on: {
	      "close": _vm.onConfirmClose
	    }
	  }), _vm._v(" "), _c('md-dialog-prompt', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.prompt.resp),
	      expression: "prompt.resp"
	    }],
	    ref: "promptDialog",
	    attrs: {
	      "md-title": _vm.prompt.title,
	      "md-ok-text": _vm.prompt.ok,
	      "md-cancel-text": _vm.prompt.cancel,
	      "md-input-placeholder": _vm.prompt.placeholder
	    },
	    domProps: {
	      "value": (_vm.prompt.resp)
	    },
	    on: {
	      "close": _vm.onPromptClose,
	      "input": function($event) {
	        _vm.prompt.resp = $event
	      }
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTMwZDEyYWMzZjcxMzYwZmZkZTgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlLXJvdXRlclwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlIiwid2VicGFjazovLy9ub3RGb3VuZC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvaW50cm8udnVlIiwid2VicGFjazovLy9pbnRyby52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvaW50cm8udnVlPzgxOGEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlPzJkMzgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbGFuZGluZy52dWUiLCJ3ZWJwYWNrOi8vL2xhbmRpbmcudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2RldkNyZWRpdHMudnVlIiwid2VicGFjazovLy9kZXZDcmVkaXRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9kZXZDcmVkaXRzLnZ1ZT85ZWZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vbG9naW4udnVlIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbG9naW4udnVlP2FmM2QiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbGFuZGluZy52dWU/NzZiNCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9hYm91dC52dWUiLCJ3ZWJwYWNrOi8vL2Fib3V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9hYm91dFdpZGdldC52dWUiLCJ3ZWJwYWNrOi8vL2Fib3V0V2lkZ2V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9hYm91dFdpZGdldC52dWU/ZGFhNiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9hYm91dC52dWU/YjBmNCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9kb3dubG9hZC52dWUiLCJ3ZWJwYWNrOi8vL2Rvd25sb2FkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9kb3dubG9hZEl0ZW0udnVlIiwid2VicGFjazovLy9kb3dubG9hZEl0ZW0udnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2Rvd25sb2FkSXRlbS52dWU/OWI4NyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9kb3dubG9hZC52dWU/ZDQ2YyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9kYXNoYm9hcmQudnVlIiwid2VicGFjazovLy9kYXNoYm9hcmQudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2ZpbGVVcGxvYWRXaWRnZXQudnVlIiwid2VicGFjazovLy9maWxlVXBsb2FkV2lkZ2V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9maWxlVXBsb2FkV2lkZ2V0LnZ1ZT9iZjE3Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9sYXlvdXRzL2Rhc2hib2FyZC52dWU/NmU4MSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9teWZpbGVzLnZ1ZSIsIndlYnBhY2s6Ly8vbXlmaWxlcy52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QudnVlIiwid2VicGFjazovLy9teUZpbGVzTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QudnVlPzY3NTYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbXlmaWxlcy52dWU/MDU3MyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9wcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vcHJvZmlsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlQcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vbXlQcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9teVByb2ZpbGUudnVlPzNjYTQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvcHJvZmlsZS52dWU/MTM1MSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9nbG9iYWwuY3NzPzI3MzQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMGl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMGl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4taXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwaXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwaXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLXJlZ3VsYXIud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi1yZWd1bGFyLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAud29mZiIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbWF0ZXJpYWwtaWNvbnMuY3NzPzg2NTEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbWF0ZXJpYWwtaWNvbnMuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmVvdCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLnR0ZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9ub3JtYWxpemUuY3NzP2M4NDgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9mZnNrZWxldG9uLmNzcz8yMGFhIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL2Zmc2tlbGV0b24uY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcInZ1ZS1tYXRlcmlhbFwiIiwid2VicGFjazovLy8uL34vdnVlLW1hdGVyaWFsL2Rpc3QvdnVlLW1hdGVyaWFsLmNzcz9hN2ZlIiwid2VicGFjazovLy8uL34vdnVlLW1hdGVyaWFsL2Rpc3QvdnVlLW1hdGVyaWFsLmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnlcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy90b29sYmFyLnZ1ZSIsIndlYnBhY2s6Ly8vdG9vbGJhci52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdG9vbGJhci52dWU/YzQ5ZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvQXBwLnZ1ZT9kMGNhIl0sIm5hbWVzIjpbInVzZSIsInJvdXRlciIsInJvdXRlcyIsImFmdGVyRWFjaCIsImN1cnJlbnRSb3V0ZSIsIm1haW5Db250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsVG9wIiwibWF0ZXJpYWwiLCJyZWdpc3RlclRoZW1lIiwiYXBwdGhlbWUiLCJwcmltYXJ5IiwiY29sb3IiLCJodWUiLCJhY2NlbnQiLCJzZXRDdXJyZW50VGhlbWUiLCJZQVNBcHAiLCJjb21wb25lbnQiLCJhcHAiLCJlbCIsIm1haW4iLCJwYXRoIiwibmFtZSIsInJlZGlyZWN0IiwicHJvcHMiLCJlcnJvciIsImNvbmNhdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7Ozs7QUFFQTs7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QTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFD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QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRCwyQzs7Ozs7O0FDekhBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNE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QUcsNkJBQTZCLHVCQUF1QixHQUFHLHNCQUFzQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRyxzQkFBc0IscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw2QkFBNkIsdUJBQXVCLEdBQUcsc0JBQXNCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNkJBQTZCLHVCQUF1QixHQUFHLHNCQUFzQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRyxzQkFBc0IscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw2QkFBNkIsdUJBQXVCLEdBQUcsc0JBQXNCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNkJBQTZCLHVCQUF1QixHQUFHLHNCQUFzQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRyxzQkFBc0IscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw2QkFBNkIsdUJBQXVCLEdBQUcsc0JBQXNCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNkJBQTZCLHVCQUF1QixHQUFHLHNCQUFzQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRyxzQkFBc0IscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw2QkFBNkIsdUJBQXVCLEdBQUcsc0JBQXNCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNkJBQTZCLHVCQUF1QixHQUFHLHNCQUFzQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRyxzQkFBc0IscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw2QkFBNkIsdUJBQXVCLEdBQUcsc0JBQXNCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNkJBQTZCLHVCQUF1QixHQUFHLHNCQUFzQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRyxzQkFBc0IscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw2QkFBNkIsdUJBQXVCLEdBQUcsdUJBQXVCLHNCQUFzQix5QkFBeUIseUJBQXlCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLDBCQUEwQiwyQkFBMkIsc0NBQXNDLEdBQUcsMkJBQTJCLDRCQUE0QixrQ0FBa0MsR0FBRyx3QkFBd0IseUJBQXlCLG9DQUFvQyxHQUFHLG1CQUFtQixvQkFBb0IsR0FBRyxHQUFHLDhCQUE4QixpQkFBaUIsOEJBQThCLDhCQUE4QixHQUFHLG9CQUFvQixpQ0FBaUMsaUNBQWlDLEdBQUcsa0JBQWtCLG9CQUFvQixvQkFBb0IsR0FBRyxxQkFBcUIsMkJBQTJCLDhCQUE4Qiw4QkFBOEIsR0FBRyxxQkFBcUIsMkJBQTJCLDhCQUE4Qiw4QkFBOEIsR0FBRyw0QkFBNEIsNkJBQTZCLEdBQUcsNEJBQTRCLDZCQUE2QixHQUFHLG9CQUFvQixvQkFBb0IsdUJBQXVCLHVCQUF1QixHQUFHLDJCQUEyQixzQkFBc0IsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsR0FBRyxzQkFBc0Isc0JBQXNCLHlCQUF5Qix5QkFBeUIsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcseUJBQXlCLDJCQUEyQixzQ0FBc0MsR0FBRywwQkFBMEIsNEJBQTRCLGtDQUFrQyxHQUFHLHVCQUF1Qix5QkFBeUIsb0NBQW9DLEdBQUcsa0JBQWtCLG9CQUFvQixHQUFHLEdBQUcsOEJBQThCLGtCQUFrQiw4QkFBOEIsOEJBQThCLEdBQUcscUJBQXFCLGlDQUFpQyxpQ0FBaUMsR0FBRyxtQkFBbUIsb0JBQW9CLG9CQUFvQixHQUFHLHNCQUFzQiwyQkFBMkIsOEJBQThCLDhCQUE4QixHQUFHLHNCQUFzQiwyQkFBMkIsOEJBQThCLDhCQUE4QixHQUFHLDZCQUE2Qiw2QkFBNkIsR0FBRyw2QkFBNkIsNkJBQTZCLEdBQUcscUJBQXFCLG9CQUFvQix1QkFBdUIsdUJBQXVCLEdBQUcsNEJBQTRCLHNCQUFzQixHQUFHLHNCQUFzQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRyxzQkFBc0IscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw2QkFBNkIsdUJBQXVCLEdBQUcsc0JBQXNCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNkJBQTZCLHVCQUF1QixHQUFHLHNCQUFzQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRyxzQkFBc0IscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw2QkFBNkIsdUJBQXVCLEdBQUcsc0JBQXNCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNkJBQTZCLHVCQUF1QixHQUFHLHNCQUFzQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRyxzQkFBc0IscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw2QkFBNkIsdUJBQXVCLEdBQUcsc0JBQXNCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNkJBQTZCLHVCQUF1QixHQUFHLHNCQUFzQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRyxzQkFBc0IscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw2QkFBNkIsdUJBQXVCLEdBQUcsc0JBQXNCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNkJBQTZCLHVCQUF1QixHQUFHLHNCQUFzQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRyxzQkFBc0IscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw2QkFBNkIsdUJBQXVCLEdBQUcsc0JBQXNCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNkJBQTZCLHVCQUF1QixHQUFHLHNCQUFzQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRyxzQkFBc0IscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw2QkFBNkIsdUJBQXVCLEdBQUcsc0JBQXNCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNkJBQTZCLHVCQUF1QixHQUFHLHVCQUF1QixzQkFBc0IseUJBQXlCLHlCQUF5QixHQUFH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QUFzQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRyxzQkFBc0IscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw2QkFBNkIsdUJBQXVCLEdBQUcsc0JBQXNCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNkJBQTZCLHVCQUF1QixHQUFHLHNCQUFzQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRyxzQkFBc0IscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw2QkFBNkIsdUJBQXVCLEdBQUcsc0JBQXNCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNkJBQTZCLHVCQUF1QixHQUFHLHNCQUFzQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRyxzQkFBc0IscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw2QkFBNkIsdUJBQXVCLEdBQUcsc0JBQXNCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNkJBQTZCLHVCQUF1QixHQUFHLHNCQUFzQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRyxzQkFBc0IscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw2QkFBNkIsdUJBQXVCLEdBQUcsc0JBQXNCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNkJBQTZCLHVCQUF1QixHQUFHLHNCQUFzQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRyxzQkFBc0IscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyw2QkFBNkIsdUJBQXVCLEdBQUcsc0JBQXNCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsNkJBQTZCLHVCQUF1QixHQUFHLHNCQUFzQixxQkFBcUIsd0JBQXdCLHdCQUF3QixHQUFHLDZCQUE2Qix1QkFBdUIsR0FBRyx1QkFBdUIsc0JBQXNCLHlCQUF5Qix5QkFBeUIsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsMEJBQTBCLDJCQUEyQixzQ0FB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bW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5MzBkMTJhYzNmNzEzNjBmZmRlOCIsIi8vIFRoZSBWdWUgYnVpbGQgdmVyc2lvbiB0byBsb2FkIHdpdGggdGhlIGBpbXBvcnRgIGNvbW1hbmRcclxuLy8gKHJ1bnRpbWUtb25seSBvciBzdGFuZGFsb25lKSBoYXMgYmVlbiBzZXQgaW4gd2VicGFjay5iYXNlLmNvbmYgd2l0aCBhbiBhbGlhcy5cclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbi8vIGltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndnVlLXJvdXRlcidcclxuXHJcbi8vIFJvdXRlc1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJ1xyXG5cclxuLy8gU3R5bGVzL2ZvbnRzXHJcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzL2dsb2JhbC5jc3MnXHJcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzL21hdGVyaWFsLWljb25zLmNzcydcclxuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzcydcclxuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvZmZza2VsZXRvbi5jc3MnXHJcblxyXG4vLyBtYXRlcmlhbFxyXG5pbXBvcnQgVnVlTWF0ZXJpYWwgZnJvbSAndnVlLW1hdGVyaWFsJ1xyXG5pbXBvcnQgJ3Z1ZS1tYXRlcmlhbC9kaXN0L3Z1ZS1tYXRlcmlhbC5jc3MnXHJcblxyXG4vLyBwbHVnaW5zXHJcblZ1ZS51c2UoVnVlUm91dGVyKVxyXG5WdWUudXNlKFZ1ZU1hdGVyaWFsKVxyXG5cclxuLy8gcm91dGVyIGNvbmZpZ1xyXG5cclxubGV0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xyXG4gIHJvdXRlc1xyXG59KVxyXG5cclxucm91dGVyLmFmdGVyRWFjaCgoY3VycmVudFJvdXRlKSA9PiB7XHJcbiAgbGV0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpXHJcblxyXG4gIGlmIChtYWluQ29udGVudCkge1xyXG4gICAgbWFpbkNvbnRlbnQuc2Nyb2xsVG9wID0gMFxyXG4gIH1cclxufSlcclxuXHJcblZ1ZS5tYXRlcmlhbC5yZWdpc3RlclRoZW1lKHtcclxuICBhcHB0aGVtZToge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBjb2xvcjogJ2N5YW4nLFxyXG4gICAgICBodWU6IDcwMFxyXG4gICAgfSxcclxuICAgIGFjY2VudDoge1xyXG4gICAgICBjb2xvcjogJ2xpZ2h0LWJsdWUnLFxyXG4gICAgICBodWU6IDYwMFxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcblZ1ZS5tYXRlcmlhbC5zZXRDdXJyZW50VGhlbWUoJ2FwcHRoZW1lJylcclxuXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcblxyXG5sZXQgWUFTQXBwID0gVnVlLmNvbXBvbmVudCgnYXBwJywgQXBwKVxyXG5cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuY29uc3QgYXBwID0gbmV3IFlBU0FwcCh7XHJcbiAgZWw6ICcjYXBwJyxcclxuICByb3V0ZXJcclxufSlcclxuXHJcbi8vIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xyXG4vLyBuZXcgVnVlKHtcclxuLy8gICBlbDogJyNhcHAnLFxyXG4vLyAgIHRlbXBsYXRlOiAnPEFwcCAvPicsXHJcbi8vICAgY29tcG9uZW50czogeyBBcHAgfVxyXG4vLyB9KVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvbWFpbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZ1ZVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZS1yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2dWUtcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2xheW91dHMvbm90Rm91bmQnXHJcbmltcG9ydCBMYW5kaW5nIGZyb20gJy4vbGF5b3V0cy9sYW5kaW5nJ1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9sYXlvdXRzL2Fib3V0J1xyXG5pbXBvcnQgRG93bmxvYWQgZnJvbSAnLi9sYXlvdXRzL2Rvd25sb2FkJ1xyXG5cclxuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuL2xheW91dHMvZGFzaGJvYXJkJ1xyXG5pbXBvcnQgTXlGaWxlcyBmcm9tICcuL2xheW91dHMvbXlmaWxlcydcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi9sYXlvdXRzL3Byb2ZpbGUnXHJcblxyXG5jb25zdCBtYWluID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIG5hbWU6ICdsYW5kaW5nJyxcclxuICAgIGNvbXBvbmVudDogTGFuZGluZ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy9ob21lJyxcclxuICAgIHJlZGlyZWN0OiAnLydcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvYWJvdXQnLFxyXG4gICAgbmFtZTogJ0Fib3V0JyxcclxuICAgIGNvbXBvbmVudDogQWJvdXRcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvdScsXHJcbiAgICBuYW1lOiAnZGFzaGJvYXJkJyxcclxuICAgIGNvbXBvbmVudDogRGFzaGJvYXJkXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL2ZpbGVzJyxcclxuICAgIG5hbWU6ICdteSBmaWxlcycsXHJcbiAgICBjb21wb25lbnQ6IE15RmlsZXNcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvZmlsZXMvOmRpcicsXHJcbiAgICBuYW1lOiAnbXkgZmlsZXMgbmF2aWdhdGlvbicsXHJcbiAgICBjb21wb25lbnQ6IE15RmlsZXMsXHJcbiAgICBwcm9wczogdHJ1ZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy9wJyxcclxuICAgIG5hbWU6ICdwcm9maWxlJyxcclxuICAgIGNvbXBvbmVudDogUHJvZmlsZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy9kLzppZC86cGFzcycsXHJcbiAgICBuYW1lOiAnZG93bmxvYWQgKHdpdGggcGFzcyknLFxyXG4gICAgY29tcG9uZW50OiBEb3dubG9hZFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy9kLzppZCcsXHJcbiAgICBuYW1lOiAnZG93bmxvYWQnLFxyXG4gICAgY29tcG9uZW50OiBEb3dubG9hZFxyXG4gIH1cclxuXVxyXG5cclxuY29uc3QgZXJyb3IgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJyonLFxyXG4gICAgbmFtZTogJ2Vycm9yJyxcclxuICAgIGNvbXBvbmVudDogTm90Rm91bmRcclxuICB9XHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFtdLmNvbmNhdChtYWluLCBlcnJvcilcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL3JvdXRlcy5qcyIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9ub3RGb3VuZC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTBmNzZkN2E5IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL25vdEZvdW5kLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxsYXlvdXRzXFxcXG5vdEZvdW5kLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtMGY3NmQ3YTlcIlxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBub3RGb3VuZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9sYXlvdXRzL25vdEZvdW5kLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cIm5vdC1mb3VuZFwiPlxyXG4gICAgPGRpdiBpZD1cImFwcFwiIGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBpZD1cImludHJvLWFyZWFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidHdlbHZlIGNvbHVtbnNcIj5cclxuICAgICAgICAgIDxpbnRybz48L2ludHJvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm5vdC1mb3VuZC1jb250ZW50XCI+XHJcbiAgICAgICAgPGgxPjQwNC4gVGhhdCdzIGFuIGVycm9yLjwvaDE+XHJcbiAgICAgICAgPGgzPlRoZSBwYWdlIHlvdSB3ZXJlIGxvb2tpbmcgZm9yIGNvdWxkbid0IGJlIGZvdW5kLjwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBJbnRyb1xyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgLm5vdC1mb3VuZC1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBub3RGb3VuZC52dWU/NTYwNjU5Y2MiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW50cm8udnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1kNTY2MzkyNiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbnRyby52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiQzpcXFxcVXNlcnNcXFxcTmloYWwuVGFsdXIxOVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXFBlbmd1aW5VcGxvYWRcXFxcUGVuZ3VpblVwbG9hZFxcXFxzcmNcXFxcUGVuZ3VpblVwbG9hZFxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFxpbnRyby52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LWQ1NjYzOTI2XCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gaW50cm8udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9pbnRyby52dWVcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJpbnRyb1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8aDEgY2xhc3M9XCJhcHAtdGl0bGVcIj57eyB2aWV3VGl0bGUgfHwgYXBwVGl0bGUgfX08L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiBbJ3ZpZXdUaXRsZSddLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBhcHBUaXRsZTogJ1Blbmd1aW5VcGxvYWQnLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC5pbnRybyB7XHJcbiAgICBtYXJnaW4tdG9wOiA4JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmFwcC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGludHJvLnZ1ZT8wNTIxMmM4YSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImludHJvXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhcHAtdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udmlld1RpdGxlIHx8IF92bS5hcHBUaXRsZSkpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWQ1NjYzOTI2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9pbnRyby52dWVcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibm90LWZvdW5kXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJhcHBcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJpbnRyby1hcmVhXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInR3ZWx2ZSBjb2x1bW5zXCJcbiAgfSwgW19jKCdpbnRybycpXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibm90LWZvdW5kLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2gxJywgW192bS5fdihcIjQwNC4gVGhhdCdzIGFuIGVycm9yLlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDMnLCBbX3ZtLl92KFwiVGhlIHBhZ2UgeW91IHdlcmUgbG9va2luZyBmb3IgY291bGRuJ3QgYmUgZm91bmQuXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTBmNzZkN2E5IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9ub3RGb3VuZC52dWVcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9sYW5kaW5nLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtYmNjZTVlNjYhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbGFuZGluZy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiQzpcXFxcVXNlcnNcXFxcTmloYWwuVGFsdXIxOVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXFBlbmd1aW5VcGxvYWRcXFxcUGVuZ3VpblVwbG9hZFxcXFxzcmNcXFxcUGVuZ3VpblVwbG9hZFxcXFxDbGllbnRBcHBcXFxcbGF5b3V0c1xcXFxsYW5kaW5nLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtYmNjZTVlNjZcIlxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBsYW5kaW5nLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2xheW91dHMvbGFuZGluZy52dWVcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwic2hyaW5rLWxheW91dFwiPlxyXG4gICAgPCEtLTxpbWcgc3JjPVwiLi9hc3NldHMvbG9nby5wbmdcIj4tLT5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3cgaW50cm8tYXJlYVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0d2VsdmUgY29sdW1uc1wiPlxyXG4gICAgICAgICAgPGludHJvPjwvaW50cm8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpeCBjb2x1bW5zIG9mZnNldC1ieS10aHJlZVwiPlxyXG4gICAgICAgICAgPGxvZ2luPjwvbG9naW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPGRldkNyZWRpdHM+PC9kZXZDcmVkaXRzPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcclxuICBpbXBvcnQgZGV2Q3JlZGl0cyBmcm9tICcuLi9jb21wb25lbnRzL2RldkNyZWRpdHMnXHJcbiAgaW1wb3J0IExvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvbG9naW4nXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIEludHJvLFxyXG4gICAgICBMb2dpbixcclxuICAgICAgZGV2Q3JlZGl0c1xyXG4gICAgfSxcclxuICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcclxuICAgICAgbmV4dCh2bSA9PiB7XHJcbiAgICAgICAgaWYgKHZtLiRyb290LmxvZ2dlZEluKSB7XHJcbiAgICAgICAgICB2bS4kcm91dGVyLnJlcGxhY2UoJy91JylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgLnNocmluay1sYXlvdXQge1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxuICB9XHJcblxyXG4gIC5pbnRyby1hcmVhIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gIH1cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGFuZGluZy52dWU/MTk0NTAzOWUiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZGV2Q3JlZGl0cy52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTI2OTg4ZmQ4IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2RldkNyZWRpdHMudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkM6XFxcXFVzZXJzXFxcXE5paGFsLlRhbHVyMTlcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxQZW5ndWluVXBsb2FkXFxcXFBlbmd1aW5VcGxvYWRcXFxcc3JjXFxcXFBlbmd1aW5VcGxvYWRcXFxcQ2xpZW50QXBwXFxcXGNvbXBvbmVudHNcXFxcZGV2Q3JlZGl0cy52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTI2OTg4ZmQ4XCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZGV2Q3JlZGl0cy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2RldkNyZWRpdHMudnVlXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImRldi1jcmVkaXRzXCI+XHJcbiAgICA8aDYgY2xhc3M9XCJjcmVkaXQtdGV4dFwiPk1hZGUgYnkgPGEgaHJlZj1cImh0dHBzOi8vMHhmaXJlYmFsbC5tZVwiIHRhcmdldD1cIl9ibGFua1wiPjB4RmlyZWJhbGw8L2E+IG9mIDxhIGhyZWY9XCJodHRwczovL2lyaWRpdW1pb24ueHl6XCIgdGFyZ2V0PVwiX2JsYW5rXCI+SXJpZGl1bUlvbiBTb2Z0d2FyZTwvYT48L2g2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAuZGV2LWNyZWRpdHMge1xyXG4gICAgbWFyZ2luOiAyJTtcclxuICB9XHJcbiAgXHJcbiAgaDYuY3JlZGl0LXRleHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRldkNyZWRpdHMudnVlPzE5ZWMwOWZjIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF92bS5fbSgwKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGV2LWNyZWRpdHNcIlxuICB9LCBbX2MoJ2g2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNyZWRpdC10ZXh0XCJcbiAgfSwgW192bS5fdihcIk1hZGUgYnkgXCIpLCBfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly8weGZpcmViYWxsLm1lXCIsXG4gICAgICBcInRhcmdldFwiOiBcIl9ibGFua1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiMHhGaXJlYmFsbFwiKV0pLCBfdm0uX3YoXCIgb2YgXCIpLCBfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9pcmlkaXVtaW9uLnh5elwiLFxuICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIklyaWRpdW1Jb24gU29mdHdhcmVcIildKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yNjk4OGZkOCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZGV2Q3JlZGl0cy52dWVcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9sb2dpbi52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTBhM2ViNDJjIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXGxvZ2luLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtMGEzZWI0MmNcIlxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBsb2dpbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJsb2dpblwiPlxyXG4gICAgPG1kLXRhYnMgY2xhc3M9XCJtZC1hY2NlbnRcIiByZWY9XCJhdXRoT3B0aW9uVGFic1wiPlxyXG4gICAgICA8bWQtdGFiIGlkPVwidC1sb2dpblwiIG1kLWxhYmVsPVwiTG9nIEluXCI+XHJcbiAgICAgICAgPGZvcm0gdi1vbjpzdWJtaXQucHJldmVudD1cInRyeUxvZ2luXCI+XHJcbiAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bGFiZWw+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bWQtaW5wdXQgdi1tb2RlbD1cImxvZ2luLnVzZXJuYW1lXCI+PC9tZC1pbnB1dD5cclxuICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxyXG4gICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lciBtZC1oYXMtcGFzc3dvcmQ+XHJcbiAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwibG9naW4ucGFzc3dvcmRcIj48L21kLWlucHV0PlxyXG4gICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj57eyBsb2dpbi5lcnIgfX08L3A+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiaW52aXNpYmxlXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiIHYtb246Y2xpY2s9XCJ0cnlMb2dpblwiIDpkaXNhYmxlZD1cIiFsb2dpbi5lXCI+TG9nIEluPC9tZC1idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L21kLXRhYj5cclxuXHJcbiAgICAgIDxtZC10YWIgaWQ9XCJ0LXNpZ251cFwiIG1kLWxhYmVsPVwiU2lnbiBVcFwiPlxyXG4gICAgICAgIDxmb3JtIHYtb246c3VibWl0LnByZXZlbnQ9XCJ0cnlSZWdpc3RlclwiPlxyXG4gICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGxhYmVsPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgPG1kLWlucHV0IHYtbW9kZWw9XCJyZWdpc3Rlci51c2VybmFtZVwiPjwvbWQtaW5wdXQ+XHJcbiAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXIgbWQtaGFzLXBhc3N3b3JkPlxyXG4gICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bWQtaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cInJlZ2lzdGVyLnBhc3N3b3JkXCI+PC9tZC1pbnB1dD5cclxuICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxyXG4gICAgICAgICAgPG1kLWlucHV0LWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGxhYmVsPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bWQtaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cInJlZ2lzdGVyLmNvbmZpcm1cIj48L21kLWlucHV0PlxyXG4gICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XHJcbiAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bGFiZWw+SW52aXRlIEtleSAob3B0aW9uYWwpPC9sYWJlbD5cclxuICAgICAgICAgICAgPG1kLWlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJyZWdpc3Rlci5pbnZpdGVLZXlcIj48L21kLWlucHV0PlxyXG4gICAgICAgICAgPC9tZC1pbnB1dC1jb250YWluZXI+XHJcbiAgICAgICAgICA8bWQtY2hlY2tib3ggdi1tb2RlbD1cInJlZ2lzdGVyLmlhY2NlcHRcIj5JIGFjY2VwdCB0aGUgVGVybXMgYW5kIENvbmRpdGlvbnM8L21kLWNoZWNrYm94PlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+e3sgcmVnaXN0ZXIuZXJyIH19PC9wPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImludmlzaWJsZVwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcmFpc2VkIG1kLXByaW1hcnlcIiB2LW9uOmNsaWNrPVwidHJ5UmVnaXN0ZXJcIiA6ZGlzYWJsZWQ9XCIhcmVnaXN0ZXIuZVwiPlNpZ24gVXA8L21kLWJ1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvbWQtdGFiPlxyXG4gICAgPC9tZC10YWJzPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbiAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG4gIGxldCBheGlvc1JlcXVlc3RDb25maWcgPSB7XHJcbiAgICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gKHN0YXR1cykge1xyXG4gICAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCA1MDBcclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ2xvZ2luJyxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbG9naW46IHtcclxuICAgICAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgIGVycjogJycsXHJcbiAgICAgICAgICBlOiB0cnVlIC8vIGVuYWJsZWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZ2lzdGVyOiB7XHJcbiAgICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICBjb25maXJtOiAnJyxcclxuICAgICAgICAgIGlhY2NlcHQ6ICcnLFxyXG4gICAgICAgICAgaW52aXRlS2V5OiAnJyxcclxuICAgICAgICAgIGVycjogJycsXHJcbiAgICAgICAgICBlOiB0cnVlIC8vIGVuYWJsZWRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHRyeUxvZ2luOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gbm90aGluZ1xyXG4gICAgICAgIGxldCB2bSA9IHRoaXNcclxuICAgICAgICBpZiAoIXZtLmxvZ2luLmUpIHJldHVyblxyXG4gICAgICAgIGlmICghdm0ubG9naW4ucGFzc3dvcmQgfHwgIXZtLmxvZ2luLnVzZXJuYW1lKSB7XHJcbiAgICAgICAgICB2bS5sb2dpbi5lcnIgPSAnY3JlZGVudGlhbHMgY2Fubm90IGJlIGVtcHR5J1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZtLmxvZ2luLmUgPSBmYWxzZVxyXG4gICAgICAgIC8vIHJlc2V0IGVycm9yIG1lc3NhZ2VcclxuICAgICAgICB2bS5sb2dpbi5lcnIgPSAnJ1xyXG4gICAgICAgIC8vIHNlbmQgbG9naW4gcG9zdFxyXG4gICAgICAgIGF4aW9zLnBvc3QoJy9sb2dpbicsIHtcclxuICAgICAgICAgIHVzZXJuYW1lOiB2bS5sb2dpbi51c2VybmFtZSxcclxuICAgICAgICAgIHBhc3N3b3JkOiB2bS5sb2dpbi5wYXNzd29yZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgLy8gVE9ETzogcHJvY2VzcyByZXNwb25zZVxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAvLyBzdWNjZWVkZWRcclxuICAgICAgICAgICAgICAvLyB2bS4kcm9vdC5sb2dnZWRJbiA9IHRydWVcclxuICAgICAgICAgICAgICAvLyBwdXNoIHVzZXIgaW5mb1xyXG4gICAgICAgICAgICAgIHZtLiRyb290LnUua2V5ID0gcmVzcG9uc2UuZGF0YS5hcGlrZXlcclxuICAgICAgICAgICAgICB2bS4kcm9vdC51Lm5hbWUgPSByZXNwb25zZS5kYXRhLnVzZXIudXNlcm5hbWVcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2bS4kcm9vdC51Lm5hbWUpXHJcbiAgICAgICAgICAgICAgdm0uJHJvdXRlci5wdXNoKCcvdScpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xyXG4gICAgICAgICAgICAgIC8vIHVuYXV0aG9yaXplZFxyXG4gICAgICAgICAgICAgIHZtLmxvZ2luLmVyciA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2bS5sb2dpbi5lID0gdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gVE9ETzogaGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIHZtLmxvZ2luLmVyciA9ICdpbnZhbGlkIGxvZ2luIGNyZWRlbnRpYWxzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZtLmxvZ2luLmUgPSB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICB0cnlSZWdpc3RlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB2bSA9IHRoaXNcclxuICAgICAgICBpZiAoIXZtLnJlZ2lzdGVyLmUpIHJldHVyblxyXG4gICAgICAgIC8vIG1ha2Ugc3VyZSBjb25maXJtYXRpb24gaXMgY29ycmVjdFxyXG4gICAgICAgIGlmICh2bS5yZWdpc3Rlci51c2VybmFtZS5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICB2bS5yZWdpc3Rlci5lcnIgPSAndXNlcm5hbWUgbXVzdCBiZSBhdCBsZWFzdCAzIGNoYXJhY3RlcnMuIHRoaXMgaXMgYWxzbyB2YWxpZGF0ZWQgb24gdGhlIHNlcnZlcidcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodm0ucmVnaXN0ZXIucGFzc3dvcmQubGVuZ3RoIDwgOCkge1xyXG4gICAgICAgICAgdm0ucmVnaXN0ZXIuZXJyID0gJ3Bhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzLiB0aGlzIGlzIGFsc28gdmFsaWRhdGVkIG9uIHRoZSBzZXJ2ZXInXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF2bS5yZWdpc3Rlci5pYWNjZXB0KSB7XHJcbiAgICAgICAgICB2bS5yZWdpc3Rlci5lcnIgPSAneW91IG11c3QgYWNjZXB0IHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucydcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodm0ucmVnaXN0ZXIucGFzc3dvcmQgIT09IHZtLnJlZ2lzdGVyLmNvbmZpcm0pIHtcclxuICAgICAgICAgIHZtLnJlZ2lzdGVyLmVyciA9ICdwYXNzd29yZCBjb25maXJtYXRpb24gZG9lcyBub3QgbWF0Y2gnXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdm0ucmVnaXN0ZXIuZSA9IGZhbHNlXHJcbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZVxyXG4gICAgICAgIHZtLnJlZ2lzdGVyLmVyciA9ICcnXHJcbiAgICAgICAgLy8gc2VuZCByZWdpc3RlciBwb3N0XHJcbiAgICAgICAgYXhpb3MucG9zdCgnL3JlZ2lzdGVyJywge1xyXG4gICAgICAgICAgdXNlcm5hbWU6IHZtLnJlZ2lzdGVyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IHZtLnJlZ2lzdGVyLnBhc3N3b3JkLFxyXG4gICAgICAgICAgaW52aXRlS2V5OiB2bS5yZWdpc3Rlci5pbnZpdGVLZXlcclxuICAgICAgICB9LCBheGlvc1JlcXVlc3RDb25maWcpXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgLy8gVE9ETzogcHJvY2VzcyByZXNwb25zZVxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAvLyByZWdpc3RyYXRpb24gc3VjY2VlZGVkXHJcbiAgICAgICAgICAgICAgdm0uJHJvb3Quc2hvd1BvcHVwKCdSZWdpc3RyYXRpb24gc3VjY2VlZGVkISBZb3UgbWF5IG5vdyBsb2cgaW4uJywgJ1N1Y2Nlc3MnKVxyXG4gICAgICAgICAgICAgIC8vIHRoaXMuJHJlZnMuYXV0aE9wdGlvblRhYnMuY2hhbmdlVGFiKCd0LWxvZ2luJylcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICAgIC8vIHVuYXV0aG9yaXplZCBiZWNhdXNlIG9mIGVycm9yXHJcbiAgICAgICAgICAgICAgdm0ucmVnaXN0ZXIuZXJyID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZtLnJlZ2lzdGVyLmUgPSB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2bS5yZWdpc3Rlci5lID0gdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAuaW52aXNpYmxlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsb2dpbi52dWU/NGFjYjYyYjQiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImF4aW9zXCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxvZ2luXCJcbiAgfSwgW19jKCdtZC10YWJzJywge1xuICAgIHJlZjogXCJhdXRoT3B0aW9uVGFic1wiLFxuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWFjY2VudFwiXG4gIH0sIFtfYygnbWQtdGFiJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidC1sb2dpblwiLFxuICAgICAgXCJtZC1sYWJlbFwiOiBcIkxvZyBJblwiXG4gICAgfVxuICB9LCBbX2MoJ2Zvcm0nLCB7XG4gICAgb246IHtcbiAgICAgIFwic3VibWl0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLnRyeUxvZ2luKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnbWQtaW5wdXQtY29udGFpbmVyJywgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJVc2VybmFtZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ubG9naW4udXNlcm5hbWUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJsb2dpbi51c2VybmFtZVwiXG4gICAgfV0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5sb2dpbi51c2VybmFtZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ubG9naW4udXNlcm5hbWUgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dC1jb250YWluZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtaGFzLXBhc3N3b3JkXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCBbX3ZtLl92KFwiUGFzc3dvcmRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmxvZ2luLnBhc3N3b3JkKSxcbiAgICAgIGV4cHJlc3Npb246IFwibG9naW4ucGFzc3dvcmRcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwYXNzd29yZFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmxvZ2luLnBhc3N3b3JkKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5sb2dpbi5wYXNzd29yZCA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZXJyb3ItbWVzc2FnZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5sb2dpbi5lcnIpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW52aXNpYmxlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInN1Ym1pdFwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6ICFfdm0ubG9naW4uZVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnRyeUxvZ2luXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTG9nIEluXCIpXSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtdGFiJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwidC1zaWdudXBcIixcbiAgICAgIFwibWQtbGFiZWxcIjogXCJTaWduIFVwXCJcbiAgICB9XG4gIH0sIFtfYygnZm9ybScsIHtcbiAgICBvbjoge1xuICAgICAgXCJzdWJtaXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0udHJ5UmVnaXN0ZXIoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdtZC1pbnB1dC1jb250YWluZXInLCBbX2MoJ2xhYmVsJywgW192bS5fdihcIlVzZXJuYW1lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5yZWdpc3Rlci51c2VybmFtZSksXG4gICAgICBleHByZXNzaW9uOiBcInJlZ2lzdGVyLnVzZXJuYW1lXCJcbiAgICB9XSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnJlZ2lzdGVyLnVzZXJuYW1lKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5yZWdpc3Rlci51c2VybmFtZSA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0LWNvbnRhaW5lcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC1oYXMtcGFzc3dvcmRcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJQYXNzd29yZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ucmVnaXN0ZXIucGFzc3dvcmQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJyZWdpc3Rlci5wYXNzd29yZFwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucmVnaXN0ZXIucGFzc3dvcmQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnJlZ2lzdGVyLnBhc3N3b3JkID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQtY29udGFpbmVyJywgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJDb25maXJtIFBhc3N3b3JkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5yZWdpc3Rlci5jb25maXJtKSxcbiAgICAgIGV4cHJlc3Npb246IFwicmVnaXN0ZXIuY29uZmlybVwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucmVnaXN0ZXIuY29uZmlybSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucmVnaXN0ZXIuY29uZmlybSA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0LWNvbnRhaW5lcicsIFtfYygnbGFiZWwnLCBbX3ZtLl92KFwiSW52aXRlIEtleSAob3B0aW9uYWwpXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5yZWdpc3Rlci5pbnZpdGVLZXkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJyZWdpc3Rlci5pbnZpdGVLZXlcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwYXNzd29yZFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnJlZ2lzdGVyLmludml0ZUtleSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucmVnaXN0ZXIuaW52aXRlS2V5ID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtY2hlY2tib3gnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0ucmVnaXN0ZXIuaWFjY2VwdCksXG4gICAgICBleHByZXNzaW9uOiBcInJlZ2lzdGVyLmlhY2NlcHRcIlxuICAgIH1dLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucmVnaXN0ZXIuaWFjY2VwdClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucmVnaXN0ZXIuaWFjY2VwdCA9ICRldmVudFxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkkgYWNjZXB0IHRoZSBUZXJtcyBhbmQgQ29uZGl0aW9uc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJlcnJvci1tZXNzYWdlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnJlZ2lzdGVyLmVycikpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnZpc2libGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogIV92bS5yZWdpc3Rlci5lXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udHJ5UmVnaXN0ZXJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJTaWduIFVwXCIpXSldLCAxKV0pXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0wYTNlYjQyYyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaHJpbmstbGF5b3V0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93IGludHJvLWFyZWFcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0d2VsdmUgY29sdW1uc1wiXG4gIH0sIFtfYygnaW50cm8nKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2l4IGNvbHVtbnMgb2Zmc2V0LWJ5LXRocmVlXCJcbiAgfSwgW19jKCdsb2dpbicpXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RldkNyZWRpdHMnKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWJjY2U1ZTY2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9sYW5kaW5nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Fib3V0LnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNWZjNTVlYzMhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYWJvdXQudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkM6XFxcXFVzZXJzXFxcXE5paGFsLlRhbHVyMTlcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxQZW5ndWluVXBsb2FkXFxcXFBlbmd1aW5VcGxvYWRcXFxcc3JjXFxcXFBlbmd1aW5VcGxvYWRcXFxcQ2xpZW50QXBwXFxcXGxheW91dHNcXFxcYWJvdXQudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi01ZmM1NWVjM1wiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGFib3V0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2xheW91dHMvYWJvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImFib3V0XCI+XHJcbiAgICA8ZGl2IGlkPVwiYXBwXCIgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIGlkPVwiaW50cm8tYXJlYVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0d2VsdmUgY29sdW1uc1wiPlxyXG4gICAgICAgICAgPGludHJvPjwvaW50cm8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtY29udGVudFwiPlxyXG4gICAgICAgIDxhYm91dD48L2Fib3V0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm8nXHJcbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL2Fib3V0V2lkZ2V0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIEludHJvLFxyXG4gICAgQWJvdXRcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC5hYm91dC1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qZm9udC13ZWlnaHQ6IDYwMDsqL1xyXG4gIH1cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYWJvdXQudnVlPzIwZWI3Zjg0IiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Fib3V0V2lkZ2V0LnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNGNlMWE4MWMhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYWJvdXRXaWRnZXQudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkM6XFxcXFVzZXJzXFxcXE5paGFsLlRhbHVyMTlcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxQZW5ndWluVXBsb2FkXFxcXFBlbmd1aW5VcGxvYWRcXFxcc3JjXFxcXFBlbmd1aW5VcGxvYWRcXFxcQ2xpZW50QXBwXFxcXGNvbXBvbmVudHNcXFxcYWJvdXRXaWRnZXQudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi00Y2UxYTgxY1wiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGFib3V0V2lkZ2V0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvYWJvdXRXaWRnZXQudnVlXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImFib3V0V2lkZ2V0XCI+XHJcbiAgICA8aDU+QWJvdXQge3sgYXBwTmFtZSB9fTwvaDU+XHJcbiAgICA8cD5cclxuICAgICAgUGVuZ3VpblVwbG9hZCBpcyBhIHNlbGYtaG9zdGFibGUsIGZ1bGx5IGZlYXR1cmVkIHdlYiBhcHBsaWNhdGlvbiB0aGF0IGxldHMgdXNlcnMgdXBsb2FkIGFuZCBzaGFyZSBmaWxlcy5cclxuICAgIDwvcD5cclxuICAgIDxoNj5cclxuICAgICAgUGVuZ3VpblVwbG9hZCB2ZXJzaW9uIHt7IGFwcFZlcnNpb24gfX1cclxuICAgIDwvaDY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBhcHBOYW1lOiAnUGVuZ3VpblVwbG9hZCcsXHJcbiAgICAgICAgYXBwVmVyc2lvbjogd2luZG93LiRhcHBWZXJzaW9uXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAuYWJvdXRXaWRnZXQge1xyXG4gICAgbWFyZ2luOiAyJTtcclxuICB9XHJcbiAgXHJcbiAgaDYuY3JlZGl0LXRleHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFib3V0V2lkZ2V0LnZ1ZT82NTVlOGMwYSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFib3V0V2lkZ2V0XCJcbiAgfSwgW19jKCdoNScsIFtfdm0uX3YoXCJBYm91dCBcIiArIF92bS5fcyhfdm0uYXBwTmFtZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW192bS5fdihcIlxcbiAgICBQZW5ndWluVXBsb2FkIGlzIGEgc2VsZi1ob3N0YWJsZSwgZnVsbHkgZmVhdHVyZWQgd2ViIGFwcGxpY2F0aW9uIHRoYXQgbGV0cyB1c2VycyB1cGxvYWQgYW5kIHNoYXJlIGZpbGVzLlxcbiAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdoNicsIFtfdm0uX3YoXCJcXG4gICAgUGVuZ3VpblVwbG9hZCB2ZXJzaW9uIFwiICsgX3ZtLl9zKF92bS5hcHBWZXJzaW9uKSArIFwiXFxuICBcIildKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTRjZTFhODFjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9hYm91dFdpZGdldC52dWVcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFib3V0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJhcHBcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJpbnRyby1hcmVhXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInR3ZWx2ZSBjb2x1bW5zXCJcbiAgfSwgW19jKCdpbnRybycpXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhYm91dC1jb250ZW50XCJcbiAgfSwgW19jKCdhYm91dCcpXSwgMSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTVmYzU1ZWMzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9hYm91dC52dWVcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9kb3dubG9hZC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTNlZGMyMzQyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Rvd25sb2FkLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxsYXlvdXRzXFxcXGRvd25sb2FkLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtM2VkYzIzNDJcIlxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBkb3dubG9hZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9sYXlvdXRzL2Rvd25sb2FkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJzaHJpbmstbGF5b3V0XCI+XHJcbiAgICA8IS0tPGltZyBzcmM9XCIuL2Fzc2V0cy9sb2dvLnBuZ1wiPi0tPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvdyBkb3dubG9hZC1hcmVhXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0d2VsdmUgY29sdW1uc1wiPlxyXG4gICAgICAgIDxpbnRybz48L2ludHJvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2l4IGNvbHVtbnMgb2Zmc2V0LWJ5LXRocmVlXCI+XHJcbiAgICAgICAgPGRvd25sb2FkSXRlbSA6aXRlbUlkPVwiJHJvdXRlLnBhcmFtcy5pZFwiIDppdGVtUGFzcz1cIiRyb3V0ZS5wYXJhbXMucGFzc1wiPjwvZG93bmxvYWRJdGVtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRldkNyZWRpdHM+PC9kZXZDcmVkaXRzPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcclxuICBpbXBvcnQgZGV2Q3JlZGl0cyBmcm9tICcuLi9jb21wb25lbnRzL2RldkNyZWRpdHMnXHJcbiAgaW1wb3J0IGRvd25sb2FkSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL2Rvd25sb2FkSXRlbSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgSW50cm8sXHJcbiAgICAgIGRvd25sb2FkSXRlbSxcclxuICAgICAgZGV2Q3JlZGl0c1xyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC5zaHJpbmstbGF5b3V0IHtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gIH1cclxuXHJcbiAgLmRvd25sb2FkLWFyZWEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkb3dubG9hZC52dWU/Y2E5ZjIwNzIiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZG93bmxvYWRJdGVtLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMDJmYTE4NGEhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZG93bmxvYWRJdGVtLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXGRvd25sb2FkSXRlbS52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTAyZmExODRhXCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZG93bmxvYWRJdGVtLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZG93bmxvYWRJdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJkb3dubG9hZC1pdGVtXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWQtdGl0bGVcIj5GaWxlIERvd25sb2FkPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZG93bmxvYWQtYXJlYS1wYWRkaW5nXCI+XHJcbiAgICAgIDxkaXYgdi1pZj1cImxvYWRpbmdcIj5cclxuICAgICAgICA8bWQtc3Bpbm5lciA6bWQtc3Ryb2tlPVwiMS41XCIgbWQtaW5kZXRlcm1pbmF0ZT48L21kLXNwaW5uZXI+XHJcbiAgICAgICAgPGg1PkxvYWRpbmcgRmlsZSBJbmZvcm1hdGlvbjwvaDU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHYtZWxzZT5cclxuICAgICAgICA8bWQtaWNvbiBtZC10aGVtZT1cImxpZ2h0LWJsdWVcIiBjbGFzcz1cIm1kLXByaW1hcnlcIj5pbnNlcnRfZHJpdmVfZmlsZTwvbWQtaWNvbj5cclxuICAgICAgICA8aDU+e3sgZmlsZS5uYW1lIH19PC9oNT5cclxuICAgICAgICA8cD57eyBmaWxlLnNpemVUZXh0IH19PC9wPlxyXG4gICAgICAgIDxkaXYgdi1pZj1cIiFlcnJvclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxtZC1idXR0b24gQGNsaWNrPVwiZG93bmxvYWRGaWxlXCI+XHJcbiAgICAgICAgICAgICAgPG1kLWljb24gdi1pZj1cImZpbGUucGFzcy5sZW5ndGggPiAwXCI+bG9jazwvbWQtaWNvbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICBEb3dubG9hZFxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbWQtYnV0dG9uPlxyXG4gICAgICAgICAgICA8IS0tPG1kLWJ1dHRvbj5Db3B5IExpbms8L21kLWJ1dHRvbj4tLT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuICBsZXQgYXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xyXG4gICAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIChzdGF0dXMpIHtcclxuICAgICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgNTAwXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczogWydpdGVtSWQnLCAnaXRlbVBhc3MnXSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGZpbGU6IHtcclxuICAgICAgICAgIG5hbWU6ICdMb2FkaW5nJyxcclxuICAgICAgICAgIHNpemU6ICdyZXRyaWV2aW5nIGluZm9ybWF0aW9uIGZyb20gc2VydmVyJyxcclxuICAgICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgICAgcGFzczogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgICBjSXRlbVBhc3M6ICcnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGRvd25sb2FkRmlsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9hcGkvZG93bmxvYWQvJyArIHRoaXMuZmlsZS5pZCArICh0aGlzLmZpbGUucGFzcyA/ICchJyArIHRoaXMuZmlsZS5wYXNzIDogJycpXHJcbiAgICAgIH0sXHJcbiAgICAgIHVwZGF0ZUZpbGVJbmZvOiBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICAgIGxldCBzdWZmaXggPSBrZXkgPyAnIScgKyBrZXkgOiAnJ1xyXG4gICAgICAgIHZtLmZpbGUuaWQgPSB2bS5pdGVtSWRcclxuICAgICAgICBheGlvcy5nZXQoJy9hcGkvZmlsZWluZm8vJyArIHZtLmZpbGUuaWQgKyBzdWZmaXgsIGF4aW9zUmVxdWVzdENvbmZpZylcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgIHZtLmZpbGUubmFtZSA9IHJlc3BvbnNlLmRhdGEubmFtZVxyXG4gICAgICAgICAgICAgIHZtLmZpbGUuc2l6ZVRleHQgPSB2bS4kcm9vdC5odW1hbkZpbGVTaXplKHJlc3BvbnNlLmRhdGEuc2l6ZSlcclxuICAgICAgICAgICAgICB2bS5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICBpZiAoc3VmZml4KSB7XHJcbiAgICAgICAgICAgICAgICB2bS5maWxlLnBhc3MgPSBrZXlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xyXG4gICAgICAgICAgICAgIC8vIGZpbGUgaXMgcGFzc3dvcmQgcHJvdGVjdGVkXHJcbiAgICAgICAgICAgICAgdm0uJHJvb3Quc2hvd1Byb21wdCgnRW50ZXIgcGFzc3dvcmQnLCAnRmlsZSBwYXNzd29yZCcsIGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uZGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgaWYgKHIpIHtcclxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdm0udXBkYXRlRmlsZUluZm8ocilcclxuICAgICAgICAgICAgICAgICAgfSwgNTAwKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdm0uZmlsZS5uYW1lID0gJ0luY29ycmVjdCBQYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgdm0uZmlsZS5zaXplVGV4dCA9ICdBY2Nlc3MgRGVuaWVkJ1xyXG4gICAgICAgICAgICAgICAgICB2bS5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgdm0uZXJyb3IgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIC8vIGZpbGUgbm90IGZvdW5kXHJcbiAgICAgICAgICAgIHZtLmZpbGUubmFtZSA9ICdGaWxlIE5vdCBGb3VuZCdcclxuICAgICAgICAgICAgdm0uZmlsZS5zaXplVGV4dCA9ICdFcnJvcidcclxuICAgICAgICAgICAgdm0ubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHZtLmVycm9yID0gdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHRoaXMuaXRlbVBhc3MpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgdGhpcy5jSXRlbVBhc3MgPSB3aW5kb3cuYXRvYih0aGlzLml0ZW1QYXNzKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIHRoaXMuY0l0ZW1QYXNzID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVwZGF0ZUZpbGVJbmZvKHRoaXMuY0l0ZW1QYXNzKVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgLmRvd25sb2FkLWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAyJTtcclxuICB9XHJcbiAgXHJcbiAgLmRvd25sb2FkLWFyZWEtcGFkZGluZyB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gIH1cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZG93bmxvYWRJdGVtLnZ1ZT8wODY5MzZjOCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRvd25sb2FkLWl0ZW1cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJGaWxlIERvd25sb2FkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZG93bmxvYWQtYXJlYS1wYWRkaW5nXCJcbiAgfSwgWyhfdm0ubG9hZGluZykgPyBfYygnZGl2JywgW19jKCdtZC1zcGlubmVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLXN0cm9rZVwiOiAxLjUsXG4gICAgICBcIm1kLWluZGV0ZXJtaW5hdGVcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdoNScsIFtfdm0uX3YoXCJMb2FkaW5nIEZpbGUgSW5mb3JtYXRpb25cIildKV0sIDEpIDogX2MoJ2RpdicsIFtfYygnbWQtaWNvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtdGhlbWVcIjogXCJsaWdodC1ibHVlXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJpbnNlcnRfZHJpdmVfZmlsZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDUnLCBbX3ZtLl92KF92bS5fcyhfdm0uZmlsZS5uYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KF92bS5fcyhfdm0uZmlsZS5zaXplVGV4dCkpXSksIF92bS5fdihcIiBcIiksICghX3ZtLmVycm9yKSA/IF9jKCdkaXYnLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyaWdodFwiXG4gIH0sIFtfYygnbWQtYnV0dG9uJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5kb3dubG9hZEZpbGVcbiAgICB9XG4gIH0sIFsoX3ZtLmZpbGUucGFzcy5sZW5ndGggPiAwKSA/IF9jKCdtZC1pY29uJywgW192bS5fdihcImxvY2tcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBEb3dubG9hZFxcbiAgICAgICAgICBcIildKV0sIDEpXSwgMSldKSA6IF92bS5fZSgpXSwgMSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTAyZmExODRhIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9kb3dubG9hZEl0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaHJpbmstbGF5b3V0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93IGRvd25sb2FkLWFyZWFcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0d2VsdmUgY29sdW1uc1wiXG4gIH0sIFtfYygnaW50cm8nKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2l4IGNvbHVtbnMgb2Zmc2V0LWJ5LXRocmVlXCJcbiAgfSwgW19jKCdkb3dubG9hZEl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaXRlbUlkXCI6IF92bS4kcm91dGUucGFyYW1zLmlkLFxuICAgICAgXCJpdGVtUGFzc1wiOiBfdm0uJHJvdXRlLnBhcmFtcy5wYXNzXG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkZXZDcmVkaXRzJyldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zZWRjMjM0MiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvZG93bmxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZGFzaGJvYXJkLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNzNiNThiNGEhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZGFzaGJvYXJkLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxsYXlvdXRzXFxcXGRhc2hib2FyZC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTczYjU4YjRhXCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZGFzaGJvYXJkLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2xheW91dHMvZGFzaGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJzaHJpbmstbGF5b3V0XCI+XHJcbiAgICA8IS0tPGltZyBzcmM9XCIuL2Fzc2V0cy9sb2dvLnBuZ1wiPi0tPlxyXG4gICAgPGludHJvIHZpZXctdGl0bGU9XCJEYXNoYm9hcmRcIj48L2ludHJvPlxyXG4gICAgPGZpbGVVcGxvYWRXaWRnZXQ+PC9maWxlVXBsb2FkV2lkZ2V0PlxyXG4gICAgPGRldkNyZWRpdHM+PC9kZXZDcmVkaXRzPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcclxuICBpbXBvcnQgZmlsZVVwbG9hZFdpZGdldCBmcm9tICcuLi9jb21wb25lbnRzL2ZpbGVVcGxvYWRXaWRnZXQnXHJcbiAgaW1wb3J0IGRldkNyZWRpdHMgZnJvbSAnLi4vY29tcG9uZW50cy9kZXZDcmVkaXRzJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBJbnRybyxcclxuICAgICAgZmlsZVVwbG9hZFdpZGdldCxcclxuICAgICAgZGV2Q3JlZGl0c1xyXG4gICAgfSxcclxuICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcclxuICAgICAgbmV4dCh2bSA9PiB7XHJcbiAgICAgICAgaWYgKCF2bS4kcm9vdC5sb2dnZWRJbikge1xyXG4gICAgICAgICAgdm0uJHJvdXRlci5yZXBsYWNlKCcvJylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgLnNocmluay1sYXlvdXQge1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkYXNoYm9hcmQudnVlPzhjMjY0YmRjIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2ZpbGVVcGxvYWRXaWRnZXQudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi03ZTE3MWQ1MCF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9maWxlVXBsb2FkV2lkZ2V0LnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXGZpbGVVcGxvYWRXaWRnZXQudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi03ZTE3MWQ1MFwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGZpbGVVcGxvYWRXaWRnZXQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9maWxlVXBsb2FkV2lkZ2V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJmaWxlLXVwbG9hZC13aWRnZXRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW4gY29sdW1ucyBvZmZzZXQtYnktb25lXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdCBzZXAtYlwiPlxyXG4gICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcmFpc2VkIG1kLXByaW1hcnlcIiBAY2xpY2s9XCJ2aWV3TXlGaWxlc1wiPlZpZXcgbXkgZmlsZXM8L21kLWJ1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInVwbG9hZC1oZXJlXCIgQGRyb3Auc3RvcC5wcmV2ZW50PVwiaGFuZGxlRHJhZ0Ryb3BVcGxvYWRcIiBAZHJhZ2VudGVyLnN0b3AucHJldmVudCBAZHJhZ2xlYXZlLnN0b3AucHJldmVudCBAZHJhZ292ZXIuc3RvcC5wcmV2ZW50PlxyXG4gICAgICAgICAgICA8IS0tPGEgY2xhc3M9XCJ0YXJnZXRcIj5EcmFnIGFuZCBkcm9wIG9yIGNsaWNrIHRvIHVwbG9hZCBmaWxlczwvYT4tLT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLXRpdGxlXCI+VXBsb2FkIEZpbGVzPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdXBsb2FkLXNldHRpbmdzLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2l4IGNvbHVtbnMgb2Zmc2V0LWJ5LXRocmVlXCI+XHJcbiAgICAgICAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+VXBsb2FkIERlc3RpbmF0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPG1kLWlucHV0IHYtbW9kZWw9XCJ1cGxvYWREZXN0aW5hdGlvblwiPjwvbWQtaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZC1zdWJoZWFkXCI+RHJhZyBhbmQgZHJvcCBvciBjbGljazwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBsb2FkLWFyZWEtcGFkZGluZ1wiIEBjbGljaz1cImJyb3dzZUZvckZpbGVzXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBsb2FkLXByb2dyZXNzLWluZGljYXRvcnNcIj5cclxuICAgICAgICAgICAgICA8IS0tPG1kLXNwaW5uZXIgbWQtc2l6ZT1cIjYwXCIgOm1kLXByb2dyZXNzPVwicHJvZ3Jlc3NJbmRpY2F0b3IudmFsdWVcIiBjbGFzcz1cIm1kLXdhcm5cIj48L21kLXNwaW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPnt7IHByb2dyZXNzTWVzc2FnZSB9fTwvcD4tLT5cclxuICAgICAgICAgICAgICA8bWQtbGlzdCBjbGFzcz1cImN1c3RvbS1saXN0IG1kLWRvdWJsZS1saW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8IS0tVXBsb2FkaW5nIGZpbGUtLT5cclxuICAgICAgICAgICAgICAgIDxtZC1zdWJoZWFkZXIgdi1pZj1cInByb2dyZXNzSW5kaWNhdG9ycy5sZW5ndGggPiAwXCI+VXBsb2FkaW5nPC9tZC1zdWJoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIHYtZm9yPVwiKHBySW5kLCBpeCkgaW4gcHJvZ3Jlc3NJbmRpY2F0b3JzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiIHYtaWY9XCIhcHJJbmQuZXJyb3JcIj5jbG91ZF9xdWV1ZTwvbWQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCIgdi1lbHNlPmVycm9yPC9tZC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC10ZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7eyBwckluZC5uYW1lIH19IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPHNwYW4gdi1pZj1cIiFwckluZC5lcnJvclwiPiB7eyAocHJJbmQudmFsdWUgPCAxMDApID8gYFVwbG9hZGluZy4uLiAoJHtwckluZC52YWx1ZX0lKWAgOiAnVXBsb2FkZWQsIFByb2Nlc3NpbmcuLi4nIH19PC9zcGFuPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBjbGFzcz1cInVwbG9hZC1wcm9ncmVzcy1iYXJcIiB2LWlmPVwiIXBySW5kLmVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyAocHJJbmQudmFsdWUgPCAxMDApID8gYFVwbG9hZGluZy4uLiAoJHtwckluZC52YWx1ZX0lKWAgOiAnVXBsb2FkZWQsIFByb2Nlc3NpbmcuLi4nIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG1kLXByb2dyZXNzIDptZC1wcm9ncmVzcz1cInBySW5kLnZhbHVlXCI+PC9tZC1wcm9ncmVzcz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT4ge3sgJ1VwbG9hZCBlcnJvcjogJyArIHBySW5kLm1lc3NhZ2UgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIiBAY2xpY2s9XCJjYW5jZWxVcGxvYWQocHJJbmQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+Y2FuY2VsPC9tZC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICA8L21kLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+ZmlsZV91cGxvYWQ8L21kLWljb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWQtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8bWQtZGl2aWRlciBjbGFzcz1cIm1kLWluc2V0XCI+PC9tZC1kaXZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8IS0tVXBsb2FkIGNvbXBsZXRlZCBmaWxlcy0tPlxyXG4gICAgICAgICAgICAgICAgPG1kLXN1YmhlYWRlciB2LWlmPVwiY29tcGxldGVkRmlsZXMubGVuZ3RoID4gMFwiPkNvbXBsZXRlZDwvbWQtc3ViaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSB2LWZvcj1cIihjbXBsRmlsZSwgaXgpIGluIGNvbXBsZXRlZEZpbGVzXCIgQGNsaWNrPVwidmlzaXRVcmwoY21wbEZpbGUuZG93bmxvYWRQYWdlKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWQtaWNvbiBjbGFzcz1cIm1kLXByaW1hcnlcIj5jbG91ZF9kb25lPC9tZC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtbGlzdC10ZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7eyBjbXBsRmlsZS5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlVwbG9hZCBDb21wbGV0ZSE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWQtaWNvbiBjbGFzcz1cIm1kLXByaW1hcnlcIj5kb25lPC9tZC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICA8L21kLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPG1kLWRpdmlkZXIgY2xhc3M9XCJtZC1pbnNldFwiPjwvbWQtZGl2aWRlcj5cclxuICAgICAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxyXG4gICAgICAgICAgICAgIDwvbWQtbGlzdD5cclxuICAgICAgICAgICAgICA8bWQtYnV0dG9uIHYtaWY9XCJjb21wbGV0ZWRGaWxlcy5sZW5ndGggPiAwXCIgQGNsaWNrPVwiY29tcGxldGVkRmlsZXMgPSBbXVwiPkNsZWFyIEFsbDwvbWQtYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3M9XCJpbnZpc2libGVcIiByZWY9XCJicm93c2VcIiBAY2hhbmdlPVwib25GaWxlc1VwbG9hZGVkXCIgbXVsdGlwbGUgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbiAgbGV0IGF4aW9zUmVxdWVzdENvbmZpZyA9IHtcclxuICAgIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiAoc3RhdHVzKSB7XHJcbiAgICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDUwMFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9ncmVzc0luZGljYXRvcnM6IFtdLFxyXG4gICAgICAgIC8qIHNjaGVtYTpcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogbnVtYmVyIFswLTEwMF0sXHJcbiAgICAgICAgICBmaWxlUmVmOiBvYmplY3QgW3JlZmVyZW5jZSB0byBmaWxlIHRoYXQgaXMgdXBsb2FkaW5nXSxcclxuICAgICAgICAgIG5hbWU6IHN0cmluZyBbbmFtZSBvZiBmaWxlXSxcclxuICAgICAgICAgIHhocjogb2JqZWN0IFt4aHIgb2JqZWN0IHJlZmVyZW5jZV0sXHJcbiAgICAgICAgICBlcnJvcjogYm9vbFxyXG4gICAgICAgICAgbWVzc2FnZTogc3RyaW5nIG9yIG51bGwgW2FuIGVycm9yIG1lc3NhZ2VdXHJcbiAgICAgICAgfVxyXG4gICAgICAgICovXHJcbiAgICAgICAgY29tcGxldGVkRmlsZXM6IFtdLFxyXG4gICAgICAgIC8qIHNjaGVtYTpcclxuICAgICAgICAgKi9cclxuICAgICAgICB1cGxvYWREZXN0aW5hdGlvbjogJy8nXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICB1cGxvYWRpbmdGaWxlczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzSW5kaWNhdG9ycy5sZW5ndGhcclxuICAgICAgfSxcclxuICAgICAgdXBsb2FkaW5nOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXBsb2FkaW5nRmlsZXMgPiAwXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHZpZXdNeUZpbGVzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9maWxlcycpXHJcbiAgICAgIH0sXHJcbiAgICAgIGJyb3dzZUZvckZpbGVzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy4kcmVmcy5icm93c2UuY2xpY2soKVxyXG4gICAgICB9LFxyXG4gICAgICBvbkZpbGVzVXBsb2FkZWQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgbGV0IGJyb3dzZSA9IHRoaXMuJHJlZnMuYnJvd3NlXHJcbiAgICAgICAgbGV0IGZpbGVDb3VudCA9IGJyb3dzZS5maWxlcy5sZW5ndGhcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICBsZXQgZiA9IGJyb3dzZS5maWxlc1tpXVxyXG4gICAgICAgICAgbGV0IHByb2dyZXNzID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogMCxcclxuICAgICAgICAgICAgZmlsZVJlZjogZixcclxuICAgICAgICAgICAgbmFtZTogZi5uYW1lXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnByb2dyZXNzSW5kaWNhdG9ycy5wdXNoKHByb2dyZXNzKVxyXG4gICAgICAgICAgdGhpcy51cGxvYWRGaWxlKGYsIHByb2dyZXNzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgaGFuZGxlRHJhZ0Ryb3BVcGxvYWQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlLmRhdGFUcmFuc2Zlci5maWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgdmFyIGYgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1tpXTtcclxuICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAgICAgICAgIGZpbGVSZWY6IGYsXHJcbiAgICAgICAgICAgIG5hbWU6IGYubmFtZSxcclxuICAgICAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5wcm9ncmVzc0luZGljYXRvcnMucHVzaChwcm9ncmVzcylcclxuICAgICAgICAgIHRoaXMudXBsb2FkRmlsZShmLCBwcm9ncmVzcylcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGNhbmNlbFVwbG9hZDogZnVuY3Rpb24gKHByb2dyZXNzKSB7XHJcbiAgICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICAgIHByb2dyZXNzLnhoci5hYm9ydCgpXHJcbiAgICAgICAgdm0ucHJvZ3Jlc3NJbmRpY2F0b3JzLnNwbGljZSh2bS5wcm9ncmVzc0luZGljYXRvcnMuaW5kZXhPZihwcm9ncmVzcyksIDEpXHJcbiAgICAgIH0sXHJcbiAgICAgIHVwbG9hZEZpbGU6IGZ1bmN0aW9uIChmaWxlLCBwcm9ncmVzcykge1xyXG4gICAgICAgIGxldCB2bSA9IHRoaXNcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcclxuICAgICAgICBwcm9ncmVzcy54aHIgPSB4aHJcclxuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgXCIvYXBpL3VwbG9hZFwiKVxyXG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIC8vIHVwbG9hZCBjb21wbGV0ZVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndXBsb2FkIGNvbXBsZXRlJywgcHJvZ3Jlc3MubmFtZSlcclxuICAgICAgICAgICAgLy8gZGVxdWV1ZSB0aGUgdXBsb2FkaW5nIGZpbGVcclxuICAgICAgICAgICAgdm0ucHJvZ3Jlc3NJbmRpY2F0b3JzLnNwbGljZSh2bS5wcm9ncmVzc0luZGljYXRvcnMuaW5kZXhPZihwcm9ncmVzcyksIDEpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHhoci5yZXNwb25zZVRleHQpXHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgICAgdm0uY29tcGxldGVkRmlsZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgbmFtZTogcHJvZ3Jlc3MubmFtZSxcclxuICAgICAgICAgICAgICBkb3dubG9hZFBhZ2U6ICcvIy9kLycgKyByZXNwb25zZS5maWxlSWRcclxuICAgICAgICAgICAgICAvLyBkb3dubG9hZFBhZ2U6IHJlc3BvbnNlLmRvd25sb2FkUGFnZSAvLyBnZXQgZG93bmxvYWQgcGFnZSBmcm9tIHNlcnZlciByZXNwb25zZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdXBkYXRlIHByb2dyZXNzIGluZGljYXRvclxyXG4gICAgICAgICAgICBwcm9ncmVzcy5lcnJvciA9IHRydWVcclxuICAgICAgICAgICAgLy8gcHJvZ3Jlc3MubWVzc2FnZSA9IHhoci5yZXNwb25zZVRleHRcclxuICAgICAgICAgICAgLy8gcmVhY3RpdmUgdXBkYXRlXHJcbiAgICAgICAgICAgIHZtLiRzZXQocHJvZ3Jlc3MsICdtZXNzYWdlJywgeGhyLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgeGhyLnVwbG9hZC5vbnByb2dyZXNzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIGlmIChlLmxlbmd0aENvbXB1dGFibGUpIHtcclxuICAgICAgICAgICAgcHJvZ3Jlc3MudmFsdWUgPSBNYXRoLmZsb29yKChlLmxvYWRlZCAvIGUudG90YWwpICogMTAwKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgICAgZm9ybS5hcHBlbmQoXCJhcGlrZXlcIiwgdm0uJHJvb3QudS5rZXkpXHJcbiAgICAgICAgZm9ybS5hcHBlbmQoXCJkaXJcIiwgdm0udXBsb2FkRGVzdGluYXRpb24pXHJcbiAgICAgICAgZm9ybS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpXHJcbiAgICAgICAgeGhyLnNlbmQoZm9ybSlcclxuICAgICAgfSxcclxuICAgICAgdmlzaXRVcmw6IGZ1bmN0aW9uICh1KSB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4odSwgJ19ibGFuaycpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC51cGxvYWQtYXJlYS1wYWRkaW5nIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHBhZGRpbmc6IDE0JTtcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiAgfVxyXG4gIFxyXG4gIC51cGxvYWQtcHJvZ3Jlc3MtaW5kaWNhdG9ycyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC51cGxvYWQtcHJvZ3Jlc3MtYmFyIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLnVwbG9hZC1zZXR0aW5ncy1zZWN0aW9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZpbGVVcGxvYWRXaWRnZXQudnVlPzk0ZDI3Njg4IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmlsZS11cGxvYWQtd2lkZ2V0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGVuIGNvbHVtbnMgb2Zmc2V0LWJ5LW9uZVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxlZnQgc2VwLWJcIlxuICB9LCBbX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS52aWV3TXlGaWxlc1xuICAgIH1cbiAgfSwgW192bS5fdihcIlZpZXcgbXkgZmlsZXNcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZC1oZXJlXCIsXG4gICAgb246IHtcbiAgICAgIFwiZHJvcFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLmhhbmRsZURyYWdEcm9wVXBsb2FkKCRldmVudClcbiAgICAgIH0sXG4gICAgICBcImRyYWdlbnRlclwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0sXG4gICAgICBcImRyYWdsZWF2ZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0sXG4gICAgICBcImRyYWdvdmVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtdGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiVXBsb2FkIEZpbGVzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93IHVwbG9hZC1zZXR0aW5ncy1zZWN0aW9uXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2l4IGNvbHVtbnMgb2Zmc2V0LWJ5LXRocmVlXCJcbiAgfSwgW19jKCdtZC1pbnB1dC1jb250YWluZXInLCBbX2MoJ2xhYmVsJywgW192bS5fdihcIlVwbG9hZCBEZXN0aW5hdGlvblwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udXBsb2FkRGVzdGluYXRpb24pLFxuICAgICAgZXhwcmVzc2lvbjogXCJ1cGxvYWREZXN0aW5hdGlvblwiXG4gICAgfV0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS51cGxvYWREZXN0aW5hdGlvbilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udXBsb2FkRGVzdGluYXRpb24gPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXN1YmhlYWRcIlxuICB9LCBbX3ZtLl92KFwiRHJhZyBhbmQgZHJvcCBvciBjbGlja1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZC1hcmVhLXBhZGRpbmdcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uYnJvd3NlRm9yRmlsZXNcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZC1wcm9ncmVzcy1pbmRpY2F0b3JzXCJcbiAgfSwgW19jKCdtZC1saXN0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1saXN0IG1kLWRvdWJsZS1saW5lXCJcbiAgfSwgWyhfdm0ucHJvZ3Jlc3NJbmRpY2F0b3JzLmxlbmd0aCA+IDApID8gX2MoJ21kLXN1YmhlYWRlcicsIFtfdm0uX3YoXCJVcGxvYWRpbmdcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5wcm9ncmVzc0luZGljYXRvcnMpLCBmdW5jdGlvbihwckluZCwgaXgpIHtcbiAgICByZXR1cm4gX2MoJ21kLWxpc3QtaXRlbScsIFsoIXBySW5kLmVycm9yKSA/IF9jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImNsb3VkX3F1ZXVlXCIpXSkgOiBfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJlcnJvclwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtbGlzdC10ZXh0LWNvbnRhaW5lclwiXG4gICAgfSwgW19jKCdzcGFuJywgW192bS5fdihcIiBcIiArIF92bS5fcyhwckluZC5uYW1lKSArIFwiIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCAoIXBySW5kLmVycm9yKSA/IFtfYygnc3BhbicsIFtfdm0uX3YoX3ZtLl9zKChwckluZC52YWx1ZSA8IDEwMCkgPyAoXCJVcGxvYWRpbmcuLi4gKFwiICsgKHBySW5kLnZhbHVlKSArIFwiJSlcIikgOiAnVXBsb2FkZWQsIFByb2Nlc3NpbmcuLi4nKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLXByb2dyZXNzJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJtZC1wcm9ncmVzc1wiOiBwckluZC52YWx1ZVxuICAgICAgfVxuICAgIH0pXSA6IF9jKCdzcGFuJywgW192bS5fdihcIiBcIiArIF92bS5fcygnVXBsb2FkIGVycm9yOiAnICsgcHJJbmQubWVzc2FnZSkpXSldLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWJ1dHRvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCIsXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5jYW5jZWxVcGxvYWQocHJJbmQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX2MoJ21kLWljb24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCJcbiAgICB9LCBbX3ZtLl92KFwiY2FuY2VsXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWJ1dHRvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCJcbiAgICB9LCBbX2MoJ21kLWljb24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCJcbiAgICB9LCBbX3ZtLl92KFwiZmlsZV91cGxvYWRcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtZGl2aWRlcicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLWluc2V0XCJcbiAgICB9KV0sIDEpXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmNvbXBsZXRlZEZpbGVzLmxlbmd0aCA+IDApID8gX2MoJ21kLXN1YmhlYWRlcicsIFtfdm0uX3YoXCJDb21wbGV0ZWRcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5jb21wbGV0ZWRGaWxlcyksIGZ1bmN0aW9uKGNtcGxGaWxlLCBpeCkge1xuICAgIHJldHVybiBfYygnbWQtbGlzdC1pdGVtJywge1xuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0udmlzaXRVcmwoY21wbEZpbGUuZG93bmxvYWRQYWdlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImNsb3VkX2RvbmVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLWxpc3QtdGV4dC1jb250YWluZXJcIlxuICAgIH0sIFtfYygnc3BhbicsIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3MoY21wbEZpbGUubmFtZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywgW192bS5fdihcIlVwbG9hZCBDb21wbGV0ZSFcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIlxuICAgIH0sIFtfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJkb25lXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWRpdmlkZXInLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1pbnNldFwiXG4gICAgfSldLCAxKVxuICB9KV0sIDIpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmNvbXBsZXRlZEZpbGVzLmxlbmd0aCA+IDApID8gX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmNvbXBsZXRlZEZpbGVzID0gW11cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJDbGVhciBBbGxcIildKSA6IF92bS5fZSgpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICByZWY6IFwiYnJvd3NlXCIsXG4gICAgc3RhdGljQ2xhc3M6IFwiaW52aXNpYmxlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImZpbGVcIixcbiAgICAgIFwibXVsdGlwbGVcIjogXCJcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IF92bS5vbkZpbGVzVXBsb2FkZWRcbiAgICB9XG4gIH0pXSldKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi03ZTE3MWQ1MCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZmlsZVVwbG9hZFdpZGdldC52dWVcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNocmluay1sYXlvdXRcIlxuICB9LCBbX2MoJ2ludHJvJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZpZXctdGl0bGVcIjogXCJEYXNoYm9hcmRcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdmaWxlVXBsb2FkV2lkZ2V0JyksIF92bS5fdihcIiBcIiksIF9jKCdkZXZDcmVkaXRzJyldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi03M2I1OGI0YSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvZGFzaGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL215ZmlsZXMudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0xMmEyYjUwMSF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9teWZpbGVzLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxsYXlvdXRzXFxcXG15ZmlsZXMudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi0xMmEyYjUwMVwiXG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIG15ZmlsZXMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvbGF5b3V0cy9teWZpbGVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJzaHJpbmstbGF5b3V0XCI+XHJcbiAgICA8IS0tPGltZyBzcmM9XCIuL2Fzc2V0cy9sb2dvLnBuZ1wiPi0tPlxyXG4gICAgPGludHJvIHZpZXctdGl0bGU9XCJNeSBGaWxlc1wiPjwvaW50cm8+XHJcbiAgICA8bXlGaWxlc0xpc3Q+PC9teUZpbGVzTGlzdD5cclxuICAgIDxkZXZDcmVkaXRzPjwvZGV2Q3JlZGl0cz5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm8nXHJcbiAgaW1wb3J0IG15RmlsZXNMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QnXHJcbiAgaW1wb3J0IGRldkNyZWRpdHMgZnJvbSAnLi4vY29tcG9uZW50cy9kZXZDcmVkaXRzJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBJbnRybyxcclxuICAgICAgbXlGaWxlc0xpc3QsXHJcbiAgICAgIGRldkNyZWRpdHNcclxuICAgIH0sXHJcbiAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XHJcbiAgICAgIG5leHQodm0gPT4ge1xyXG4gICAgICAgIGlmICghdm0uJHJvb3QubG9nZ2VkSW4pIHtcclxuICAgICAgICAgIHZtLiRyb3V0ZXIucmVwbGFjZSgnLycpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC5zaHJpbmstbGF5b3V0IHtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gIH1cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbXlmaWxlcy52dWU/MDAxMzc4YTAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbXlGaWxlc0xpc3QudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0wZjk0ODMyYSF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9teUZpbGVzTGlzdC52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiQzpcXFxcVXNlcnNcXFxcTmloYWwuVGFsdXIxOVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXFBlbmd1aW5VcGxvYWRcXFxcUGVuZ3VpblVwbG9hZFxcXFxzcmNcXFxcUGVuZ3VpblVwbG9hZFxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFxteUZpbGVzTGlzdC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LTBmOTQ4MzJhXCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbXlGaWxlc0xpc3QudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9teUZpbGVzTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwibXktZmlsZXMtbGlzdFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRlbiBjb2x1bW5zIG9mZnNldC1ieS1vbmVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0IHNlcC1iXCI+XHJcbiAgICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1yYWlzZWQgbWQtcHJpbWFyeVwiIEBjbGljaz1cInVwbG9hZE1vcmVGaWxlc1wiPlVwbG9hZCBGaWxlczwvbWQtYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBsb2FkZWQtZmlsZXMtbGlzdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQtdGl0bGVcIj5BbGwgTXkgRmlsZXM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwibG9hZEZpbmlzaGVkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgIDxwPkVycm9yPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgdi1lbHNlLWlmPVwibm9JdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+Tm8gRmlsZXM8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPG1kLWxpc3QgY2xhc3M9XCJjdXN0b20tbGlzdCBtZC1kb3VibGUtbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSB2LWZvcj1cIihmaWxlLCBpeCkgaW4gZmlsZXNcIj5cclxuICAgICAgICAgICAgICAgICAgPG1kLWljb24gY2xhc3M9XCJtZC1wcmltYXJ5XCI+Y2xvdWRfZG9uZTwvbWQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kLWxpc3QtdGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge3sgZmlsZS5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7eyBmaWxlLmhyU2l6ZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiIEBjbGljaz1cImxvY2tGaWxlKGl4KVwiIHYtaWY9XCIhZmlsZS5sb2NrZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWQtaWNvbiBjbGFzcz1cIm1kLXByaW1hcnlcIj5sb2NrX29wZW48L21kLWljb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWQtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIiBAY2xpY2s9XCJ1bmxvY2tGaWxlKGl4KVwiIHYtZWxzZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWQtaWNvbiBjbGFzcz1cIm1kLXByaW1hcnlcIj5sb2NrPC9tZC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICA8L21kLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uIG1kLWxpc3QtYWN0aW9uXCIgQGNsaWNrPVwiZG93bmxvYWRGaWxlKGl4KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiPmZpbGVfZG93bmxvYWQ8L21kLWljb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWQtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8bWQtbWVudSBtZC1hbGlnbi10cmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiIG1kLW1lbnUtdHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtcHJpbWFyeVwiPm1vcmVfaG9yaXo8L21kLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tZC1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1kLW1lbnUtY29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxtZC1tZW51LWl0ZW0gQGNsaWNrPVwidmlzaXREb3dubG9hZFBhZ2UoaXgpXCI+RG93bmxvYWQgUGFnZTwvbWQtbWVudS1pdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG1kLW1lbnUtaXRlbSBAY2xpY2s9XCJkZWxldGVGaWxlKGl4KVwiPkRlbGV0ZTwvbWQtbWVudS1pdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWQtbWVudS1jb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8L21kLW1lbnU+XHJcbiAgICAgICAgICAgICAgICAgIDxtZC1kaXZpZGVyIGNsYXNzPVwibWQtaW5zZXRcIj48L21kLWRpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cclxuICAgICAgICAgICAgICA8L21kLWxpc3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHYtZWxzZT5cclxuICAgICAgICAgICAgICA8bWQtc3Bpbm5lciA6bWQtc3Ryb2tlPVwiMS41XCIgbWQtaW5kZXRlcm1pbmF0ZT48L21kLXNwaW5uZXI+XHJcbiAgICAgICAgICAgICAgPGg1PlJldHJpZXZpbmcgRGF0YTwvaDU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuICBsZXQgYXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xyXG4gICAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIChzdGF0dXMpIHtcclxuICAgICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgNTAwXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczogWydkaXInXSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZGlyU3RydWN0dXJlOiB7fSxcclxuICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgZGlyczogW10sXHJcbiAgICAgICAgbG9hZEZpbmlzaGVkOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgY3VycmVudERpcjogdGhpcy5kaXJcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgIG5vSXRlbXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWxlcy5sZW5ndGggPT0gMCAmJiB0aGlzLmRpcnMubGVuZ3RoID09IDBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgdXBsb2FkTW9yZUZpbGVzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy91JylcclxuICAgICAgfSxcclxuICAgICAgdmlzaXRVcmw6IGZ1bmN0aW9uICh1KSB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4odSwgJ19ibGFuaycpXHJcbiAgICAgIH0sXHJcbiAgICAgIHZpc2l0RG93bmxvYWRQYWdlOiBmdW5jdGlvbiAoaXgpIHtcclxuICAgICAgICBsZXQgZiA9IHRoaXMuZmlsZXNbaXhdXHJcbiAgICAgICAgaWYgKGYubG9ja2VkKSB7XHJcbiAgICAgICAgICBsZXQgdm0gPSB0aGlzXHJcbiAgICAgICAgICB2bS4kcm9vdC5zaG93Q29uZmlybShcclxuICAgICAgICAgICAgYFxyXG5UaGlzIGZpbGUgaXMgcGFzc3dvcmQgcHJvdGVjdGVkLiBEbyB5b3Ugd2FudCB0byBlbmNvZGUgdGhlIDxicj5cclxucGFzc3dvcmQgaW4gdGhlIGxpbms/IElmIHlvdSBkb24ndCBkbyB0aGlzLCBhbnlvbmUgd2hvIHZpc2l0cyA8YnI+XHJcbnlvdXIgbGluayB3aWxsIG5lZWQgdG8gZW50ZXIgdGhlIGZpbGUgcGFzc3dvcmQgdG8gdmlldyB0aGUgZmlsZS5cclxuYCxcclxuICAgICAgICAgICAgJ0luY2x1ZGUgcGFzc3dvcmQ/JyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgICBpZiAocikge1xyXG4gICAgICAgICAgICAgICAgLy8gaW5jbHVkZSBwYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgIHZtLnNob3dEb3dubG9hZExpbmtXaXRoUGFzcyhpeClcclxuICAgICAgICAgICAgICAgIH0sIDQwMClcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8ganVzdCBnbyB0byBsaW5rXHJcbiAgICAgICAgICAgICAgICBsZXQgZGxQYWdlID0gJy8jL2QvJyArIGYuZmlsZUlkXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihkbFBhZ2UsICdfYmxhbmsnKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgJ1llcycsICdObycpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIGp1c3Qgb3BlbiB0aGUgcGFnZVxyXG4gICAgICAgICAgbGV0IGRsUGFnZSA9ICcvIy9kLycgKyBmLmZpbGVJZFxyXG4gICAgICAgICAgd2luZG93Lm9wZW4oZGxQYWdlLCAnX2JsYW5rJylcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHNob3dEb3dubG9hZExpbmtXaXRoUGFzczogZnVuY3Rpb24gKGl4KSB7XHJcbiAgICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICAgIGxldCBmID0gdm0uZmlsZXNbaXhdXHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2dldHBhc3MvJyArIGYuZmlsZUlkLCB2bS4kcm9vdC5nZXRBdXRoUmVxdWVzdFBhcmFtcygpKVxyXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAvLyBwYXNzd29yZCBzaG91bGQgYmUgcmV0dXJuZWRcclxuICAgICAgICAgICAgbGV0IGRsUGFnZSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiKVswXSArICcjL2QvJyArIGYuZmlsZUlkICsgJy8nICsgd2luZG93LmJ0b2EocmVzLmRhdGEpXHJcbiAgICAgICAgICAgIHZtLiRyb290LnNob3dQb3B1cChcclxuICAgICAgICAgICAgICBgXHJcbkRvd25sb2FkIGxpbmsgd2l0aCBwYXNzd29yZCBlbmNvZGVkOjxicj5cclxuPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIiR7ZGxQYWdlfVwiPiR7ZGxQYWdlfTwvYT5cclxuICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAnTGluayBDcmVhdGVkJylcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGRvd25sb2FkRmlsZTogZnVuY3Rpb24gKGl4KSB7XHJcbiAgICAgICAgbGV0IGYgPSB0aGlzLmZpbGVzW2l4XVxyXG4gICAgICAgIC8vIHVzZSBmb3JjZSBkb3dubG9hZCB0byBieXBhc3MgcGFzc3dvcmRcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYXBpL2Zkb3dubG9hZC8nICsgZi5maWxlSWQgKyAnP2FwaWtleT0nICsgdGhpcy4kcm9vdC51LmtleVxyXG4gICAgICB9LFxyXG4gICAgICBsb2NrRmlsZTogZnVuY3Rpb24gKGl4KSB7XHJcbiAgICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICAgIGxldCBmID0gdm0uZmlsZXNbaXhdXHJcbiAgICAgICAgdm0uJHJvb3Quc2hvd1Byb21wdCgnRW50ZXIgcGFzc3dvcmQnLCAnUGFzc3dvcmQnLCBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgaWYgKHIpIHtcclxuICAgICAgICAgICAgLy8gc2VuZCBsb2NrIHJlcXVlc3RcclxuICAgICAgICAgICAgYXhpb3MucGF0Y2goJy9hcGkvbG9jay8nICsgZi5maWxlSWQgKyAnIScgKyByLCB7fSwgdm0uJHJvb3QuZ2V0QXV0aFJlcXVlc3RQYXJhbXMoKSlcclxuICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgZmlsZSBsaXN0XHJcbiAgICAgICAgICAgICAgICBmLmxvY2tlZCA9IHRydWVcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIHVubG9ja0ZpbGU6IGZ1bmN0aW9uIChpeCkge1xyXG4gICAgICAgIGxldCB2bSA9IHRoaXNcclxuICAgICAgICBsZXQgZiA9IHZtLmZpbGVzW2l4XVxyXG4gICAgICAgIHZtLiRyb290LnNob3dDb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoZSBwYXNzd29yZCBvbiB0aGlzIGZpbGU/JywgJ0NvbmZpcm0gVW5sb2NrJywgKHIpID0+IHtcclxuICAgICAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgICAgIC8vIHNlbmQgdW5sb2NrIHJlcXVlc3RcclxuICAgICAgICAgICAgYXhpb3MucGF0Y2goJy9hcGkvdW5sb2NrLycgKyBmLmZpbGVJZCwge30sIHZtLiRyb290LmdldEF1dGhSZXF1ZXN0UGFyYW1zKCkpXHJcbiAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGZpbGUgbGlzdFxyXG4gICAgICAgICAgICAgICAgZi5sb2NrZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZGVsZXRlRmlsZTogZnVuY3Rpb24gKGl4KSB7XHJcbiAgICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICAgIGxldCBmID0gdm0uZmlsZXNbaXhdXHJcbiAgICAgICAgdm0uJHJvb3Quc2hvd0NvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBmaWxlPyBJdCBjYW5ub3QgYmUgcmVjb3ZlcmVkLicsICdDb25maXJtIERlbGV0ZScsXHJcbiAgICAgICAgICAocikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocikge1xyXG4gICAgICAgICAgICAgIC8vIHNlbmQgZGVsZXRlIHJlcXVlc3RcclxuICAgICAgICAgICAgICBheGlvcy5kZWxldGUoJy9hcGkvZGVsZXRlLycgKyBmLmZpbGVJZCwgdm0uJHJvb3QuZ2V0QXV0aFJlcXVlc3RQYXJhbXMoKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIGZpbGUgbGlzdFxyXG4gICAgICAgICAgICAgICAgICB2bS5maWxlcy5zcGxpY2UoaXgsIDEpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICB1cGRhdGVGaWxlc0RpcnM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyB3YWxrIGRpcmVjdG9yeSBzdHJ1Y3R1cmVcclxuICAgICAgICBsZXQgc2VnbWVudHMgPSB0aGlzLmN1cnJlbnREaXIuc3BsaXQoJy8nKVxyXG4gICAgICAgIC8vIGNsZWFuIHVwXHJcbiAgICAgICAgc2VnbWVudHMgPSBzZWdtZW50cy5maWx0ZXIoQm9vbGVhbilcclxuICAgICAgICAvLyBmaW5kIG1hdGNoaW5nIGRpcmVjdG9yeVxyXG4gICAgICAgIGxldCB3b3JraW5nRGlyU3RydWN0dXJlID0gdGhpcy5kaXJTdHJ1Y3R1cmVcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBsZXQgY3VycmVudFNlZ21lbnQgPSBzZWdtZW50c1tpXVxyXG4gICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFNlZ21lbnQpXHJcbiAgICAgICAgICB3b3JraW5nRGlyU3RydWN0dXJlID0gd29ya2luZ0RpclN0cnVjdHVyZS5kaXJzLmZpbmQoZCA9PiBkLm5hbWUgPT0gY3VycmVudFNlZ21lbnQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG5vdyB1cGRhdGUgY29sbGVjdGlvbnNcclxuICAgICAgICB0aGlzLmZpbGVzID0gd29ya2luZ0RpclN0cnVjdHVyZS5maWxlc1xyXG4gICAgICAgIHRoaXMuZGlycyA9IHdvcmtpbmdEaXJTdHJ1Y3R1cmUuZGlyc1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyBsb2FkIGRpcmVjdG9yeSBzdHJ1Y3R1cmUgZnJvbSBzZXJ2ZXJcclxuICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICB2bS5jdXJyZW50RGlyID0gdm0uY3VycmVudERpciB8fCAnLydcclxuICAgICAgdm0uJHJvb3QuZ2V0QXV0aFJlcXVlc3RQYXJhbXMoKVxyXG4gICAgICBheGlvcy5nZXQoJy9hcGkvZmlsZXMnLCB2bS4kcm9vdC5nZXRBdXRoUmVxdWVzdFBhcmFtcygpKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgLy8gbWVyZ2UgZmlsZSBsaXN0XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgdm0uZGlyU3RydWN0dXJlID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgdm0udXBkYXRlRmlsZXNEaXJzKClcclxuICAgICAgICAgIHZtLmxvYWRGaW5pc2hlZCA9IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgdm0uZXJyb3IgPSB0cnVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB2bS5sb2FkRmluaXNoZWQgPSB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbXlGaWxlc0xpc3QudnVlP2JjZTk1NzY2IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibXktZmlsZXMtbGlzdFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRlbiBjb2x1bW5zIG9mZnNldC1ieS1vbmVcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsZWZ0IHNlcC1iXCJcbiAgfSwgW19jKCdtZC1idXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtcmFpc2VkIG1kLXByaW1hcnlcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udXBsb2FkTW9yZUZpbGVzXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVXBsb2FkIEZpbGVzXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWRlZC1maWxlcy1saXN0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtdGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiQWxsIE15IEZpbGVzXCIpXSksIF92bS5fdihcIiBcIiksIChfdm0ubG9hZEZpbmlzaGVkKSA/IF9jKCdkaXYnLCBbKF92bS5lcnJvcikgPyBfYygnZGl2JywgW19jKCdwJywgW192bS5fdihcIkVycm9yXCIpXSldKSA6IChfdm0ubm9JdGVtcykgPyBfYygnZGl2JywgW19jKCdwJywgW192bS5fdihcIk5vIEZpbGVzXCIpXSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbGlzdCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tbGlzdCBtZC1kb3VibGUtbGluZVwiXG4gIH0sIF92bS5fbCgoX3ZtLmZpbGVzKSwgZnVuY3Rpb24oZmlsZSwgaXgpIHtcbiAgICByZXR1cm4gX2MoJ21kLWxpc3QtaXRlbScsIFtfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJjbG91ZF9kb25lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1saXN0LXRleHQtY29udGFpbmVyXCJcbiAgICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKGZpbGUubmFtZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywgW192bS5fdihcIiBcIiArIF92bS5fcyhmaWxlLmhyU2l6ZSkpXSldKSwgX3ZtLl92KFwiIFwiKSwgKCFmaWxlLmxvY2tlZCkgPyBfYygnbWQtYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIixcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLmxvY2tGaWxlKGl4KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImxvY2tfb3BlblwiKV0pXSwgMSkgOiBfYygnbWQtYnV0dG9uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaWNvbi1idXR0b24gbWQtbGlzdC1hY3Rpb25cIixcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLnVubG9ja0ZpbGUoaXgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX2MoJ21kLWljb24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1wcmltYXJ5XCJcbiAgICB9LCBbX3ZtLl92KFwibG9ja1wiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1idXR0b24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiLFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uZG93bmxvYWRGaWxlKGl4KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdtZC1pY29uJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtcHJpbWFyeVwiXG4gICAgfSwgW192bS5fdihcImZpbGVfZG93bmxvYWRcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbWVudScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwibWQtYWxpZ24tdHJpZ2dlclwiOiBcIlwiXG4gICAgICB9XG4gICAgfSwgW19jKCdtZC1idXR0b24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtZC1pY29uLWJ1dHRvbiBtZC1saXN0LWFjdGlvblwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJtZC1tZW51LXRyaWdnZXJcIjogXCJcIlxuICAgICAgfVxuICAgIH0sIFtfYygnbWQtaWNvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnlcIlxuICAgIH0sIFtfdm0uX3YoXCJtb3JlX2hvcml6XCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLW1lbnUtY29udGVudCcsIFtfYygnbWQtbWVudS1pdGVtJywge1xuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0udmlzaXREb3dubG9hZFBhZ2UoaXgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiRG93bmxvYWQgUGFnZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbWVudS1pdGVtJywge1xuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uZGVsZXRlRmlsZShpeClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoXCJEZWxldGVcIildKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1kaXZpZGVyJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWQtaW5zZXRcIlxuICAgIH0pXSwgMSlcbiAgfSkpXSwgMSkgOiBfYygnZGl2JywgW19jKCdtZC1zcGlubmVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLXN0cm9rZVwiOiAxLjUsXG4gICAgICBcIm1kLWluZGV0ZXJtaW5hdGVcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdoNScsIFtfdm0uX3YoXCJSZXRyaWV2aW5nIERhdGFcIildKV0sIDEpXSldKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0wZjk0ODMyYSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlGaWxlc0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaHJpbmstbGF5b3V0XCJcbiAgfSwgW19jKCdpbnRybycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2aWV3LXRpdGxlXCI6IFwiTXkgRmlsZXNcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdteUZpbGVzTGlzdCcpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGV2Q3JlZGl0cycpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMTJhMmI1MDEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9sYXlvdXRzL215ZmlsZXMudnVlXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcHJvZmlsZS52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LWUyZTVmMTQyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Byb2ZpbGUudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIkM6XFxcXFVzZXJzXFxcXE5paGFsLlRhbHVyMTlcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxQZW5ndWluVXBsb2FkXFxcXFBlbmd1aW5VcGxvYWRcXFxcc3JjXFxcXFBlbmd1aW5VcGxvYWRcXFxcQ2xpZW50QXBwXFxcXGxheW91dHNcXFxccHJvZmlsZS52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LWUyZTVmMTQyXCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcHJvZmlsZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9sYXlvdXRzL3Byb2ZpbGUudnVlXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInNocmluay1sYXlvdXRcIj5cclxuICAgIDwhLS08aW1nIHNyYz1cIi4vYXNzZXRzL2xvZ28ucG5nXCI+LS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxpbnRybyB2aWV3LXRpdGxlPVwiVXNlciBQcm9maWxlXCI+PC9pbnRybz5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0d2VsdmUgY29sdW1uc1wiPlxyXG4gICAgICAgICAgPG15UHJvZmlsZT48L215UHJvZmlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkZXZDcmVkaXRzPjwvZGV2Q3JlZGl0cz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRybydcclxuICBpbXBvcnQgbXlQcm9maWxlIGZyb20gJy4uL2NvbXBvbmVudHMvbXlQcm9maWxlJ1xyXG4gIGltcG9ydCBkZXZDcmVkaXRzIGZyb20gJy4uL2NvbXBvbmVudHMvZGV2Q3JlZGl0cydcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgSW50cm8sXHJcbiAgICAgIG15UHJvZmlsZSxcclxuICAgICAgZGV2Q3JlZGl0c1xyXG4gICAgfSxcclxuICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcclxuICAgICAgbmV4dCh2bSA9PiB7XHJcbiAgICAgICAgaWYgKCF2bS4kcm9vdC5sb2dnZWRJbikge1xyXG4gICAgICAgICAgdm0uJHJvdXRlci5yZXBsYWNlKCcvJylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgLnNocmluay1sYXlvdXQge1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIH1cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcHJvZmlsZS52dWU/NTc3NWJiMDAiLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IHt9XG5cbi8qIHN0eWxlcyAqL1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbXlQcm9maWxlLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtYTYxNzRiNDQhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbXlQcm9maWxlLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCJDOlxcXFxVc2Vyc1xcXFxOaWhhbC5UYWx1cjE5XFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcUGVuZ3VpblVwbG9hZFxcXFxQZW5ndWluVXBsb2FkXFxcXHNyY1xcXFxQZW5ndWluVXBsb2FkXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXG15UHJvZmlsZS52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCA9IFwiZGF0YS12LWE2MTc0YjQ0XCJcbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbXlQcm9maWxlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbXlQcm9maWxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJteS1wcm9maWxlIGxlZnRcIj5cclxuICAgIDxoND5NYW5hZ2UgQWNjb3VudCAoe3sgJHJvb3QudS5uYW1lIH19KTwvaDQ+XHJcbiAgICA8ZGl2IGNsYXNzPVwicC1zZWN0aW9uXCI+XHJcbiAgICAgIDxoNT5SZXNvdXJjZSBVc2FnZTwvaDU+XHJcbiAgICAgIDxkaXYgdi1pZj1cInVJbmZvLmxvYWRlZFwiPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgVXNpbmdcclxuICAgICAgICAgIDxiPnt7IHVJbmZvLnVzYWdlIH19PC9iPiBvZiA8Yj57eyB1SW5mby5xdW90YSB9fTwvYj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHYtZWxzZT5cclxuICAgICAgICA8bWQtc3Bpbm5lciA6bWQtc3Ryb2tlPVwiMS41XCIgbWQtaW5kZXRlcm1pbmF0ZT48L21kLXNwaW5uZXI+XHJcbiAgICAgICAgPHA+UmV0cmlldmluZyBEYXRhPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHA+PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicC1zZWN0aW9uXCI+XHJcbiAgICAgIDxoNT5BUEk8L2g1PlxyXG4gICAgICA8aDY+QVBJIEtleTogPGNvZGU+e3sgJHJvb3QudS5rZXkgfX08L2NvZGU+PC9oNj5cclxuICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXByaW1hcnkgbWQtcmFpc2VkXCIgQGNsaWNrPVwiZ2VuZXJhdGVOZXdBcGlLZXlcIj5HZW5lcmF0ZSBOZXc8L21kLWJ1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInAtc2VjdGlvblwiPlxyXG4gICAgICA8aDU+U2VjdXJpdHk8L2g1PlxyXG4gICAgICA8Zm9ybSB2LW9uOnN1Ym1pdC5wcmV2ZW50PVwidHJ5VXBkYXRlUGFzc3dvcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWlnaHQgY29sdW1uc1wiPlxyXG4gICAgICAgICAgICA8bWQtaW5wdXQtY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5DdXJyZW50IHBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bWQtaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cInVwZGF0ZVBhc3N3b3JkLm9sZFwiPjwvbWQtaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvbWQtaW5wdXQtY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNpeCBjb2x1bW5zXCI+XHJcbiAgICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXIgbWQtaGFzLXBhc3N3b3JkPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5OZXcgUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwidXBkYXRlUGFzc3dvcmQucGFzc3dvcmRcIj48L21kLWlucHV0PlxyXG4gICAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNpeCBjb2x1bW5zXCI+XHJcbiAgICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkNvbmZpcm0gTmV3IFBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bWQtaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdi1tb2RlbD1cInVwZGF0ZVBhc3N3b3JkLmNvbmZpcm1cIj48L21kLWlucHV0PlxyXG4gICAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPnt7IHVwZGF0ZVBhc3N3b3JkLmVyciB9fTwvcD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiaW52aXNpYmxlXCI+PC9pbnB1dD5cclxuICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcmFpc2VkIG1kLXByaW1hcnlcIiB2LW9uOmNsaWNrPVwidHJ5VXBkYXRlUGFzc3dvcmRcIiA6ZGlzYWJsZWQ9XCIhdXBkYXRlUGFzc3dvcmQuZVwiPkNoYW5nZSBQYXNzd29yZDwvbWQtYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxoNT5EYW5nZXIgWm9uZTwvaDU+XHJcbiAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1yYWlzZWQgbWQtd2FyblwiIEBjbGljaz1cImRlbGV0ZUFsbEZpbGVzXCI+RGVsZXRlIEFsbCBGaWxlczwvbWQtYnV0dG9uPlxyXG4gICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtcmFpc2VkIG1kLXdhcm5cIiBAY2xpY2s9XCJkZWxldGVBY2NvdW50XCI+RGVsZXRlIEFjY291bnQ8L21kLWJ1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbiAgbGV0IGF4aW9zUmVxdWVzdENvbmZpZyA9IHtcclxuICAgIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiAoc3RhdHVzKSB7XHJcbiAgICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDUwMFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB1cGRhdGVQYXNzd29yZDoge1xyXG4gICAgICAgICAgb2xkOiAnJyxcclxuICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgIGNvbmZpcm06ICcnLFxyXG4gICAgICAgICAgZXJyOiAnJyxcclxuICAgICAgICAgIGU6IHRydWUgLy8gZW5hYmxlZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdUluZm86IHtcclxuICAgICAgICAgIHF1b3RhOiBudWxsLFxyXG4gICAgICAgICAgdXNhZ2U6IG51bGwsXHJcbiAgICAgICAgICBsb2FkZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBnZW5lcmF0ZU5ld0FwaUtleTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB2bSA9IHRoaXNcclxuICAgICAgICB2bS4kcm9vdC5zaG93Q29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IGEgbmV3IEFQSSBrZXk/IFRoZSBvbGQgb25lIHdpbGwgbm8gbG9uZ2VyIHdvcmsuIFlvdSB3aWxsIHRoZW4gYmUgbG9nZ2VkIG91dC4nLCAnQ29uZmlybSBBY3Rpb24nLCBmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgaWYgKHIpIHtcclxuICAgICAgICAgICAgYXhpb3MucGF0Y2goJy9hcGkvbmV3a2V5Jywge30sIHZtLiRyb290LmdldEF1dGhSZXF1ZXN0UGFyYW1zKCkpXHJcbiAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gZG9uZVxyXG4gICAgICAgICAgICAgICAgdm0uJHJvb3QudS5rZXkgPSAnJ1xyXG4gICAgICAgICAgICAgICAgdm0uJHJvb3Quc2hvd1BvcHVwKCdOZXcgQVBJIGtleSBnZW5lcmF0ZWQuIFBsZWFzZSBsb2cgaW4gYWdhaW4uJywgJ1N1Y2Nlc3MnKVxyXG4gICAgICAgICAgICAgICAgdm0uJHJvdXRlci5yZXBsYWNlKCcvJylcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlbGV0ZUFsbEZpbGVzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICAgIHZtLiRyb290LnNob3dDb25maXJtKCdBcmUgeW91IGFic29sdXRlbHkgc3VyZT8gQWxsIGZpbGVzIHRoYXQgeW91IGhhdmUgdXBsb2FkZWQgd2lsbCBiZSBwZXJtYW5lbnRseSByZW1vdmVkLiBZb3Ugd2lsbCB0aGVuIGJlIGxvZ2dlZCBvdXQuJywgJ0NvbmZpcm0gQWN0aW9uJywgZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgICAgIGF4aW9zLmRlbGV0ZSgnL2FwaS9udWtlL2ZpbGVzJywgdm0uJHJvb3QuZ2V0QXV0aFJlcXVlc3RQYXJhbXMoKSlcclxuICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBmaWxlcyBoYXZlIGJlZW4gbnVrZWQuXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gbm93IGxvZyBvdXRcclxuICAgICAgICAgICAgdm0uJHJvb3QudS5rZXkgPSAnJ1xyXG4gICAgICAgICAgICB2bS4kcm91dGVyLnJlcGxhY2UoJy8nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlbGV0ZUFjY291bnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgdm0gPSB0aGlzXHJcbiAgICAgICAgdm0uJHJvb3Quc2hvd0NvbmZpcm0oJ0FyZSB5b3UgYWJzb2x1dGVseSBzdXJlPyBZb3VyIGFjY291bnQgYW5kIGFsbCBmaWxlcyB0aGF0IHlvdSBoYXZlIHVwbG9hZGVkIHdpbGwgYmUgcGVybWFuZW50bHkgcmVtb3ZlZC4nLCAnQ29uZmlybSBBY3Rpb24nLCBmdW5jdGlvbiAocjEpIHtcclxuICAgICAgICAgIGlmIChyMSkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmNvbmZpcm0oJ1lvdXIgYWNjb3VudCB3aWxsIGJlIGRlbGV0ZWQuIEFyZSB5b3UgY2VydGFpbiB5b3Ugd291bGQgbGlrZSB0byBwcm9jZWVkPycpKSB7XHJcbiAgICAgICAgICAgICAgYXhpb3MuZGVsZXRlKCcvYXBpL251a2UvdXNlcicsIHZtLiRyb290LmdldEF1dGhSZXF1ZXN0UGFyYW1zKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGFjY291bnQgaGFzIGJlZW4gbnVrZWQuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC8vIG5vdyBsb2cgb3V0XHJcbiAgICAgICAgICAgICAgdm0uJHJvb3QudS5rZXkgPSAnJ1xyXG4gICAgICAgICAgICAgIHZtLiRyb3V0ZXIucmVwbGFjZSgnLycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICB0cnlVcGRhdGVQYXNzd29yZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB2bSA9IHRoaXNcclxuICAgICAgICBpZiAoIXZtLnVwZGF0ZVBhc3N3b3JkLmUpIHJldHVyblxyXG4gICAgICAgIC8vIG1ha2Ugc3VyZSBjb25maXJtYXRpb24gaXMgY29ycmVjdFxyXG4gICAgICAgIGlmICh2bS51cGRhdGVQYXNzd29yZC5wYXNzd29yZC5sZW5ndGggPCA4KSB7XHJcbiAgICAgICAgICB2bS51cGRhdGVQYXNzd29yZC5lcnIgPSAncGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMuIHRoaXMgaXMgYWxzbyB2YWxpZGF0ZWQgb24gdGhlIHNlcnZlcidcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodm0udXBkYXRlUGFzc3dvcmQucGFzc3dvcmQgIT09IHZtLnVwZGF0ZVBhc3N3b3JkLmNvbmZpcm0pIHtcclxuICAgICAgICAgIHZtLnVwZGF0ZVBhc3N3b3JkLmVyciA9ICdwYXNzd29yZCBjb25maXJtYXRpb24gZG9lcyBub3QgbWF0Y2gnXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdm0udXBkYXRlUGFzc3dvcmQuZSA9IGZhbHNlXHJcbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZVxyXG4gICAgICAgIHZtLnVwZGF0ZVBhc3N3b3JkLmVyciA9ICcnXHJcbiAgICAgICAgLy8gc2VuZCB1cGRhdGVQYXNzd29yZCBwb3N0XHJcbiAgICAgICAgYXhpb3MucGF0Y2goJy9jaGFuZ2VwYXNzd29yZCcsIHtcclxuICAgICAgICAgIHVzZXJuYW1lOiB2bS4kcm9vdC51Lm5hbWUsXHJcbiAgICAgICAgICBvbGRQYXNzd29yZDogdm0udXBkYXRlUGFzc3dvcmQub2xkLFxyXG4gICAgICAgICAgbmV3UGFzc3dvcmQ6IHZtLnVwZGF0ZVBhc3N3b3JkLnBhc3N3b3JkXHJcbiAgICAgICAgfSwgYXhpb3NSZXF1ZXN0Q29uZmlnKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IHByb2Nlc3MgcmVzcG9uc2VcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgLy8gc3VjY2Vzc1xyXG4gICAgICAgICAgICAgIHZtLiRyb290LnNob3dQb3B1cCgnUGFzc3dvcmQgY2hhbmdlIHN1Y2NlZWRlZCEgUGxlYXNlIGxvZyBpbiBhZ2Fpbi4nKVxyXG4gICAgICAgICAgICAgIC8vIGxvZyBvdXRcclxuICAgICAgICAgICAgICB2bS4kcm9vdC51LmtleSA9ICcnXHJcbiAgICAgICAgICAgICAgdm0uJHJvdXRlci5yZXBsYWNlKCcvJylcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICAgIC8vIHVuYXV0aG9yaXplZCBiZWNhdXNlIG9mIGVycm9yXHJcbiAgICAgICAgICAgICAgdm0udXBkYXRlUGFzc3dvcmQuZXJyID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZtLnVwZGF0ZVBhc3N3b3JkLmUgPSB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2bS51cGRhdGVQYXNzd29yZC5lID0gdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gbG9hZCBmaWxlcyBmcm9tIHNlcnZlclxyXG4gICAgICBsZXQgdm0gPSB0aGlzXHJcbiAgICAgIHZtLiRyb290LmdldEF1dGhSZXF1ZXN0UGFyYW1zKCkucGFyYW1zLmFwaWtleSA9IHZtLiRyb290LnUua2V5XHJcbiAgICAgIC8vIGxvYWQgdXNlciBpbmZvXHJcbiAgICAgIGF4aW9zLmdldCgnL2FwaS91c2VyaW5mbycsIHZtLiRyb290LmdldEF1dGhSZXF1ZXN0UGFyYW1zKCkpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgLy8gZmV0Y2hlZCBkYXRhXHJcbiAgICAgICAgICB2bS51SW5mbyA9IHtcclxuICAgICAgICAgICAgcXVvdGE6IHZtLiRyb290Lmh1bWFuRmlsZVNpemUocmVzLmRhdGEucXVvdGEpLFxyXG4gICAgICAgICAgICB1c2FnZTogdm0uJHJvb3QuaHVtYW5GaWxlU2l6ZShyZXMuZGF0YS51c2FnZSksXHJcbiAgICAgICAgICAgIGxvYWRlZDogdHJ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5wLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG15UHJvZmlsZS52dWU/NjJlMTQzY2QiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJteS1wcm9maWxlIGxlZnRcIlxuICB9LCBbX2MoJ2g0JywgW192bS5fdihcIk1hbmFnZSBBY2NvdW50IChcIiArIF92bS5fcyhfdm0uJHJvb3QudS5uYW1lKSArIFwiKVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInAtc2VjdGlvblwiXG4gIH0sIFtfYygnaDUnLCBbX3ZtLl92KFwiUmVzb3VyY2UgVXNhZ2VcIildKSwgX3ZtLl92KFwiIFwiKSwgKF92bS51SW5mby5sb2FkZWQpID8gX2MoJ2RpdicsIFtfYygncCcsIFtfdm0uX3YoXCJcXG4gICAgICAgIFVzaW5nXFxuICAgICAgICBcIiksIF9jKCdiJywgW192bS5fdihfdm0uX3MoX3ZtLnVJbmZvLnVzYWdlKSldKSwgX3ZtLl92KFwiIG9mIFwiKSwgX2MoJ2InLCBbX3ZtLl92KF92bS5fcyhfdm0udUluZm8ucXVvdGEpKV0pXSldKSA6IF9jKCdkaXYnLCBbX2MoJ21kLXNwaW5uZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtc3Ryb2tlXCI6IDEuNSxcbiAgICAgIFwibWQtaW5kZXRlcm1pbmF0ZVwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwiUmV0cmlldmluZyBEYXRhXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInAtc2VjdGlvblwiXG4gIH0sIFtfYygnaDUnLCBbX3ZtLl92KFwiQVBJXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdoNicsIFtfdm0uX3YoXCJBUEkgS2V5OiBcIiksIF9jKCdjb2RlJywgW192bS5fdihfdm0uX3MoX3ZtLiRyb290LnUua2V5KSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXByaW1hcnkgbWQtcmFpc2VkXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmdlbmVyYXRlTmV3QXBpS2V5XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiR2VuZXJhdGUgTmV3XCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwLXNlY3Rpb25cIlxuICB9LCBbX2MoJ2g1JywgW192bS5fdihcIlNlY3VyaXR5XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdmb3JtJywge1xuICAgIG9uOiB7XG4gICAgICBcInN1Ym1pdFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF92bS50cnlVcGRhdGVQYXNzd29yZCgkZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJlaWdodCBjb2x1bW5zXCJcbiAgfSwgW19jKCdtZC1pbnB1dC1jb250YWluZXInLCBbX2MoJ2xhYmVsJywgW192bS5fdihcIkN1cnJlbnQgcGFzc3dvcmRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWlucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnVwZGF0ZVBhc3N3b3JkLm9sZCksXG4gICAgICBleHByZXNzaW9uOiBcInVwZGF0ZVBhc3N3b3JkLm9sZFwiXG4gICAgfV0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0udXBkYXRlUGFzc3dvcmQub2xkKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS51cGRhdGVQYXNzd29yZC5vbGQgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNpeCBjb2x1bW5zXCJcbiAgfSwgW19jKCdtZC1pbnB1dC1jb250YWluZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtaGFzLXBhc3N3b3JkXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnbGFiZWwnLCBbX3ZtLl92KFwiTmV3IFBhc3N3b3JkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS51cGRhdGVQYXNzd29yZC5wYXNzd29yZCksXG4gICAgICBleHByZXNzaW9uOiBcInVwZGF0ZVBhc3N3b3JkLnBhc3N3b3JkXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS51cGRhdGVQYXNzd29yZC5wYXNzd29yZClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udXBkYXRlUGFzc3dvcmQucGFzc3dvcmQgPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaXggY29sdW1uc1wiXG4gIH0sIFtfYygnbWQtaW5wdXQtY29udGFpbmVyJywgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJDb25maXJtIE5ldyBQYXNzd29yZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udXBkYXRlUGFzc3dvcmQuY29uZmlybSksXG4gICAgICBleHByZXNzaW9uOiBcInVwZGF0ZVBhc3N3b3JkLmNvbmZpcm1cIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwYXNzd29yZFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnVwZGF0ZVBhc3N3b3JkLmNvbmZpcm0pXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnVwZGF0ZVBhc3N3b3JkLmNvbmZpcm0gPSAkZXZlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJlcnJvci1tZXNzYWdlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnVwZGF0ZVBhc3N3b3JkLmVycikpXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnZpc2libGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXJhaXNlZCBtZC1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogIV92bS51cGRhdGVQYXNzd29yZC5lXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0udHJ5VXBkYXRlUGFzc3dvcmRcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJDaGFuZ2UgUGFzc3dvcmRcIildKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2g1JywgW192bS5fdihcIkRhbmdlciBab25lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1idXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtcmFpc2VkIG1kLXdhcm5cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZGVsZXRlQWxsRmlsZXNcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEZWxldGUgQWxsIEZpbGVzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1idXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtcmFpc2VkIG1kLXdhcm5cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZGVsZXRlQWNjb3VudFxuICAgIH1cbiAgfSwgW192bS5fdihcIkRlbGV0ZSBBY2NvdW50XCIpXSldLCAxKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWE2MTc0YjQ0IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9teVByb2ZpbGUudnVlXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaHJpbmstbGF5b3V0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdpbnRybycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2aWV3LXRpdGxlXCI6IFwiVXNlciBQcm9maWxlXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInR3ZWx2ZSBjb2x1bW5zXCJcbiAgfSwgW19jKCdteVByb2ZpbGUnKV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkZXZDcmVkaXRzJyldLCAxKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWUyZTVmMTQyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9wcm9maWxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9nbG9iYWwuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2dsb2JhbC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9nbG9iYWwuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL2dsb2JhbC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogcm9ib3RvLTEwMCAtIGxhdGluICovXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gVGhpbicpLCBsb2NhbCgnUm9ib3RvLVRoaW4nKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJvYm90by0xMDBpdGFsaWMgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIFRoaW4gSXRhbGljJyksIGxvY2FsKCdSb2JvdG8tVGhpbkl0YWxpYycpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXHJcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwaXRhbGljLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogcm9ib3RvLTMwMCAtIGxhdGluICovXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gTGlnaHQnKSwgbG9jYWwoJ1JvYm90by1MaWdodCcpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXHJcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogcm9ib3RvLTMwMGl0YWxpYyAtIGxhdGluICovXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gTGlnaHQgSXRhbGljJyksIGxvY2FsKCdSb2JvdG8tTGlnaHRJdGFsaWMnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwaXRhbGljLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMGl0YWxpYy53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJvYm90by1yZWd1bGFyIC0gbGF0aW4gKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JvYm90bycpLCBsb2NhbCgnUm9ib3RvLVJlZ3VsYXInKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogcm9ib3RvLWl0YWxpYyAtIGxhdGluICovXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gSXRhbGljJyksIGxvY2FsKCdSb2JvdG8tSXRhbGljJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1pdGFsaWMud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiByb2JvdG8tNTAwIC0gbGF0aW4gKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBNZWRpdW0nKSwgbG9jYWwoJ1JvYm90by1NZWRpdW0nKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJvYm90by01MDBpdGFsaWMgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIE1lZGl1bSBJdGFsaWMnKSwgbG9jYWwoJ1JvYm90by1NZWRpdW1JdGFsaWMnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJvYm90by03MDAgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIEJvbGQnKSwgbG9jYWwoJ1JvYm90by1Cb2xkJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiByb2JvdG8tNzAwaXRhbGljIC0gbGF0aW4gKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBCb2xkIEl0YWxpYycpLCBsb2NhbCgnUm9ib3RvLUJvbGRJdGFsaWMnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwaXRhbGljLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJvYm90by05MDBpdGFsaWMgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIEJsYWNrIEl0YWxpYycpLCBsb2NhbCgnUm9ib3RvLUJsYWNrSXRhbGljJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDBpdGFsaWMud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiByb2JvdG8tOTAwIC0gbGF0aW4gKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBCbGFjaycpLCBsb2NhbCgnUm9ib3RvLUJsYWNrJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiByYWxld2F5LTMwMCAtIGxhdGluICovXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUmFsZXdheSBMaWdodCcpLCBsb2NhbCgnUmFsZXdheS1MaWdodCcpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tMzAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiByYWxld2F5LXJlZ3VsYXIgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JhbGV3YXknKSwgbG9jYWwoJ1JhbGV3YXktUmVndWxhcicpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJhbGV3YXktNTAwIC0gbGF0aW4gKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdSYWxld2F5IE1lZGl1bScpLCBsb2NhbCgnUmFsZXdheS1NZWRpdW0nKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTUwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNTAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogcmFsZXdheS02MDAgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JhbGV3YXkgU2VtaUJvbGQnKSwgbG9jYWwoJ1JhbGV3YXktU2VtaUJvbGQnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNjAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogcmFsZXdheS03MDAgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JhbGV3YXkgQm9sZCcpLCBsb2NhbCgnUmFsZXdheS1Cb2xkJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi03MDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXHJcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJhbGV3YXktODAwIC0gbGF0aW4gKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdSYWxld2F5IEV4dHJhQm9sZCcpLCBsb2NhbCgnUmFsZXdheS1FeHRyYUJvbGQnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTgwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tODAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLmNzc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwLjhjZTU5ODgud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMC42NTRjYjRkLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAud29mZlxuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwaXRhbGljLmFjZWUwZWEud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMud29mZjJcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMGl0YWxpYy40MmRlODk4LndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMud29mZlxuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwLjE2ZGRiMTUud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMC5lY2NlOTJkLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAud29mZlxuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwaXRhbGljLjNkZGI3NDgud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMud29mZjJcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMGl0YWxpYy40ZDA4ZGFlLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMud29mZlxuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci43ZTM2N2JlLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci4xNmUxZDkzLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLndvZmZcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy45ODRhZTM3LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4taXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1pdGFsaWMuMWU2NWU3ZS53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4taXRhbGljLndvZmZcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC5iYjQ3NGYxLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDAuNTdhZjY0Zi53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy45ZTdiZWVlLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDBpdGFsaWMuYjY3MDY5NC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLndvZmZcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC4wZDdlNzFmLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDAuNTI1ZDViNC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy43Mzk0Y2E5LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwaXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDBpdGFsaWMuYWQwZTc0Zi53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwaXRhbGljLndvZmZcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy40ZmFlYzgzLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwaXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDBpdGFsaWMuM2I5NTkwZS53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwaXRhbGljLndvZmZcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC5mNGU4ZGM1LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDAuZGU5ODRjMC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAuZTc0NmUwMy53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAuNzhkZDVhYi53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTMwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci45MTA2NDM1LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLXJlZ3VsYXIud29mZjJcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi1yZWd1bGFyLjI5MGVlMzgud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi1yZWd1bGFyLndvZmZcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAuZTVhMzIxMi53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAuODFlOTU1OC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTUwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNjAwLmNkOTAzOTIud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNjAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNjAwLmE0YjZmMTcud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi02MDAud29mZlxuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC4wNmYxYzg2LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC5jODY0ZDg0LndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAuMDQxYTRiOC53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAuMmEzYTljZi53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTgwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21hdGVyaWFsLWljb25zLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYXRlcmlhbC1pY29ucy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9tYXRlcmlhbC1pY29ucy5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbWF0ZXJpYWwtaWNvbnMuY3NzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBzcmM6IHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIuZW90XCIpICsgXCIpO1xcclxcbiAgICAvKiBGb3IgSUU2LTggKi9cXHJcXG4gICAgc3JjOiBsb2NhbCgnTWF0ZXJpYWwgSWNvbnMnKSwgbG9jYWwoJ01hdGVyaWFsSWNvbnMtUmVndWxhcicpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLnR0ZlwiKSArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxufVxcclxcblxcclxcbi5tYXRlcmlhbC1pY29ucyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgLyogUHJlZmVycmVkIGljb24gc2l6ZSAqL1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXHJcXG4gICAgd29yZC13cmFwOiBub3JtYWw7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIGRpcmVjdGlvbjogbHRyO1xcclxcbiAgICAvKiBTdXBwb3J0IGZvciBhbGwgV2ViS2l0IGJyb3dzZXJzLiAqL1xcclxcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG4gICAgLyogU3VwcG9ydCBmb3IgU2FmYXJpIGFuZCBDaHJvbWUuICovXFxyXFxuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxyXFxuICAgIC8qIFN1cHBvcnQgZm9yIEZpcmVmb3guICovXFxyXFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxuICAgIC8qIFN1cHBvcnQgZm9yIElFLiAqL1xcclxcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9tYXRlcmlhbC1pY29ucy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIuZTc5YmZkOC5lb3RcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmVvdFxuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci41NzBlYjgzLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmMlxuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci4wMTJjZjZhLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmZcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIuYTM3YjBjMC50dGZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLnR0ZlxuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ub3JtYWxpemUuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vcm1hbGl6ZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ub3JtYWxpemUuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjMuMC4yIHwgTUlUIExpY2Vuc2UgfCBnaXQuaW8vbm9ybWFsaXplICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gU2V0IGRlZmF1bHQgZm9udCBmYW1pbHkgdG8gc2Fucy1zZXJpZi5cXHJcXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcXHJcXG4gKiAgICB1c2VyIHpvb20uXFxyXFxuICovXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgLyogMSAqL1xcclxcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXHJcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4uXFxyXFxuICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qIEhUTUw1IGRpc3BsYXkgZGVmaW5pdGlvbnNcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBhbnkgSFRNTDUgZWxlbWVudCBpbiBJRSA4LzkuXFxyXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGBkZXRhaWxzYCBvciBgc3VtbWFyeWAgaW4gSUUgMTAvMTFcXHJcXG4gKiBhbmQgRmlyZWZveC5cXHJcXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYG1haW5gIGluIElFIDExLlxcclxcbiAqL1xcclxcblxcclxcbmFydGljbGUsXFxyXFxuYXNpZGUsXFxyXFxuZGV0YWlscyxcXHJcXG5maWdjYXB0aW9uLFxcclxcbmZpZ3VyZSxcXHJcXG5mb290ZXIsXFxyXFxuaGVhZGVyLFxcclxcbmhncm91cCxcXHJcXG5tYWluLFxcclxcbm1lbnUsXFxyXFxubmF2LFxcclxcbnNlY3Rpb24sXFxyXFxuc3VtbWFyeSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDgvOS5cXHJcXG4gKiAyLiBOb3JtYWxpemUgdmVydGljYWwgYWxpZ25tZW50IG9mIGBwcm9ncmVzc2AgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxyXFxuICovXFxyXFxuXFxyXFxuYXVkaW8sXFxyXFxuY2FudmFzLFxcclxcbnByb2dyZXNzLFxcclxcbnZpZGVvIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogMSAqL1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXFxyXFxuICogUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBgW2hpZGRlbl1gIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLlxcclxcbiAqIEhpZGUgdGhlIGB0ZW1wbGF0ZWAgZWxlbWVudCBpbiBJRSA4LzkvMTEsIFNhZmFyaSwgYW5kIEZpcmVmb3ggPCAyMi5cXHJcXG4gKi9cXHJcXG5cXHJcXG5baGlkZGVuXSxcXHJcXG50ZW1wbGF0ZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMaW5rc1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgY29sb3IgZnJvbSBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxyXFxuICovXFxyXFxuXFxyXFxuYSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogSW1wcm92ZSByZWFkYWJpbGl0eSB3aGVuIGZvY3VzZWQgYW5kIGFsc28gbW91c2UgaG92ZXJlZCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuYTphY3RpdmUsXFxyXFxuYTpob3ZlciB7XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS8xMC8xMSwgU2FmYXJpLCBhbmQgQ2hyb21lLlxcclxcbiAqL1xcclxcblxcclxcbmFiYnJbdGl0bGVdIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3Mgc3R5bGUgc2V0IHRvIGBib2xkZXJgIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5iLFxcclxcbnN0cm9uZyB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIFNhZmFyaSBhbmQgQ2hyb21lLlxcclxcbiAqL1xcclxcblxcclxcbmRmbiB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgdmFyaWFibGUgYGgxYCBmb250LXNpemUgYW5kIG1hcmdpbiB3aXRoaW4gYHNlY3Rpb25gIGFuZCBgYXJ0aWNsZWBcXHJcXG4gKiBjb250ZXh0cyBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxyXFxuICovXFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxuICBtYXJnaW46IDAuNjdlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LlxcclxcbiAqL1xcclxcblxcclxcbm1hcmsge1xcclxcbiAgYmFja2dyb3VuZDogI2ZmMDtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBhbmQgdmFyaWFibGUgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5zbWFsbCB7XFxyXFxuICBmb250LXNpemU6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgYWZmZWN0aW5nIGBsaW5lLWhlaWdodGAgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnN1YixcXHJcXG5zdXAge1xcclxcbiAgZm9udC1zaXplOiA3NSU7XFxyXFxuICBsaW5lLWhlaWdodDogMDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuc3VwIHtcXHJcXG4gIHRvcDogLTAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5zdWIge1xcclxcbiAgYm90dG9tOiAtMC4yNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbWJlZGRlZCBjb250ZW50XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDgvOS8xMC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IG92ZXJmbG93IG5vdCBoaWRkZW4gaW4gSUUgOS8xMC8xMS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5zdmc6bm90KDpyb290KSB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHcm91cGluZyBjb250ZW50XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA4LzkgYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5maWd1cmUge1xcclxcbiAgbWFyZ2luOiAxZW0gNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBkaWZmZXJlbmNlcyBiZXR3ZWVuIEZpcmVmb3ggYW5kIG90aGVyIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbmhyIHtcXHJcXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29udGFpbiBvdmVyZmxvdyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxucHJlIHtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIG9kZCBgZW1gLXVuaXQgZm9udCBzaXplIHJlbmRlcmluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuY29kZSxcXHJcXG5rYmQsXFxyXFxucHJlLFxcclxcbnNhbXAge1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxufVxcclxcblxcclxcbi8qIEZvcm1zXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBLbm93biBsaW1pdGF0aW9uOiBieSBkZWZhdWx0LCBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYIGFsbG93IHZlcnkgbGltaXRlZFxcclxcbiAqIHN0eWxpbmcgb2YgYHNlbGVjdGAsIHVubGVzcyBhIGBib3JkZXJgIHByb3BlcnR5IGlzIHNldC5cXHJcXG4gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQuXFxyXFxuICogICAgS25vd24gaXNzdWU6IGFmZmVjdHMgY29sb3Igb2YgZGlzYWJsZWQgZWxlbWVudHMuXFxyXFxuICogMi4gQ29ycmVjdCBmb250IHByb3BlcnRpZXMgbm90IGJlaW5nIGluaGVyaXRlZC5cXHJcXG4gKiAzLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxub3B0Z3JvdXAsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXFxyXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxyXFxuICBtYXJnaW46IDA7IC8qIDMgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBgb3ZlcmZsb3dgIHNldCB0byBgaGlkZGVuYCBpbiBJRSA4LzkvMTAvMTEuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBgdGV4dC10cmFuc2Zvcm1gIGluaGVyaXRhbmNlIGZvciBgYnV0dG9uYCBhbmQgYHNlbGVjdGAuXFxyXFxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXHJcXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3gsIElFIDgvOS8xMC8xMSwgYW5kIE9wZXJhLlxcclxcbiAqIENvcnJlY3QgYHNlbGVjdGAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuc2VsZWN0IHtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxcclxcbiAqICAgIGFuZCBgdmlkZW9gIGNvbnRyb2xzLlxcclxcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cXHJcXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxcclxcbiAqICAgIGBpbnB1dGAgYW5kIG90aGVycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaHRtbCBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSwgLyogMSAqL1xcclxcbmlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0sXFxyXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDIgKi9cXHJcXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogMyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbltkaXNhYmxlZF0sXFxyXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggNCsuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcclxcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgRmlyZWZveCA0KyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cXHJcXG4gKiB0aGUgVUEgc3R5bGVzaGVldC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBJdCdzIHJlY29tbWVuZGVkIHRoYXQgeW91IGRvbid0IGF0dGVtcHQgdG8gc3R5bGUgdGhlc2UgZWxlbWVudHMuXFxyXFxuICogRmlyZWZveCdzIGltcGxlbWVudGF0aW9uIGRvZXNuJ3QgcmVzcGVjdCBib3gtc2l6aW5nLCBwYWRkaW5nLCBvciB3aWR0aC5cXHJcXG4gKlxcclxcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YCBpbiBJRSA4LzkvMTAuXFxyXFxuICogMi4gUmVtb3ZlIGV4Y2VzcyBwYWRkaW5nIGluIElFIDgvOS8xMC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcclxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcclxcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBGaXggdGhlIGN1cnNvciBzdHlsZSBmb3IgQ2hyb21lJ3MgaW5jcmVtZW50L2RlY3JlbWVudCBidXR0b25zLiBGb3IgY2VydGFpblxcclxcbiAqIGBmb250LXNpemVgIHZhbHVlcyBvZiB0aGUgYGlucHV0YCwgaXQgY2F1c2VzIHRoZSBjdXJzb3Igc3R5bGUgb2YgdGhlXFxyXFxuICogZGVjcmVtZW50IGJ1dHRvbiB0byBjaGFuZ2UgZnJvbSBgZGVmYXVsdGAgdG8gYHRleHRgLlxcclxcbiAqL1xcclxcblxcclxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcclxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXFxyXFxuICogMi4gQWRkcmVzcyBgYm94LXNpemluZ2Agc2V0IHRvIGBib3JkZXItYm94YCBpbiBTYWZhcmkgYW5kIENocm9tZVxcclxcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxcclxcbiAqL1xcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxyXFxuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMiAqL1xcclxcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgYW5kIENocm9tZSBvbiBPUyBYLlxcclxcbiAqIFNhZmFyaSAoYnV0IG5vdCBDaHJvbWUpIGNsaXBzIHRoZSBjYW5jZWwgYnV0dG9uIHdoZW4gdGhlIHNlYXJjaCBpbnB1dCBoYXNcXHJcXG4gKiBwYWRkaW5nIChhbmQgYHRleHRmaWVsZGAgYXBwZWFyYW5jZSkuXFxyXFxuICovXFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXFxyXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXFxyXFxuICovXFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXHJcXG4gIG1hcmdpbjogMCAycHg7XFxyXFxuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgYGNvbG9yYCBub3QgYmVpbmcgaW5oZXJpdGVkIGluIElFIDgvOS8xMC8xMS5cXHJcXG4gKiAyLiBSZW1vdmUgcGFkZGluZyBzbyBwZW9wbGUgYXJlbid0IGNhdWdodCBvdXQgaWYgdGhleSB6ZXJvIG91dCBmaWVsZHNldHMuXFxyXFxuICovXFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG4gIGJvcmRlcjogMDsgLyogMSAqL1xcclxcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgOC85LzEwLzExLlxcclxcbiAqL1xcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBEb24ndCBpbmhlcml0IHRoZSBgZm9udC13ZWlnaHRgIChhcHBsaWVkIGJ5IGEgcnVsZSBhYm92ZSkuXFxyXFxuICogTk9URTogdGhlIGRlZmF1bHQgY2Fubm90IHNhZmVseSBiZSBjaGFuZ2VkIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFguXFxyXFxuICovXFxyXFxuXFxyXFxub3B0Z3JvdXAge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi8qIFRhYmxlc1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxcclxcbiAqL1xcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICBib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxudGQsXFxyXFxudGgge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Zmc2tlbGV0b24uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Zmc2tlbGV0b24uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmZza2VsZXRvbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvZmZza2VsZXRvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXHJcXG4qIFNrZWxldG9uIFYyLjAuNFxcclxcbiogQ29weXJpZ2h0IDIwMTQsIERhdmUgR2FtYWNoZVxcclxcbiogd3d3LmdldHNrZWxldG9uLmNvbVxcclxcbiogRnJlZSB0byB1c2UgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxcclxcbiogaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcXHJcXG4qIDEyLzI5LzIwMTRcXHJcXG4qL1xcclxcblxcclxcblxcclxcbi8qIFRhYmxlIG9mIGNvbnRlbnRzXFxyXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXFxyXFxuLSBHcmlkXFxyXFxuLSBCYXNlIFN0eWxlc1xcclxcbi0gVHlwb2dyYXBoeVxcclxcbi0gTGlua3NcXHJcXG4tIEJ1dHRvbnNcXHJcXG4tIEZvcm1zXFxyXFxuLSBMaXN0c1xcclxcbi0gQ29kZVxcclxcbi0gVGFibGVzXFxyXFxuLSBTcGFjaW5nXFxyXFxuLSBVdGlsaXRpZXNcXHJcXG4tIENsZWFyaW5nXFxyXFxuLSBNZWRpYSBRdWVyaWVzXFxyXFxuKi9cXHJcXG5cXHJcXG5cXHJcXG4vKiBHcmlkXFxyXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogOTYwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXHJcXG4uY29sdW1uLFxcclxcbi5jb2x1bW5zIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxyXFxuXFxyXFxuLyogRm9yIGRldmljZXMgbGFyZ2VyIHRoYW4gNDAwcHggKi9cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogODUlO1xcclxcbiAgICBwYWRkaW5nOiAwOyB9XFxyXFxufVxcclxcblxcclxcbi8qIEZvciBkZXZpY2VzIGxhcmdlciB0aGFuIDU1MHB4ICovXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDgwJTsgfVxcclxcbiAgLmNvbHVtbixcXHJcXG4gIC5jb2x1bW5zIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDQlOyB9XFxyXFxuICAuY29sdW1uOmZpcnN0LWNoaWxkLFxcclxcbiAgLmNvbHVtbnM6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMDsgfVxcclxcblxcclxcbiAgLm9uZS5jb2x1bW4sXFxyXFxuICAub25lLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQuNjY2NjY2NjY2NjclOyB9XFxyXFxuICAudHdvLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDEzLjMzMzMzMzMzMzMlOyB9XFxyXFxuICAudGhyZWUuY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDIyJTsgICAgICAgICAgICB9XFxyXFxuICAuZm91ci5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDMwLjY2NjY2NjY2NjclOyB9XFxyXFxuICAuZml2ZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDM5LjMzMzMzMzMzMzMlOyB9XFxyXFxuICAuc2l4LmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQ4JTsgICAgICAgICAgICB9XFxyXFxuICAuc2V2ZW4uY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDU2LjY2NjY2NjY2NjclOyB9XFxyXFxuICAuZWlnaHQuY29sdW1ucyAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDY1LjMzMzMzMzMzMzMlOyB9XFxyXFxuICAubmluZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDc0LjAlOyAgICAgICAgICB9XFxyXFxuICAudGVuLmNvbHVtbnMgICAgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDgyLjY2NjY2NjY2NjclOyB9XFxyXFxuICAuZWxldmVuLmNvbHVtbnMgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDkxLjMzMzMzMzMzMzMlOyB9XFxyXFxuICAudHdlbHZlLmNvbHVtbnMgICAgICAgICAgICAgICAgIHsgd2lkdGg6IDEwMCU7IG1hcmdpbi1sZWZ0OiAwOyB9XFxyXFxuXFxyXFxuICAub25lLXRoaXJkLmNvbHVtbiAgICAgICAgICAgICAgIHsgd2lkdGg6IDMwLjY2NjY2NjY2NjclOyB9XFxyXFxuICAudHdvLXRoaXJkcy5jb2x1bW4gICAgICAgICAgICAgIHsgd2lkdGg6IDY1LjMzMzMzMzMzMzMlOyB9XFxyXFxuXFxyXFxuICAub25lLWhhbGYuY29sdW1uICAgICAgICAgICAgICAgIHsgd2lkdGg6IDQ4JTsgfVxcclxcblxcclxcbiAgLyogT2Zmc2V0cyAqL1xcclxcbiAgLm9mZnNldC1ieS1vbmUuY29sdW1uLFxcclxcbiAgLm9mZnNldC1ieS1vbmUuY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA4LjY2NjY2NjY2NjY3JTsgfVxcclxcbiAgLm9mZnNldC1ieS10d28uY29sdW1uLFxcclxcbiAgLm9mZnNldC1ieS10d28uY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiAxNy4zMzMzMzMzMzMzJTsgfVxcclxcbiAgLm9mZnNldC1ieS10aHJlZS5jb2x1bW4sXFxyXFxuICAub2Zmc2V0LWJ5LXRocmVlLmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDI2JTsgICAgICAgICAgICB9XFxyXFxuICAub2Zmc2V0LWJ5LWZvdXIuY29sdW1uLFxcclxcbiAgLm9mZnNldC1ieS1mb3VyLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiAzNC42NjY2NjY2NjY3JTsgfVxcclxcbiAgLm9mZnNldC1ieS1maXZlLmNvbHVtbixcXHJcXG4gIC5vZmZzZXQtYnktZml2ZS5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogNDMuMzMzMzMzMzMzMyU7IH1cXHJcXG4gIC5vZmZzZXQtYnktc2l4LmNvbHVtbixcXHJcXG4gIC5vZmZzZXQtYnktc2l4LmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogNTIlOyAgICAgICAgICAgIH1cXHJcXG4gIC5vZmZzZXQtYnktc2V2ZW4uY29sdW1uLFxcclxcbiAgLm9mZnNldC1ieS1zZXZlbi5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiA2MC42NjY2NjY2NjY3JTsgfVxcclxcbiAgLm9mZnNldC1ieS1laWdodC5jb2x1bW4sXFxyXFxuICAub2Zmc2V0LWJ5LWVpZ2h0LmNvbHVtbnMgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDY5LjMzMzMzMzMzMzMlOyB9XFxyXFxuICAub2Zmc2V0LWJ5LW5pbmUuY29sdW1uLFxcclxcbiAgLm9mZnNldC1ieS1uaW5lLmNvbHVtbnMgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA3OC4wJTsgICAgICAgICAgfVxcclxcbiAgLm9mZnNldC1ieS10ZW4uY29sdW1uLFxcclxcbiAgLm9mZnNldC1ieS10ZW4uY29sdW1ucyAgICAgICAgICB7IG1hcmdpbi1sZWZ0OiA4Ni42NjY2NjY2NjY3JTsgfVxcclxcbiAgLm9mZnNldC1ieS1lbGV2ZW4uY29sdW1uLFxcclxcbiAgLm9mZnNldC1ieS1lbGV2ZW4uY29sdW1ucyAgICAgICB7IG1hcmdpbi1sZWZ0OiA5NS4zMzMzMzMzMzMzJTsgfVxcclxcblxcclxcbiAgLm9mZnNldC1ieS1vbmUtdGhpcmQuY29sdW1uLFxcclxcbiAgLm9mZnNldC1ieS1vbmUtdGhpcmQuY29sdW1ucyAgICB7IG1hcmdpbi1sZWZ0OiAzNC42NjY2NjY2NjY3JTsgfVxcclxcbiAgLm9mZnNldC1ieS10d28tdGhpcmRzLmNvbHVtbixcXHJcXG4gIC5vZmZzZXQtYnktdHdvLXRoaXJkcy5jb2x1bW5zICAgeyBtYXJnaW4tbGVmdDogNjkuMzMzMzMzMzMzMyU7IH1cXHJcXG5cXHJcXG4gIC5vZmZzZXQtYnktb25lLWhhbGYuY29sdW1uLFxcclxcbiAgLm9mZnNldC1ieS1vbmUtaGFsZi5jb2x1bW5zICAgICB7IG1hcmdpbi1sZWZ0OiA1MiU7IH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogQmFzZSBTdHlsZXNcXHJcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXHJcXG4vKiBOT1RFXFxyXFxuaHRtbCBpcyBzZXQgdG8gNjIuNSUgc28gdGhhdCBhbGwgdGhlIFJFTSBtZWFzdXJlbWVudHMgdGhyb3VnaG91dCBTa2VsZXRvblxcclxcbmFyZSBiYXNlZCBvbiAxMHB4IHNpemluZy4gU28gYmFzaWNhbGx5IDEuNXJlbSA9IDE1cHggOikgKi9cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7IH1cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07IC8qIGN1cnJlbnRseSBlbXMgY2F1c2UgY2hyb21lIGJ1ZyBtaXNpbnRlcnByZXRpbmcgcmVtcyBvbiBib2R5IGVsZW1lbnQgKi9cXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgXFxcIkhlbHZldGljYU5ldWVcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6ICMyMjI7IH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBUeXBvZ3JhcGh5XFxyXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7IH1cXHJcXG5oMSB7IGZvbnQtc2l6ZTogNC4wcmVtOyBsaW5lLWhlaWdodDogMS4yOyAgbGV0dGVyLXNwYWNpbmc6IC0uMXJlbTt9XFxyXFxuaDIgeyBmb250LXNpemU6IDMuNnJlbTsgbGluZS1oZWlnaHQ6IDEuMjU7IGxldHRlci1zcGFjaW5nOiAtLjFyZW07IH1cXHJcXG5oMyB7IGZvbnQtc2l6ZTogMy4wcmVtOyBsaW5lLWhlaWdodDogMS4zOyAgbGV0dGVyLXNwYWNpbmc6IC0uMXJlbTsgfVxcclxcbmg0IHsgZm9udC1zaXplOiAyLjRyZW07IGxpbmUtaGVpZ2h0OiAxLjM1OyBsZXR0ZXItc3BhY2luZzogLS4wOHJlbTsgfVxcclxcbmg1IHsgZm9udC1zaXplOiAxLjhyZW07IGxpbmUtaGVpZ2h0OiAxLjU7ICBsZXR0ZXItc3BhY2luZzogLS4wNXJlbTsgfVxcclxcbmg2IHsgZm9udC1zaXplOiAxLjVyZW07IGxpbmUtaGVpZ2h0OiAxLjY7ICBsZXR0ZXItc3BhY2luZzogMDsgfVxcclxcblxcclxcbi8qIExhcmdlciB0aGFuIHBoYWJsZXQgKi9cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcXHJcXG4gIGgxIHsgZm9udC1zaXplOiA1LjByZW07IH1cXHJcXG4gIGgyIHsgZm9udC1zaXplOiA0LjJyZW07IH1cXHJcXG4gIGgzIHsgZm9udC1zaXplOiAzLjZyZW07IH1cXHJcXG4gIGg0IHsgZm9udC1zaXplOiAzLjByZW07IH1cXHJcXG4gIGg1IHsgZm9udC1zaXplOiAyLjRyZW07IH1cXHJcXG4gIGg2IHsgZm9udC1zaXplOiAxLjVyZW07IH1cXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICBtYXJnaW4tdG9wOiAwOyB9XFxyXFxuXFxyXFxuXFxyXFxuLyogTGlua3NcXHJcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiAjMUVBRURCOyB9XFxyXFxuYTpob3ZlciB7XFxyXFxuICBjb2xvcjogIzBGQTBDRTsgfVxcclxcblxcclxcblxcclxcbi8qIExpc3RzXFxyXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogY2lyY2xlIGluc2lkZTsgfVxcclxcbm9sIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IGRlY2ltYWwgaW5zaWRlOyB9XFxyXFxub2wsIHVsIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gIG1hcmdpbi10b3A6IDA7IH1cXHJcXG51bCB1bCxcXHJcXG51bCBvbCxcXHJcXG5vbCBvbCxcXHJcXG5vbCB1bCB7XFxyXFxuICBtYXJnaW46IDEuNXJlbSAwIDEuNXJlbSAzcmVtO1xcclxcbiAgZm9udC1zaXplOiA5MCU7IH1cXHJcXG5saSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XFxyXFxuXFxyXFxuXFxyXFxuLyogQ29kZVxcclxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcclxcbmNvZGUge1xcclxcbiAgcGFkZGluZzogLjJyZW0gLjVyZW07XFxyXFxuICBtYXJnaW46IDAgLjJyZW07XFxyXFxuICBmb250LXNpemU6IDkwJTtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICBiYWNrZ3JvdW5kOiAjRjFGMUYxO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI0UxRTFFMTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgfVxcclxcbnByZSA+IGNvZGUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXHJcXG4gIHdoaXRlLXNwYWNlOiBwcmU7IH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBUYWJsZXNcXHJcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXHJcXG50aCxcXHJcXG50ZCB7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDE1cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMUUxRTE7IH1cXHJcXG50aDpmaXJzdC1jaGlsZCxcXHJcXG50ZDpmaXJzdC1jaGlsZCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cXHJcXG50aDpsYXN0LWNoaWxkLFxcclxcbnRkOmxhc3QtY2hpbGQge1xcclxcbiAgcGFkZGluZy1yaWdodDogMDsgfVxcclxcblxcclxcblxcclxcbi8qIFNwYWNpbmdcXHJcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXHJcXG4vKmJ1dHRvbixcXHJcXG4uYnV0dG9uIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cXHJcXG5pbnB1dCxcXHJcXG50ZXh0YXJlYSxcXHJcXG5zZWxlY3QsXFxyXFxuZmllbGRzZXQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtOyB9XFxyXFxucHJlLFxcclxcbmJsb2NrcXVvdGUsXFxyXFxuZGwsXFxyXFxuZmlndXJlLFxcclxcbnRhYmxlLFxcclxcbnAsXFxyXFxudWwsXFxyXFxub2wsXFxyXFxuZm9ybSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07IH0qL1xcclxcblxcclxcblxcclxcbi8qIFV0aWxpdGllc1xcclxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcclxcbi51LWZ1bGwtd2lkdGgge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxyXFxuLnUtbWF4LWZ1bGwtd2lkdGgge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcclxcbi51LXB1bGwtcmlnaHQge1xcclxcbiAgZmxvYXQ6IHJpZ2h0OyB9XFxyXFxuLnUtcHVsbC1sZWZ0IHtcXHJcXG4gIGZsb2F0OiBsZWZ0OyB9XFxyXFxuXFxyXFxuXFxyXFxuLyogTWlzY1xcclxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcclxcbmhyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzLjVyZW07XFxyXFxuICBib3JkZXItd2lkdGg6IDA7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0UxRTFFMTsgfVxcclxcblxcclxcblxcclxcbi8qIENsZWFyaW5nXFxyXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxyXFxuXFxyXFxuLyogU2VsZiBDbGVhcmluZyBHb29kbmVzcyAqL1xcclxcbi5jb250YWluZXI6YWZ0ZXIsXFxyXFxuLnJvdzphZnRlcixcXHJcXG4udS1jZiB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGRpc3BsYXk6IHRhYmxlO1xcclxcbiAgY2xlYXI6IGJvdGg7IH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBNZWRpYSBRdWVyaWVzXFxyXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxyXFxuLypcXHJcXG5Ob3RlOiBUaGUgYmVzdCB3YXkgdG8gc3RydWN0dXJlIHRoZSB1c2Ugb2YgbWVkaWEgcXVlcmllcyBpcyB0byBjcmVhdGUgdGhlIHF1ZXJpZXNcXHJcXG5uZWFyIHRoZSByZWxldmFudCBjb2RlLiBGb3IgZXhhbXBsZSwgaWYgeW91IHdhbnRlZCB0byBjaGFuZ2UgdGhlIHN0eWxlcyBmb3IgYnV0dG9uc1xcclxcbm9uIHNtYWxsIGRldmljZXMsIHBhc3RlIHRoZSBtb2JpbGUgcXVlcnkgY29kZSB1cCBpbiB0aGUgYnV0dG9ucyBzZWN0aW9uIGFuZCBzdHlsZSBpdFxcclxcbnRoZXJlLlxcclxcbiovXFxyXFxuXFxyXFxuXFxyXFxuLyogTGFyZ2VyIHRoYW4gbW9iaWxlICovXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7fVxcclxcblxcclxcbi8qIExhcmdlciB0aGFuIHBoYWJsZXQgKGFsc28gcG9pbnQgd2hlbiBncmlkIGJlY29tZXMgYWN0aXZlKSAqL1xcclxcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge31cXHJcXG5cXHJcXG4vKiBMYXJnZXIgdGhhbiB0YWJsZXQgKi9cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHt9XFxyXFxuXFxyXFxuLyogTGFyZ2VyIHRoYW4gZGVza3RvcCAqL1xcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHt9XFxyXFxuXFxyXFxuLyogTGFyZ2VyIHRoYW4gRGVza3RvcCBIRCAqL1xcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHt9XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9mZnNrZWxldG9uLmNzc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZS1tYXRlcmlhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZ1ZS1tYXRlcmlhbFwiXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL3Z1ZS1tYXRlcmlhbC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL3Z1ZS1tYXRlcmlhbC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL3Z1ZS1tYXRlcmlhbC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbWF0ZXJpYWwvZGlzdC92dWUtbWF0ZXJpYWwuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLWF2YXRhciB7XFxuICB3aWR0aDogNDBweDtcXG4gIG1pbi13aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4ubWQtYXZhdGFyLm1kLWxhcmdlIHtcXG4gICAgd2lkdGg6IDY0cHg7XFxuICAgIG1pbi13aWR0aDogNjRweDtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcbiAgICBtaW4taGVpZ2h0OiA2NHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2NHB4O1xcbn1cXG4ubWQtYXZhdGFyLm1kLWxhcmdlIC5tZC1pY29uIHtcXG4gICAgICB3aWR0aDogNDBweDtcXG4gICAgICBtaW4td2lkdGg6IDQwcHg7XFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbn1cXG4ubWQtYXZhdGFyLm1kLWF2YXRhci1pY29uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcXG59XFxuLm1kLWF2YXRhci5tZC1hdmF0YXItaWNvbiAubWQtaWNvbiB7XFxuICAgICAgY29sb3I6ICNmZmY7XFxufVxcbi5tZC1hdmF0YXIgLm1kLWljb24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG4ubWQtYXZhdGFyIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ubWQtYXZhdGFyIC5tZC1pbmstcmlwcGxlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4ubWQtYXZhdGFyIC5tZC1pbmstcmlwcGxlIC5tZC1yaXBwbGUubWQtYWN0aXZlIHtcXG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IC45cztcXG59XFxuLm1kLWF2YXRhci10b29sdGlwLm1kLXRvb2x0aXAtdG9wIHtcXG4gIG1hcmdpbi10b3A6IC04cHg7XFxufVxcbi5tZC1hdmF0YXItdG9vbHRpcC5tZC10b29sdGlwLXJpZ2h0IHtcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxufVxcbi5tZC1hdmF0YXItdG9vbHRpcC5tZC10b29sdGlwLWJvdHRvbSB7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcbi5tZC1hdmF0YXItdG9vbHRpcC5tZC10b29sdGlwLWxlZnQge1xcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLWJhY2tkcm9wIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDk5O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSk7XFxufVxcbi5tZC1iYWNrZHJvcC5tZC1hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuLm1kLWJhY2tkcm9wLm1kLXRyYW5zcGFyZW50IHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAwNSk7XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLWJvdHRvbS1iYXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDU2cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuLm1kLWJvdHRvbS1iYXItaXRlbSB7XFxuICBtYXgtd2lkdGg6IDE2OHB4O1xcbiAgbWluLXdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogOHB4IDEycHggMTBweDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAtbXMtZmxleDogMTtcXG4gICAgICBmbGV4OiAxO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDFlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUge1xcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xcbn1cXG4ubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZSAubWQtdGV4dCB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG59XFxuLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUgLm1kLXRleHQsXFxuICAgIC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZlIC5tZC1pY29uIHtcXG4gICAgICBjb2xvcjogY3VycmVudENvbG9yO1xcbn1cXG4ubWQtYm90dG9tLWJhci1pdGVtW2Rpc2FibGVkXSB7XFxuICAgIG9wYWNpdHk6IC4zODtcXG59XFxuLm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbSB7XFxuICAgIG1pbi13aWR0aDogNTZweDtcXG4gICAgbWF4LXdpZHRoOiA5NnB4O1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICAtbXMtZmxleDogMSAxIDMycHg7XFxuICAgICAgICBmbGV4OiAxIDEgMzJweDtcXG4gICAgdHJhbnNpdGlvbjogMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogZmxleCwgbWluLXdpZHRoLCBtYXgtd2lkdGg7XFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGZsZXgsIG1pbi13aWR0aCwgbWF4LXdpZHRoLCAtbXMtZmxleDtcXG59XFxuLm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbSAubWQtaWNvbiB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA4cHgsIDApO1xcbn1cXG4ubWQtYm90dG9tLWJhci5tZC1zaGlmdCAubWQtYm90dG9tLWJhci1pdGVtIC5tZC10ZXh0IHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlM2QoMCwgNnB4LCAwKTtcXG59XFxuLm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUge1xcbiAgICAgIG1pbi13aWR0aDogOTZweDtcXG4gICAgICBtYXgtd2lkdGg6IDE2OHB4O1xcbiAgICAgIC1tcy1mbGV4OiAxIDEgNzJweDtcXG4gICAgICAgICAgZmxleDogMSAxIDcycHg7XFxufVxcbi5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZlIC5tZC1pY29uLFxcbiAgICAgIC5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZlIC5tZC10ZXh0IHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxufVxcbi5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZlIC5tZC1pY29uIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxufVxcbi5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZlIC5tZC10ZXh0IHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlM2QoMCwgMnB4LCAwKTtcXG59XFxuLm1kLWJvdHRvbS1iYXItaXRlbSAubWQtdGV4dCB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44NTcxKSB0cmFuc2xhdGVZKDJweCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpLCBjb2xvciAwLjE1cyBsaW5lYXIsIG9wYWNpdHkgMC4xNXMgbGluZWFyO1xcbn1cXG4ubWQtYm90dG9tLWJhci1pdGVtIC5tZC1pY29uIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSksIGNvbG9yIDAuMTVzIGxpbmVhcjtcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtYnV0dG9uIHtcXG4gIG1pbi13aWR0aDogODhweDtcXG4gIG1pbi1oZWlnaHQ6IDM2cHg7XFxuICBtYXJnaW46IDZweCA4cHg7XFxuICBwYWRkaW5nOiAwIDE2cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICBjb2xvcjogY3VycmVudENvbG9yO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXN0eWxlOiBpbmhlcml0O1xcbiAgZm9udC12YXJpYW50OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5tZC1idXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4ubWQtYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG4ubWQtYnV0dG9uOmhvdmVyOm5vdChbZGlzYWJsZWRdKTpub3QoLm1kLXJhaXNlZCkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMik7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLm1kLWJ1dHRvbjpob3Zlcjpub3QoW2Rpc2FibGVkXSkubWQtcmFpc2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLWJ1dHRvbjphY3RpdmU6bm90KFtkaXNhYmxlZF0pIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDE1MywgMTUzLCAwLjQpO1xcbn1cXG4ubWQtYnV0dG9uLm1kLXJhaXNlZDpub3QoW2Rpc2FibGVkXSkge1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLWJ1dHRvbi5tZC1kZW5zZSB7XFxuICAgIG1pbi1oZWlnaHQ6IDMycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxufVxcbi5tZC1idXR0b24ubWQtaWNvbi1idXR0b24gLm1kLWljb24sIC5tZC1idXR0b24ubWQtZmFiIC5tZC1pY29uIHtcXG4gICAgbWFyZ2luLXRvcDogMXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG4ubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIG1pbi13aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBtYXJnaW46IDAgNnB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxufVxcbi5tZC1idXR0b24ubWQtaWNvbi1idXR0b246bm90KFtkaXNhYmxlZF0pOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG4ubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uLm1kLWRlbnNlIHtcXG4gICAgICB3aWR0aDogMzJweDtcXG4gICAgICBtaW4td2lkdGg6IDMycHg7XFxuICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgIG1pbi1oZWlnaHQ6IDMycHg7XFxuICAgICAgcGFkZGluZzogNHB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbn1cXG4ubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uIC5tZC1pbmstcmlwcGxlIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5tZC1idXR0b24ubWQtaWNvbi1idXR0b24gLm1kLWluay1yaXBwbGUgLm1kLXJpcHBsZSB7XFxuICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcXG4gICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICAgICAgICBib3R0b206IDAgIWltcG9ydGFudDtcXG4gICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcXG59XFxuLm1kLWJ1dHRvbi5tZC1pY29uLWJ1dHRvbiAubWQtcmlwcGxlLm1kLWFjdGl2ZSB7XFxuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuOXM7XFxufVxcbi5tZC1idXR0b24ubWQtZmFiIHtcXG4gICAgd2lkdGg6IDU2cHg7XFxuICAgIGhlaWdodDogNTZweDtcXG4gICAgbWluLXdpZHRoOiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDU2cHg7XFxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3gtc2hhZG93LCB0cmFuc2Zvcm07XFxufVxcbi5tZC1idXR0b24ubWQtZmFiOmhvdmVyLCAubWQtYnV0dG9uLm1kLWZhYjpmb2N1cyB7XFxuICAgICAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDVweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtYnV0dG9uLm1kLWZhYi5tZC1mYWItdG9wLWxlZnQge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDE2cHg7XFxuICAgICAgbGVmdDogMTZweDtcXG4gICAgICB6LWluZGV4OiAxMDtcXG59XFxuLm1kLWJ1dHRvbi5tZC1mYWIubWQtZmFiLXRvcC1jZW50ZXIge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDE2cHg7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIHotaW5kZXg6IDEwO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuLm1kLWJ1dHRvbi5tZC1mYWIubWQtZmFiLXRvcC1yaWdodCB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMTZweDtcXG4gICAgICByaWdodDogMTZweDtcXG4gICAgICB6LWluZGV4OiAxMDtcXG59XFxuLm1kLWJ1dHRvbi5tZC1mYWIubWQtZmFiLWJvdHRvbS1sZWZ0IHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiAxNnB4O1xcbiAgICAgIGxlZnQ6IDE2cHg7XFxuICAgICAgei1pbmRleDogMTA7XFxufVxcbi5tZC1idXR0b24ubWQtZmFiLm1kLWZhYi1ib3R0b20tY2VudGVyIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiAxNnB4O1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgICAgei1pbmRleDogMTA7XFxufVxcbi5tZC1idXR0b24ubWQtZmFiLm1kLWZhYi1ib3R0b20tcmlnaHQge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICByaWdodDogMTZweDtcXG4gICAgICBib3R0b206IDE2cHg7XFxuICAgICAgei1pbmRleDogMTA7XFxufVxcbi5tZC1idXR0b24ubWQtZmFiLm1kLW1pbmkge1xcbiAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcXG59XFxuLm1kLWJ1dHRvbi5tZC1mYWIgLm1kLWluay1yaXBwbGUge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDU2cHg7XFxufVxcbi5tZC1idXR0b25bZGlzYWJsZWRdIHtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLm1kLWJ1dHRvbltkaXNhYmxlZF0ubWQtcmFpc2VkLCAubWQtYnV0dG9uW2Rpc2FibGVkXS5tZC1mYWIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC1idXR0b25bZGlzYWJsZWRdLm1kLWZhYiB7XFxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLm1kLWJ1dHRvbjphZnRlciB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbn1cXG4ubWQtYnV0dG9uIC5tZC1pbmstcmlwcGxlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uIC5tZC1pY29uLFxcbi5tZC1idXR0b24ubWQtZmFiIC5tZC1pY29uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ubWQtYnV0dG9uLXRvb2x0aXAubWQtdG9vbHRpcC10b3Age1xcbiAgbWFyZ2luLXRvcDogLThweDtcXG59XFxuLm1kLWJ1dHRvbi10b29sdGlwLm1kLXRvb2x0aXAtcmlnaHQge1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuLm1kLWJ1dHRvbi10b29sdGlwLm1kLXRvb2x0aXAtYm90dG9tIHtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuLm1kLWJ1dHRvbi10b29sdGlwLm1kLXRvb2x0aXAtbGVmdCB7XFxuICBtYXJnaW4tbGVmdDogLThweDtcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtYnV0dG9uLXRvZ2dsZSB7XFxuICB3aWR0aDogYXV0bztcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm1kLWJ1dHRvbi10b2dnbGUgPiAubWQtYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXItd2lkdGg6IDFweCAwIDFweCAxcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5tZC1idXR0b24tdG9nZ2xlID4gLm1kLWJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4IDAgMCAycHg7XFxufVxcbi5tZC1idXR0b24tdG9nZ2xlID4gLm1kLWJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDJweCAycHggMDtcXG59XFxuLm1kLWJ1dHRvbi10b2dnbGUgPiAubWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKSB7XFxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxufVxcbi5tZC1idXR0b24tdG9nZ2xlID4gLm1kLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6aG92ZXI6bm90KC5tZC10b2dnbGUpOm5vdCgubWQtcmFpc2VkKSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMik7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5tZC1idXR0b24tdG9nZ2xlID4gLm1kLWJ1dHRvbiAubWQtaW5rLXJpcHBsZSB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEltYWdlIGFzcGVjdCByYXRpbyBjYWxjdWxhdG9yICovXFxuLyogUmVzcG9uc2l2ZSBicmVha3BvaW50cyAqL1xcbi5tZC1jYXJkIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLWNhcmQubWQtd2l0aC1ob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3c7XFxufVxcbi5tZC1jYXJkLm1kLXdpdGgtaG92ZXI6aG92ZXIge1xcbiAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1tZWRpYSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtMTYtOSB7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtMTYtOTpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNTYuMjUlO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTE2LTkgaW1nIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC00LTMge1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTQtMzpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNzUlO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTQtMyBpbWcge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTEtMSB7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtMS0xOmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTEtMSBpbWcge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICByaWdodDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhICsgLm1kLWNhcmQtaGVhZGVyIHtcXG4gICAgICBwYWRkaW5nLXRvcDogMjRweDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEgKyAubWQtY2FyZC1jb250ZW50Omxhc3QtY2hpbGQge1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1tZWRpYSBpbWcge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIge1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXI6Zmlyc3QtY2hpbGQgPiAubWQtdGl0bGU6Zmlyc3QtY2hpbGQsXFxuICAgIC5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZCA+IC5tZC1jYXJkLWhlYWRlci10ZXh0ID4gLm1kLXRpdGxlOmZpcnN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlcjpsYXN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlci5tZC1jYXJkLWhlYWRlci1mbGV4IHtcXG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyICsgLm1kLWNhcmQtY29udGVudCB7XFxuICAgICAgcGFkZGluZy10b3A6IDA7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciArIC5tZC1jYXJkLWFjdGlvbnM6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgcGFkZGluZzogMCA4cHg7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYXZhdGFyIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYXZhdGFyIH4gLm1kLXRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1hdmF0YXIgfiAubWQtdGl0bGUsXFxuICAgICAgLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1hdmF0YXIgfiAubWQtc3ViaGVhZCB7XFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYnV0dG9uIHtcXG4gICAgICBtYXJnaW46IDA7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNHB4O1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWJ1dHRvbiArIC5tZC1idXR0b24ge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1jYXJkLWhlYWRlci10ZXh0IHtcXG4gICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgZmxleDogMTtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1jYXJkLW1lZGlhIHtcXG4gICAgICB3aWR0aDogODBweDtcXG4gICAgICAtbXMtZmxleDogMCAwIDgwcHg7XFxuICAgICAgICAgIGZsZXg6IDAgMCA4MHB4O1xcbiAgICAgIGhlaWdodDogODBweDtcXG4gICAgICBtYXJnaW4tbGVmdDogMTZweDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1jYXJkLW1lZGlhLm1kLW1lZGl1bSB7XFxuICAgICAgICB3aWR0aDogMTIwcHg7XFxuICAgICAgICAtbXMtZmxleDogMCAwIDEyMHB4O1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCAxMjBweDtcXG4gICAgICAgIGhlaWdodDogMTIwcHg7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtY2FyZC1tZWRpYS5tZC1iaWcge1xcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xcbiAgICAgICAgLW1zLWZsZXg6IDAgMCAxNjBweDtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgMTYwcHg7XFxuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xcbn1cXG4ubWQtY2FyZCAubWQtc3ViaGVhZCxcXG4gIC5tZC1jYXJkIC5tZC10aXRsZSxcXG4gIC5tZC1jYXJkIC5tZC1zdWJoZWFkaW5nIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4ubWQtY2FyZCAubWQtc3ViaGVhZCB7XFxuICAgIG9wYWNpdHk6IC41NDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogLjAxZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbn1cXG4ubWQtY2FyZCAubWQtc3ViaGVhZCArIC5tZC10aXRsZSB7XFxuICAgICAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG4ubWQtY2FyZCAubWQtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xcbiAgICBsaW5lLWhlaWdodDogMzJweDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtYWN0aW9ucyB7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1hY3Rpb25zIC5tZC1jYXJkLW1lZGlhIHtcXG4gICAgICBtYXgtd2lkdGg6IDI0MHB4O1xcbiAgICAgIG1heC1oZWlnaHQ6IDI0MHB4O1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1hY3Rpb25zIC5tZC1jYXJkLWFjdGlvbnMge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtYWN0aW9ucyAubWQtY2FyZC1hY3Rpb25zIC5tZC1idXR0b24gKyAubWQtYnV0dG9uIHtcXG4gICAgICAgIG1hcmdpbjogOHB4IDAgMDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWNvbnRlbnQ6bGFzdC1jaGlsZCB7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWFjdGlvbnMge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtYWN0aW9ucyAubWQtYnV0dG9uIHtcXG4gICAgICBtYXJnaW46IDA7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWFjdGlvbnMgLm1kLWJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtYWN0aW9ucyAubWQtYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1hY3Rpb25zIC5tZC1idXR0b24gKyAubWQtYnV0dG9uIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWFyZWEge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tZC1jYXJkID4gLm1kLWNhcmQtYXJlYTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubWQtY2FyZCA+IC5tZC1jYXJkLWFyZWE6bm90KDpsYXN0LWNoaWxkKTphZnRlciB7XFxuICAgICAgaGVpZ2h0OiAxcHg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxufVxcbi5tZC1jYXJkID4gLm1kLWNhcmQtYXJlYTpub3QoOmxhc3QtY2hpbGQpOm5vdCgubWQtaW5zZXQpOmFmdGVyIHtcXG4gICAgICByaWdodDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbn1cXG4ubWQtY2FyZCA+IC5tZC1jYXJkLWFyZWE6bm90KDpsYXN0LWNoaWxkKS5tZC1pbnNldDphZnRlciB7XFxuICAgICAgcmlnaHQ6IDE2cHg7XFxuICAgICAgbGVmdDogMTZweDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtY292ZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1jb3Zlci5tZC10ZXh0LXNjcmltIC5tZC1jYXJkLWJhY2tkcm9wIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHotaW5kZXg6IDE7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWNvdmVyIC5tZC1jYXJkLWFyZWEge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICByaWdodDogMDtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB6LWluZGV4OiAyO1xcbn1cXG4ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1jb3ZlciAubWQtY2FyZC1oZWFkZXIgKyAubWQtY2FyZC1hY3Rpb25zIHtcXG4gICAgICBwYWRkaW5nLXRvcDogMDtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtY292ZXIgLm1kLXN1YmhlYWQge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWV4cGFuZCB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWV4cGFuZC5tZC1hY3RpdmUgW21kLWV4cGFuZC10cmlnZ2VyXSB7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZykgdHJhbnNsYXRlM0QoMCwgMCwgMCk7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWV4cGFuZC5tZC1hY3RpdmUgLm1kLWNhcmQtY29udGVudCB7XFxuICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xcbiAgICAgIG9wYWNpdHk6IDE7XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWV4cGFuZCAubWQtY2FyZC1hY3Rpb25zIHtcXG4gICAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgei1pbmRleDogMjtcXG59XFxuLm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kIFttZC1leHBhbmQtdHJpZ2dlcl0ge1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbiAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxufVxcbi5tZC1jYXJkIC5tZC1jYXJkLWV4cGFuZCAubWQtY2FyZC1jb250ZW50IHtcXG4gICAgICBwYWRkaW5nLXRvcDogNHB4O1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB6LWluZGV4OiAxO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAwLCAwKTtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gICAgICB3aWxsLWNoYW5nZTogbWFyZ2luO1xcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi5tZC1jaGVja2JveCB7XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbjogMTZweCA4cHggMTZweCAwO1xcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbn1cXG4ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lcjpmb2N1cyB7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG59XFxuLm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXI6YmVmb3JlIHtcXG4gICAgICB3aWR0aDogNDhweDtcXG4gICAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuNTUsIDAuMik7XFxuICAgICAgY29udGVudDogXFxcIiBcXFwiO1xcbn1cXG4ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lcjphZnRlciB7XFxuICAgICAgd2lkdGg6IDZweDtcXG4gICAgICBoZWlnaHQ6IDEzcHg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiA1cHg7XFxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gICAgICBib3JkZXItdG9wOiAwO1xcbiAgICAgIGJvcmRlci1sZWZ0OiAwO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlM0QoMC4xNSwgMC4xNSwgMSk7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuNTUsIDAuMik7XFxuICAgICAgY29udGVudDogXFxcIiBcXFwiO1xcbn1cXG4ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dCB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IC05OTllbTtcXG59XFxuLm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXIgLm1kLWluay1yaXBwbGUge1xcbiAgICAgIHRvcDogLTE2cHg7XFxuICAgICAgcmlnaHQ6IC0xNnB4O1xcbiAgICAgIGJvdHRvbTogLTE2cHg7XFxuICAgICAgbGVmdDogLTE2cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG4ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lciAubWQtaW5rLXJpcHBsZSAubWQtcmlwcGxlIHtcXG4gICAgICAgIHdpZHRoOiA0OHB4ICFpbXBvcnRhbnQ7XFxuICAgICAgICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcXG4gICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xcbiAgICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcXG4gICAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xcbn1cXG4ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWxhYmVsIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcbi5tZC1jaGVja2JveC5tZC1jaGVja2VkIC5tZC1jaGVja2JveC1jb250YWluZXI6YWZ0ZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZTNEKDEsIDEsIDEpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLWNoaXAge1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5tZC1jaGlwLm1kLWRlbGV0YWJsZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcXG59XFxuLm1kLWNoaXA6Zm9jdXMsIC5tZC1jaGlwOmFjdGl2ZSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi5tZC1jaGlwOmZvY3VzOm5vdCgubWQtZGlzYWJsZWQpLCAubWQtY2hpcDphY3RpdmU6bm90KC5tZC1kaXNhYmxlZCkge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLWNoaXAubWQtZGlzYWJsZWQgLm1kLWJ1dHRvbiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5tZC1jaGlwIC5tZC1idXR0b24ubWQtZGVsZXRlIHtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIG1pbi13aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBtaW4taGVpZ2h0OiAyNHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0cHg7XFxuICAgIHJpZ2h0OiA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbn1cXG4ubWQtY2hpcCAubWQtYnV0dG9uLm1kLWRlbGV0ZSAubWQtaWNvbiB7XFxuICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgbWluLXdpZHRoOiAyMHB4O1xcbiAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICBtaW4taGVpZ2h0OiAyMHB4O1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5tZC1jaGlwIC5tZC1idXR0b24ubWQtZGVsZXRlIC5tZC1pbmstcmlwcGxlIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xcbn1cXG4ubWQtY2hpcCAubWQtYnV0dG9uLm1kLWRlbGV0ZSAubWQtcmlwcGxlIHtcXG4gICAgICBvcGFjaXR5OiAuNTQ7XFxufVxcbi5tZC1jaGlwcyAubWQtY2hpcCB7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG59XFxuLm1kLWNoaXBzIC5tZC1pbnB1dC1jb250YWluZXIge1xcbiAgbWluLWhlaWdodDogNTRweDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4ubWQtY2hpcHMgLm1kLWlucHV0IHtcXG4gIHdpZHRoOiAxMjhweDtcXG4gIC1tcy1mbGV4OiAxO1xcbiAgICAgIGZsZXg6IDE7XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLWluay1yaXBwbGUge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB3aGl0ZSAxMDAlLCBibGFjayAxMDAlKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjU1LCAwLjIpO1xcbn1cXG4ubWQtcmlwcGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG9wYWNpdHk6IC4yO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGVaKDApO1xcbiAgdHJhbnNpdGlvbjogbm9uZTtcXG4gIHdpbGwtY2hhbmdlOiBiYWNrZ3JvdW5kLWNvbG9yLCBvcGFjaXR5LCB0cmFuc2Zvcm0sIHdpZHRoLCBoZWlnaHQsIHRvcCwgbGVmdDtcXG59XFxuLm1kLXJpcHBsZS5tZC1hY3RpdmUge1xcbiAgICBhbmltYXRpb246IHJpcHBsZSAxcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSBmb3J3YXJkcztcXG59XFxuLm1kLXJpcHBsZS5tZC1hY3RpdmUubWQtZmFkZW91dCB7XFxuICAgICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC42cztcXG59XFxuQGtleWZyYW1lcyByaXBwbGUge1xcbnRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyLjIpIHRyYW5zbGF0ZVooMCk7XFxufVxcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi5tZC1kaWFsb2ctY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTA4O1xcbn1cXG4ubWQtZGlhbG9nLWNvbnRhaW5lci5tZC1hY3RpdmUge1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuLm1kLWRpYWxvZy1jb250YWluZXIubWQtYWN0aXZlIC5tZC1kaWFsb2cge1xcbiAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpICFpbXBvcnRhbnQ7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwgdHJhbnNmb3JtO1xcbn1cXG4ubWQtZGlhbG9nLWJhY2tkcm9wIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwOTtcXG59XFxuLm1kLWRpYWxvZyB7XFxuICBtaW4td2lkdGg6IDI4MHB4O1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxuICBtYXgtaGVpZ2h0OiA4MCU7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTEwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIG9wYWNpdHk6IDA7XFxuICBib3gtc2hhZG93OiAwIDdweCA5cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMTRweCAyMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDVweCAyNnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjksIDAuODUpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSwgdHJhbnNmb3JtIDAuNHMgMC4wNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICB3aWxsLWNoYW5nZTogb3BhY2l0eSwgdHJhbnNmb3JtO1xcbn1cXG4ubWQtZGlhbG9nLm1kLXJlZmVyZW5jZSB7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XFxufVxcbi5tZC1kaWFsb2cubWQtdHJhbnNpdGlvbi1vZmYge1xcbiAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5tZC1kaWFsb2cgcCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLm1kLWRpYWxvZy10aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgcGFkZGluZzogMjRweCAyNHB4IDA7XFxufVxcbi5tZC1kaWFsb2ctY29udGVudCB7XFxuICBwYWRkaW5nOiAwIDI0cHggMjRweDtcXG4gIC1tcy1mbGV4OiAxO1xcbiAgICAgIGZsZXg6IDE7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogYXV0bztcXG4gICAgICBmbGV4LWJhc2lzOiBhdXRvO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmIDAsICNmZmYgMXB4LCB0cmFuc3BhcmVudCAxcHgpLCBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZmZmIDAsICNmZmYgM3B4LCB0cmFuc3BhcmVudCAzcHgpLCBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuMTIpIDAsIHJnYmEoMCwgMCwgMCwgMC4xMikgMXB4LCB0cmFuc3BhcmVudCAxcHgpLCBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsIDAuMikgMXB4LCByZ2JhKDAsIDAsIDAsIDAuMikgMnB4LCB0cmFuc3BhcmVudCAycHgpO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBsb2NhbCwgbG9jYWwsIHNjcm9sbCwgc2Nyb2xsO1xcbn1cXG4ubWQtZGlhbG9nLWNvbnRlbnQ6Zmlyc3QtY2hpbGQge1xcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcXG59XFxuLm1kLWRpYWxvZy1jb250ZW50IHA6Zmlyc3QtY2hpbGQ6bm90KDpvbmx5LWNoaWxkKSB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcbi5tZC1kaWFsb2ctY29udGVudCBwOmxhc3QtY2hpbGQ6bm90KDpvbmx5LWNoaWxkKSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5tZC1kaWFsb2ctYm9keSB7XFxuICBtYXJnaW46IDAgLTI0cHg7XFxuICBwYWRkaW5nOiAwIDI0cHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuLm1kLWRpYWxvZy1hY3Rpb25zIHtcXG4gIG1pbi1oZWlnaHQ6IDUycHg7XFxuICBwYWRkaW5nOiA4cHggOHB4IDhweCAyNHB4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tZC1kaWFsb2ctYWN0aW9uczpiZWZvcmUge1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0xcHg7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxufVxcbi5tZC1kaWFsb2ctYWN0aW9ucyAubWQtYnV0dG9uIHtcXG4gICAgbWluLXdpZHRoOiA2NHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgOHB4O1xcbn1cXG4ubWQtZGlhbG9nLWFjdGlvbnMgLm1kLWJ1dHRvbiArIC5tZC1idXR0b24ge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLWRpdmlkZXIge1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtZGl2aWRlci5tZC1pbnNldCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi5tZC1maWxlIHtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4OiAxO1xcbiAgICAgIGZsZXg6IDE7XFxufVxcbi5tZC1maWxlIGlucHV0W3R5cGU9XFxcImZpbGVcXFwiXSB7XFxuICAgIHdpZHRoOiAxcHg7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBtYXJnaW46IC0xcHg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG4ubWQtZmlsZSAubWQtaWNvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtaWNvbiB7XFxuICB3aWR0aDogMjRweDtcXG4gIG1pbi13aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIG1pbi1oZWlnaHQ6IDI0cHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4ubWQtaWNvbi5tZC1zaXplLTJ4IHtcXG4gICAgd2lkdGg6IDQ4cHg7XFxuICAgIG1pbi13aWR0aDogNDhweDtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBtaW4taGVpZ2h0OiA0OHB4O1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxufVxcbi5tZC1pY29uLm1kLXNpemUtM3gge1xcbiAgICB3aWR0aDogNzJweDtcXG4gICAgbWluLXdpZHRoOiA3MnB4O1xcbiAgICBoZWlnaHQ6IDcycHg7XFxuICAgIG1pbi1oZWlnaHQ6IDcycHg7XFxuICAgIGZvbnQtc2l6ZTogNzJweDtcXG59XFxuLm1kLWljb24ubWQtc2l6ZS00eCB7XFxuICAgIHdpZHRoOiA5NnB4O1xcbiAgICBtaW4td2lkdGg6IDk2cHg7XFxuICAgIGhlaWdodDogOTZweDtcXG4gICAgbWluLWhlaWdodDogOTZweDtcXG4gICAgZm9udC1zaXplOiA5NnB4O1xcbn1cXG4ubWQtaWNvbi5tZC1zaXplLTV4IHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcXG4gICAgZm9udC1zaXplOiAxMjBweDtcXG59XFxuLm1kLWljb24gc3ZnIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuaW1nLm1kLWljb24ge1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi5tZC1pbWFnZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgZmlsdGVyOiBzYXR1cmF0ZSgyMCUpO1xcbn1cXG4ubWQtaW1hZ2UubWQtYmxhY2stb3V0cHV0IHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNCkgc2F0dXJhdGUoMjAlKTtcXG59XFxuLm1kLWltYWdlLm1kLWxvYWRlZCB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGZpbHRlcjogc2F0dXJhdGUoMTAwJSk7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMS4xcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSwgZmlsdGVyIDIuMnMgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtaW5wdXQtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogNDhweDtcXG4gIG1hcmdpbjogNHB4IDAgMjRweDtcXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyOmFmdGVyIHtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lciBsYWJlbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyM3B4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXIgaW5wdXQsXFxuICAubWQtaW5wdXQtY29udGFpbmVyIHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgZmxleDogMTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogZm9udC1zaXplO1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMXB4O1xcbiAgICBsaW5lLWhlaWdodDogMzJweDtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lciBpbnB1dDpmb2N1cyxcXG4gICAgLm1kLWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYTpmb2N1cyB7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lciBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcXG4gICAgLm1kLWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBpbml0aWFsO1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyIGlucHV0IH4gLm1kLWljb246bm90KC5tZC1pY29uLWRlbGV0ZSksXFxuICAgIC5tZC1pbnB1dC1jb250YWluZXIgdGV4dGFyZWEgfiAubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKSB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXIgaW5wdXQgfiAubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKTphZnRlcixcXG4gICAgICAubWQtaW5wdXQtY29udGFpbmVyIHRleHRhcmVhIH4gLm1kLWljb246bm90KC5tZC1pY29uLWRlbGV0ZSk6YWZ0ZXIge1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICBsZWZ0OiBhdXRvO1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyIHRleHRhcmVhIHtcXG4gICAgbWluLWhlaWdodDogMzJweDtcXG4gICAgbWF4LWhlaWdodDogMjMwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lciAubWQtZXJyb3IsXFxuICAubWQtaW5wdXQtY29udGFpbmVyIC5tZC1jb3VudCB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lciAubWQtZXJyb3Ige1xcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC04cHgsIDApO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKTtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lciAubWQtY291bnQge1xcbiAgICByaWdodDogMDtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lciAubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKSB7XFxuICAgIG1hcmdpbjogNHB4IGF1dG87XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lciAubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKTphZnRlciB7XFxuICAgICAgd2lkdGg6IDM2cHg7XFxuICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXIgLm1kLWljb246bm90KC5tZC1pY29uLWRlbGV0ZSkgfiBsYWJlbCB7XFxuICAgICAgbGVmdDogMzZweDtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lciAubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKSB+IC5tZC1pbnB1dCxcXG4gICAgLm1kLWlucHV0LWNvbnRhaW5lciAubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKSB+IC5tZC10ZXh0YXJlYSxcXG4gICAgLm1kLWlucHV0LWNvbnRhaW5lciAubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKSB+IC5tZC1maWxlIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMTJweDtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1wbGFjZWhvbGRlciBsYWJlbCB7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIHRvcDogMTBweDtcXG4gIG9wYWNpdHk6IDA7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtcGxhY2Vob2xkZXIgaW5wdXQsXFxuLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1wbGFjZWhvbGRlciB0ZXh0YXJlYSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtZm9jdXNlZCBsYWJlbCwgLm1kLWlucHV0LWNvbnRhaW5lci5tZC1oYXMtdmFsdWUgbGFiZWwge1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICB0b3A6IDA7XFxuICBvcGFjaXR5OiAxO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWZvY3VzZWQgaW5wdXQsXFxuLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1mb2N1c2VkIHRleHRhcmVhLCAubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy12YWx1ZSBpbnB1dCxcXG4ubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy12YWx1ZSB0ZXh0YXJlYSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXZhbHVlIGlucHV0LFxcbi5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXZhbHVlIHRleHRhcmVhIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWlubGluZSBsYWJlbCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1pbmxpbmUubWQtaW5wdXQtZm9jdXNlZCBsYWJlbCB7XFxuICB0b3A6IDIzcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtaW5saW5lLm1kLWhhcy12YWx1ZSBsYWJlbCB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWRpc2FibGVkOmFmdGVyIHtcXG4gIGJhY2tncm91bmQ6IGJvdHRvbSBsZWZ0IHJlcGVhdC14O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuMzgpIDAlLCByZ2JhKDAsIDAsIDAsIDAuMzgpIDMzJSwgdHJhbnNwYXJlbnQgMCUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA0cHggMXB4O1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWRpc2FibGVkIGxhYmVsLFxcbi5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtZGlzYWJsZWQgaW5wdXQsXFxuLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1kaXNhYmxlZCB0ZXh0YXJlYSB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lci5tZC1oYXMtcGFzc3dvcmQubWQtaW5wdXQtZm9jdXNlZCAubWQtdG9nZ2xlLXBhc3N3b3JkIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG4ubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy1wYXNzd29yZCAubWQtdG9nZ2xlLXBhc3N3b3JkIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAtMnB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXBhc3N3b3JkIC5tZC10b2dnbGUtcGFzc3dvcmQgLm1kLWluay1yaXBwbGUge1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1pbnZhbGlkIC5tZC1lcnJvciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG59XFxuLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1yZXF1aXJlZCBsYWJlbDphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDJweDtcXG4gIHJpZ2h0OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMTAwJSArIDJweCkpO1xcbiAgY29udGVudDogXFxcIipcXFwiO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDFlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXNlbGVjdDpob3ZlciAubWQtc2VsZWN0Om5vdCgubWQtZGlzYWJsZWQpOmFmdGVyIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEltYWdlIGFzcGVjdCByYXRpbyBjYWxjdWxhdG9yICovXFxuLyogUmVzcG9uc2l2ZSBicmVha3BvaW50cyAqL1xcbi8qIFJvd3MgYW5kIENvbHVtbnMgKi9cXG4ubWQtbGF5b3V0IHtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIC1tcy1mbGV4OiAxO1xcbiAgICAgIGZsZXg6IDE7XFxufVxcbi5tZC1yb3cge1xcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLm1kLWNvbHVtbiB7XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vKiBDb250YWluZXIgKi9cXG4ubWQtbGF5b3V0Lm1kLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbn1cXG4ubWQtbGF5b3V0Lm1kLWNvbnRhaW5lci5tZC1jZW50ZXJlZCB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4vKiBBbGlnbm1lbnRzICovXFxuLm1kLWFsaWduLXN0YXJ0IHtcXG4gIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuLm1kLWFsaWduLWNlbnRlciB7XFxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tZC1hbGlnbi1lbmQge1xcbiAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi8qIEd1dHRlciBTaXplICovXFxuLm1kLWd1dHRlcjpub3QoLm1kLWNvbHVtbikge1xcbiAgbWFyZ2luLXJpZ2h0OiAtMTJweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcXG59XFxuLm1kLWd1dHRlcjpub3QoLm1kLWNvbHVtbikgPiAubWQtbGF5b3V0IHtcXG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xcbn1cXG4ubWQtZ3V0dGVyIC5tZC1jb2x1bW4ge1xcbiAgbWFyZ2luLXRvcDogLTEycHg7XFxuICBtYXJnaW4tYm90dG9tOiAtMTJweDtcXG59XFxuLm1kLWd1dHRlciAubWQtY29sdW1uID4gLm1kLWxheW91dCB7XFxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDk0NHB4KSB7XFxuLm1kLWd1dHRlcjpub3QoLm1kLWNvbHVtbikge1xcbiAgICBtYXJnaW4tcmlnaHQ6IC04cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xcbn1cXG4ubWQtZ3V0dGVyOm5vdCgubWQtY29sdW1uKSA+IC5tZC1sYXlvdXQge1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG59XFxuLm1kLWd1dHRlciAubWQtY29sdW1uIHtcXG4gICAgbWFyZ2luLXRvcDogLThweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLThweDtcXG59XFxuLm1kLWd1dHRlciAubWQtY29sdW1uID4gLm1kLWxheW91dCB7XFxuICAgICAgcGFkZGluZy10b3A6IDhweDtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbn1cXG59XFxuLm1kLWd1dHRlci04Om5vdCgubWQtY29sdW1uKSB7XFxuICBtYXJnaW4tcmlnaHQ6IC00cHg7XFxuICBtYXJnaW4tbGVmdDogLTRweDtcXG59XFxuLm1kLWd1dHRlci04Om5vdCgubWQtY29sdW1uKSA+IC5tZC1sYXlvdXQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XFxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xcbn1cXG4ubWQtZ3V0dGVyLTggLm1kLWNvbHVtbiB7XFxuICBtYXJnaW4tdG9wOiAtNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTRweDtcXG59XFxuLm1kLWd1dHRlci04IC5tZC1jb2x1bW4gPiAubWQtbGF5b3V0IHtcXG4gICAgcGFkZGluZy10b3A6IDRweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuLm1kLWd1dHRlci0xNjpub3QoLm1kLWNvbHVtbikge1xcbiAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XFxufVxcbi5tZC1ndXR0ZXItMTY6bm90KC5tZC1jb2x1bW4pID4gLm1kLWxheW91dCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxufVxcbi5tZC1ndXR0ZXItMTYgLm1kLWNvbHVtbiB7XFxuICBtYXJnaW4tdG9wOiAtOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcXG59XFxuLm1kLWd1dHRlci0xNiAubWQtY29sdW1uID4gLm1kLWxheW91dCB7XFxuICAgIHBhZGRpbmctdG9wOiA4cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxufVxcbi5tZC1ndXR0ZXItMjQ6bm90KC5tZC1jb2x1bW4pIHtcXG4gIG1hcmdpbi1yaWdodDogLTEycHg7XFxuICBtYXJnaW4tbGVmdDogLTEycHg7XFxufVxcbi5tZC1ndXR0ZXItMjQ6bm90KC5tZC1jb2x1bW4pID4gLm1kLWxheW91dCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTJweDtcXG59XFxuLm1kLWd1dHRlci0yNCAubWQtY29sdW1uIHtcXG4gIG1hcmdpbi10b3A6IC0xMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTEycHg7XFxufVxcbi5tZC1ndXR0ZXItMjQgLm1kLWNvbHVtbiA+IC5tZC1sYXlvdXQge1xcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XFxufVxcbi5tZC1ndXR0ZXItNDA6bm90KC5tZC1jb2x1bW4pIHtcXG4gIG1hcmdpbi1yaWdodDogLTIwcHg7XFxuICBtYXJnaW4tbGVmdDogLTIwcHg7XFxufVxcbi5tZC1ndXR0ZXItNDA6bm90KC5tZC1jb2x1bW4pID4gLm1kLWxheW91dCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuLm1kLWd1dHRlci00MCAubWQtY29sdW1uIHtcXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XFxufVxcbi5tZC1ndXR0ZXItNDAgLm1kLWNvbHVtbiA+IC5tZC1sYXlvdXQge1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi8qIEZsZXggU2l6ZSAqL1xcbi5tZC1mbGV4IHtcXG4gIC1tcy1mbGV4OiAxIDE7XFxuICAgICAgZmxleDogMSAxO1xcbn1cXG4ubWQtZmxleC0zMyB7XFxuICBtaW4td2lkdGg6IDMzLjMzMzMzJTtcXG4gIC1tcy1mbGV4OiAwIDEgMzMuMzMzMzMlO1xcbiAgICAgIGZsZXg6IDAgMSAzMy4zMzMzMyU7XFxufVxcbi5tZC1mbGV4LTY2IHtcXG4gIG1pbi13aWR0aDogMzMuMzMzMzMlO1xcbiAgLW1zLWZsZXg6IDAgMSA2Ni42NjY2NiU7XFxuICAgICAgZmxleDogMCAxIDY2LjY2NjY2JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LTMzIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC02NiB7XFxuICBtYXJnaW4tbGVmdDogNjYuNjY2NjYlO1xcbn1cXG4ubWQtZmxleC01IHtcXG4gIG1pbi13aWR0aDogNSU7XFxuICAtbXMtZmxleDogMCAxIDUlO1xcbiAgICAgIGZsZXg6IDAgMSA1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LTUge1xcbiAgbWFyZ2luLWxlZnQ6IDUlO1xcbn1cXG4ubWQtZmxleC0xMCB7XFxuICBtaW4td2lkdGg6IDEwJTtcXG4gIC1tcy1mbGV4OiAwIDEgMTAlO1xcbiAgICAgIGZsZXg6IDAgMSAxMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC0xMCB7XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG4ubWQtZmxleC0xNSB7XFxuICBtaW4td2lkdGg6IDE1JTtcXG4gIC1tcy1mbGV4OiAwIDEgMTUlO1xcbiAgICAgIGZsZXg6IDAgMSAxNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC0xNSB7XFxuICBtYXJnaW4tbGVmdDogMTUlO1xcbn1cXG4ubWQtZmxleC0yMCB7XFxuICBtaW4td2lkdGg6IDIwJTtcXG4gIC1tcy1mbGV4OiAwIDEgMjAlO1xcbiAgICAgIGZsZXg6IDAgMSAyMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC0yMCB7XFxuICBtYXJnaW4tbGVmdDogMjAlO1xcbn1cXG4ubWQtZmxleC0yNSB7XFxuICBtaW4td2lkdGg6IDI1JTtcXG4gIC1tcy1mbGV4OiAwIDEgMjUlO1xcbiAgICAgIGZsZXg6IDAgMSAyNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC0yNSB7XFxuICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG4ubWQtZmxleC0zMCB7XFxuICBtaW4td2lkdGg6IDMwJTtcXG4gIC1tcy1mbGV4OiAwIDEgMzAlO1xcbiAgICAgIGZsZXg6IDAgMSAzMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC0zMCB7XFxuICBtYXJnaW4tbGVmdDogMzAlO1xcbn1cXG4ubWQtZmxleC0zNSB7XFxuICBtaW4td2lkdGg6IDM1JTtcXG4gIC1tcy1mbGV4OiAwIDEgMzUlO1xcbiAgICAgIGZsZXg6IDAgMSAzNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC0zNSB7XFxuICBtYXJnaW4tbGVmdDogMzUlO1xcbn1cXG4ubWQtZmxleC00MCB7XFxuICBtaW4td2lkdGg6IDQwJTtcXG4gIC1tcy1mbGV4OiAwIDEgNDAlO1xcbiAgICAgIGZsZXg6IDAgMSA0MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC00MCB7XFxuICBtYXJnaW4tbGVmdDogNDAlO1xcbn1cXG4ubWQtZmxleC00NSB7XFxuICBtaW4td2lkdGg6IDQ1JTtcXG4gIC1tcy1mbGV4OiAwIDEgNDUlO1xcbiAgICAgIGZsZXg6IDAgMSA0NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC00NSB7XFxuICBtYXJnaW4tbGVmdDogNDUlO1xcbn1cXG4ubWQtZmxleC01MCB7XFxuICBtaW4td2lkdGg6IDUwJTtcXG4gIC1tcy1mbGV4OiAwIDEgNTAlO1xcbiAgICAgIGZsZXg6IDAgMSA1MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC01MCB7XFxuICBtYXJnaW4tbGVmdDogNTAlO1xcbn1cXG4ubWQtZmxleC01NSB7XFxuICBtaW4td2lkdGg6IDU1JTtcXG4gIC1tcy1mbGV4OiAwIDEgNTUlO1xcbiAgICAgIGZsZXg6IDAgMSA1NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC01NSB7XFxuICBtYXJnaW4tbGVmdDogNTUlO1xcbn1cXG4ubWQtZmxleC02MCB7XFxuICBtaW4td2lkdGg6IDYwJTtcXG4gIC1tcy1mbGV4OiAwIDEgNjAlO1xcbiAgICAgIGZsZXg6IDAgMSA2MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC02MCB7XFxuICBtYXJnaW4tbGVmdDogNjAlO1xcbn1cXG4ubWQtZmxleC02NSB7XFxuICBtaW4td2lkdGg6IDY1JTtcXG4gIC1tcy1mbGV4OiAwIDEgNjUlO1xcbiAgICAgIGZsZXg6IDAgMSA2NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC02NSB7XFxuICBtYXJnaW4tbGVmdDogNjUlO1xcbn1cXG4ubWQtZmxleC03MCB7XFxuICBtaW4td2lkdGg6IDcwJTtcXG4gIC1tcy1mbGV4OiAwIDEgNzAlO1xcbiAgICAgIGZsZXg6IDAgMSA3MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC03MCB7XFxuICBtYXJnaW4tbGVmdDogNzAlO1xcbn1cXG4ubWQtZmxleC03NSB7XFxuICBtaW4td2lkdGg6IDc1JTtcXG4gIC1tcy1mbGV4OiAwIDEgNzUlO1xcbiAgICAgIGZsZXg6IDAgMSA3NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC03NSB7XFxuICBtYXJnaW4tbGVmdDogNzUlO1xcbn1cXG4ubWQtZmxleC04MCB7XFxuICBtaW4td2lkdGg6IDgwJTtcXG4gIC1tcy1mbGV4OiAwIDEgODAlO1xcbiAgICAgIGZsZXg6IDAgMSA4MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC04MCB7XFxuICBtYXJnaW4tbGVmdDogODAlO1xcbn1cXG4ubWQtZmxleC04NSB7XFxuICBtaW4td2lkdGg6IDg1JTtcXG4gIC1tcy1mbGV4OiAwIDEgODUlO1xcbiAgICAgIGZsZXg6IDAgMSA4NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC04NSB7XFxuICBtYXJnaW4tbGVmdDogODUlO1xcbn1cXG4ubWQtZmxleC05MCB7XFxuICBtaW4td2lkdGg6IDkwJTtcXG4gIC1tcy1mbGV4OiAwIDEgOTAlO1xcbiAgICAgIGZsZXg6IDAgMSA5MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC05MCB7XFxuICBtYXJnaW4tbGVmdDogOTAlO1xcbn1cXG4ubWQtZmxleC05NSB7XFxuICBtaW4td2lkdGg6IDk1JTtcXG4gIC1tcy1mbGV4OiAwIDEgOTUlO1xcbiAgICAgIGZsZXg6IDAgMSA5NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC05NSB7XFxuICBtYXJnaW4tbGVmdDogOTUlO1xcbn1cXG4ubWQtZmxleC0xMDAge1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgLW1zLWZsZXg6IDAgMSAxMDAlO1xcbiAgICAgIGZsZXg6IDAgMSAxMDAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtMTAwIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMDAlO1xcbn1cXG5cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDE5MDRweCkge1xcbi5tZC1yb3cteGxhcmdlIHtcXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4ubWQtY29sdW1uLXhsYXJnZSB7XFxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1kLWZsZXgteGxhcmdlIHtcXG4gICAgLW1zLWZsZXg6IDEgMTtcXG4gICAgICAgIGZsZXg6IDEgMTtcXG59XFxuLm1kLWZsZXgteGxhcmdlLTMzIHtcXG4gICAgbWluLXdpZHRoOiAzMy4zMzMzMyU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMzMuMzMzMzMlO1xcbiAgICAgICAgZmxleDogMCAxIDMzLjMzMzMzJTtcXG59XFxuLm1kLWZsZXgteGxhcmdlLTY2IHtcXG4gICAgbWluLXdpZHRoOiAzMy4zMzMzMyU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNjYuNjY2NjYlO1xcbiAgICAgICAgZmxleDogMCAxIDY2LjY2NjY2JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0zMyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNjYge1xcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjYlO1xcbn1cXG4ubWQtZmxleC14bGFyZ2UtNSB7XFxuICAgIG1pbi13aWR0aDogNSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNSU7XFxuICAgICAgICBmbGV4OiAwIDEgNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG59XFxuLm1kLWZsZXgteGxhcmdlLTEwIHtcXG4gICAgbWluLXdpZHRoOiAxMCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMTAlO1xcbiAgICAgICAgZmxleDogMCAxIDEwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0xMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxufVxcbi5tZC1mbGV4LXhsYXJnZS0xNSB7XFxuICAgIG1pbi13aWR0aDogMTUlO1xcbiAgICAtbXMtZmxleDogMCAxIDE1JTtcXG4gICAgICAgIGZsZXg6IDAgMSAxNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMTUge1xcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xcbn1cXG4ubWQtZmxleC14bGFyZ2UtMjAge1xcbiAgICBtaW4td2lkdGg6IDIwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSAyMCU7XFxuICAgICAgICBmbGV4OiAwIDEgMjAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteGxhcmdlLTIwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcXG59XFxuLm1kLWZsZXgteGxhcmdlLTI1IHtcXG4gICAgbWluLXdpZHRoOiAyNSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMjUlO1xcbiAgICAgICAgZmxleDogMCAxIDI1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0yNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcbi5tZC1mbGV4LXhsYXJnZS0zMCB7XFxuICAgIG1pbi13aWR0aDogMzAlO1xcbiAgICAtbXMtZmxleDogMCAxIDMwJTtcXG4gICAgICAgIGZsZXg6IDAgMSAzMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMzAge1xcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xcbn1cXG4ubWQtZmxleC14bGFyZ2UtMzUge1xcbiAgICBtaW4td2lkdGg6IDM1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSAzNSU7XFxuICAgICAgICBmbGV4OiAwIDEgMzUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteGxhcmdlLTM1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcXG59XFxuLm1kLWZsZXgteGxhcmdlLTQwIHtcXG4gICAgbWluLXdpZHRoOiA0MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNDAlO1xcbiAgICAgICAgZmxleDogMCAxIDQwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS00MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XFxufVxcbi5tZC1mbGV4LXhsYXJnZS00NSB7XFxuICAgIG1pbi13aWR0aDogNDUlO1xcbiAgICAtbXMtZmxleDogMCAxIDQ1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA0NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNDUge1xcbiAgICBtYXJnaW4tbGVmdDogNDUlO1xcbn1cXG4ubWQtZmxleC14bGFyZ2UtNTAge1xcbiAgICBtaW4td2lkdGg6IDUwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA1MCU7XFxuICAgICAgICBmbGV4OiAwIDEgNTAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteGxhcmdlLTUwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG59XFxuLm1kLWZsZXgteGxhcmdlLTU1IHtcXG4gICAgbWluLXdpZHRoOiA1NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNTUlO1xcbiAgICAgICAgZmxleDogMCAxIDU1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS01NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1NSU7XFxufVxcbi5tZC1mbGV4LXhsYXJnZS02MCB7XFxuICAgIG1pbi13aWR0aDogNjAlO1xcbiAgICAtbXMtZmxleDogMCAxIDYwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA2MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNjAge1xcbiAgICBtYXJnaW4tbGVmdDogNjAlO1xcbn1cXG4ubWQtZmxleC14bGFyZ2UtNjUge1xcbiAgICBtaW4td2lkdGg6IDY1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA2NSU7XFxuICAgICAgICBmbGV4OiAwIDEgNjUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteGxhcmdlLTY1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY1JTtcXG59XFxuLm1kLWZsZXgteGxhcmdlLTcwIHtcXG4gICAgbWluLXdpZHRoOiA3MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNzAlO1xcbiAgICAgICAgZmxleDogMCAxIDcwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS03MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XFxufVxcbi5tZC1mbGV4LXhsYXJnZS03NSB7XFxuICAgIG1pbi13aWR0aDogNzUlO1xcbiAgICAtbXMtZmxleDogMCAxIDc1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA3NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNzUge1xcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xcbn1cXG4ubWQtZmxleC14bGFyZ2UtODAge1xcbiAgICBtaW4td2lkdGg6IDgwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA4MCU7XFxuICAgICAgICBmbGV4OiAwIDEgODAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteGxhcmdlLTgwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcXG59XFxuLm1kLWZsZXgteGxhcmdlLTg1IHtcXG4gICAgbWluLXdpZHRoOiA4NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgODUlO1xcbiAgICAgICAgZmxleDogMCAxIDg1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS04NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4NSU7XFxufVxcbi5tZC1mbGV4LXhsYXJnZS05MCB7XFxuICAgIG1pbi13aWR0aDogOTAlO1xcbiAgICAtbXMtZmxleDogMCAxIDkwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA5MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14bGFyZ2UtOTAge1xcbiAgICBtYXJnaW4tbGVmdDogOTAlO1xcbn1cXG4ubWQtZmxleC14bGFyZ2UtOTUge1xcbiAgICBtaW4td2lkdGg6IDk1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA5NSU7XFxuICAgICAgICBmbGV4OiAwIDEgOTUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteGxhcmdlLTk1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDk1JTtcXG59XFxuLm1kLWZsZXgteGxhcmdlLTEwMCB7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSAxMDAlO1xcbiAgICAgICAgZmxleDogMCAxIDEwMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMTAwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XFxufVxcbi5tZC1hbGlnbi14bGFyZ2Utc3RhcnQge1xcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuLm1kLWFsaWduLXhsYXJnZS1jZW50ZXIge1xcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm1kLWFsaWduLXhsYXJnZS1lbmQge1xcbiAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4ubWQtaGlkZS14bGFyZ2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDE5MDNweCkge1xcbi5tZC1yb3ctbGFyZ2Uge1xcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5tZC1jb2x1bW4tbGFyZ2Uge1xcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tZC1mbGV4LWxhcmdlIHtcXG4gICAgLW1zLWZsZXg6IDEgMTtcXG4gICAgICAgIGZsZXg6IDEgMTtcXG59XFxuLm1kLWZsZXgtbGFyZ2UtMzMge1xcbiAgICBtaW4td2lkdGg6IDMzLjMzMzMzJTtcXG4gICAgLW1zLWZsZXg6IDAgMSAzMy4zMzMzMyU7XFxuICAgICAgICBmbGV4OiAwIDEgMzMuMzMzMzMlO1xcbn1cXG4ubWQtZmxleC1sYXJnZS02NiB7XFxuICAgIG1pbi13aWR0aDogMzMuMzMzMzMlO1xcbiAgICAtbXMtZmxleDogMCAxIDY2LjY2NjY2JTtcXG4gICAgICAgIGZsZXg6IDAgMSA2Ni42NjY2NiU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1sYXJnZS0zMyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1sYXJnZS02NiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NiU7XFxufVxcbi5tZC1mbGV4LWxhcmdlLTUge1xcbiAgICBtaW4td2lkdGg6IDUlO1xcbiAgICAtbXMtZmxleDogMCAxIDUlO1xcbiAgICAgICAgZmxleDogMCAxIDUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG59XFxuLm1kLWZsZXgtbGFyZ2UtMTAge1xcbiAgICBtaW4td2lkdGg6IDEwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSAxMCU7XFxuICAgICAgICBmbGV4OiAwIDEgMTAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbGFyZ2UtMTAge1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG4ubWQtZmxleC1sYXJnZS0xNSB7XFxuICAgIG1pbi13aWR0aDogMTUlO1xcbiAgICAtbXMtZmxleDogMCAxIDE1JTtcXG4gICAgICAgIGZsZXg6IDAgMSAxNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1sYXJnZS0xNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XFxufVxcbi5tZC1mbGV4LWxhcmdlLTIwIHtcXG4gICAgbWluLXdpZHRoOiAyMCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMjAlO1xcbiAgICAgICAgZmxleDogMCAxIDIwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTIwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcXG59XFxuLm1kLWZsZXgtbGFyZ2UtMjUge1xcbiAgICBtaW4td2lkdGg6IDI1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSAyNSU7XFxuICAgICAgICBmbGV4OiAwIDEgMjUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbGFyZ2UtMjUge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG4ubWQtZmxleC1sYXJnZS0zMCB7XFxuICAgIG1pbi13aWR0aDogMzAlO1xcbiAgICAtbXMtZmxleDogMCAxIDMwJTtcXG4gICAgICAgIGZsZXg6IDAgMSAzMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1sYXJnZS0zMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XFxufVxcbi5tZC1mbGV4LWxhcmdlLTM1IHtcXG4gICAgbWluLXdpZHRoOiAzNSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMzUlO1xcbiAgICAgICAgZmxleDogMCAxIDM1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTM1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcXG59XFxuLm1kLWZsZXgtbGFyZ2UtNDAge1xcbiAgICBtaW4td2lkdGg6IDQwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA0MCU7XFxuICAgICAgICBmbGV4OiAwIDEgNDAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNDAge1xcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xcbn1cXG4ubWQtZmxleC1sYXJnZS00NSB7XFxuICAgIG1pbi13aWR0aDogNDUlO1xcbiAgICAtbXMtZmxleDogMCAxIDQ1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA0NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1sYXJnZS00NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0NSU7XFxufVxcbi5tZC1mbGV4LWxhcmdlLTUwIHtcXG4gICAgbWluLXdpZHRoOiA1MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNTAlO1xcbiAgICAgICAgZmxleDogMCAxIDUwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTUwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG59XFxuLm1kLWZsZXgtbGFyZ2UtNTUge1xcbiAgICBtaW4td2lkdGg6IDU1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA1NSU7XFxuICAgICAgICBmbGV4OiAwIDEgNTUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNTUge1xcbiAgICBtYXJnaW4tbGVmdDogNTUlO1xcbn1cXG4ubWQtZmxleC1sYXJnZS02MCB7XFxuICAgIG1pbi13aWR0aDogNjAlO1xcbiAgICAtbXMtZmxleDogMCAxIDYwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA2MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1sYXJnZS02MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2MCU7XFxufVxcbi5tZC1mbGV4LWxhcmdlLTY1IHtcXG4gICAgbWluLXdpZHRoOiA2NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNjUlO1xcbiAgICAgICAgZmxleDogMCAxIDY1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTY1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY1JTtcXG59XFxuLm1kLWZsZXgtbGFyZ2UtNzAge1xcbiAgICBtaW4td2lkdGg6IDcwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA3MCU7XFxuICAgICAgICBmbGV4OiAwIDEgNzAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbGFyZ2UtNzAge1xcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xcbn1cXG4ubWQtZmxleC1sYXJnZS03NSB7XFxuICAgIG1pbi13aWR0aDogNzUlO1xcbiAgICAtbXMtZmxleDogMCAxIDc1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA3NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1sYXJnZS03NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XFxufVxcbi5tZC1mbGV4LWxhcmdlLTgwIHtcXG4gICAgbWluLXdpZHRoOiA4MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgODAlO1xcbiAgICAgICAgZmxleDogMCAxIDgwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTgwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcXG59XFxuLm1kLWZsZXgtbGFyZ2UtODUge1xcbiAgICBtaW4td2lkdGg6IDg1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA4NSU7XFxuICAgICAgICBmbGV4OiAwIDEgODUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbGFyZ2UtODUge1xcbiAgICBtYXJnaW4tbGVmdDogODUlO1xcbn1cXG4ubWQtZmxleC1sYXJnZS05MCB7XFxuICAgIG1pbi13aWR0aDogOTAlO1xcbiAgICAtbXMtZmxleDogMCAxIDkwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA5MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1sYXJnZS05MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA5MCU7XFxufVxcbi5tZC1mbGV4LWxhcmdlLTk1IHtcXG4gICAgbWluLXdpZHRoOiA5NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgOTUlO1xcbiAgICAgICAgZmxleDogMCAxIDk1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTk1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDk1JTtcXG59XFxuLm1kLWZsZXgtbGFyZ2UtMTAwIHtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICAtbXMtZmxleDogMCAxIDEwMCU7XFxuICAgICAgICBmbGV4OiAwIDEgMTAwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTEwMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xcbn1cXG4ubWQtYWxpZ24tbGFyZ2Utc3RhcnQge1xcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuLm1kLWFsaWduLWxhcmdlLWNlbnRlciB7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubWQtYWxpZ24tbGFyZ2UtZW5kIHtcXG4gICAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLm1kLWhpZGUtbGFyZ2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyNjRweCkge1xcbi5tZC1yb3ctbWVkaXVtIHtcXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4ubWQtY29sdW1uLW1lZGl1bSB7XFxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1kLWZsZXgtbWVkaXVtIHtcXG4gICAgLW1zLWZsZXg6IDEgMTtcXG4gICAgICAgIGZsZXg6IDEgMTtcXG59XFxuLm1kLWZsZXgtbWVkaXVtLTMzIHtcXG4gICAgbWluLXdpZHRoOiAzMy4zMzMzMyU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMzMuMzMzMzMlO1xcbiAgICAgICAgZmxleDogMCAxIDMzLjMzMzMzJTtcXG59XFxuLm1kLWZsZXgtbWVkaXVtLTY2IHtcXG4gICAgbWluLXdpZHRoOiAzMy4zMzMzMyU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNjYuNjY2NjYlO1xcbiAgICAgICAgZmxleDogMCAxIDY2LjY2NjY2JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0zMyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNjYge1xcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjYlO1xcbn1cXG4ubWQtZmxleC1tZWRpdW0tNSB7XFxuICAgIG1pbi13aWR0aDogNSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNSU7XFxuICAgICAgICBmbGV4OiAwIDEgNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG59XFxuLm1kLWZsZXgtbWVkaXVtLTEwIHtcXG4gICAgbWluLXdpZHRoOiAxMCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMTAlO1xcbiAgICAgICAgZmxleDogMCAxIDEwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0xMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxufVxcbi5tZC1mbGV4LW1lZGl1bS0xNSB7XFxuICAgIG1pbi13aWR0aDogMTUlO1xcbiAgICAtbXMtZmxleDogMCAxIDE1JTtcXG4gICAgICAgIGZsZXg6IDAgMSAxNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1tZWRpdW0tMTUge1xcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xcbn1cXG4ubWQtZmxleC1tZWRpdW0tMjAge1xcbiAgICBtaW4td2lkdGg6IDIwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSAyMCU7XFxuICAgICAgICBmbGV4OiAwIDEgMjAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTIwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcXG59XFxuLm1kLWZsZXgtbWVkaXVtLTI1IHtcXG4gICAgbWluLXdpZHRoOiAyNSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMjUlO1xcbiAgICAgICAgZmxleDogMCAxIDI1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0yNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcbi5tZC1mbGV4LW1lZGl1bS0zMCB7XFxuICAgIG1pbi13aWR0aDogMzAlO1xcbiAgICAtbXMtZmxleDogMCAxIDMwJTtcXG4gICAgICAgIGZsZXg6IDAgMSAzMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1tZWRpdW0tMzAge1xcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xcbn1cXG4ubWQtZmxleC1tZWRpdW0tMzUge1xcbiAgICBtaW4td2lkdGg6IDM1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSAzNSU7XFxuICAgICAgICBmbGV4OiAwIDEgMzUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTM1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcXG59XFxuLm1kLWZsZXgtbWVkaXVtLTQwIHtcXG4gICAgbWluLXdpZHRoOiA0MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNDAlO1xcbiAgICAgICAgZmxleDogMCAxIDQwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS00MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XFxufVxcbi5tZC1mbGV4LW1lZGl1bS00NSB7XFxuICAgIG1pbi13aWR0aDogNDUlO1xcbiAgICAtbXMtZmxleDogMCAxIDQ1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA0NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNDUge1xcbiAgICBtYXJnaW4tbGVmdDogNDUlO1xcbn1cXG4ubWQtZmxleC1tZWRpdW0tNTAge1xcbiAgICBtaW4td2lkdGg6IDUwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA1MCU7XFxuICAgICAgICBmbGV4OiAwIDEgNTAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTUwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG59XFxuLm1kLWZsZXgtbWVkaXVtLTU1IHtcXG4gICAgbWluLXdpZHRoOiA1NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNTUlO1xcbiAgICAgICAgZmxleDogMCAxIDU1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS01NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1NSU7XFxufVxcbi5tZC1mbGV4LW1lZGl1bS02MCB7XFxuICAgIG1pbi13aWR0aDogNjAlO1xcbiAgICAtbXMtZmxleDogMCAxIDYwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA2MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNjAge1xcbiAgICBtYXJnaW4tbGVmdDogNjAlO1xcbn1cXG4ubWQtZmxleC1tZWRpdW0tNjUge1xcbiAgICBtaW4td2lkdGg6IDY1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA2NSU7XFxuICAgICAgICBmbGV4OiAwIDEgNjUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTY1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY1JTtcXG59XFxuLm1kLWZsZXgtbWVkaXVtLTcwIHtcXG4gICAgbWluLXdpZHRoOiA3MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNzAlO1xcbiAgICAgICAgZmxleDogMCAxIDcwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS03MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XFxufVxcbi5tZC1mbGV4LW1lZGl1bS03NSB7XFxuICAgIG1pbi13aWR0aDogNzUlO1xcbiAgICAtbXMtZmxleDogMCAxIDc1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA3NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNzUge1xcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xcbn1cXG4ubWQtZmxleC1tZWRpdW0tODAge1xcbiAgICBtaW4td2lkdGg6IDgwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA4MCU7XFxuICAgICAgICBmbGV4OiAwIDEgODAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTgwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgwJTtcXG59XFxuLm1kLWZsZXgtbWVkaXVtLTg1IHtcXG4gICAgbWluLXdpZHRoOiA4NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgODUlO1xcbiAgICAgICAgZmxleDogMCAxIDg1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS04NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4NSU7XFxufVxcbi5tZC1mbGV4LW1lZGl1bS05MCB7XFxuICAgIG1pbi13aWR0aDogOTAlO1xcbiAgICAtbXMtZmxleDogMCAxIDkwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA5MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1tZWRpdW0tOTAge1xcbiAgICBtYXJnaW4tbGVmdDogOTAlO1xcbn1cXG4ubWQtZmxleC1tZWRpdW0tOTUge1xcbiAgICBtaW4td2lkdGg6IDk1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA5NSU7XFxuICAgICAgICBmbGV4OiAwIDEgOTUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtbWVkaXVtLTk1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDk1JTtcXG59XFxuLm1kLWZsZXgtbWVkaXVtLTEwMCB7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSAxMDAlO1xcbiAgICAgICAgZmxleDogMCAxIDEwMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1tZWRpdW0tMTAwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XFxufVxcbi5tZC1hbGlnbi1tZWRpdW0tc3RhcnQge1xcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuLm1kLWFsaWduLW1lZGl1bS1jZW50ZXIge1xcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm1kLWFsaWduLW1lZGl1bS1lbmQge1xcbiAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4ubWQtaGlkZS1tZWRpdW0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDk0NHB4KSB7XFxuLm1kLXJvdy1zbWFsbCB7XFxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLm1kLWNvbHVtbi1zbWFsbCB7XFxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1kLWZsZXgtc21hbGwge1xcbiAgICAtbXMtZmxleDogMSAxO1xcbiAgICAgICAgZmxleDogMSAxO1xcbn1cXG4ubWQtZmxleC1zbWFsbC0zMyB7XFxuICAgIG1pbi13aWR0aDogMzMuMzMzMzMlO1xcbiAgICAtbXMtZmxleDogMCAxIDMzLjMzMzMzJTtcXG4gICAgICAgIGZsZXg6IDAgMSAzMy4zMzMzMyU7XFxufVxcbi5tZC1mbGV4LXNtYWxsLTY2IHtcXG4gICAgbWluLXdpZHRoOiAzMy4zMzMzMyU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNjYuNjY2NjYlO1xcbiAgICAgICAgZmxleDogMCAxIDY2LjY2NjY2JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTMzIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTY2IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2JTtcXG59XFxuLm1kLWZsZXgtc21hbGwtNSB7XFxuICAgIG1pbi13aWR0aDogNSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNSU7XFxuICAgICAgICBmbGV4OiAwIDEgNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1zbWFsbC01IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbn1cXG4ubWQtZmxleC1zbWFsbC0xMCB7XFxuICAgIG1pbi13aWR0aDogMTAlO1xcbiAgICAtbXMtZmxleDogMCAxIDEwJTtcXG4gICAgICAgIGZsZXg6IDAgMSAxMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1zbWFsbC0xMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxufVxcbi5tZC1mbGV4LXNtYWxsLTE1IHtcXG4gICAgbWluLXdpZHRoOiAxNSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMTUlO1xcbiAgICAgICAgZmxleDogMCAxIDE1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTE1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcXG59XFxuLm1kLWZsZXgtc21hbGwtMjAge1xcbiAgICBtaW4td2lkdGg6IDIwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSAyMCU7XFxuICAgICAgICBmbGV4OiAwIDEgMjAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtc21hbGwtMjAge1xcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xcbn1cXG4ubWQtZmxleC1zbWFsbC0yNSB7XFxuICAgIG1pbi13aWR0aDogMjUlO1xcbiAgICAtbXMtZmxleDogMCAxIDI1JTtcXG4gICAgICAgIGZsZXg6IDAgMSAyNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1zbWFsbC0yNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcbi5tZC1mbGV4LXNtYWxsLTMwIHtcXG4gICAgbWluLXdpZHRoOiAzMCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMzAlO1xcbiAgICAgICAgZmxleDogMCAxIDMwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTMwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcXG59XFxuLm1kLWZsZXgtc21hbGwtMzUge1xcbiAgICBtaW4td2lkdGg6IDM1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSAzNSU7XFxuICAgICAgICBmbGV4OiAwIDEgMzUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtc21hbGwtMzUge1xcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xcbn1cXG4ubWQtZmxleC1zbWFsbC00MCB7XFxuICAgIG1pbi13aWR0aDogNDAlO1xcbiAgICAtbXMtZmxleDogMCAxIDQwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA0MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1zbWFsbC00MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XFxufVxcbi5tZC1mbGV4LXNtYWxsLTQ1IHtcXG4gICAgbWluLXdpZHRoOiA0NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNDUlO1xcbiAgICAgICAgZmxleDogMCAxIDQ1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTQ1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQ1JTtcXG59XFxuLm1kLWZsZXgtc21hbGwtNTAge1xcbiAgICBtaW4td2lkdGg6IDUwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA1MCU7XFxuICAgICAgICBmbGV4OiAwIDEgNTAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtc21hbGwtNTAge1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbn1cXG4ubWQtZmxleC1zbWFsbC01NSB7XFxuICAgIG1pbi13aWR0aDogNTUlO1xcbiAgICAtbXMtZmxleDogMCAxIDU1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA1NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1zbWFsbC01NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1NSU7XFxufVxcbi5tZC1mbGV4LXNtYWxsLTYwIHtcXG4gICAgbWluLXdpZHRoOiA2MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNjAlO1xcbiAgICAgICAgZmxleDogMCAxIDYwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTYwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDYwJTtcXG59XFxuLm1kLWZsZXgtc21hbGwtNjUge1xcbiAgICBtaW4td2lkdGg6IDY1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA2NSU7XFxuICAgICAgICBmbGV4OiAwIDEgNjUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtc21hbGwtNjUge1xcbiAgICBtYXJnaW4tbGVmdDogNjUlO1xcbn1cXG4ubWQtZmxleC1zbWFsbC03MCB7XFxuICAgIG1pbi13aWR0aDogNzAlO1xcbiAgICAtbXMtZmxleDogMCAxIDcwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA3MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1zbWFsbC03MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XFxufVxcbi5tZC1mbGV4LXNtYWxsLTc1IHtcXG4gICAgbWluLXdpZHRoOiA3NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNzUlO1xcbiAgICAgICAgZmxleDogMCAxIDc1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTc1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcXG59XFxuLm1kLWZsZXgtc21hbGwtODAge1xcbiAgICBtaW4td2lkdGg6IDgwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA4MCU7XFxuICAgICAgICBmbGV4OiAwIDEgODAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtc21hbGwtODAge1xcbiAgICBtYXJnaW4tbGVmdDogODAlO1xcbn1cXG4ubWQtZmxleC1zbWFsbC04NSB7XFxuICAgIG1pbi13aWR0aDogODUlO1xcbiAgICAtbXMtZmxleDogMCAxIDg1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA4NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC1zbWFsbC04NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4NSU7XFxufVxcbi5tZC1mbGV4LXNtYWxsLTkwIHtcXG4gICAgbWluLXdpZHRoOiA5MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgOTAlO1xcbiAgICAgICAgZmxleDogMCAxIDkwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTkwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkwJTtcXG59XFxuLm1kLWZsZXgtc21hbGwtOTUge1xcbiAgICBtaW4td2lkdGg6IDk1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA5NSU7XFxuICAgICAgICBmbGV4OiAwIDEgOTUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtc21hbGwtOTUge1xcbiAgICBtYXJnaW4tbGVmdDogOTUlO1xcbn1cXG4ubWQtZmxleC1zbWFsbC0xMDAge1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMTAwJTtcXG4gICAgICAgIGZsZXg6IDAgMSAxMDAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQtc21hbGwtMTAwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XFxufVxcbi5tZC1hbGlnbi1zbWFsbC1zdGFydCB7XFxuICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4ubWQtYWxpZ24tc21hbGwtY2VudGVyIHtcXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tZC1hbGlnbi1zbWFsbC1lbmQge1xcbiAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4ubWQtaGlkZS1zbWFsbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4ubWQtcm93LXhzbWFsbCB7XFxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLm1kLWNvbHVtbi14c21hbGwge1xcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tZC1mbGV4LXhzbWFsbCB7XFxuICAgIC1tcy1mbGV4OiAxIDE7XFxuICAgICAgICBmbGV4OiAxIDE7XFxufVxcbi5tZC1mbGV4LXhzbWFsbC0zMyB7XFxuICAgIG1pbi13aWR0aDogMzMuMzMzMzMlO1xcbiAgICAtbXMtZmxleDogMCAxIDMzLjMzMzMzJTtcXG4gICAgICAgIGZsZXg6IDAgMSAzMy4zMzMzMyU7XFxufVxcbi5tZC1mbGV4LXhzbWFsbC02NiB7XFxuICAgIG1pbi13aWR0aDogMzMuMzMzMzMlO1xcbiAgICAtbXMtZmxleDogMCAxIDY2LjY2NjY2JTtcXG4gICAgICAgIGZsZXg6IDAgMSA2Ni42NjY2NiU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14c21hbGwtMzMge1xcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteHNtYWxsLTY2IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2JTtcXG59XFxuLm1kLWZsZXgteHNtYWxsLTUge1xcbiAgICBtaW4td2lkdGg6IDUlO1xcbiAgICAtbXMtZmxleDogMCAxIDUlO1xcbiAgICAgICAgZmxleDogMCAxIDUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteHNtYWxsLTUge1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxufVxcbi5tZC1mbGV4LXhzbWFsbC0xMCB7XFxuICAgIG1pbi13aWR0aDogMTAlO1xcbiAgICAtbXMtZmxleDogMCAxIDEwJTtcXG4gICAgICAgIGZsZXg6IDAgMSAxMCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14c21hbGwtMTAge1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG4ubWQtZmxleC14c21hbGwtMTUge1xcbiAgICBtaW4td2lkdGg6IDE1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSAxNSU7XFxuICAgICAgICBmbGV4OiAwIDEgMTUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteHNtYWxsLTE1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcXG59XFxuLm1kLWZsZXgteHNtYWxsLTIwIHtcXG4gICAgbWluLXdpZHRoOiAyMCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMjAlO1xcbiAgICAgICAgZmxleDogMCAxIDIwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC0yMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XFxufVxcbi5tZC1mbGV4LXhzbWFsbC0yNSB7XFxuICAgIG1pbi13aWR0aDogMjUlO1xcbiAgICAtbXMtZmxleDogMCAxIDI1JTtcXG4gICAgICAgIGZsZXg6IDAgMSAyNSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14c21hbGwtMjUge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG4ubWQtZmxleC14c21hbGwtMzAge1xcbiAgICBtaW4td2lkdGg6IDMwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSAzMCU7XFxuICAgICAgICBmbGV4OiAwIDEgMzAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteHNtYWxsLTMwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcXG59XFxuLm1kLWZsZXgteHNtYWxsLTM1IHtcXG4gICAgbWluLXdpZHRoOiAzNSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMzUlO1xcbiAgICAgICAgZmxleDogMCAxIDM1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC0zNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XFxufVxcbi5tZC1mbGV4LXhzbWFsbC00MCB7XFxuICAgIG1pbi13aWR0aDogNDAlO1xcbiAgICAtbXMtZmxleDogMCAxIDQwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA0MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14c21hbGwtNDAge1xcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xcbn1cXG4ubWQtZmxleC14c21hbGwtNDUge1xcbiAgICBtaW4td2lkdGg6IDQ1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA0NSU7XFxuICAgICAgICBmbGV4OiAwIDEgNDUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteHNtYWxsLTQ1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQ1JTtcXG59XFxuLm1kLWZsZXgteHNtYWxsLTUwIHtcXG4gICAgbWluLXdpZHRoOiA1MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNTAlO1xcbiAgICAgICAgZmxleDogMCAxIDUwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC01MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxufVxcbi5tZC1mbGV4LXhzbWFsbC01NSB7XFxuICAgIG1pbi13aWR0aDogNTUlO1xcbiAgICAtbXMtZmxleDogMCAxIDU1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA1NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14c21hbGwtNTUge1xcbiAgICBtYXJnaW4tbGVmdDogNTUlO1xcbn1cXG4ubWQtZmxleC14c21hbGwtNjAge1xcbiAgICBtaW4td2lkdGg6IDYwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA2MCU7XFxuICAgICAgICBmbGV4OiAwIDEgNjAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteHNtYWxsLTYwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDYwJTtcXG59XFxuLm1kLWZsZXgteHNtYWxsLTY1IHtcXG4gICAgbWluLXdpZHRoOiA2NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgNjUlO1xcbiAgICAgICAgZmxleDogMCAxIDY1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC02NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2NSU7XFxufVxcbi5tZC1mbGV4LXhzbWFsbC03MCB7XFxuICAgIG1pbi13aWR0aDogNzAlO1xcbiAgICAtbXMtZmxleDogMCAxIDcwJTtcXG4gICAgICAgIGZsZXg6IDAgMSA3MCU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14c21hbGwtNzAge1xcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xcbn1cXG4ubWQtZmxleC14c21hbGwtNzUge1xcbiAgICBtaW4td2lkdGg6IDc1JTtcXG4gICAgLW1zLWZsZXg6IDAgMSA3NSU7XFxuICAgICAgICBmbGV4OiAwIDEgNzUlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteHNtYWxsLTc1IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcXG59XFxuLm1kLWZsZXgteHNtYWxsLTgwIHtcXG4gICAgbWluLXdpZHRoOiA4MCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgODAlO1xcbiAgICAgICAgZmxleDogMCAxIDgwJTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC04MCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XFxufVxcbi5tZC1mbGV4LXhzbWFsbC04NSB7XFxuICAgIG1pbi13aWR0aDogODUlO1xcbiAgICAtbXMtZmxleDogMCAxIDg1JTtcXG4gICAgICAgIGZsZXg6IDAgMSA4NSU7XFxufVxcbi5tZC1mbGV4LW9mZnNldC14c21hbGwtODUge1xcbiAgICBtYXJnaW4tbGVmdDogODUlO1xcbn1cXG4ubWQtZmxleC14c21hbGwtOTAge1xcbiAgICBtaW4td2lkdGg6IDkwJTtcXG4gICAgLW1zLWZsZXg6IDAgMSA5MCU7XFxuICAgICAgICBmbGV4OiAwIDEgOTAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteHNtYWxsLTkwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkwJTtcXG59XFxuLm1kLWZsZXgteHNtYWxsLTk1IHtcXG4gICAgbWluLXdpZHRoOiA5NSU7XFxuICAgIC1tcy1mbGV4OiAwIDEgOTUlO1xcbiAgICAgICAgZmxleDogMCAxIDk1JTtcXG59XFxuLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC05NSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA5NSU7XFxufVxcbi5tZC1mbGV4LXhzbWFsbC0xMDAge1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIC1tcy1mbGV4OiAwIDEgMTAwJTtcXG4gICAgICAgIGZsZXg6IDAgMSAxMDAlO1xcbn1cXG4ubWQtZmxleC1vZmZzZXQteHNtYWxsLTEwMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xcbn1cXG4ubWQtYWxpZ24teHNtYWxsLXN0YXJ0IHtcXG4gICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbi5tZC1hbGlnbi14c21hbGwtY2VudGVyIHtcXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tZC1hbGlnbi14c21hbGwtZW5kIHtcXG4gICAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLm1kLWhpZGUteHNtYWxsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLWxpc3Qge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogOHB4IDA7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5tZC1saXN0Lm1kLWRlbnNlIHtcXG4gICAgcGFkZGluZzogNHB4IDA7XFxufVxcbi5tZC1saXN0Lm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0ubWQtaW5zZXQgLm1kLWxpc3QtaXRlbS1jb250YWluZXIge1xcbiAgICAgIHBhZGRpbmctbGVmdDogNzJweDtcXG59XFxuLm1kLWxpc3QubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWNvbnRhaW5lciB7XFxuICAgICAgbWluLWhlaWdodDogNDBweDtcXG4gICAgICBmb250LXNpemU6IDEzcHg7XFxufVxcbi5tZC1saXN0Lm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXIgLm1kLWF2YXRhcjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XFxufVxcbi5tZC1saXN0Lm1kLWRlbnNlIC5tZC1hdmF0YXIge1xcbiAgICAgIHdpZHRoOiAzMnB4O1xcbiAgICAgIG1pbi13aWR0aDogMzJweDtcXG4gICAgICBoZWlnaHQ6IDMycHg7XFxuICAgICAgbWluLWhlaWdodDogMzJweDtcXG59XFxuLm1kLWxpc3QubWQtZGVuc2UgLm1kLWxpc3QtaXRlbS1leHBhbmQge1xcbiAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxufVxcbi5tZC1saXN0Lm1kLWRvdWJsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXIge1xcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xcbn1cXG4ubWQtbGlzdC5tZC1kb3VibGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXIge1xcbiAgICB3aWR0aDogMzZweDtcXG4gICAgbWluLXdpZHRoOiAzNnB4O1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDM2cHg7XFxufVxcbi5tZC1saXN0Lm1kLWRvdWJsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWF2YXRhcjpmaXJzdC1jaGlsZCB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG4ubWQtbGlzdC5tZC1kb3VibGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC10ZXh0LWNvbnRhaW5lciA+IDpudGgtY2hpbGQoMSkge1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxufVxcbi5tZC1saXN0Lm1kLWRvdWJsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LXRleHQtY29udGFpbmVyID4gOm50aC1jaGlsZCgyKSB7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuLm1kLWxpc3QubWQtZG91YmxlLWxpbmUgLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWNvbnRhaW5lciB7XFxuICAgIG1pbi1oZWlnaHQ6IDcycHg7XFxufVxcbi5tZC1saXN0Lm1kLXRyaXBsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXIge1xcbiAgICBtaW4taGVpZ2h0OiA3NnB4O1xcbn1cXG4ubWQtbGlzdC5tZC10cmlwbGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXIge1xcbiAgICB3aWR0aDogMzZweDtcXG4gICAgbWluLXdpZHRoOiAzNnB4O1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDM2cHg7XFxufVxcbi5tZC1saXN0Lm1kLXRyaXBsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWF2YXRhcjpmaXJzdC1jaGlsZCB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG4ubWQtbGlzdC5tZC10cmlwbGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC10ZXh0LWNvbnRhaW5lciA+IDpudGgtY2hpbGQoMSkge1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxufVxcbi5tZC1saXN0Lm1kLXRyaXBsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LXRleHQtY29udGFpbmVyID4gOm50aC1jaGlsZCgyKSB7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuLm1kLWxpc3QubWQtdHJpcGxlLWxpbmUgLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWNvbnRhaW5lciB7XFxuICAgIG1pbi1oZWlnaHQ6IDg4cHg7XFxufVxcbi5tZC1saXN0Lm1kLXRyaXBsZS1saW5lIC5tZC1hdmF0YXIge1xcbiAgICBtYXJnaW46IDA7XFxufVxcbi5tZC1saXN0Lm1kLXRyaXBsZS1saW5lIC5tZC1saXN0LWl0ZW0tY29udGFpbmVyIHtcXG4gICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5tZC1saXN0IC5tZC1zdWJoZWFkZXIubWQtaW5zZXQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDcycHg7XFxufVxcbi5tZC1saXN0ID4gLm1kLXN1YmhlYWRlcjpmaXJzdC1vZi10eXBlIHtcXG4gICAgbWFyZ2luLXRvcDogLThweDtcXG59XFxuLm1kLWxpc3QtaXRlbSB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tZC1saXN0LWl0ZW0ubWQtaW5zZXQgLm1kLWxpc3QtaXRlbS1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDcycHg7XFxufVxcbi5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1ob2xkZXIge1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLW1zLWZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgZmxleDogMTtcXG59XFxuLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWhvbGRlciA+IC5tZC1pbmstcmlwcGxlIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG4ubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0taG9sZGVyID4gLm1kLWljb246Zmlyc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMzJweDtcXG59XFxuLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWhvbGRlciAubWQtYXZhdGFyOmZpcnN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxufVxcbi5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1ob2xkZXIgLm1kLWxpc3QtYWN0aW9uIHtcXG4gICAgICBtYXJnaW46IDAgLTJweCAwIDA7XFxufVxcbi5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1ob2xkZXIgLm1kLWxpc3QtYWN0aW9uOm50aC1jaGlsZCgzKSB7XFxuICAgICAgICBtYXJnaW46IDAgLTJweCAwIDE2cHg7XFxufVxcbi5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogNDhweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwIDE2cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuLm1kLWxpc3QtaXRlbSAubWQtZGl2aWRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuLm1kLWxpc3QtaXRlbSAubWQtaWNvbixcXG4gIC5tZC1saXN0LWl0ZW0gLm1kLWF2YXRhciB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLm1kLWxpc3QtaXRlbSAubWQtaWNvbjpmaXJzdC1vZi10eXBlICsgKixcXG4gICAgLm1kLWxpc3QtaXRlbSAubWQtYXZhdGFyOmZpcnN0LW9mLXR5cGUgKyAqIHtcXG4gICAgICAtbXMtZmxleDogMSAxIGF1dG87XFxuICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcbn1cXG4ubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXIge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuLm1kLWxpc3QtaXRlbSAubWQtaWNvbiB7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG4ubWQtbGlzdC1pdGVtIC5tZC1pbmstcmlwcGxlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuLm1kLWxpc3QtaXRlbS1leHBhbmQge1xcbiAgbWluLWhlaWdodDogNDhweDtcXG4gIC1tcy1mbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ubWQtbGlzdC1pdGVtLWV4cGFuZDpiZWZvcmUsIC5tZC1saXN0LWl0ZW0tZXhwYW5kOmFmdGVyIHtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxufVxcbi5tZC1saXN0LWl0ZW0tZXhwYW5kOmJlZm9yZSB7XFxuICAgIHRvcDogMDtcXG59XFxuLm1kLWxpc3QtaXRlbS1leHBhbmQ6YWZ0ZXIge1xcbiAgICBib3R0b206IDA7XFxufVxcbi5tZC1saXN0LWl0ZW0tZXhwYW5kLm1kLWFjdGl2ZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1kLWxpc3QtaXRlbS1leHBhbmQubWQtYWN0aXZlOmJlZm9yZSwgLm1kLWxpc3QtaXRlbS1leHBhbmQubWQtYWN0aXZlOmFmdGVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtbGlzdC1pdGVtLWV4cGFuZC5tZC1hY3RpdmU6Zmlyc3Qtb2YtdHlwZTpiZWZvcmUge1xcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcbi5tZC1saXN0LWl0ZW0tZXhwYW5kLm1kLWFjdGl2ZTpsYXN0LW9mLXR5cGU6YWZ0ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcbi5tZC1saXN0LWl0ZW0tZXhwYW5kLm1kLWFjdGl2ZSA+IC5tZC1saXN0LWl0ZW0tY29udGFpbmVyIC5tZC1saXN0LWV4cGFuZC1pbmRpY2F0b3Ige1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpIHRyYW5zbGF0ZTNEKDAsIDAsIDApO1xcbn1cXG4ubWQtbGlzdC1pdGVtLWV4cGFuZC5tZC1hY3RpdmUgPiAubWQtbGlzdC1leHBhbmQge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcXG59XFxuLm1kLWxpc3QtaXRlbS1leHBhbmQgPiAubWQtbGlzdC1pdGVtLWNvbnRhaW5lciA+IC5tZC1saXN0LWl0ZW0taG9sZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG4ubWQtbGlzdC1pdGVtLWV4cGFuZCAubWQtZXhwYW5zaW9uLWluZGljYXRvcixcXG4gIC5tZC1saXN0LWl0ZW0tZXhwYW5kIC5tZC1saXN0LWl0ZW0tY29udGFpbmVyLFxcbiAgLm1kLWxpc3QtaXRlbS1leHBhbmQgLm1kLWljb24ge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuLm1kLWxpc3QtaXRlbS1leHBhbmQgLm1kLWxpc3QtZXhwYW5kIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIDAsIDApO1xcbiAgICB3aWxsLWNoYW5nZTogbWFyZ2luLWJvdHRvbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpO1xcbn1cXG4ubWQtbGlzdC1pdGVtLWV4cGFuZCAubWQtbGlzdC1leHBhbmQubWQtdHJhbnNpdGlvbi1vZmYge1xcbiAgICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLm1kLWxpc3QtaXRlbS1leHBhbmQgLm1kLWxpc3QtZXhwYW5kIC5tZC1saXN0IHtcXG4gICAgICBwYWRkaW5nOiAwO1xcbn1cXG4ubWQtbGlzdC10ZXh0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gIC1tcy1mbGV4OiAxO1xcbiAgICAgIGZsZXg6IDE7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG59XFxuLm1kLWxpc3QtdGV4dC1jb250YWluZXIgPiA6bnRoLWNoaWxkKDEpIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4ubWQtbGlzdC10ZXh0LWNvbnRhaW5lciA+IDpudGgtY2hpbGQoMiksXFxuICAubWQtbGlzdC10ZXh0LWNvbnRhaW5lciA+IDpudGgtY2hpbGQoMykge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5tZC1saXN0LXRleHQtY29udGFpbmVyID4gOm50aC1jaGlsZCgyKTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLW1lbnUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4ubWQtbWVudS1jb250ZW50IHtcXG4gIHdpZHRoOiAxNjhweDtcXG4gIG1pbi13aWR0aDogODRweDtcXG4gIG1heC13aWR0aDogMzkycHg7XFxuICBtaW4taGVpZ2h0OiA2NHB4O1xcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDMycHgpO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDEyMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45LCAwLjg1KSB0cmFuc2xhdGVaKDApO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSwgb3BhY2l0eSAwLjI1cyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKSwgbWFyZ2luIDAuMnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuNTUsIDAuMiksIHRyYW5zZm9ybSAwcyAwLjI1cyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKTtcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHksIHdpZHRoO1xcbn1cXG4ubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi1ib3R0b20tcmlnaHQge1xcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC04cHg7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbn1cXG4ubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi1ib3R0b20tcmlnaHQubWQtYWN0aXZlIHtcXG4gICAgICBtYXJnaW4tdG9wOiAtMTFweDtcXG59XFxuLm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tYm90dG9tLWxlZnQge1xcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xcbn1cXG4ubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi1ib3R0b20tbGVmdC5tZC1hY3RpdmUge1xcbiAgICAgIG1hcmdpbi10b3A6IC0xMXB4O1xcbn1cXG4ubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi10b3AtcmlnaHQge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLThweDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxufVxcbi5tZC1tZW51LWNvbnRlbnQubWQtZGlyZWN0aW9uLXRvcC1yaWdodC5tZC1hY3RpdmUge1xcbiAgICAgIG1hcmdpbi10b3A6IDExcHg7XFxufVxcbi5tZC1tZW51LWNvbnRlbnQubWQtZGlyZWN0aW9uLXRvcC1sZWZ0IHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xcbn1cXG4ubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi10b3AtbGVmdC5tZC1hY3RpdmUge1xcbiAgICAgIG1hcmdpbi10b3A6IDExcHg7XFxufVxcbi5tZC1tZW51LWNvbnRlbnQubWQtYWxpZ24tdHJpZ2dlciB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLm1kLW1lbnUtY29udGVudC5tZC1zaXplLTEge1xcbiAgICB3aWR0aDogODRweDtcXG59XFxuLm1kLW1lbnUtY29udGVudC5tZC1zaXplLTIge1xcbiAgICB3aWR0aDogMTEycHg7XFxufVxcbi5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS0zIHtcXG4gICAgd2lkdGg6IDE2OHB4O1xcbn1cXG4ubWQtbWVudS1jb250ZW50Lm1kLXNpemUtNCB7XFxuICAgIHdpZHRoOiAyMjRweDtcXG59XFxuLm1kLW1lbnUtY29udGVudC5tZC1zaXplLTUge1xcbiAgICB3aWR0aDogMjgwcHg7XFxufVxcbi5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS02IHtcXG4gICAgd2lkdGg6IDMzNnB4O1xcbn1cXG4ubWQtbWVudS1jb250ZW50Lm1kLXNpemUtNyB7XFxuICAgIHdpZHRoOiAzOTJweDtcXG59XFxuLm1kLW1lbnUtY29udGVudC5tZC1hY3RpdmUge1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVaKDApO1xcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpLCBvcGFjaXR5IDAuMzVzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpLCB0cmFuc2Zvcm0gMC4yNXMgMC4wNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxufVxcbi5tZC1tZW51LWNvbnRlbnQubWQtYWN0aXZlIC5tZC1saXN0IHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyAwLjE1cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuLm1kLW1lbnUtY29udGVudCAubWQtbGlzdCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuLm1kLW1lbnUtaXRlbSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMS4yZW07XFxufVxcbi5tZC1tZW51LWl0ZW1bZGlzYWJsZWRdIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4ubWQtbWVudS1pdGVtIC5tZC1saXN0LWl0ZW0taG9sZGVyIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLXByb2dyZXNzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxufVxcbi5tZC1wcm9ncmVzcy5tZC1pbmRldGVybWluYXRlIC5tZC1wcm9ncmVzcy10cmFjayB7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG4ubWQtcHJvZ3Jlc3MubWQtaW5kZXRlcm1pbmF0ZSAubWQtcHJvZ3Jlc3MtdHJhY2s6YmVmb3JlLCAubWQtcHJvZ3Jlc3MubWQtaW5kZXRlcm1pbmF0ZSAubWQtcHJvZ3Jlc3MtdHJhY2s6YWZ0ZXIge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgd2lsbC1jaGFuZ2U6IGxlZnQsIHJpZ2h0O1xcbiAgICAgIGNvbnRlbnQ6ICcnO1xcbn1cXG4ubWQtcHJvZ3Jlc3MubWQtaW5kZXRlcm1pbmF0ZSAubWQtcHJvZ3Jlc3MtdHJhY2s6YmVmb3JlIHtcXG4gICAgICBhbmltYXRpb246IHByb2dyZXNzLWluZGV0ZXJtaW5hdGUgMi4zcyBjdWJpYy1iZXppZXIoMC42NSwgMC44MTUsIDAuNzM1LCAwLjM5NSkgaW5maW5pdGU7XFxufVxcbi5tZC1wcm9ncmVzcy5tZC1pbmRldGVybWluYXRlIC5tZC1wcm9ncmVzcy10cmFjazphZnRlciB7XFxuICAgICAgYW5pbWF0aW9uOiBwcm9ncmVzcy1pbmRldGVybWluYXRlLXNob3J0IDIuM3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBpbmZpbml0ZTtcXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDEuMTVzO1xcbn1cXG4ubWQtcHJvZ3Jlc3MubWQtcHJvZ3Jlc3MtZW50ZXIsIC5tZC1wcm9ncmVzcy5tZC1wcm9ncmVzcy1sZWF2ZS1hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKSB0cmFuc2xhdGVaKDApO1xcbn1cXG4ubWQtcHJvZ3Jlc3MubWQtcHJvZ3Jlc3MtZW50ZXItYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSkgdHJhbnNsYXRlWigwKTtcXG59XFxuLm1kLXByb2dyZXNzLXRyYWNrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuQGtleWZyYW1lcyBwcm9ncmVzcy1pbmRldGVybWluYXRlIHtcXG4wJSB7XFxuICAgIHJpZ2h0OiAxMDAlO1xcbiAgICBsZWZ0OiAtMzUlO1xcbn1cXG42MCUge1xcbiAgICByaWdodDogLTEwMCU7XFxuICAgIGxlZnQ6IDEwMCU7XFxufVxcbjEwMCUge1xcbiAgICByaWdodDogLTEwMCU7XFxuICAgIGxlZnQ6IDEwMCU7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHByb2dyZXNzLWluZGV0ZXJtaW5hdGUtc2hvcnQge1xcbjAlIHtcXG4gICAgcmlnaHQ6IDEwMCU7XFxuICAgIGxlZnQ6IC0yMDAlO1xcbn1cXG42MCUge1xcbiAgICByaWdodDogLTglO1xcbiAgICBsZWZ0OiAxMDclO1xcbn1cXG4xMDAlIHtcXG4gICAgcmlnaHQ6IC04JTtcXG4gICAgbGVmdDogMTA3JTtcXG59XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLXJhZGlvIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luOiAxNnB4IDhweCAxNnB4IDA7XFxuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1kLXJhZGlvIC5tZC1yYWRpby1jb250YWluZXIge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxufVxcbi5tZC1yYWRpbyAubWQtcmFkaW8tY29udGFpbmVyOmFmdGVyIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAzcHg7XFxuICAgICAgcmlnaHQ6IDNweDtcXG4gICAgICBib3R0b206IDNweDtcXG4gICAgICBsZWZ0OiAzcHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZTNEKDAuMzgsIDAuMzgsIDEpO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjU1LCAwLjIpO1xcbiAgICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG59XFxuLm1kLXJhZGlvIC5tZC1yYWRpby1jb250YWluZXIgaW5wdXQge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAtOTk5ZW07XFxufVxcbi5tZC1yYWRpbyAubWQtcmFkaW8tY29udGFpbmVyIC5tZC1pbmstcmlwcGxlIHtcXG4gICAgICB0b3A6IC0xNnB4O1xcbiAgICAgIHJpZ2h0OiAtMTZweDtcXG4gICAgICBib3R0b206IC0xNnB4O1xcbiAgICAgIGxlZnQ6IC0xNnB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG59XFxuLm1kLXJhZGlvIC5tZC1yYWRpby1jb250YWluZXIgLm1kLWluay1yaXBwbGUgLm1kLXJpcHBsZSB7XFxuICAgICAgICB3aWR0aDogNDhweCAhaW1wb3J0YW50O1xcbiAgICAgICAgaGVpZ2h0OiA0OHB4ICFpbXBvcnRhbnQ7XFxuICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcXG4gICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICAgICAgICBib3R0b206IDAgIWltcG9ydGFudDtcXG4gICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcXG59XFxuLm1kLXJhZGlvIC5tZC1yYWRpby1sYWJlbCB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbn1cXG4ubWQtcmFkaW8ubWQtY2hlY2tlZCAubWQtcmFkaW8tY29udGFpbmVyOmFmdGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiAxMjhweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1kLXNlbGVjdDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi5tZC1zZWxlY3Q6YWZ0ZXIge1xcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGVZKDAuNDUpIHNjYWxlWCgwLjg1KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGxpbmVhcjtcXG4gICAgY29udGVudDogXFxcIlxcXFwyNUJDXFxcIjtcXG59XFxuLm1kLXNlbGVjdC5tZC1hY3RpdmUgLm1kLXNlbGVjdC1tZW51IHtcXG4gICAgdG9wOiAtOHB4O1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpIHNjYWxlM0QoMSwgMSwgMSk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciB0b3A7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMjVzO1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCB0cmFuc2Zvcm0sIHRvcDtcXG59XFxuLm1kLXNlbGVjdC5tZC1hY3RpdmUgLm1kLXNlbGVjdC1tZW51ID4gKiB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKTtcXG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMTVzO1xcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC4xcztcXG59XFxuLm1kLXNlbGVjdC5tZC1kaXNhYmxlZCB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLWRyYWc6IG5vbmU7XFxufVxcbi5tZC1zZWxlY3Qgc2VsZWN0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtOTk5ZW07XFxufVxcbi5tZC1zZWxlY3QgLm1kLW1lbnUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubWQtc2VsZWN0IC5tZC1zZWxlY3QtdmFsdWUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4ubWQtc2VsZWN0IC5tZC1zdWJoZWFkZXIge1xcbiAgICBjb2xvcjogcmdiYSgxMTcsIDExNywgMTE3LCAwLjg3KTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLm1kLXNlbGVjdCAubWQtc3ViaGVhZGVyOmZpcnN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tdG9wOiAtOHB4O1xcbn1cXG4ubWQtc2VsZWN0LWNvbnRlbnQge1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiAyNTZweDtcXG59XFxuLm1kLXNlbGVjdC1jb250ZW50Lm1kLWRpcmVjdGlvbi1ib3R0b20tcmlnaHQge1xcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xcbn1cXG4ubWQtc2VsZWN0LWNvbnRlbnQgLm1kLW1lbnUtaXRlbSAubWQtbGlzdC1pdGVtLWhvbGRlciB7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuLm1kLXNlbGVjdC1jb250ZW50Lm1kLW11bHRpcGxlIC5tZC1jaGVja2JveCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLm1kLXNlbGVjdC1jb250ZW50Lm1kLW11bHRpcGxlIC5tZC1jaGVja2JveC1sYWJlbCB7XFxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi5tZC1zaWRlbmF2Lm1kLWxlZnQgLm1kLXNpZGVuYXYtY29udGVudCB7XFxuICBsZWZ0OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgtMTAwJSwgMCwgMCk7XFxufVxcbi5tZC1zaWRlbmF2Lm1kLXJpZ2h0IC5tZC1zaWRlbmF2LWNvbnRlbnQge1xcbiAgcmlnaHQ6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDEwMCUsIDAsIDApO1xcbn1cXG4ubWQtc2lkZW5hdi5tZC1maXhlZCAubWQtc2lkZW5hdi1jb250ZW50LFxcbi5tZC1zaWRlbmF2Lm1kLWZpeGVkIC5tZC1zaWRlbmF2LWJhY2tkcm9wIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuLm1kLXNpZGVuYXYgLm1kLXNpZGVuYXYtY29udGVudCB7XFxuICB3aWR0aDogMzA0cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAxMDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcbn1cXG4ubWQtc2lkZW5hdiAubWQtYmFja2Ryb3Age1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogOTk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcXG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xcbn1cXG4ubWQtc2lkZW5hdi5tZC1hY3RpdmUgLm1kLXNpZGVuYXYtY29udGVudCB7XFxuICBib3gtc2hhZG93OiAwIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAwLCAwKTtcXG59XFxuLm1kLXNpZGVuYXYubWQtYWN0aXZlIC5tZC1zaWRlbmF2LWJhY2tkcm9wIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBJbWFnZSBhc3BlY3QgcmF0aW8gY2FsY3VsYXRvciAqL1xcbi8qIFJlc3BvbnNpdmUgYnJlYWtwb2ludHMgKi9cXG4ubWQtc25hY2tiYXIge1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTIwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBtYXJnaW4tdG9wLCBtYXJnaW4tYm90dG9tO1xcbn1cXG4ubWQtc25hY2tiYXIubWQtcG9zaXRpb24tdG9wLWNlbnRlciwgLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLWJvdHRvbS1jZW50ZXIge1xcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLXRvcC1yaWdodCwgLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLWJvdHRvbS1yaWdodCB7XFxuICAgIG1hcmdpbi1yaWdodDogMjRweDtcXG4gICAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLXRvcC1sZWZ0LCAubWQtc25hY2tiYXIubWQtcG9zaXRpb24tYm90dG9tLWxlZnQge1xcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcXG4gICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbi5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi10b3AtcmlnaHQsIC5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi10b3AtbGVmdCwgLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLXRvcC1jZW50ZXIge1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbn1cXG4ubWQtc25hY2tiYXIubWQtcG9zaXRpb24tYm90dG9tLXJpZ2h0LCAubWQtc25hY2tiYXIubWQtcG9zaXRpb24tYm90dG9tLWxlZnQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbn1cXG4ubWQtc25hY2tiYXIubWQtcG9zaXRpb24tdG9wLWNlbnRlciwgLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLXRvcC1yaWdodCwgLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLXRvcC1sZWZ0IHtcXG4gICAgdG9wOiAwO1xcbn1cXG4ubWQtc25hY2tiYXIubWQtcG9zaXRpb24tdG9wLWNlbnRlciAubWQtc25hY2tiYXItY29udGFpbmVyLCAubWQtc25hY2tiYXIubWQtcG9zaXRpb24tdG9wLXJpZ2h0IC5tZC1zbmFja2Jhci1jb250YWluZXIsIC5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi10b3AtbGVmdCAubWQtc25hY2tiYXItY29udGFpbmVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIGNhbGMoLTEwMCUgLSAyNHB4KSwgMCk7XFxufVxcbi5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi1ib3R0b20tY2VudGVyLCAubWQtc25hY2tiYXIubWQtcG9zaXRpb24tYm90dG9tLXJpZ2h0LCAubWQtc25hY2tiYXIubWQtcG9zaXRpb24tYm90dG9tLWxlZnQge1xcbiAgICBib3R0b206IDA7XFxufVxcbi5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi1ib3R0b20tY2VudGVyIC5tZC1zbmFja2Jhci1jb250YWluZXIsIC5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi1ib3R0b20tcmlnaHQgLm1kLXNuYWNrYmFyLWNvbnRhaW5lciwgLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLWJvdHRvbS1sZWZ0IC5tZC1zbmFja2Jhci1jb250YWluZXIge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgY2FsYygxMDAlICsgMjRweCksIDApO1xcbn1cXG4ubWQtc25hY2tiYXIubWQtYWN0aXZlIC5tZC1zbmFja2Jhci1jb250YWluZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIDAsIDApO1xcbn1cXG4ubWQtc25hY2tiYXIubWQtYWN0aXZlIC5tZC1zbmFja2Jhci1jb250ZW50IHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIDAuMXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbi5tZC1zbmFja2JhciB7XFxuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxufVxcbn1cXG4ubWQtc25hY2tiYXIgLm1kLXNuYWNrYmFyLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XFxufVxcbi5tZC1zbmFja2JhciAubWQtYnV0dG9uIHtcXG4gICAgbWluLXdpZHRoOiA2NHB4O1xcbiAgICBtYXJnaW46IC04cHggLTE2cHg7XFxufVxcbi5tZC1zbmFja2JhciAubWQtYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiA0OHB4O1xcbn1cXG4ubWQtc25hY2tiYXItY29udGFpbmVyIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWluLXdpZHRoOiAyODhweDtcXG4gIG1heC13aWR0aDogNTY4cHg7XFxuICBtaW4taGVpZ2h0OiA0OHB4O1xcbiAgcGFkZGluZzogMTRweCAyNHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4ubWQtc25hY2tiYXItY29udGFpbmVyIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxufVxcbi5tZC1oYXMtdG9hc3QtdG9wLXJpZ2h0IC5tZC1mYWIubWQtZmFiLXRvcC1yaWdodCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIDY4cHgsIDApO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4ubWQtaGFzLXRvYXN0LXRvcC1yaWdodCAubWQtZmFiLm1kLWZhYi10b3AtcmlnaHQge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgNDhweCwgMCk7XFxufVxcbn1cXG4ubWQtaGFzLXRvYXN0LXRvcC1jZW50ZXIgLm1kLWZhYi5tZC1mYWItdG9wLWNlbnRlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKC01MCUsIDY4cHgsIDApO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4ubWQtaGFzLXRvYXN0LXRvcC1jZW50ZXIgLm1kLWZhYi5tZC1mYWItdG9wLWNlbnRlciB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgtNTAlLCA0OHB4LCAwKTtcXG59XFxufVxcbi5tZC1oYXMtdG9hc3QtdG9wLWxlZnQgLm1kLWZhYi5tZC1mYWItdG9wLWxlZnQge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCA2OHB4LCAwKTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuLm1kLWhhcy10b2FzdC10b3AtbGVmdCAubWQtZmFiLm1kLWZhYi10b3AtbGVmdCB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCA0OHB4LCAwKTtcXG59XFxufVxcbi5tZC1oYXMtdG9hc3QtYm90dG9tLXJpZ2h0IC5tZC1mYWIubWQtZmFiLWJvdHRvbS1yaWdodCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC02OHB4LCAwKTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuLm1kLWhhcy10b2FzdC1ib3R0b20tcmlnaHQgLm1kLWZhYi5tZC1mYWItYm90dG9tLXJpZ2h0IHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC00OHB4LCAwKTtcXG59XFxufVxcbi5tZC1oYXMtdG9hc3QtYm90dG9tLWNlbnRlciAubWQtZmFiLm1kLWZhYi1ib3R0b20tY2VudGVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoLTUwJSwgLTY4cHgsIDApO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4ubWQtaGFzLXRvYXN0LWJvdHRvbS1jZW50ZXIgLm1kLWZhYi5tZC1mYWItYm90dG9tLWNlbnRlciB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgtNTAlLCAtNDhweCwgMCk7XFxufVxcbn1cXG4ubWQtaGFzLXRvYXN0LWJvdHRvbS1sZWZ0IC5tZC1mYWIubWQtZmFiLWJvdHRvbS1sZWZ0IHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTY4cHgsIDApO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4ubWQtaGFzLXRvYXN0LWJvdHRvbS1sZWZ0IC5tZC1mYWIubWQtZmFiLWJvdHRvbS1sZWZ0IHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC00OHB4LCAwKTtcXG59XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbi5tZC1oYXMtdG9hc3QgLm1kLWZhYi5tZC1mYWItdG9wLXJpZ2h0LFxcbiAgLm1kLWhhcy10b2FzdCAubWQtZmFiLm1kLWZhYi10b3AtY2VudGVyLFxcbiAgLm1kLWhhcy10b2FzdCAubWQtZmFiLm1kLWZhYi10b3AtbGVmdCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgNDRweCwgMCk7XFxufVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4ubWQtaGFzLXRvYXN0IC5tZC1mYWIubWQtZmFiLWJvdHRvbS1yaWdodCxcXG4gIC5tZC1oYXMtdG9hc3QgLm1kLWZhYi5tZC1mYWItYm90dG9tLWNlbnRlcixcXG4gIC5tZC1oYXMtdG9hc3QgLm1kLWZhYi5tZC1mYWItYm90dG9tLWxlZnQge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC00NHB4LCAwKTtcXG59XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLXNwaW5uZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xcbn1cXG4ubWQtc3Bpbm5lci5tZC1pbmRldGVybWluYXRlIC5tZC1zcGlubmVyLWRyYXcge1xcbiAgICBhbmltYXRpb246IHNwaW5uZXItcm90YXRlIDEuOXMgbGluZWFyIGluZmluaXRlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGVaKDApO1xcbn1cXG4ubWQtc3Bpbm5lci5tZC1pbmRldGVybWluYXRlIC5tZC1zcGlubmVyLXBhdGgge1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiAyLCAyMDA7XFxuICAgIGFuaW1hdGlvbjogc3Bpbm5lci1kYXNoIDEuNDI1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXG59XFxuLm1kLXNwaW5uZXIubWQtc3Bpbm5lci1sZWF2ZS1hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCkgdHJhbnNsYXRlWigwKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxufVxcbi5tZC1zcGlubmVyOm5vdCgubWQtaW5kZXRlcm1pbmF0ZSkubWQtc3Bpbm5lci1lbnRlci1hY3RpdmUge1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAycztcXG59XFxuLm1kLXNwaW5uZXI6bm90KC5tZC1pbmRldGVybWluYXRlKS5tZC1zcGlubmVyLWVudGVyLWFjdGl2ZSAubWQtc3Bpbm5lci1kcmF3IHtcXG4gICAgICBhbmltYXRpb246IHNwaW5uZXItaW5pdGlhbC1yb3RhdGUgMS45OHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgZm9yd2FyZHM7XFxufVxcbi5tZC1zcGlubmVyLWRyYXcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpIHRyYW5zbGF0ZVooMCk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcXG59XFxuLm1kLXNwaW5uZXItcGF0aCB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XFxuICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuQGtleWZyYW1lcyBzcGlubmVyLXJvdGF0ZSB7XFxudG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHRyYW5zbGF0ZVooMCk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHNwaW5uZXItaW5pdGlhbC1yb3RhdGUge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGVaKDApO1xcbn1cXG4yMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4xMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKSB0cmFuc2xhdGVaKDApO1xcbn1cXG59XFxuQGtleWZyYW1lcyBzcGlubmVyLWRhc2gge1xcbjAlIHtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMiwgMjAwO1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcXG59XFxuNTAlIHtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNXB4O1xcbn1cXG4xMDAlIHtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjRweDtcXG59XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLXN1YmhlYWRlciB7XFxuICBtaW4taGVpZ2h0OiA0OHB4O1xcbiAgcGFkZGluZzogMCAxNnB4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLW1zLWZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtc3dpdGNoIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luOiAxNnB4IDhweCAxNnB4IDA7XFxuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1kLXN3aXRjaCAubWQtc3dpdGNoLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAzNHB4O1xcbiAgICBoZWlnaHQ6IDE0cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XFxufVxcbi5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgLm1kLXN3aXRjaC10aHVtYiB7XFxuICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBsaW5lYXI7XFxufVxcbi5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgaW5wdXQge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAtOTk5ZW07XFxufVxcbi5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgLm1kLWluay1yaXBwbGUge1xcbiAgICAgIHRvcDogLTE2cHg7XFxuICAgICAgcmlnaHQ6IC0xNnB4O1xcbiAgICAgIGJvdHRvbTogLTE2cHg7XFxuICAgICAgbGVmdDogLTE2cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG4ubWQtc3dpdGNoIC5tZC1zd2l0Y2gtY29udGFpbmVyIC5tZC1pbmstcmlwcGxlIC5tZC1yaXBwbGUge1xcbiAgICAgICAgd2lkdGg6IDQ4cHggIWltcG9ydGFudDtcXG4gICAgICAgIGhlaWdodDogNDhweCAhaW1wb3J0YW50O1xcbiAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XFxuICAgICAgICByaWdodDogMCAhaW1wb3J0YW50O1xcbiAgICAgICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxuICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XFxufVxcbi5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgLm1kLXN3aXRjaC1ob2xkZXIge1xcbiAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbi5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgLm1kLXN3aXRjaC1ob2xkZXI6Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG59XFxuLm1kLXN3aXRjaCAubWQtc3dpdGNoLWxhYmVsIHtcXG4gICAgaGVpZ2h0OiAxNHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XFxufVxcbi5tZC1zd2l0Y2gubWQtZHJhZ2dpbmcgLm1kLXN3aXRjaC10aHVtYiB7XFxuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XFxuICBjdXJzb3I6IGdyYWJiaW5nO1xcbn1cXG4ubWQtc3dpdGNoLm1kLWRpc2FibGVkIC5tZC1zd2l0Y2gtdGh1bWIge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi5tZC10YWJsZSB7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG59XFxuLm1kLXRhYmxlLm1kLXRyYW5zaXRpb24tb2ZmIC5tZC10YWJsZS1jZWxsLFxcbiAgLm1kLXRhYmxlLm1kLXRyYW5zaXRpb24tb2ZmIC5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVyLFxcbiAgLm1kLXRhYmxlLm1kLXRyYW5zaXRpb24tb2ZmIC5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVyOmFmdGVyIHtcXG4gICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4ubWQtdGFibGUgdGFibGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5tZC10YWJsZSB0Ym9keSAubWQtdGFibGUtcm93IHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUwZTA7XFxufVxcbi5tZC10YWJsZSB0Ym9keSAubWQtdGFibGUtcm93Lm1kLXNlbGVjdGVkIC5tZC10YWJsZS1jZWxsIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbn1cXG4ubWQtdGFibGUgdGJvZHkgLm1kLXRhYmxlLXJvdzpob3ZlciAubWQtdGFibGUtY2VsbCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBsaW5lLWhlaWdodDogMTZweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkOmxhc3QtY2hpbGQgLm1kLXRhYmxlLWhlYWQtY29udGFpbmVyIC5tZC10YWJsZS1oZWFkLXRleHQge1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XFxufVxcbi5tZC10YWJsZSAubWQtdGFibGUtaGVhZC5tZC1udW1lcmljIHtcXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkIC5tZC1pY29uIHtcXG4gICAgICB3aWR0aDogMTZweDtcXG4gICAgICBtaW4td2lkdGg6IDE2cHg7XFxuICAgICAgaGVpZ2h0OiAxNnB4O1xcbiAgICAgIG1pbi1oZWlnaHQ6IDE2cHg7XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQgLm1kLWljb246bm90KC5tZC1zb3J0YWJsZS1pY29uKSB7XFxuICAgICAgICBtYXJnaW46IDAgNHB4O1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQgLm1kLWljb246Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcbi5tZC10YWJsZSAubWQtdGFibGUtaGVhZCAubWQtaWNvbjpsYXN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNTZweDtcXG4gICAgcGFkZGluZzogMTRweCAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkLXRleHQge1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjRweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLm1kLXRhYmxlIC5tZC1zb3J0YWJsZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1kLXRhYmxlIC5tZC1zb3J0YWJsZTpmaXJzdC1vZi10eXBlIC5tZC1zb3J0YWJsZS1pY29uIHtcXG4gICAgICBsZWZ0OiBhdXRvO1xcbiAgICAgIHJpZ2h0OiAxMHB4O1xcbn1cXG4ubWQtdGFibGUgLm1kLXNvcnRhYmxlOmhvdmVyLCAubWQtdGFibGUgLm1kLXNvcnRhYmxlLm1kLXNvcnRlZCB7XFxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XFxufVxcbi5tZC10YWJsZSAubWQtc29ydGFibGU6aG92ZXIgLm1kLXNvcnRhYmxlLWljb24sIC5tZC10YWJsZSAubWQtc29ydGFibGUubWQtc29ydGVkIC5tZC1zb3J0YWJsZS1pY29uIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxufVxcbi5tZC10YWJsZSAubWQtc29ydGFibGUubWQtc29ydGVkIC5tZC1zb3J0YWJsZS1pY29uIHtcXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcXG59XFxuLm1kLXRhYmxlIC5tZC1zb3J0YWJsZS5tZC1zb3J0ZWQtZGVzY2VuZGluZyAubWQtc29ydGFibGUtaWNvbiB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgxODBkZWcpO1xcbn1cXG4ubWQtdGFibGUgLm1kLXNvcnRhYmxlIC5tZC1zb3J0YWJsZS1pY29uIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbGVmdDogMnB4O1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xcbn1cXG4ubWQtdGFibGUgLm1kLXNvcnRhYmxlIC5tZC1pbmstcmlwcGxlIHtcXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsIHtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBsaW5lLWhlaWdodDogMThweDtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsOmxhc3QtY2hpbGQgLm1kLXRhYmxlLWNlbGwtY29udGFpbmVyIHtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwubWQtbnVtZXJpYyB7XFxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi5tZC10YWJsZSAubWQtdGFibGUtY2VsbC5tZC1udW1lcmljIC5tZC10YWJsZS1jZWxsLWNvbnRhaW5lciB7XFxuICAgICAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsLm1kLWhhcy1hY3Rpb24gLm1kLXRhYmxlLWNlbGwtY29udGFpbmVyIHtcXG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwgLm1kLXRhYmxlLWNlbGwtY29udGFpbmVyIHtcXG4gICAgICBwYWRkaW5nOiA2cHggMzJweCA2cHggMjRweDtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsIC5tZC1idXR0b24ge1xcbiAgICAgIHdpZHRoOiAzNnB4O1xcbiAgICAgIG1pbi13aWR0aDogMzZweDtcXG4gICAgICBoZWlnaHQ6IDM2cHg7XFxuICAgICAgbWluLWhlaWdodDogMzZweDtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsIC5tZC1idXR0b246bGFzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW46IDAgLTEwcHggMCAwO1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwgLm1kLWJ1dHRvbiAubWQtaWNvbiB7XFxuICAgICAgICB3aWR0aDogMThweDtcXG4gICAgICAgIG1pbi13aWR0aDogMThweDtcXG4gICAgICAgIGhlaWdodDogMThweDtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE4cHg7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLm1kLXRhYmxlIC5tZC10YWJsZS1zZWxlY3Rpb24ge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbiArIC5tZC10YWJsZS1jZWxsIC5tZC10YWJsZS1jZWxsLWNvbnRhaW5lcixcXG4gICAgLm1kLXRhYmxlIC5tZC10YWJsZS1zZWxlY3Rpb24gKyAubWQtdGFibGUtaGVhZCAubWQtdGFibGUtaGVhZC1jb250YWluZXIgLm1kLXRhYmxlLWhlYWQtdGV4dCB7XFxuICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxufVxcbi5tZC10YWJsZSAubWQtdGFibGUtc2VsZWN0aW9uIC5tZC10YWJsZS1jZWxsLWNvbnRhaW5lciB7XFxuICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XFxufVxcbi5tZC10YWJsZSAubWQtdGFibGUtc2VsZWN0aW9uIC5tZC1jaGVja2JveCB7XFxuICAgICAgbWFyZ2luOiAwO1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbiAubWQtY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgICB3aWR0aDogMThweDtcXG4gICAgICBoZWlnaHQ6IDE4cHg7XFxuICAgICAgbWFyZ2luLXRvcDogMXB4O1xcbn1cXG4ubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbiAubWQtY2hlY2tib3gtY29udGFpbmVyOmFmdGVyIHtcXG4gICAgICAgIHRvcDogLTFweDtcXG4gICAgICAgIGxlZnQ6IDRweDtcXG59XFxuLm1kLXRhYmxlIC5tZC1zZWxlY3Qge1xcbiAgICBtaW4td2lkdGg6IDg0cHg7XFxufVxcbi5tZC10YWJsZSAubWQtc2VsZWN0LXZhbHVlLFxcbiAgLm1kLXRhYmxlIC5tZC1vcHRpb24ge1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxufVxcbi5tZC10YWJsZS1lZGl0LXRyaWdnZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XFxufVxcbi5tZC10YWJsZS1lZGl0LXRyaWdnZXIubWQtZWRpdGVkIHtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XFxufVxcbi5tZC10YWJsZS1kaWFsb2cge1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgMjRweCAycHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDI0cHg7XFxuICB6LWluZGV4OiA2MDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSwgbWF4LWhlaWdodCAwcyAwLjVzO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAtOHB4LCAwKTtcXG59XFxuLm1kLXRhYmxlLWRpYWxvZy5tZC1hY3RpdmUge1xcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoIzAwMCk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XFxufVxcbi5tZC10YWJsZS1kaWFsb2cubWQtbGFyZ2Uge1xcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHggMnB4O1xcbn1cXG4ubWQtdGFibGUtZGlhbG9nIC5tZC1pbnB1dC1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG4ubWQtdGFibGUtZGlhbG9nIC5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtcGxhY2Vob2xkZXIgaW5wdXQge1xcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuLm1kLXRhYmxlLWRpYWxvZyAubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LXBsYWNlaG9sZGVyIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuLm1kLXRhYmxlLWRpYWxvZyAubWQtY2hhci1jb3VudGVyIHtcXG4gICAgZm9udC1zaXplOiAxMy41cHg7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG4ubWQtdGFibGUtZGlhbG9nIC5tZC1idXR0b24ge1xcbiAgICBtaW4td2lkdGg6IDY0cHg7XFxufVxcbi5tZC10YWJsZS1jYXJkIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG4ubWQtdGFibGUtY2FyZCAubWQtdG9vbGJhciB7XFxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuLm1kLXRhYmxlLWNhcmQgLm1kLXRpdGxlIHtcXG4gICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIHtcXG4gICAgaGVpZ2h0OiA1NnB4O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUwZTA7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcbi5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC10YWJsZS1wYWdpbmF0aW9uLXByZXZpb3VzIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXG4gICAgICBtYXJnaW4tbGVmdDogMThweDtcXG59XFxuLm1kLXRhYmxlLWNhcmQgLm1kLXRhYmxlLXBhZ2luYXRpb24gLm1kLXNlbGVjdCB7XFxuICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgbWluLXdpZHRoOiAzNnB4O1xcbiAgICAgIG1hcmdpbjogMCAzMnB4O1xcbn1cXG4ubWQtdGFibGUtY2FyZCAubWQtdGFibGUtcGFnaW5hdGlvbiAubWQtc2VsZWN0OmFmdGVyIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxufVxcbi5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC1zZWxlY3QgLm1kLXNlbGVjdC12YWx1ZSB7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG4ubWQtdGFibGUtY2FyZCAubWQtdGFibGUtcGFnaW5hdGlvbiAubWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKSB7XFxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XFxufVxcbi5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC1idXR0b25bZGlzYWJsZWRdIC5tZC1pY29uIHtcXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcXG59XFxuLm1kLXBhZ2luYXRpb24tc2VsZWN0Lm1kLWRpcmVjdGlvbi1ib3R0b20tcmlnaHQge1xcbiAgbWFyZ2luLXRvcDogLTE2cHg7XFxufVxcbi5tZC1wYWdpbmF0aW9uLXNlbGVjdCAubWQtbGlzdC1pdGVtLWhvbGRlciB7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcbi5tZC10YWJsZS1hbHRlcm5hdGUtaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XFxufVxcbi5tZC10YWJsZS1hbHRlcm5hdGUtaGVhZGVyLm1kLWFjdGl2ZSB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKCMwMDApO1xcbn1cXG4ubWQtdGFibGUtYWx0ZXJuYXRlLWhlYWRlciAubWQtY291bnRlciB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgZmxleDogMTtcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtdGFicyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1kLXRhYnMubWQtdHJhbnNpdGlvbi1vZmYgKiB7XFxuICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLm1kLXRhYnMubWQtZHluYW1pYy1oZWlnaHQgLm1kLXRhYnMtY29udGVudCB7XFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xcbn1cXG4ubWQtdGFicyAubWQtdGFicy1uYXZpZ2F0aW9uIHtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBtaW4taGVpZ2h0OiA0OHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuLm1kLXRhYnMgLm1kLXRhYnMtbmF2aWdhdGlvbi5tZC1oYXMtaWNvbi5tZC1oYXMtbGFiZWwge1xcbiAgICAgIG1pbi1oZWlnaHQ6IDcycHg7XFxufVxcbi5tZC10YWJzIC5tZC10YWJzLW5hdmlnYXRpb24ubWQtaGFzLWljb24ubWQtaGFzLWxhYmVsIC5tZC1pY29uIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5tZC10YWJzIC5tZC10YWJzLW5hdmlnYXRpb24ubWQtY2VudGVyZWQge1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tZC10YWJzIC5tZC10YWJzLW5hdmlnYXRpb24ubWQtZml4ZWQgLm1kLXRhYi1oZWFkZXIge1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbn1cXG4ubWQtdGFicyAubWQtdGFicy1uYXZpZ2F0aW9uLm1kLXJpZ2h0IHtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5tZC10YWJzIC5tZC10YWItaGVhZGVyIHtcXG4gICAgbWluLXdpZHRoOiA3MnB4O1xcbiAgICBtYXgtd2lkdGg6IDI2NHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgMTJweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLm1kLXRhYnMgLm1kLXRhYi1oZWFkZXIubWQtZGlzYWJsZWQge1xcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xcbn1cXG4ubWQtdGFicyAubWQtdGFiLWhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLW1zLWZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1kLXRhYnMgLm1kLXRhYi1oZWFkZXItY29udGFpbmVyIC5tZC1pY29uIHtcXG4gICAgICBtYXJnaW46IDA7XFxufVxcbi5tZC10YWJzIC5tZC10YWItaW5kaWNhdG9yIHtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIDAsIDApO1xcbn1cXG4ubWQtdGFicyAubWQtdGFiLWluZGljYXRvci5tZC10cmFuc2l0aW9uLW9mZiB7XFxuICAgICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4ubWQtdGFicyAubWQtdGFiLWluZGljYXRvci5tZC10by1yaWdodCB7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSksIGxlZnQgMC4zcyBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSksIHJpZ2h0IDAuMTVzIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKTtcXG59XFxuLm1kLXRhYnMgLm1kLXRhYi1pbmRpY2F0b3IubWQtdG8tbGVmdCB7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSksIHJpZ2h0IDAuM3MgY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpLCBsZWZ0IDAuMTVzIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKTtcXG59XFxuLm1kLXRhYnMgLm1kLXRhYnMtY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm1kLXRhYnMgLm1kLXRhYnMtd3JhcHBlciB7XFxuICAgIHdpZHRoOiA5OTk5ZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG59XFxuLm1kLXRhYnMgLm1kLXRhYiB7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG59XFxuLyogQ29tbW9uICovXFxuLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqL1xcbi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4ubWQtdG9vbGJhciB7XFxuICBtaW4taGVpZ2h0OiA2NHB4O1xcbiAgcGFkZGluZzogMCA4cHg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtbXMtZmxleC1saW5lLXBhY2s6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAtbXMtZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIDAsIDApO1xcbn1cXG4ubWQtdG9vbGJhci5tZC1kZW5zZSB7XFxuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XFxufVxcbi5tZC10b29sYmFyLm1kLWRlbnNlLm1kLW1lZGl1bSB7XFxuICAgICAgbWluLWhlaWdodDogNzJweDtcXG59XFxuLm1kLXRvb2xiYXIubWQtZGVuc2UubWQtbGFyZ2Uge1xcbiAgICAgIG1pbi1oZWlnaHQ6IDk2cHg7XFxufVxcbi5tZC10b29sYmFyLm1kLWRlbnNlIC5tZC10b29sYmFyLWNvbnRhaW5lciB7XFxuICAgICAgaGVpZ2h0OiA0OHB4O1xcbn1cXG4ubWQtdG9vbGJhci5tZC1tZWRpdW0ge1xcbiAgICBtaW4taGVpZ2h0OiA4OHB4O1xcbn1cXG4ubWQtdG9vbGJhci5tZC1tZWRpdW0gLm1kLXRvb2xiYXItY29udGFpbmVyOm50aC1jaGlsZCgyKSAubWQtdGl0bGU6Zmlyc3QtY2hpbGQge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiA1NnB4O1xcbn1cXG4ubWQtdG9vbGJhci5tZC1sYXJnZSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEyOHB4O1xcbiAgICAtbXMtZmxleC1saW5lLXBhY2s6IGluaGVyaXQ7XFxuICAgICAgICBhbGlnbi1jb250ZW50OiBpbmhlcml0O1xcbn1cXG4ubWQtdG9vbGJhci5tZC1sYXJnZSAubWQtdG9vbGJhci1jb250YWluZXI6bnRoLWNoaWxkKDIpIC5tZC10aXRsZTpmaXJzdC1jaGlsZCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDU2cHg7XFxufVxcbi5tZC10b29sYmFyLm1kLWFjY291bnQtaGVhZGVyIHtcXG4gICAgbWluLWhlaWdodDogMTY0cHg7XFxufVxcbi5tZC10b29sYmFyLm1kLWFjY291bnQtaGVhZGVyIC5tZC1pbmstcmlwcGxlIHtcXG4gICAgICBjb2xvcjogI2ZmZjtcXG59XFxuLm1kLXRvb2xiYXIubWQtYWNjb3VudC1oZWFkZXIgLm1kLWxpc3QtaXRlbS1jb250YWluZXI6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xcbn1cXG4ubWQtdG9vbGJhci5tZC1hY2NvdW50LWhlYWRlciAubWQtYXZhdGFyLWxpc3Qge1xcbiAgICAgIG1hcmdpbjogMTZweCAwIDhweDtcXG59XFxuLm1kLXRvb2xiYXIubWQtYWNjb3VudC1oZWFkZXIgLm1kLWF2YXRhci1saXN0IC5tZC1saXN0LWl0ZW0tY29udGFpbmVyIHtcXG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLm1kLXRvb2xiYXIubWQtYWNjb3VudC1oZWFkZXIgLm1kLWF2YXRhci1saXN0IC5tZC1hdmF0YXIgKyAubWQtYXZhdGFyIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xcbn1cXG4ubWQtdG9vbGJhciAubWQtdG9vbGJhci1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IHN0YXJ0O1xcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuLm1kLXRvb2xiYXIgLm1kLXRvb2xiYXItY29udGFpbmVyID4gLm1kLWJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbn1cXG4ubWQtdG9vbGJhciAubWQtdG9vbGJhci1jb250YWluZXIgPiAubWQtYnV0dG9uICsgLm1kLWJ1dHRvbiB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcbi5tZC10b29sYmFyID4gLm1kLWJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxufVxcbi5tZC10b29sYmFyID4gLm1kLWJ1dHRvbiArIC5tZC1idXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG59XFxuLm1kLXRvb2xiYXIgLm1kLWJ1dHRvbjpob3Zlcjpub3QoW2Rpc2FibGVkXSk6bm90KC5tZC1yYWlzZWQpOm5vdCgubWQtaWNvbi1idXR0b24pOm5vdCgubWQtZmFiKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG59XFxuLm1kLXRvb2xiYXIgLm1kLXRpdGxlIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5tZC10b29sYmFyIC5tZC10aXRsZTpmaXJzdC1jaGlsZCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuLm1kLXRvb2xiYXIgLm1kLWxpc3Qge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDAgLThweDtcXG4gICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICBmbGV4OiAxO1xcbn1cXG4vKiBDb21tb24gKi9cXG4vKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovXFxuLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqL1xcbi5tZC10b29sdGlwIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHBhZGRpbmc6IDAgOHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMjAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk3LCA5NywgOTcsIDAuODcpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciB0b3A7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBcXFwiTm90byBTYW5zXFxcIiwgTm90bywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4ubWQtdG9vbHRpcC5tZC1hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xcbn1cXG4ubWQtdG9vbHRpcDpub3QoLm1kLWFjdGl2ZSkge1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcyAhaW1wb3J0YW50O1xcbn1cXG4ubWQtdG9vbHRpcC5tZC10cmFuc2l0aW9uLW9mZiB7XFxuICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLm1kLXRvb2x0aXAubWQtdG9vbHRpcC10b3Age1xcbiAgICBtYXJnaW4tdG9wOiAtMTRweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgOHB4KTtcXG59XFxuLm1kLXRvb2x0aXAubWQtdG9vbHRpcC10b3AubWQtYWN0aXZlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG59XFxuLm1kLXRvb2x0aXAubWQtdG9vbHRpcC1yaWdodCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOHB4LCA1MCUpO1xcbn1cXG4ubWQtdG9vbHRpcC5tZC10b29sdGlwLXJpZ2h0Lm1kLWFjdGl2ZSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKTtcXG59XFxuLm1kLXRvb2x0aXAubWQtdG9vbHRpcC1ib3R0b20ge1xcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtOHB4KTtcXG59XFxuLm1kLXRvb2x0aXAubWQtdG9vbHRpcC1ib3R0b20ubWQtYWN0aXZlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG59XFxuLm1kLXRvb2x0aXAubWQtdG9vbHRpcC1sZWZ0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xNHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg4cHgsIDUwJSk7XFxufVxcbi5tZC10b29sdGlwLm1kLXRvb2x0aXAtbGVmdC5tZC1hY3RpdmUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwJSk7XFxufVxcbi8qIENvbW1vbiAqL1xcbi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi9cXG4vKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi9cXG4vKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovXFxuLm1kLXdoaXRlZnJhbWUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtMWRwIHtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtd2hpdGVmcmFtZS0yZHAge1xcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTNkcCB7XFxuICBib3gtc2hhZG93OiAwIDFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtNGRwIHtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA0cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtNWRwIHtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA1cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtNmRwIHtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTdkcCB7XFxuICBib3gtc2hhZG93OiAwIDRweCA1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgN3B4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDE2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLThkcCB7XFxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTlkcCB7XFxuICBib3gtc2hhZG93OiAwIDVweCA2cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOXB4IDEycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTEwZHAge1xcbiAgYm94LXNoYWRvdzogMCA2cHggNnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDEwcHggMTRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA0cHggMThweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtMTFkcCB7XFxuICBib3gtc2hhZG93OiAwIDZweCA3cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMTFweCAxNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDRweCAyMHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtd2hpdGVmcmFtZS0xMmRwIHtcXG4gIGJveC1zaGFkb3c6IDAgN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxMnB4IDE3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNXB4IDIycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTEzZHAge1xcbiAgYm94LXNoYWRvdzogMCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDEzcHggMTlweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA1cHggMjRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtMTRkcCB7XFxuICBib3gtc2hhZG93OiAwIDdweCA5cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMTRweCAyMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDVweCAyNnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtd2hpdGVmcmFtZS0xNWRwIHtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDlweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxNXB4IDIycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNnB4IDI4cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTE2ZHAge1xcbiAgYm94LXNoYWRvdzogMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNnB4IDMwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTE3ZHAge1xcbiAgYm94LXNoYWRvdzogMCA4cHggMTFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxN3B4IDI2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNnB4IDMycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTE4ZHAge1xcbiAgYm94LXNoYWRvdzogMCA5cHggMTFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxOHB4IDI4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgN3B4IDM0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTE5ZHAge1xcbiAgYm94LXNoYWRvdzogMCA5cHggMTJweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxOXB4IDI5cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgN3B4IDM2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTIwZHAge1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDEzcHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMjBweCAzMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDhweCAzOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtd2hpdGVmcmFtZS0yMWRwIHtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAxM3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDIxcHggMzNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA4cHggNDBweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kLXdoaXRlZnJhbWUtMjJkcCB7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMTRweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAyMnB4IDM1cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgOHB4IDQycHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZC13aGl0ZWZyYW1lLTIzZHAge1xcbiAgYm94LXNoYWRvdzogMCAxMXB4IDE0cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMjNweCAzNnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDlweCA0NHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWQtd2hpdGVmcmFtZS0yNGRwIHtcXG4gIGJveC1zaGFkb3c6IDAgMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9dnVlLW1hdGVyaWFsLmNzcy5tYXAqL1wiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbWF0ZXJpYWwvZGlzdC92dWUtbWF0ZXJpYWwuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzdHlsZXMgKi9cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FwcC52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTQ3NmVhMjBhIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0FwcC52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiQzpcXFxcVXNlcnNcXFxcTmloYWwuVGFsdXIxOVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXFBlbmd1aW5VcGxvYWRcXFxcUGVuZ3VpblVwbG9hZFxcXFxzcmNcXFxcUGVuZ3VpblVwbG9hZFxcXFxDbGllbnRBcHBcXFxcQXBwLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBBcHAudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgIDx0b29sYmFyPjwvdG9vbGJhcj5cbiAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJtZC1yb3V0ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtY29udGVudCBwYWdlLXZpZXdcIj5cbiAgICAgICAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RyYW5zaXRpb24+XG4gICAgPC9kaXY+XG4gICAgPG1kLWRpYWxvZy1hbGVydCA6bWQtdGl0bGU9XCJkaWFsb2cudGl0bGVcIiA6bWQtY29udGVudC1odG1sPVwiZGlhbG9nLmNvbnRlbnRcIiByZWY9XCJtb2RhbERpYWxvZ1wiPlxuICAgIDwvbWQtZGlhbG9nLWFsZXJ0PlxuICAgIDxtZC1kaWFsb2ctY29uZmlybSA6bWQtdGl0bGU9XCJjb25maXJtLnRpdGxlXCIgOm1kLWNvbnRlbnQtaHRtbD1cImNvbmZpcm0uY29udGVudFwiIDptZC1vay10ZXh0PVwiY29uZmlybS5va1wiIDptZC1jYW5jZWwtdGV4dD1cImNvbmZpcm0uY2FuY2VsXCJcbiAgICAgIEBjbG9zZT1cIm9uQ29uZmlybUNsb3NlXCIgcmVmPVwiY29uZmlybURpYWxvZ1wiPlxuICAgICAgPC9tZC1kaWFsb2ctY29uZmlybT5cbiAgICAgIDxtZC1kaWFsb2ctcHJvbXB0IDptZC10aXRsZT1cInByb21wdC50aXRsZVwiIDptZC1vay10ZXh0PVwicHJvbXB0Lm9rXCIgOm1kLWNhbmNlbC10ZXh0PVwicHJvbXB0LmNhbmNlbFwiIDptZC1pbnB1dC1wbGFjZWhvbGRlcj1cInByb21wdC5wbGFjZWhvbGRlclwiXG4gICAgICAgIEBjbG9zZT1cIm9uUHJvbXB0Q2xvc2VcIiB2LW1vZGVsPVwicHJvbXB0LnJlc3BcIiByZWY9XCJwcm9tcHREaWFsb2dcIj5cbiAgICAgICAgPC9tZC1kaWFsb2ctcHJvbXB0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICBpbXBvcnQgVG9vbGJhciBmcm9tICcuL2NvbXBvbmVudHMvdG9vbGJhcidcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1OiB7XG4gICAgICAgICAga2V5OiAnJyxcbiAgICAgICAgICBuYW1lOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBkaWFsb2c6IHtcbiAgICAgICAgICB0aXRsZTogJyAnLFxuICAgICAgICAgIGNvbnRlbnQ6ICcgJ1xuICAgICAgICB9LFxuICAgICAgICBjb25maXJtOiB7XG4gICAgICAgICAgdGl0bGU6ICcgJyxcbiAgICAgICAgICBjb250ZW50OiAnICcsXG4gICAgICAgICAgb2s6ICdPSycsXG4gICAgICAgICAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgICAgICAgICBjYWxsYmFjazogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBwcm9tcHQ6IHtcbiAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgb2s6ICdPSycsXG4gICAgICAgICAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgICAgICAgLy8gbWF4bGVuZ3RoOiAwLFxuICAgICAgICAgIHJlc3A6ICcnLFxuICAgICAgICAgIGNhbGxiYWNrOiBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBsb2dnZWRJbjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMudS5rZXkpIHJldHVybiBmYWxzZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgIGxvZ2dlZEluOiBmdW5jdGlvbiAobm93TG9nZ2VkSW4pIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobm93TG9nZ2VkSW4pXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1JywgSlNPTi5zdHJpbmdpZnkodGhpcy51KSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIFRvb2xiYXJcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIHNob3dQb3B1cDogZnVuY3Rpb24gKGNvbnRlbnQsIHRpdGxlKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nLmNvbnRlbnQgPSBjb250ZW50XG4gICAgICAgIHRoaXMuZGlhbG9nLnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy4kcmVmcy5tb2RhbERpYWxvZy5vcGVuKClcbiAgICAgIH0sXG4gICAgICBzaG93Q29uZmlybTogZnVuY3Rpb24gKGNvbnRlbnQsIHRpdGxlLCBjYiwgeSwgbikge1xuICAgICAgICB5ID0geSB8fCAnT0snXG4gICAgICAgIG4gPSBuIHx8ICdDYW5jZWwnXG4gICAgICAgIHRoaXMuY29uZmlybS5vayA9IHlcbiAgICAgICAgdGhpcy5jb25maXJtLmNhbmNlbCA9IG5cbiAgICAgICAgdGhpcy5jb25maXJtLmNvbnRlbnQgPSBjb250ZW50XG4gICAgICAgIHRoaXMuY29uZmlybS50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuY29uZmlybS5jYWxsYmFjayA9IGNiXG4gICAgICAgIHRoaXMuJHJlZnMuY29uZmlybURpYWxvZy5vcGVuKClcbiAgICAgIH0sXG4gICAgICBzaG93UHJvbXB0OiBmdW5jdGlvbiAodGl0bGUsIHBsYWNlaG9sZGVyLCBjYikge1xuICAgICAgICB0aGlzLnByb21wdC50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMucHJvbXB0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJcbiAgICAgICAgdGhpcy5wcm9tcHQuY2FsbGJhY2sgPSBjYlxuICAgICAgICB0aGlzLiRyZWZzLnByb21wdERpYWxvZy5vcGVuKClcbiAgICAgIH0sXG4gICAgICBvblByb21wdENsb3NlOiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHQgPT0gJ29rJykge1xuICAgICAgICAgIHRoaXMucHJvbXB0LmNhbGxiYWNrKHRoaXMucHJvbXB0LnJlc3ApXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb21wdC5yZXNwID0gJydcbiAgICAgICAgdGhpcy5wcm9tcHQuY2FsbGJhY2sgPSBudWxsXG4gICAgICB9LFxuICAgICAgb25Db25maXJtQ2xvc2U6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5jb25maXJtLmNhbGxiYWNrKHJlc3VsdCA9PSAnb2snKVxuICAgICAgICB0aGlzLmNvbmZpcm0uY2FsbGJhY2sgPSBudWxsXG4gICAgICB9LFxuICAgICAgLy8gdXRpbGl0aWVzXG4gICAgICBodW1hbkZpbGVTaXplOiBmdW5jdGlvbiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHRocmVzaCA9IDEwMjRcbiAgICAgICAgaWYgKE1hdGguYWJzKGJ5dGVzKSA8IHRocmVzaCkge1xuICAgICAgICAgIHJldHVybiBieXRlcyArICcgQidcbiAgICAgICAgfVxuICAgICAgICB2YXIgdW5pdHMgPSBbJ0tpQicsICdNaUInLCAnR2lCJywgJ1RpQicsICdQaUInLCAnRWlCJywgJ1ppQicsICdZaUInXVxuICAgICAgICB2YXIgdSA9IC0xXG4gICAgICAgIGRvIHtcbiAgICAgICAgICBieXRlcyAvPSB0aHJlc2hcbiAgICAgICAgICAgICsrdVxuICAgICAgICB9IHdoaWxlIChNYXRoLmFicyhieXRlcykgPj0gdGhyZXNoICYmIHUgPCB1bml0cy5sZW5ndGggLSAxKVxuICAgICAgICByZXR1cm4gYnl0ZXMudG9GaXhlZCgyKSArICcgJyArIHVuaXRzW3VdXG4gICAgICB9LFxuICAgICAgZ2V0QXV0aFJlcXVlc3RQYXJhbXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIGFwaWtleTogdGhpcy51LmtleVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IHNhdmVkVSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1JylcbiAgICAgIGlmIChzYXZlZFUpIHtcbiAgICAgICAgdGhpcy51ID0gSlNPTi5wYXJzZShzYXZlZFUpXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cbjxzdHlsZT5cbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgfVxuICBcbiAgLmludmlzaWJsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLnNwYWNlLXYge1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICB9XG4gIFxuICAuc2VwLWIge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4gIC5sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIFxuICAuY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEFwcC52dWU/MjQ5Y2U5MWEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnlcIlxuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc3R5bGVzICovXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90b29sYmFyLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMjIxZjcyYmMhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdG9vbGJhci52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiQzpcXFxcVXNlcnNcXFxcTmloYWwuVGFsdXIxOVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXFBlbmd1aW5VcGxvYWRcXFxcUGVuZ3VpblVwbG9hZFxcXFxzcmNcXFxcUGVuZ3VpblVwbG9hZFxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFx0b29sYmFyLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuX192dWVfb3B0aW9uc19fLl9zY29wZUlkID0gXCJkYXRhLXYtMjIxZjcyYmNcIlxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB0b29sYmFyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdG9vbGJhci52dWVcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInRvb2xiYXJcIj5cclxuICAgIDxtZC10b29sYmFyPlxyXG4gICAgICA8bWQtYnV0dG9uIGNsYXNzPVwibWQtaWNvbi1idXR0b25cIiBAY2xpY2s9XCJ0b2dnbGVMZWZ0U2lkZW5hdlwiPlxyXG4gICAgICAgIDxtZC1pY29uPm1lbnU8L21kLWljb24+XHJcbiAgICAgIDwvbWQtYnV0dG9uPlxyXG4gICAgICA8aDIgY2xhc3M9XCJtZC10aXRsZSB0b29sYmFyLXRpdGxlXCI+e3sgYXBwTmFtZSB9fTwvaDI+XHJcbiAgICAgIDxkaXYgdi1pZj1cIiRyb290LmxvZ2dlZEluXCI+XHJcbiAgICAgICAgPG1kLW1lbnUgbWQtYWxpZ24tdHJpZ2dlcj5cclxuICAgICAgICAgIDxtZC1idXR0b24gbWQtbWVudS10cmlnZ2VyPlxyXG4gICAgICAgICAgICA8bWQtaWNvbj5hY2NvdW50X2NpcmNsZTwvbWQtaWNvbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhY2NvdW50LXVzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAge3sgJHJvb3QudS5uYW1lIH19XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvbWQtYnV0dG9uPlxyXG4gICAgICAgICAgPG1kLW1lbnUtY29udGVudD5cclxuICAgICAgICAgICAgPG1kLW1lbnUtaXRlbSBAY2xpY2s9XCJyb3V0ZXJHbygnL3AnKVwiPlxyXG4gICAgICAgICAgICAgIEFjY291bnRcclxuICAgICAgICAgICAgPC9tZC1tZW51LWl0ZW0+XHJcbiAgICAgICAgICAgIDxtZC1tZW51LWl0ZW0gQGNsaWNrPVwicm91dGVyR28oJy91JylcIj5cclxuICAgICAgICAgICAgICBEYXNoYm9hcmRcclxuICAgICAgICAgICAgPC9tZC1tZW51LWl0ZW0+XHJcbiAgICAgICAgICAgIDxtZC1tZW51LWl0ZW0gQGNsaWNrPVwicm91dGVyR28oJy9maWxlcycpXCI+XHJcbiAgICAgICAgICAgICAgTXkgRmlsZXNcclxuICAgICAgICAgICAgPC9tZC1tZW51LWl0ZW0+XHJcbiAgICAgICAgICAgIDxtZC1kaXZpZGVyPjwvbWQtZGl2aWRlcj5cclxuICAgICAgICAgICAgPG1kLW1lbnUtaXRlbSBAY2xpY2s9XCJsb2dvdXRcIj5cclxuICAgICAgICAgICAgICBMb2cgT3V0XHJcbiAgICAgICAgICAgIDwvbWQtbWVudS1pdGVtPlxyXG4gICAgICAgICAgPC9tZC1tZW51LWNvbnRlbnQ+XHJcbiAgICAgICAgPC9tZC1tZW51PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiB2LWVsc2U+XHJcbiAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uXCIgdi1vbjpjbGljaz1cInZpc2l0R2l0SHViXCI+XHJcbiAgICAgICAgICA8bWQtaWNvbj5mYXZvcml0ZTwvbWQtaWNvbj5cclxuICAgICAgICA8L21kLWJ1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21kLXRvb2xiYXI+XHJcbiAgICA8bWQtc2lkZW5hdiBjbGFzcz1cIm1haW4tc2lkZW5hdiBtZC1sZWZ0IG1kLWZpeGVkXCIgcmVmPVwibGVmdFNpZGVuYXZcIj5cclxuICAgICAgPG1kLXRvb2xiYXIgY2xhc3M9XCJtZC1sYXJnZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzPVwibWQtdGl0bGVcIj57eyBhcHBOYW1lIH19PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tZC10b29sYmFyPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidG9vbGJhci1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXItbGlua3NcIj5cclxuICAgICAgICAgIDxtZC1saXN0IGNsYXNzPVwibWQtZGVuc2VcIj5cclxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCIkcm9vdC5sb2dnZWRJblwiPlxyXG4gICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gQGNsaWNrPVwiY2xvc2VTaWRlbmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgdG89XCIvcFwiPkFjY291bnQ8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxyXG4gICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gQGNsaWNrPVwiY2xvc2VTaWRlbmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgdG89XCIvdVwiPkRhc2hib2FyZDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XHJcbiAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBAY2xpY2s9XCJjbG9zZVNpZGVuYXZcIj5cclxuICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayBleGFjdCB0bz1cIi9maWxlc1wiPkZpbGVzPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBAY2xpY2s9XCJjbG9zZVNpZGVuYXZcIiB2LWVsc2U+XHJcbiAgICAgICAgICAgICAgPHJvdXRlci1saW5rIGV4YWN0IHRvPVwiL1wiPkhvbWU8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cclxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBAY2xpY2s9XCJjbG9zZVNpZGVuYXZcIj5cclxuICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgdG89XCIvYWJvdXRcIj5BYm91dDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxyXG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlN1cHBvcnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPG1kLWxpc3QtZXhwYW5kPlxyXG4gICAgICAgICAgICAgICAgPG1kLWxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC1pbnNldFwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vMHhGaXJlYmFsbC9QZW5ndWluVXBsb2FkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgR2l0SHViXHJcbiAgICAgICAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8bWQtbGlzdC1pdGVtIGNsYXNzPVwibWQtaW5zZXRcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tLzB4RmlyZWJhbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICBEb25hdGVcclxuICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L21kLWxpc3Q+XHJcbiAgICAgICAgICAgICAgPC9tZC1saXN0LWV4cGFuZD5cclxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XHJcbiAgICAgICAgICA8L21kLWxpc3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tZC1zaWRlbmF2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBhcHBOYW1lOiAnUGVuZ3VpblVwbG9hZCcsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHZpc2l0R2l0SHViOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vZ2l0aHViLmNvbS8weEZpcmViYWxsL1Blbmd1aW5VcGxvYWQnKVxyXG4gICAgICB9LFxyXG4gICAgICB0b2dnbGVMZWZ0U2lkZW5hdjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuJHJlZnMubGVmdFNpZGVuYXYudG9nZ2xlKClcclxuICAgICAgfSxcclxuICAgICAgY2xvc2VTaWRlbmF2OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy4kcmVmcy5sZWZ0U2lkZW5hdi5jbG9zZSgpXHJcbiAgICAgIH0sXHJcbiAgICAgIGxvZ291dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuJHJvb3QudS5rZXkgPSAnJ1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgfSxcclxuICAgICAgcm91dGVyR286IGZ1bmN0aW9uICh1KSB7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2godSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgIC8vIHRoaXMudXBkYXRlTG9nZ2VkSW5TdGF0dXMoKVxyXG4gICAgICAvLyB0aGVuIHJlZ2lzdGVyIGhvb2tcclxuICAgICAgdGhpcy4kcm91dGVyLmJlZm9yZUVhY2goKHRvLCBmcm9tLCBuZXh0KSA9PiB7XHJcbiAgICAgICAgLy8gdGhpcy51cGRhdGVMb2dnZWRJblN0YXR1cygpXHJcbiAgICAgICAgbmV4dCgpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgLnRvb2xiYXItdGl0bGUge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLmFjY291bnQtdXNlcm5hbWUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0b29sYmFyLnZ1ZT8zODJlYjYzOSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRvb2xiYXJcIlxuICB9LCBbX2MoJ21kLXRvb2xiYXInLCBbX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1pY29uLWJ1dHRvblwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS50b2dnbGVMZWZ0U2lkZW5hdlxuICAgIH1cbiAgfSwgW19jKCdtZC1pY29uJywgW192bS5fdihcIm1lbnVcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnaDInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtdGl0bGUgdG9vbGJhci10aXRsZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5hcHBOYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS4kcm9vdC5sb2dnZWRJbikgPyBfYygnZGl2JywgW19jKCdtZC1tZW51Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLWFsaWduLXRyaWdnZXJcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdtZC1idXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtbWVudS10cmlnZ2VyXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnbWQtaWNvbicsIFtfdm0uX3YoXCJhY2NvdW50X2NpcmNsZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhY2NvdW50LXVzZXJuYW1lXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kcm9vdC51Lm5hbWUpICsgXCJcXG4gICAgICAgICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLW1lbnUtY29udGVudCcsIFtfYygnbWQtbWVudS1pdGVtJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucm91dGVyR28oJy9wJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBBY2NvdW50XFxuICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbWVudS1pdGVtJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucm91dGVyR28oJy91JylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBEYXNoYm9hcmRcXG4gICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1tZW51LWl0ZW0nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5yb3V0ZXJHbygnL2ZpbGVzJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBNeSBGaWxlc1xcbiAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWRpdmlkZXInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLW1lbnUtaXRlbScsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0ubG9nb3V0XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgTG9nIE91dFxcbiAgICAgICAgICBcIildKV0sIDEpXSwgMSldLCAxKSA6IF9jKCdkaXYnLCBbX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1pY29uLWJ1dHRvblwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS52aXNpdEdpdEh1YlxuICAgIH1cbiAgfSwgW19jKCdtZC1pY29uJywgW192bS5fdihcImZhdm9yaXRlXCIpXSldLCAxKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1zaWRlbmF2Jywge1xuICAgIHJlZjogXCJsZWZ0U2lkZW5hdlwiLFxuICAgIHN0YXRpY0NsYXNzOiBcIm1haW4tc2lkZW5hdiBtZC1sZWZ0IG1kLWZpeGVkXCJcbiAgfSwgW19jKCdtZC10b29sYmFyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWxhcmdlXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtdG9vbGJhci1jb250YWluZXJcIlxuICB9LCBbX2MoJ2gyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmFwcE5hbWUpKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0b29sYmFyLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaWRlYmFyLWxpbmtzXCJcbiAgfSwgW19jKCdtZC1saXN0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWRlbnNlXCJcbiAgfSwgWyhfdm0uJHJvb3QubG9nZ2VkSW4pID8gW19jKCdtZC1saXN0LWl0ZW0nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmNsb3NlU2lkZW5hdlxuICAgIH1cbiAgfSwgW19jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJleGFjdFwiOiBcIlwiLFxuICAgICAgXCJ0b1wiOiBcIi9wXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJBY2NvdW50XCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uY2xvc2VTaWRlbmF2XG4gICAgfVxuICB9LCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImV4YWN0XCI6IFwiXCIsXG4gICAgICBcInRvXCI6IFwiL3VcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkRhc2hib2FyZFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1saXN0LWl0ZW0nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmNsb3NlU2lkZW5hdlxuICAgIH1cbiAgfSwgW19jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJleGFjdFwiOiBcIlwiLFxuICAgICAgXCJ0b1wiOiBcIi9maWxlc1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRmlsZXNcIildKV0sIDEpXSA6IF9jKCdtZC1saXN0LWl0ZW0nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmNsb3NlU2lkZW5hdlxuICAgIH1cbiAgfSwgW19jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJleGFjdFwiOiBcIlwiLFxuICAgICAgXCJ0b1wiOiBcIi9cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkhvbWVcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbGlzdC1pdGVtJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5jbG9zZVNpZGVuYXZcbiAgICB9XG4gIH0sIFtfYygncm91dGVyLWxpbmsnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZXhhY3RcIjogXCJcIixcbiAgICAgIFwidG9cIjogXCIvYWJvdXRcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkFib3V0XCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWxpc3QtaXRlbScsIFtfYygnc3BhbicsIFtfdm0uX3YoXCJTdXBwb3J0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1saXN0LWV4cGFuZCcsIFtfYygnbWQtbGlzdCcsIFtfYygnbWQtbGlzdC1pdGVtJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWluc2V0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCIsXG4gICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vMHhGaXJlYmFsbC9QZW5ndWluVXBsb2FkXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICBHaXRIdWJcXG4gICAgICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1saXN0LWl0ZW0nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtaW5zZXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tLzB4RmlyZWJhbGxcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgIERvbmF0ZVxcbiAgICAgICAgICAgICAgICBcIildKV0sIDEpXSwgMSldLCAxKV0sIDIpXSwgMSldKV0sIDEpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMjIxZjcyYmMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3Rvb2xiYXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250ZW50LWNvbnRhaW5lclwiXG4gIH0sIFtfYygndG9vbGJhcicpLCBfdm0uX3YoXCIgXCIpLCBfYygndHJhbnNpdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwibWQtcm91dGVyXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhZ2UtY29udGVudCBwYWdlLXZpZXdcIlxuICB9LCBbX2MoJ3JvdXRlci12aWV3JyldLCAxKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1kaWFsb2ctYWxlcnQnLCB7XG4gICAgcmVmOiBcIm1vZGFsRGlhbG9nXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtdGl0bGVcIjogX3ZtLmRpYWxvZy50aXRsZSxcbiAgICAgIFwibWQtY29udGVudC1odG1sXCI6IF92bS5kaWFsb2cuY29udGVudFxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1kaWFsb2ctY29uZmlybScsIHtcbiAgICByZWY6IFwiY29uZmlybURpYWxvZ1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm1kLXRpdGxlXCI6IF92bS5jb25maXJtLnRpdGxlLFxuICAgICAgXCJtZC1jb250ZW50LWh0bWxcIjogX3ZtLmNvbmZpcm0uY29udGVudCxcbiAgICAgIFwibWQtb2stdGV4dFwiOiBfdm0uY29uZmlybS5vayxcbiAgICAgIFwibWQtY2FuY2VsLXRleHRcIjogX3ZtLmNvbmZpcm0uY2FuY2VsXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbG9zZVwiOiBfdm0ub25Db25maXJtQ2xvc2VcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtZGlhbG9nLXByb21wdCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5wcm9tcHQucmVzcCksXG4gICAgICBleHByZXNzaW9uOiBcInByb21wdC5yZXNwXCJcbiAgICB9XSxcbiAgICByZWY6IFwicHJvbXB0RGlhbG9nXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtdGl0bGVcIjogX3ZtLnByb21wdC50aXRsZSxcbiAgICAgIFwibWQtb2stdGV4dFwiOiBfdm0ucHJvbXB0Lm9rLFxuICAgICAgXCJtZC1jYW5jZWwtdGV4dFwiOiBfdm0ucHJvbXB0LmNhbmNlbCxcbiAgICAgIFwibWQtaW5wdXQtcGxhY2Vob2xkZXJcIjogX3ZtLnByb21wdC5wbGFjZWhvbGRlclxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5wcm9tcHQucmVzcClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsb3NlXCI6IF92bS5vblByb21wdENsb3NlLFxuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnByb21wdC5yZXNwID0gJGV2ZW50XG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTQ3NmVhMjBhIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=