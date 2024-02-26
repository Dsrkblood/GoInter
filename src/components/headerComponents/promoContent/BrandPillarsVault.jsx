/* eslint-disable react/prop-types */
import OtherPilar from "./OtherPilar";
import StartPilars from "./StartPilars";

export default function BrandPillarsVault({ content, changeContent }) {
	return (
		<div
			id='header'
			className={content.title === "start" ? "container" : "container-section"}>
			{content.title === "start" ? (
				<StartPilars content={content} />
			) : (
				<OtherPilar content={content} changeContent={changeContent} />
			)}
			<div className='arrow-bottom'>
				<a href='#top-section' aria-label='Strzałka w dół'>
					<i className='fa-solid fa-chevron-down'></i>
					<i className='fa-solid fa-chevron-down'></i>
					<i className='fa-solid fa-chevron-down'></i>
				</a>
			</div>
		</div>
	);
}
