import BundleDivision from "./sections/BundleDivision";
import Information from "./sections/Information";
import OfferPositions from "./sections/OfferPositions";

export default function Content({ content }) {
	let mainContent;
	if (content.title === "start") {
		mainContent = (
			<>
				<Information />
				<OfferPositions />
			</>
		);
	}

	for (const key in content.offer) {
		console.log(key);
	}


	return (
		<div id='content'>
			<div className='slider-arrow'>
				<a href='#bundle-division'>
					<i className='fa-solid fa-chevron-down'></i>
					<i className='fa-solid fa-chevron-down'></i>
					<i className='fa-solid fa-chevron-down'></i>
				</a>
			</div>
			{/* {offerList} */}
			{mainContent}
		</div>
	);
}
