// demo @flow

import Spectre, { 
	select,
	selectAll,
	Tabs 
} from './src'

const t = new Tabs({ id: 'panel-tab-demo', initialTab: 'files' }).init()

window.Spectre = Spectre
window.select = select
window.selectAll = selectAll
window.Tabs = Tabs

window.t = t