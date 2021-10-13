import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import { getListCourseAction } from "../../redux/actions"
// import { Col, Row } from 'react-flexbox-grid'
import CourseItem from '../../components/CourseItem/CourseItem'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
// import VideoPlayer from 'react-video-js-player';
import "./Course.css"

function Course({ listCourse, getListCourseTask }) {
	const [listCourseState, setListCourseState] = useState(listCourse.data)

	useEffect(() => {
		getListCourseTask();
	}, [getListCourseTask]);

	useEffect(() => {
		setListCourseState(listCourse?.data)
	}, [listCourse])

	function renderListPost() {
		return listCourseState.data?.map((item, index) => {
			return (
				<CourseItem
					key={index}
					title={item.title}
					viewer={item.viewer}
					nameAuthor={item.nameAuthor}
					thumbmail={item.thumbmail}
					description={item.description}
					idCourse={item.idCourse}
				/>
			)
		})
	}

	return (
		<>
			<Header />
			<div className="wrapper-course">
				<div className="container">
					<div className="content-course">
						{renderListPost()}
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

const mapStateToProps = (state) => {
	const { listCourse } = state.apiCourseReducer;
	return {
		listCourse: listCourse,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getListCourseTask: () => dispatch(getListCourseAction()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Course);

