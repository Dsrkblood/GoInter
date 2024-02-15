/* eslint-disable react/prop-types */
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

	let createOffer = [];
	for (const offer in content.offer) {
		createOffer.push(
			<BundleDivision key={offer} offer={content.offer[offer]}/>
			);
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
			{createOffer.length !== 0 && createOffer}
			{mainContent}
		</div>
	);
}
