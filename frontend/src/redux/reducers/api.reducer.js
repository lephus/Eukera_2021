
import { openNotificationWithIcon } from "../../../constants/notify"

const initialState = {
	listManagerFooter: {
		data: [],
		load: false,
		error: ''
	},

}

export default function apiReducer(state = initialState, action) {
	switch (action.type) {
		case 'UPDATE_MANAGE_INTRO_REQUEST': {
			return {
				...state,
				manageIntro: {
					...state.manageIntro,
					load: true
				}
			}
		}

		case 'UPDATE_MANAGE_INTRO_SUCCESS': {
			const { data } = action.payload;
			openNotificationWithIcon('success', "Cập nhật thành công", "topRight")
			return {
				...state,
				manageIntro: {
					...state.manageIntro,
					data: data,
					load: false,
				},
			}
		}
		case 'UPDATE_MANAGE_INTRO_REQUEST_FAIL': {
			const { error } = action.payload;
			return {
				...state,
				manageIntro: {
					...state.manageIntro,
					load: false,
					error: error,
				},
			}
		}

		default:
			return state;
	}
}