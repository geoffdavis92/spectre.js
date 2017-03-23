// functions @flow

// DOM Selection
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
export function selectAll(query:string):Array<HTMLElement> {
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

// DOM Attr

export function appendClass(classList:Array<string>,classToAdd:string):string {
	return ([...classList,classToAdd]).join(' ')
}

export function removeClass(classList:Array<string>,classToRemove:string):string {
	const index = ([...classList]).indexOf(classToRemove)
	const newClassList = [...classList]
	newClassList.splice(index,1)
	return newClassList.join(' ')
}