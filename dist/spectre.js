/******/ (function(modules) { // webpackBootstrap
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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.select = select;
exports.selectAll = selectAll;
exports.selectId = selectId;
exports.appendClass = appendClass;
exports.removeClass = removeClass;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// functions 

// DOM Selection
/**
 * [select description]
 * @param  {[type]} query [description]
 * @return {[type]}       [description]
 */
function select(query) {
  return window.document.querySelector(query);
}

/**
 * [selectAll description]
 * @param  {[type]} query [description]
 * @return {[type]}       [description]
 */
function selectAll(query) {
  return window.document.querySelectorAll(query);
}

/**
 * [selectId description]
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
function selectId(id) {
  return window.document.getElementById(id);
}

// DOM Attr

function appendClass(classList, classToAdd) {
  return [].concat(_toConsumableArray(classList), [classToAdd]).join(' ');
}

function removeClass(classList, classToRemove) {
  var index = [].concat(_toConsumableArray(classList)).indexOf(classToRemove);
  var newClassList = [].concat(_toConsumableArray(classList));
  newClassList.splice(index, 1);
  return newClassList.join(' ');
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _functions = __webpack_require__(0);

function _toConsumableArray(arr) {
	if (Array.isArray(arr)) {
		for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
			arr2[i] = arr[i];
		}return arr2;
	} else {
		return Array.from(arr);
	}
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

// Tabs 

var Tabs = function () {
	function Tabs(_ref) {
		var id = _ref.id,
		    initialTab = _ref.initialTab;

		_classCallCheck(this, Tabs);

		this.id = id;
		this.tabs = [].concat(_toConsumableArray((0, _functions.selectAll)('[data-tab-scope="' + id + '"][data-tab-id]')));
		this.triggers = [].concat(_toConsumableArray((0, _functions.selectAll)('.tab-block[data-tab-init="' + id + '"] .tab-item[data-tab-trigger]')));
		this.initialTab = initialTab || this.tabs[0].dataset.tabId;
		this.tabItemIdArray = this.tabs.map(function (child, i, arr) {
			return child.dataset.tabId;
		});
		this.tabState = {
			activeTab: null
		};
		this.setupInitialDisplay = this.setupInitialDisplay.bind(this);
		this.setupTriggers = this.setupTriggers.bind(this);
		this.showTab = this.showTab.bind(this);
		this.onClick = this.onClick.bind(this);
		this.init = this.init.bind(this);
		return this;
	}

	_createClass(Tabs, [{
		key: 'setupInitialDisplay',
		value: function setupInitialDisplay() {
			var _this = this;

			this.tabs.forEach(function (tab, i) {
				var classList = tab.classList,
				    tabId = tab.dataset.tabId;

				if (!_this.initialTab && i !== 0 && !_this.initialTab || _this.initialTab && _this.initialTab !== tabId) {
					tab.classList = (0, _functions.appendClass)(classList, 'hide');
				} else {
					var initialTrigger = (0, _functions.select)('.tab-block[data-tab-init="' + _this.id + '"] .tab-item[data-tab-trigger="' + tabId + '"]');
					var initialTriggerClassList = initialTrigger.classList;

					initialTrigger.classList = (0, _functions.appendClass)(initialTriggerClassList, 'active');
				}
			});
			this.setupTriggers();
		}
	}, {
		key: 'setupTriggers',
		value: function setupTriggers() {
			var _this2 = this;

			this.triggers.forEach(function (trigger, index) {
				trigger.onclick = _this2.onClick;
			});
			return this;
		}
	}, {
		key: 'showTab',
		value: function showTab() {}
	}, {
		key: 'onClick',
		value: function onClick(e) {
			e.preventDefault();
			var dataset = e.target.parentElement.dataset;
			var id = this.id,
			    activeTab = this.tabState.activeTab;

			var newActiveID = dataset.tabTrigger;
			if (newActiveID !== activeTab) {
				var currentActiveTrigger = (0, _functions.select)('.tab-block[data-tab-init="' + id + '"] .tab-item[data-tab-trigger].active');
				var currentActiveTab = (0, _functions.select)('[data-tab-scope="' + id + '"][data-tab-id="' + activeTab + '"]');
				var newActiveTab = (0, _functions.select)('[data-tab-scope="' + id + '"][data-tab-id="' + newActiveID + '"]');

				var activeTriggerClassList = currentActiveTrigger.classList;
				var activeTabClassList = currentActiveTab.classList;
				var newActiveTabClassList = newActiveTab.classList;

				currentActiveTrigger.classList = (0, _functions.removeClass)(activeTriggerClassList, 'active');
				newActiveTab.classList = (0, _functions.removeClass)(newActiveTabClassList, 'hide');

				currentActiveTab.classList = (0, _functions.appendClass)(activeTabClassList, 'hide');
				e.target.parentElement.classList = (0, _functions.appendClass)(e.target.parentElement.classList, 'active');

				this.tabState = Object.assign({}, this.tabState, { activeTab: newActiveID });
			}
		}
	}, {
		key: 'init',
		value: function init() {
			this.tabState = Object.assign({}, this.tabState, { activeTab: this.initialTab || this.tabs[0].dataset.tabId });
			this.setupInitialDisplay();
			return this;
		}
	}]);

	return Tabs;
}();

exports.default = Tabs;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Tabs = exports.selectAll = exports.select = undefined;

var _functions = __webpack_require__(0);

var _Tabs = __webpack_require__(1);

var _Tabs2 = _interopRequireDefault(_Tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// index 

var Spectre = {
	select: _functions.select,
	selectAll: _functions.selectAll,
	Tabs: _Tabs2.default
};

exports.default = Spectre;
exports.select = _functions.select;
exports.selectAll = _functions.selectAll;
exports.Tabs = _Tabs2.default;

/***/ })
/******/ ]);