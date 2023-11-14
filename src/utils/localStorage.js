const setItem = (key, value) => {
	window.localStorage.setItem(key, JSON.stringify(value))
}

const getItem = (key) => {
	const value = window.localStorage.getItem(key)
	if (value) return JSON.parse(value)
	else return undefined
}

const removeItem = (key) => {
	window.localStorage.removeItem(key)
}

export { setItem, getItem, removeItem }
