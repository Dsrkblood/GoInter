/* eslint-disable react/prop-types */
import BundleDivision from "./sections/BundleDivision";
import Contact from "./sections/contact/Contact";
import Information from "./sections/Information";
import OfferPositions from "./sections/OfferPositions";
import Phone from "./sections/phone/Phone";

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
				<section id='bundle-division'>{createOffer}</section>
			)}

			{mainContent}
		</div>
	);
}
