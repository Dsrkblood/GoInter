import TopSection from "./sections/TopSection";
import AboutUs from "./sections/AboutUs";

export default function Content() {
	return (
		<div id='content'>
			<div className='slider-arrow'>
				<a href='#top-content'>
					<i className='fa-solid fa-chevron-down'></i>
					<i className='fa-solid fa-chevron-down'></i>
					<i className='fa-solid fa-chevron-down'></i>
				</a>
			</div>
			<TopSection />
			<AboutUs />
		</div>
	);
}
