export function getListPostAction() {
	return {
		type: 'GET_LIST_POST_REQUEST',
		payload: ""
	}
}

export function getDetailPostAction(params) {
	return {
		type: 'GET_DETAIL_POST_REQUEST',
		payload: params
	}
}