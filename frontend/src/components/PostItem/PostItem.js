import React from 'react'
import { Col, Row } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

import "./PostItem.css"
import { removeVietnameseTones } from '../../helpers';
function PostItem({ title, viewer, thumbmail, nameAuthor, summary, idPost }) {
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

			<div className="item-blog">
				<Row>
					<Col md={4}>
						<Link to={"/blog/" + removeVietnameseTones(title) + "/" + idPost}>
							<div className="item-image">
								<img src={thumbmail} alt={title} />
							</div>
						</Link>
					</Col>
					<Col md={8} className="item-info">
						<div className="item-header">
							<div className="author-info">
								<div className="author-image">
									<Link to={"/blog/" + removeVietnameseTones(title) + "/" + idPost}>
										<img src={thumbmail} alt="" />
									</Link>
								</div>
								<div className="author-name">
									{nameAuthor}
								</div>
							</div>
							<div className="item-action">
								<i className="fa fa-bookmark-o"></i>
								{/* <i className="fa fa-bookmark"></i> */}
							</div>
						</div>
						<div className="item-top">
							<Link to={"/blog/" + removeVietnameseTones(title) + "/" + idPost}>
								<h3 className="item-title">
									{title}
								</h3>
							</Link>

							<div className="rating">
								<ReactStars {...configStar} />
							</div>
							<div className="item-description multi-line-text-truncate two-line-clamp">
								{summary}
							</div>
						</div>
						<div className="item-bottom">
							<div className="item-viewer">
								<i className="fa fa-eye"></i>
								<span className="d-inline-block viewer-number">{viewer}</span>
							</div>
							<div className="item-time">12-5-2021</div>
						</div>
					</Col>
				</Row>
			</div>

		</>
	)
}

export default PostItem
