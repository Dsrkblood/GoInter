/* eslint-disable react/prop-types */
import BundleDivision from "./sections/BundleDivision";
import Contact from "./sections/contact/Contact";
import Information from "./sections/Information";
import Monitoring from "./sections/monitoring/Monitoring";
import OfferPositions from "./sections/OfferPositions";
import Phone from "./sections/phone/Phone";
import Promotion from "./sections/promotions/Promotion";

export default function Content({ content, changeContent }) {
	let mainContent;
	if (content.title === "start") {
		mainContent = (
			<>
				<Information />
				<OfferPositions />
			</>
		);
	} else if (content.title === "kontakt") {
		mainContent = <Contact icon={content.icons} />;
	} else if (content.title === "telefon") {
		mainContent = <Phone data={content} />;
	} else if (content.title === "monitoring") {
		mainContent = <Monitoring data={content} />;
	} else if (content.title === "promocje") {
		mainContent = <Promotion />;
	}

	let createOffer = [];

	if (content.offer !== undefined) {
		for (const offer in content.offer) {
			createOffer.push(
				<BundleDivision
					key={offer}
					offer={content.offer[offer]}
					changeContent={changeContent}
				/>
			);
		}
	}

	return (
		<div id='content'>
			{createOffer.length !== 0 && (
				<section id='top-section' className='bundle-division'>
					{createOffer}
				</section>
			)}

			{mainContent}
		</div>
	);
}
