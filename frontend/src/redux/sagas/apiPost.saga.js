import axios from "axios"
import { put, takeEvery } from 'redux-saga/effects';
// import { handleErrorAction } from "../../actions"
import { URL, URL_API } from '../../constants/index.js'
// import httpRequest from "../../../services/httpRequest"

function* getListPostSaga() {
	try {
		const result = yield axios({
			method: 'GET',
			url: URL + URL_API.API_LIST_BLOG,
		});
		if (result.status === 200) {
			yield put({
				type: "GET_LIST_POST_SUCCESS",
				payload: {
					data: result.data
				},
			});
		} else {
			yield put({
				type: "GET_LIST_POST_FAIL",
				payload: {
					error: "lỗi"
				},
			});
		}
	} catch (error) {

	}
}

function* getDetailPostSaga(actions) {
	const { idPost } = actions.payload;
	try {
		const result = yield axios({
			method: 'GET',
			url: URL + URL_API.API_DETAIL_BLOG + "/" + idPost,
		});
		if (result.status === 200) {
			yield put({
				type: "GET_DETAIL_POST_SUCCESS",
				payload: {
					data: result.data.data
				},
			});
		} else {
			yield put({
				type: "GET_DETAIL_POST_FAIL",
				payload: {
					error: "lỗi"
				},
			});
		}
	} catch (error) {

	}
}

export default function* apiPostSaga() {
	yield takeEvery('GET_LIST_POST_REQUEST', getListPostSaga);
	yield takeEvery('GET_DETAIL_POST_REQUEST', getDetailPostSaga);
}
