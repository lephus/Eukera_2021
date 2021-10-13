import { fork } from "redux-saga/effects";
import apiCourseSaga from "./apiCourse.saga";
import apiPostSaga from "./apiPost.saga";

export default function* mySaga() {
	yield fork(apiPostSaga);
	yield fork(apiCourseSaga)
}
