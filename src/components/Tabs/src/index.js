// Tabs @flow

import type { Identifier } from '../../../types'
import { appendClass, removeClass, select, selectAll } from '../../../functions'

export default class Tabs {
	id: Identifier;
	initialTab: string;
	tabs: Array<any>;
	triggers: Array<any>;
	tabItemIdArray: Array<string>;
	tabState: Object;
	constructor({ id, initialTab }:{ id:Identifier, initialTab:?string }) {
		this.id = id
		this.tabs = [...(selectAll(`[data-tab-scope="${id}"][data-tab-id]`))]
		this.triggers = [...(selectAll(`.tab-block[data-tab-init="${id}"] .tab-item[data-tab-trigger]`))]
		this.initialTab = initialTab || this.tabs[0].dataset.tabId
		this.tabItemIdArray = this.tabs.map((child,i,arr) => {
			return child.dataset.tabId
		})
		this.tabState = {
			activeTab: null
		}
		this.setupInitialDisplay = this.setupInitialDisplay.bind(this)
		this.setupTriggers = this.setupTriggers.bind(this)
		this.showTab = this.showTab.bind(this)
		this.onClick = this.onClick.bind(this)
		this.init = this.init.bind(this)
		return this
	}
	setupInitialDisplay() {
		this.tabs.forEach((tab,i) => {
			const { classList, dataset: { tabId }} = tab
			if ((!this.initialTab && i !== 0) && (!this.initialTab) || (this.initialTab && this.initialTab !== tabId)) {
				tab.classList = appendClass(classList,'hide')
			} else {
				const initialTrigger = select(`.tab-block[data-tab-init="${this.id}"] .tab-item[data-tab-trigger="${tabId}"]`)
				const initialTriggerClassList = initialTrigger.classList

				initialTrigger.classList = appendClass(initialTriggerClassList,'active')
			}
		});
		this.setupTriggers()
	}
	setupTriggers() {
		this.triggers.forEach((trigger,index) => {
			trigger.onclick = this.onClick
		})
		return this
	}
	showTab() {

	}
	onClick(e:Object) {
		e.preventDefault();
		const { target: { parentElement: { dataset } } } = e
		const { id, tabState: { activeTab } } = this
		const newActiveID = dataset.tabTrigger
		if (newActiveID !== activeTab) {
			const currentActiveTrigger = select(`.tab-block[data-tab-init="${id}"] .tab-item[data-tab-trigger].active`)
			const currentActiveTab = select(`[data-tab-scope="${id}"][data-tab-id="${activeTab}"]`)
			const newActiveTab = select(`[data-tab-scope="${id}"][data-tab-id="${newActiveID}"]`)

			const activeTriggerClassList = currentActiveTrigger.classList
			const activeTabClassList = currentActiveTab.classList
			const newActiveTabClassList = newActiveTab.classList

			currentActiveTrigger.classList = removeClass(activeTriggerClassList,'active')
			newActiveTab.classList = removeClass(newActiveTabClassList,'hide')
			
			currentActiveTab.classList = appendClass(activeTabClassList,'hide')
			e.target.parentElement.classList = appendClass(e.target.parentElement.classList,'active')

			this.tabState = Object.assign({},this.tabState,{ activeTab: newActiveID })
		}
	}
	init() {
		this.tabState = Object.assign({},this.tabState,{ activeTab: this.initialTab || this.tabs[0].dataset.tabId })
		this.setupInitialDisplay()
		return this;
	}
}