import React from 'react'
import { Link } from "react-router-dom"
import { Row, Col } from "react-flexbox-grid"

import "./Footer.css"

function Footer() {
	return (
		<div className="wrapper-footer">
			<div className="container">
				<div className="content-container">
					<Row>
						<Col xs={12} sm={3} md={3} lg={3} className="column-footer">
							<h3 className="title-link-footer">BLOG | COURSE</h3>
							<p>BLOG | COURSE là cộng đồng phát triển các blog và khóa học</p>
						</Col>
						<Col xs={12} sm={3} md={3} lg={3} className="column-footer">
							<h3 className="title-link-footer">Về BLOG | COURSE</h3>
							<Link to="/"><p>Trang chủ</p></Link>
							<Link to="/"><p>Blog</p></Link>
							<Link to="/"><p>Khóa học</p></Link>
						</Col>
						<Col xs={12} sm={3} md={3} lg={3} className="column-footer">
							<h3 className="title-link-footer">Thông tin</h3>
							<Link to="/"><p>Trang chủ</p></Link>
							<Link to="/blog"><p>Blog</p></Link>
							<Link to="/khoa-hoc"><p>Khóa học</p></Link>
						</Col>
						<Col xs={12} sm={3} md={3} lg={3} className="column-footer">
							<h3 className="title-link-footer">Liên hệ</h3>
							<p> abc@gmail.com </p>
							<Link to="/">
								<span className="d-inline-block icon-footer icon-footer-facebook">
									<i className="fa fa fa-facebook" ></i>
								</span>
							</Link>
							<Link to="/">
								<span className="d-inline-block icon-footer icon-footer-youtube">
									<i className="fa fa-youtube-play" ></i>
								</span>
							</Link>
						</Col>
					</Row>
				</div>
			</div>

		</div>
	)
}

export default Footer
