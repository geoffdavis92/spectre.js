'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _functions = require('../../../functions');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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