
// import { openNotificationWithIcon } from "../../../constants/notify"

const initialState = {
	listCourse: {
		data: [],
		load: false,
		error: ''
	},

	detailCourse: {
		data: {},
		load: false,
		error: ''
	},
}

export default function apiCourseReducer(state = initialState, action) {
	switch (action.type) {
		case 'GET_LIST_COURSE_REQUEST': {
			return {
				...state,
				listCourse: {
					...state.listCourse,
					load: true
				}
			}
		}

		case 'GET_LIST_COURSE_SUCCESS': {
			const { data } = action.payload;
			return {
				...state,
				listCourse: {
					...state.listCourse,
					data: data,
					load: false,
				},
			}
		}

		case 'GET_LIST_COURSE_FAIL': {
			const { error } = action.payload;
			return {
				...state,
				listCourse: {
					...state.listCourse,
					load: false,
					error: error,
				},
			}
		}

		// ------------------------

		case 'GET_DETAIL_COURSE_REQUEST': {
			return {
				...state,
				detailCourse: {
					...state.detailCourse,
					load: true
				}
			}
		}

		case 'GET_DETAIL_COURSE_SUCCESS': {
			const { data } = action.payload;
			return {
				...state,
				detailCourse: {
					...state.detailCourse,
					data: data,
					load: false,
				},
			}
		}

		case 'GET_DETAIL_COURSE_FAIL': {
			const { error } = action.payload;
			return {
				...state,
				detailCourse: {
					...state.detailCourse,
					load: false,
					error: error,
				},
			}
		}

		default:
			return state;
	}
}