import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
// import { Col, Row } from 'react-flexbox-grid';

import { getListPostAction } from "../../redux/actions"

import Footer from '../../components/Footer/Footer.js'
import Header from "../../components/Header/Header.js"
import PostItem from '../../components/PostItem/PostItem.js';
import "./Blog.css";
function Blog({ listPost, getListPostTask }) {

	const [listPostState, setListPostState] = useState(listPost.data)

	useEffect(() => {
		getListPostTask();
	}, [getListPostTask]);

	useEffect(() => {
		setListPostState(listPost?.data)
	}, [listPost])


	function renderListPost() {
		return listPostState.data?.map((item, index) => {
			return (
				<PostItem
					key={index}
					title={item.title}
					viewer={item.viewer}
					nameAuthor={item.nameAuthor}
					thumbmail={item.thumbmail}
					summary={item.summary}
					idPost={item.idPost}
				/>
			)
		})
	}

	return (
		<>
			<Header />
			<div className="wrapper-blog">
				<div className="container">
					{/* <Row>
						<Col md={6}>
							<div className="wrap-field-input">
								<input className="form-input" placeholder="Tìm kiếm tiêu đề, tác giả, hashtag" />
								<div className="icon-search">
									<i className="fa fa-search"></i>
								</div>
							</div>
						</Col>
					</Row> */}
					<div className="list-item-blog">
						{renderListPost()}
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

const mapStateToProps = (state) => {
	const { listPost } = state.apiPostReducer;
	return {
		listPost: listPost,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getListPostTask: () => dispatch(getListPostAction()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);