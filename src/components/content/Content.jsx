export default function Content() {
	return (
		<div id='content'>
			<div className='slider-arrow'>
				<a href='#top-content'>
					<i className='fa-solid fa-chevron-down'></i>
					<i className='fa-solid fa-chevron-down'></i>
					<i className='fa-solid fa-chevron-down'></i>
				</a>
			</div>
			<section id='top-content'>
				<div className='content-header'>
					<h3>wybierz swój</h3>
					<h2>internet światłowodowy</h2>
					<p>Dostępny również w Pakietach z Telewizją</p>
				</div>
				<div className='internet-offers'>
					<div className='offer'>
						<div className='header-offer'>
							<h3>internet 100 mb/s</h3>
						</div>
						<div className='plan'>
							<div className='speed'>
								<div className='download'>
									<p>100</p>
									<p className='units'>mb/s</p>
								</div>
								<div className='uppload'>
									<p>20</p>
									<p className='units'>mb/s</p>
								</div>
							</div>
							<div className='plan-icon'></div>
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
							<span className='big'>50</span>
							<span className='small'>/ms-c</span>
						</div>
						<button>
							<a href='#'>zamów</a>
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}
