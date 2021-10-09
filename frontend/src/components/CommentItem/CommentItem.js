import React, { useState } from 'react'
import Emoji from '../Emoji/Emoji'
import "./CommentItem.css"
function CommentItem() {
	const [buttonHover, setButtonHover] = useState(false);

	function handleHoverStatus() {
		setTimeout(function () { setButtonHover(false) }, 3000);
	}

	return (
		<div className="wrapper-comment-item">
			<div className="comment-item-left">
				<img src="https://avatar-redirect.appspot.com/google/101121688655155010660?size=400" alt="" />
			</div>
			<div className="comment-item-right">
				<div className="comment-item-content">
					<h5 className="comment-item-name">Hoang Long</h5>
					<div className="comment-item-text">
						Hôm nay trời đang mưa và tôi đang child
					</div>
				</div>
				<div className="comment-item-action">
					<div className="comment-item-create">

						<span
							className="comment-item-status"
							onMouseOver={() => setButtonHover(true)}
							onMouseLeave={() => handleHoverStatus()}
						>
							Thích
						</span>
						{buttonHover && (
							<div className="icon-emoji-facebook">
								<Emoji />
							</div>
						)}
						<span className="d-inline-block comment-item-reply">Trả lời</span>
						<span className="d-inline-block comment-item-create-time">15 ngày trước</span>
					</div>

				</div>
			</div>
		</div>
	)
}

export default CommentItem
