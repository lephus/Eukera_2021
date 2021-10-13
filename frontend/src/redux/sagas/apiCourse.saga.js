import axios from "axios"
import { put, takeEvery } from 'redux-saga/effects';
// import { handleErrorAction } from "../../actions"
import { URL, URL_API } from '../../constants/index.js'
// import httpRequest from "../../../services/httpRequest"

function* getListCourseSaga() {
	try {
		const result = yield axios({
			method: 'GET',
			url: URL + URL_API.API_LIST_COURSE,
		});
		if (result.status === 200) {
			yield put({
				type: "GET_LIST_COURSE_SUCCESS",
				payload: {
					data: result.data
				},
			});
		} else {
			yield put({
				type: "GET_LIST_COURSE_FAIL",
				payload: {
					error: "lỗi"
				},
			});
		}
	} catch (error) {

	}
}

// function* getDetailCourseSaga(actions) {
// 	const { idCourse } = actions.payload;
// 	try {
// 		const result = yield axios({
// 			method: 'GET',
// 			url: URL + URL_API.API_DETAIL_COURSE + "/" + idCourse,
// 		});
// 		if (result.status === 200) {
// 			yield put({
// 				type: "GET_DETAIL_COURSE_SUCCESS",
// 				payload: {
// 					data: result.data.data
// 				},
// 			});
// 		} else {
// 			yield put({
// 				type: "GET_DETAIL_COURSE_FAIL",
// 				payload: {
// 					error: "lỗi"
// 				},
// 			});
// 		}
// 	} catch (error) {

// 	}
// }

export default function* apiCourseSaga() {
	yield takeEvery('GET_LIST_COURSE_REQUEST', getListCourseSaga);
	// yield takeEvery('GET_DETAIL_COURSE_REQUEST', getDetailCourseSaga);
}
