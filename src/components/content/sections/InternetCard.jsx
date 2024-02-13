/* eslint-disable react/prop-types */
export default function InternetCard({
	title,
	download,
	upload,
	offerImg,
	price,
}) {
	return (
		<div className='card-box'>
			<div className='header'>
				<h3>
					internet <span>{title} mb/s</span>
				</h3>
			</div>
			<div className='performance'>
				<div>
					<div className='download'>
						<p>{download}</p>
						<p className='units'>mb/s</p>
					</div>
					<div className='upload'>
						<p>{upload}</p>
						<p className='units'>mb/s</p>
					</div>
				</div>
				<div className='performance-icon'>
					<img src={offerImg} alt='' />
				</div>
			</div>
			<div className='plan-features'>
				<ul>
					<li>Szybki internet światłowodowy</li>
				</ul>
				<ul>
					<li>Dwupasmowy router Wi-Fi ac</li>
				</ul>
				<ul>
					<li>Gwarancja niezawodności</li>
				</ul>
				<ul>
					<li>Wsparcie techniczne</li>
				</ul>
			</div>
			<div className='plan-price'>
				<span className='small'>zł</span>
				<span className='big highlighted-text'>{price}</span>
				<span className='small'>/ms-c</span>
			</div>

			<a href='#'>zamów</a>
		</div>
	);
}
