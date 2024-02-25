/* eslint-disable react/prop-types */
import InternetCard from "./InternetCard";

export default function BundleDivision({ offer, changeContent }) {
	let internetCards = [];

	for (const element in offer.packages) {
		internetCards.push(
			<InternetCard
				key={offer.packages[element].title}
				data={offer.packages[element]}
				btnText={offer.btnText}
				changeContent={changeContent}
			/>
		);
	}

	return (
		<>
			<div className='container'>
				<div className='content-header'>
					<p className='title'>{offer.titleH3}</p>
					<h2>{offer.titleH2}</h2>
					<p>{offer.titleParagraph}</p>
				</div>
				<div className='offers'>{internetCards}</div>
			</div>
		</>
	);
}
