import React, { useState } from 'react'
import Header from '../../../components/Header/Header'
import GroupItem from '../CourseComponent/GroupItem/GroupItem'
import LearnItem from '../CourseComponent/LearnItem/LearnItem'
import ReactPlayer from 'react-player'
// import { convertLinkYoutubeToEmbed } from '../../../helpers'
import Comment from '../CourseComponent/TabContent/Comment/Comment'
import Note from '../CourseComponent/TabContent/Note/Note'
import "./CourseDetail.css"

function CourseDetail() {

	const dataTab = [
		{
			id: 1,
			title: "Bình luận",
		},
		{
			id: 2,
			title: "Ghi chú",
		}
	]

	const [tabContent, setTabContent] = useState({
		pos: 0,
		content: dataTab[0],
	});

	function handleClickTab(idx) {
		setTabContent(idx);
	}

	function renderTabContent() {
		return dataTab.map((item, index) => {
			return (
				<li
					key={index}
					className={
						tabContent.pos === index
							? "item-tab-product selected"
							: "item-tab-product"
					}
					onClick={() =>
						handleClickTab({
							...tabContent,
							pos: index,
							content: item,
						})
					}
				>
					{item.title}
				</li>
			);
		});
	}

	return (
		<>
			<Header />
			<div className="wrapper-course-detail">
				<div className="content-course-detail">
					<div className="content-course-left">
						<div className="wrapper-course-header">

							<div className="wrapper-video">
								{/* <iframe src={convertLinkYoutubeToEmbed('https://www.youtube.com/watch?v=GpJJqjzCAAU')} title="khoa hoc" /> */}
								<ReactPlayer
									width='100%'
									height='100%'
									controls
									url='https://www.youtube.com/watch?v=GpJJqjzCAAU'
								/>
							</div>
						</div>
						<div className="wrapper-course-main">
							<ul className="menu-tab-product">
								{renderTabContent()}
							</ul>
							{tabContent.content.id === 1 ? (
								<div className="course-content-tab">
									<div className="">
										Tham gia khóa học
									</div>
									<Comment />
								</div>
							) : <Note />}
						</div>
					</div>
					<div className="content-course-right">
						<div className="list-course-video">
							<GroupItem />
							<LearnItem active={1} />
							<LearnItem />
							<LearnItem />
							<GroupItem />
							<LearnItem active={1} />
							<LearnItem />
							<LearnItem />
							<GroupItem />
							<LearnItem active={1} />
							<LearnItem />
							<LearnItem />
						</div>
					</div>
				</div>

			</div>
		</>
	)
}

export default CourseDetail
