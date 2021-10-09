import React from 'react'

import "./LearnItem.css"
function LearnItem({ active }) {
	return (
		<>
			<div className={active === 1 ? "group-course-learn-video active-learn-video" : "group-course-learn-video"} >
				<h3 className="group-course-learn-title">1. Giới thiệu</h3>
				<span className="group-course-time-video">4:03</span>
			</div>
		</>
	)
}

export default LearnItem
