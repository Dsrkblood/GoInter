import speedImage100 from "../../assets/price-icon01.png";
import speedImage300 from "../../assets/price-icon02.png";
import speedImage600 from "../../assets/price-icon03.png";

import InternetOffer from "./InternetOffer";

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
					<InternetOffer
						title='100'
						download='100'
						upload='20'
						offerImg={speedImage100}
						price='50'
					/>
					<InternetOffer
						title='300'
						download='300'
						upload='60'
						offerImg={speedImage300}
						price='80'
					/>
					<InternetOffer
						title='600'
						download='600'
						upload='120'
						offerImg={speedImage600}
						price='100'
					/>
				</div>
			</section>
		</div>
	);
}
