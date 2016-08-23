function example(state = [], action) {
	switch(action.type) {
		case 'NEW_EXAMPLE':
			return {
				...state,
				name: action.newName
			}
		default:
			return state
	}
}

export default example
