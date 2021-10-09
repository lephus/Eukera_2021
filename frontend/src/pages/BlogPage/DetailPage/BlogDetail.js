import React from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'

import "./BlogDetail.css"

function BlogDetail() {

	const content = `<div class="MdTextContent_wrapper__2hVW-"><div>
	<h3>1.1. Hướng dẫn cài đặt Carnac</h3>
	<blockquote>
	<p>Yêu cầu hệ điều hành từ Windows 7 trở lên + .Net 4.5.2 trở lên.</p>
	</blockquote>
	<p><strong>Bước 1:</strong> Truy cập trang chủ <a href="http://carnackeys.com/" target="_blank" rel="noopener noreferrer">Carnac</a> hoặc tải nhanh phiên bản 1.2.3 <a href="https://github.com/Code52/carnac/releases/download/2.3.13/carnac.2.3.13.zip" target="_blank" rel="noopener noreferrer">tại đây</a>
	<img alt="image.png" src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/661/615401b125fd1.png"></p>
	<p><strong>Bước 2:</strong> Chọn mục “<strong>carnac.2.3.13.zip</strong>” như hình dưới đây:
	<img alt="image.png" src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/661/61540b6d726aa.png"></p>
	<p><strong>Bước 3:</strong> Giải nén và tiến hành cài đặt =&gt; Bạn nhấn double click vào “<strong>Setup.exe</strong>”.
	<img alt="image.png" src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/661/61540c1e9d054.png"></p>
	<p><strong>Bước 4:</strong> Ngoài màn hình desktop bạn xuất hiện icon Carnac như hình dưới đây =&gt; bạn đã cài thành công.
	<img alt="image.png" src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/661/61540e145d8fa.png"></p>
	<h3>1.2. Hướng dẫn sử dụng</h3>
	<p>Bạn truy cập giao diện thiết lập của <strong>Carnac</strong> =&gt; dưới thanh taskbar có icon <strong>Carnac</strong>=&gt; Double click vào icons.
	<img alt="image.png" src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/661/61540e6423b55.png"></p>
	<h4>1.2.1. Tab General</h4>
	<p><strong>Giới thiệu:</strong> Ở tab này bạn có thể thiết lập vị trí giới hạn không gian hiển thị popup.
	<img alt="image.png" src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/661/61540e9bf0d49.png"></p>
	<blockquote>
	<p>Các thiết lập chỉ có hiệu lực kể từ khi bạn nhấn nút “<strong>SAVE</strong>”</p>
	</blockquote>
	<p>Bảng chức năng trong <strong>Tab General</strong>:</p>
	<table>
	<thead>
	<tr>
	<th style="text-align:left">STT</th>
	<th style="text-align:left">Key</th>
	<th style="text-align:left">Description</th>
	</tr>
	</thead>
	<tbody>
	<tr>
	<td style="text-align:left">1</td>
	<td style="text-align:left">Generic PnP Monnitor</td>
	<td style="text-align:left">Căn chỉnh vị trí hiển thị popup</td>
	</tr>
	<tr>
	<td style="text-align:left">2</td>
	<td style="text-align:left">Top Offset</td>
	<td style="text-align:left">Lề trên</td>
	</tr>
	<tr>
	<td style="text-align:left">3</td>
	<td style="text-align:left">Bottom Offset</td>
	<td style="text-align:left">Lề dưới</td>
	</tr>
	<tr>
	<td style="text-align:left">4</td>
	<td style="text-align:left">Left Offset</td>
	<td style="text-align:left">Lề trái</td>
	</tr>
	<tr>
	<td style="text-align:left">5</td>
	<td style="text-align:left">Right Offset</td>
	<td style="text-align:left">Lề phải</td>
	</tr>
	</tbody>
	</table>
	<h4>1.2.1. Tab Appearance</h4>
	<p><strong>Giới thiệu:</strong> Ở tab này bạn có thể thiết lập kích thước, style của popup, giới hạn keys được hiển thị.
	<img alt="image.png" src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/661/61541c6190ec4.png"></p>
	<p>Bảng chức năng trong <strong>Tab Appearance</strong>:</p>
	<table>
	<thead>
	<tr>
	<th style="text-align:left">STT</th>
	<th style="text-align:left">Key</th>
	<th style="text-align:left">Description</th>
	</tr>
	</thead>
	<tbody>
	<tr>
	<td style="text-align:left">1</td>
	<td style="text-align:left">Popup Text Width</td>
	<td style="text-align:left">Chiều rộng popup</td>
	</tr>
	<tr>
	<td style="text-align:left">2</td>
	<td style="text-align:left">Popup Opacity</td>
	<td style="text-align:left">Độ trong suốt popup</td>
	</tr>
	<tr>
	<td style="text-align:left">3</td>
	<td style="text-align:left">Popup Face Delay</td>
	<td style="text-align:left">Thời gian popup tồn tại</td>
	</tr>
	<tr>
	<td style="text-align:left">4</td>
	<td style="text-align:left">Font Size</td>
	<td style="text-align:left">Kích thước chữ</td>
	</tr>
	<tr>
	<td style="text-align:left">5</td>
	<td style="text-align:left">Font Color</td>
	<td style="text-align:left">Màu chữ</td>
	</tr>
	<tr>
	<td style="text-align:left">6</td>
	<td style="text-align:left">Background Color</td>
	<td style="text-align:left">Màu nền</td>
	</tr>
	<tr>
	<td style="text-align:left">7</td>
	<td style="text-align:left">Shortcuts Only</td>
	<td style="text-align:left">Chỉ hiển thị keys có trong thư mục keymaps</td>
	</tr>
	<tr>
	<td style="text-align:left">8</td>
	<td style="text-align:left">Only keys with Modifiers</td>
	<td style="text-align:left">Chỉ hiển thị tổ hợp phím có chứa Ctrl, Shift, Alt, Windows</td>
	</tr>
	<tr>
	<td style="text-align:left">9</td>
	<td style="text-align:left">Show Space as</td>
	<td style="text-align:left">Hiển thị kí tự space (khoảng trắng) dưới dạng " "</td>
	</tr>
	<tr>
	<td style="text-align:left">10</td>
	<td style="text-align:left">Show Application Icon</td>
	<td style="text-align:left">Hiển thị icon phần mềm</td>
	</tr>
	<tr>
	<td style="text-align:left">11</td>
	<td style="text-align:left">Process Filter</td>
	<td style="text-align:left">Hiển thị keys hợp lệ theo regular expression</td>
	</tr>
	</tbody>
	</table>
	<h3>1.3. Bonus</h3>
	<p>Dưới đây là một bản beta bổ sung thêm tính năng “<strong>Hight light Mouse</strong>”  bạn có thể thử
	<a href="https://github.com/bfritscher/carnac/releases/tag/v3-beta" target="_blank" rel="noopener noreferrer">tại đây</a>.
	<img alt="image.png" src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/661/6154259da26d5.png"></p>
	<h2 id="2-sticky-keys-accessibility-macos" data-appended="true">
									<a data-link="" href="/blog/tien-ich-hien-thi-keystrokes.html#2-sticky-keys-accessibility-macos" target="_self">
											<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="link" class="svg-inline--fa fa-link fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path></svg>
									</a>2. Sticky Keys - Accessibility (MacOS)
							</h2>
	<blockquote>
	<p>Đây là tính năng mặc định của hệ điều hành MacOS. Bạn chỉ cần bật lên và sử dụng thôi. Lưu ý mình đang hướng dẫn trên MacOS Big Sur, có thể các bước thực hiện sẽ khác một chút nếu bạn sử dụng phiên bản khác mình nhé.</p>
	</blockquote>
	<p><strong>Bước 1:</strong> Vào <strong>System Preferences</strong>
	<img alt="image.png" src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/661/615426e9477d6.png">
	<strong>Bước 2:</strong> Chọn Accessibility
	<img alt="image.png" src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/661/615427966757a.png"></p>
	<p><strong>Bước 3:</strong> Chọn <strong>Keyboard</strong> =&gt; Tick chọn <strong>Enable Sticky Keys</strong>
	<img alt="image.png" src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/661/615428180dcd4.png"></p>
	<p><strong>Bước 4:</strong> Chọn <strong>Options</strong> - để thiết lập/ tùy chỉnh cho <strong>Sticky Keys</strong>
	<img alt="image.png" src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/661/615428f91d88c.png"></p>
	<ul>
	<li>Press the shift key five times to toggle Sticky Keys: Turn on/ Turn off  Sticky Keys bằng cách nhấn 5 lần vào phím Shift.</li>
	<li>Beep when a modifier key is set</li>
	<li>Display pressed keys on screen: Chọn vị trí hiển thị của popup keys đã gõ.</li>
	</ul>
	<p><strong>Bước 5:</strong> Kiểm tra thử. Ví dụ mình gõ Command + Shift kết quả như hình dưới đây:
	<img alt="image.png" src="https://cdn.fullstack.edu.vn/f8-learning/blog_posts/661/61542c2b90776.png"></p>
	<h1>Lời kết</h1>
	<p>Cảm ơn bạn đã theo dõi bài viết. Nếu bài viết thiếu xót, bạn phản hồi lại giúp mình nhé.</p>
	<p>#TT</p>
	</div></div>`

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
									<p>Hoàng Long</p>
									<p className="author-time"><i className="fa fa-eye"></i>
										<span className="d-inline-block blog-detail-viewer-number">123.321</span></p>
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
							<h1 className="blog-detail-title">	Tiện ích hiển thị keystrokes trong Windows & MacOS</h1>
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

export default BlogDetail
