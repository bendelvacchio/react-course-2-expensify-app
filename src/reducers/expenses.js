// Expenses Reducer
const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			// return state.concat(action.expense);
			return [...state, action.expense];
			break;
		case 'REMOVE_EXPENSE':
			// return state.concat(action.expense);
			return state.filter(({ id }) => id != action.id);
			// return [...state, action.expense];
			break;
		case 'EDIT_EXPENSE':
			return state.map(expense => {
				if (expense.id === action.id) {
					return {
						...expense,
						...action.updates
					};
				} else {
					return expense;
				}
			});
			break;
		default:
			return state;
			break;
	}
};