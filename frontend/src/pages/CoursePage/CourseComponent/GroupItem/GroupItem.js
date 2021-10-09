import React from 'react'

import "./GroupItem.css"

function GroupItem() {
	return (
		<>
			<div className="group-course-item">
				<h3 className="group-course-title">Phần 1: Nội dung khóa nâng cao</h3>
				<div className="group-course-sub">

					<span className="d-inline-block group-course-time-completed">0/11 4:03:12</span>
					<span className="d-inline-block group-course-icon"><i className="fa fa-arrow-up"></i></span>
				</div>
			</div>
		</>
	)
}

export default GroupItem
