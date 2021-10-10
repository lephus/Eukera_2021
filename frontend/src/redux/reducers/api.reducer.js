
// import { openNotificationWithIcon } from "../../../constants/notify"

const initialState = {
	listPost: {
		data: [],
		load: false,
		error: ''
	},
}

export default function apiReducer(state = initialState, action) {
	switch (action.type) {
		case 'GET_LIST_POST_REQUEST': {
			return {
				...state,
				listPost: {
					...state.listPost,
					load: true
				}
			}
		}

		case 'GET_LIST_POST_SUCCESS': {
			const { data } = action.payload;
			return {
				...state,
				listPost: {
					...state.listPost,
					data: data,
					load: false,
				},
			}
		}

		case 'GET_LIST_POST_FAIL': {
			const { error } = action.payload;
			return {
				...state,
				listPost: {
					...state.listPost,
					load: false,
					error: error,
				},
			}
		}

		default:
			return state;
	}
}