export default function InternetOffer({
	title,
	download,
	upload,
	offerImg,
	price,
}) {
	return (
		<div className='offer'>
			<div className='header-offer'>
				<h3>internet {title} mb/s</h3>
			</div>
			<div className='plan'>
				<div className='speed'>
					<div className='download'>
						<p>{download}</p>
						<p className='units'>mb/s</p>
					</div>
					<div className='upload'>
						<p>{upload}</p>
						<p className='units'>mb/s</p>
					</div>
				</div>
				<div className='plan-icon'>
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
				<span className='big'>{price}</span>
				<span className='small'>/ms-c</span>
			</div>
			<button>
				<a href='#'>zamów</a>
			</button>
		</div>
	);
}
