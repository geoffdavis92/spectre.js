// functions @flow
/**
 * [select description]
 * @param  {[type]} query [description]
 * @return {[type]}       [description]
 */
export function select(query:string):HTMLElement {
	return window.document.querySelector(query)
}

/**
 * [selectAll description]
 * @param  {[type]} query [description]
 * @return {[type]}       [description]
 */
export function selectAll(query:string):HTMLElement {
	return window.document.querySelectorAll(query)
}

/**
 * [selectId description]
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
export function selectId(id:string):HTMLElement {
	return window.document.getElementById(id)
}

