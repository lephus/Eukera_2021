import React from 'react'
import { Col, Row } from 'react-flexbox-grid'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'

import "./CourseItem.css"

function CourseItem() {

	const configStar = {
		size: 15,
		count: 5,
		// color: "black",
		// activeColor: "#f9bf08",
		// a11y: true,
		value: 5,
		isHalf: true,
		emptyIcon: <i className="fa fa-star-o" />,
		halfIcon: <i className="fa fa-star-half-alt" />,
		filledIcon: <i className="fa fa-star" />,
		edit: false
		// onChange: newValue => {
		// 	console.log(`Example 2: new value is ${newValue}`);
		// }
	};
	return (
		<>
			<div className="course-item">
				<Row>
					<Col md={4}>
						<div className="course-item-image">
							<img src="https://img-c.udemycdn.com/course/480x270/3835316_f477_5.jpg" alt="" />
						</div>
					</Col>
					<Col md={8} className="course-item-info">
						<div className="course-item-header">
							<div className="course-author-info">
								<div className="course-author-image">
									<Link to="/">
										<img src="https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg" alt="" />
									</Link>
								</div>
								<div className="course-author-name">
									Hoàng Long
								</div>
							</div>
							<div className="course-item-action">
								<i className="fa fa-bookmark-o"></i>
								{/* <i className="fa fa-bookmark"></i> */}
							</div>
						</div>
						<div className="course-item-top">
							<Link to="/khoa-hoc/hoang-long">
								<h3 className="course-item-title">
									Tiện ích hiển thị keystrokes trong Windows & MacOS
								</h3>
							</Link>

							<div className="course-rating">
								<ReactStars {...configStar} />
							</div>
							<div className="course-item-description">
								Để hiển thị các keystrokes trong quá trình làm video hướng dẫn, highlight nội dung bạn có thể có thể tham khảo các tiện ích sau.
							</div>
						</div>
						<div className="course-item-bottom">
							<div className="course-item-viewer">
								<i className="fa fa-eye ml-1"></i>
								<span className="d-inline-block course-hour-learn-number">3 giờ học</span>
							</div>
							<span className="ml-1 border-right "></span>
							<div className="course-item-time ml-1">10 video</div>
							<span className="ml-1 border-right "></span>
							<div className="course-item-time ml-1 ">Dành cho nhập môn</div>
						</div>
					</Col>
				</Row>
			</div>
		</>
	)
}

export default CourseItem
