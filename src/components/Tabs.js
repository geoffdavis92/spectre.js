// Tabs @flow

import type { Identifier } from '../types'
import { select, selectAll } from '../functions'

export default class Tabs {
	id: Identifier;
	constructor({ id }:{ id:Identifier }) {
		this.id = id
		this.children = [...(selectAll(`.tab-block[data-tab-init="${id}"] [data-tab-id]`))]
		this.triggers = [...(selectAll(`.tab-block[data-tab-init="${id}"] .tab-item[data-tab-trigger]`))]
		this.tabItemIdArray = this.children.map((child,i,arr) => {
			return child.dataset.tabTrigger
		})
		this.setupTriggers = this.setupTriggers.bind(this)
		this.openTab = this.openTab.bind(this)
		this.onClick = this.onClick.bind(this)
		this.init = this.init.bind(this)
	}
	setupTriggers() {
		// this.children.forEach(child =>)
	}
	openTab() {}
	onClick(e) {}
}