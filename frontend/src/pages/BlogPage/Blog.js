import React from 'react'
import { Col, Row } from 'react-flexbox-grid';

import Footer from '../../components/Footer/Footer.js'
import Header from "../../components/Header/Header.js"
import PostItem from '../../components/PostItem/PostItem.js';
import "./Blog.css";
function Blog() {
	return (
		<>
			<Header />
			<div className="wrapper-blog">
				<div className="container">
					<Row>
						<Col md={6}>
							<div className="wrap-field-input">
								<input className="form-input" placeholder="Tìm kiếm tiêu đề, tác giả, hashtag" />
								<div className="icon-search">
									<i className="fa fa-search"></i>
								</div>
							</div>
						</Col>
					</Row>
					<div className="list-item-blog">
						<PostItem />
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Blog
