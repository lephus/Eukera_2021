import { fork } from "redux-saga/effects";
import apiSaga from "./api.saga";

export default function* mySaga() {
	yield fork(apiSaga);
}
