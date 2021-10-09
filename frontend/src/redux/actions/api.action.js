import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';

function* postCategoryProductSaga(actions) {
	// try {
	// 	const result = yield axios({
	// 		method: 'GET',
	// 		url: URL + URL_API.API_CATEGORY,
	// 	});
	// 	if (result.status === 200) {
	// 		yield put({
	// 			type: "GET_CATEGORY_PRODUCT_SUCCESS",
	// 			payload: {
	// 				data: result.data
	// 			},
	// 		});
	// 	} else {
	// 		yield put({
	// 			type: "GET_CATEGORY_PRODUCT_FAIL",
	// 			payload: {
	// 				error: "Không thể get được dữ liệu từ server!"
	// 			},
	// 		});
	// 	}
	// } catch (error) {

	// }
}


export default function* apiSagaAdmin() {
	yield takeEvery('GET_CATEGORY_PRODUCT_REQUEST', postCategoryProductSaga);
}
