import React from 'react'
// import { Col, Row } from 'react-flexbox-grid'
import CourseItem from '../../components/CourseItem/CourseItem'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
// import VideoPlayer from 'react-video-js-player';
import "./Course.css"

function Course() {

	return (
		<>
			<Header />
			<div className="wrapper-course">
				<div className="container">
					<div className="content-course">
						<CourseItem />
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Course
