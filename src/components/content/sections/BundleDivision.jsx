/* eslint-disable react/prop-types */
import InternetCard from "./InternetCard";

export default function BundleDivision({ offer }) {
	let internetCards = [];

	for (const element in offer.packages) {
		internetCards.push(
			<InternetCard
				key={offer.packages[element].title}
				data={offer.packages[element]}
				btnText={offer.btnText}
			/>
		);
	}

	return (
		<section id='bundle-division'>
			<div className='content-header'>
				<h3>{offer.titleH3}</h3>
				<h2>{offer.titleH2}</h2>
				<p>{offer.titleParagraph}</p>
			</div>
			<div className='offers'>{internetCards}</div>
		</section>
	);
}
