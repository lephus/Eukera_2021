import { combineReducers } from "redux";
import apiCourseReducer from "./apiCourse.reducer";
import apiPostReducer from "./apiPost.reducer";

export default combineReducers({
	apiPostReducer: apiPostReducer,
	apiCourseReducer: apiCourseReducer
})