import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { getDetailPostAction } from "../../../redux/actions"
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'


import "./BlogDetail.css"

function BlogDetail({ detailPost, getDetailPostTask, match }) {
	const idPost = match.params.id;
	const { title, nameAuthor, viewer, content } = detailPost.data;

	useEffect(() => {
		getDetailPostTask({ idPost: idPost });
	}, [getDetailPostTask, idPost]);

	function createMarkup(content) {
		return {
			__html: content,
		};
	}

	return (
		<>
			<Header />
			<div className="wrapper-blog-detail">
				<div className="container">
					<div className="content-blog-detail">
						<div className="blog-detail-header">
							<div className="blog-detail-author-info">
								<div className="blog-detail-author-image">
									<img src="https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg" alt="" />
								</div>
								<div className="blog-detail-author-name">
									<p>{nameAuthor}</p>
									<p className="author-time"><i className="fa fa-eye"></i>
										<span className="d-inline-block blog-detail-viewer-number">{viewer}</span></p>
								</div>
							</div>
							<div className="blog-detail-action">
								{/* <i className="fa fa-bookmark"></i> */}
								<i className="fa fa-calendar"></i>
								<span className="d-inline-block" style={{ marginRight: "12px" }}>10-6-2021</span>
								<i className="fa fa-bookmark-o"></i>
								<span> Chưa lưu </span>
							</div>
						</div>

						<div className="blog-detail-main">
							<h1 className="blog-detail-title"> {title}	</h1>
							<div className="main-content-detail blog-detail-content">
								<div dangerouslySetInnerHTML={createMarkup(content)} />
							</div>
						</div>

					</div>
				</div>
				<div className="blog-detail-action-toolbar">
					{/* <div className="actions-toolbar-buttons"> */}
					<div>
						<button className="blog-detail-btn-icon d-inline-block tertiary comments-action">
							<i className="fa fa-commenting-o"></i>
							<span class="bg-button accessibility-text">
								View comment
							</span>
						</button>
					</div>
					<div>
						<button className="blog-detail-btn-icon d-inline-block tertiary like-action">
							<i className="fa fa-heart"></i>
							<span class="bg-button accessibility-text">
								Like
							</span>
						</button>
					</div>
					<div>
						<button className="blog-detail-btn-icon d-inline-block tertiary bookmark-action">
							<i className="fa fa-bookmark-o"></i>
							<span class="bg-button accessibility-text">
								Save post
							</span>
						</button>
					</div>


					{/* </div> */}
				</div>
			</div>
			<Footer />
		</>
	)
}

const mapStateToProps = (state) => {
	const { detailPost } = state.apiPostReducer;
	return {
		detailPost: detailPost,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getDetailPostTask: (params) => dispatch(getDetailPostAction(params)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail);
