/* eslint-disable react/prop-types */
export default function Position({
	number,
	title,
	text,
	imgOffer,
	description,
}) {
	return (
		<div className='container'>
			<div className='header box'>
				<div className='number'>{number}</div>
				<div className='title'>
					<p>{text}</p>
					<h2>{title}</h2>
				</div>
			</div>
			<div className='img box'>
				<img src={imgOffer} alt='' />
			</div>
			<div className='description box'>
				<p>{description}</p>
			</div>
		</div>
	);
}
