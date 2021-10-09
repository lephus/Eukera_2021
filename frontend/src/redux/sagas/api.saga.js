import { put, takeEvery } from 'redux-saga/effects';
import { handleErrorAction } from "../../actions"
import { URL, URL_API } from '../../../constants/index.js'
import httpRequest from "../../../services/httpRequest"

function* getSlideListSaga() {
	try {
		const result = yield httpRequest.get(URL + URL_API.API_SLIDE) // url, params
		yield put({
			type: "GET_SLIDE_SUCCESS",
			payload: {
				data: result
			},
		});
	} catch (error) {
		yield put(handleErrorAction(error))
	}
}

export default function* apiSaga() {
	yield takeEvery('GET_SLIDE_REQUEST', getSlideListSaga);
}
