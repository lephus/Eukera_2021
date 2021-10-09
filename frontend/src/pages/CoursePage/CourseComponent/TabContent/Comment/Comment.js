import React from 'react'
import CommentItem from '../../../../../components/CommentItem/CommentItem';

import "./Comment.css";
function Comment() {
	return (
		<>
			<div className="wrapper-comment">
				<div className="comment-avatar">
					<img src="https://avatar-redirect.appspot.com/google/101121688655155010660?size=400" alt="" />
				</div>
				<div className="comment-input">
					<div className="form-groups">
						<input className="form-input" />
					</div>

					<div className="comment-wrapper-action">
						<div>
						</div>
						<div className="comment-action">
							<button className="d-inline-block btn-comment-cancel">
								Hủy
							</button>
							<button className="bg-button d-inline-block btn-comment-ok">
								Bình luận
							</button>
						</div>
					</div>
				</div>
			</div>
			<CommentItem />
			<CommentItem />
		</>
	)
}

export default Comment
