import BundleDivision from "./sections/BundleDivision";
import Information from "./sections/Information";
import OfferPositions from "./sections/OfferPositions";

export default function Content() {
	return (
		<div id='content'>
			<div className='slider-arrow'>
				<a href='#bundle-division'>
					<i className='fa-solid fa-chevron-down'></i>
					<i className='fa-solid fa-chevron-down'></i>
					<i className='fa-solid fa-chevron-down'></i>
				</a>
			</div>
			<BundleDivision />
			<Information />
			<OfferPositions />
		</div>
	);
}
