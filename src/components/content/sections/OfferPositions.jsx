import Position from "./Position";
import internetImg from '../../../assets/start-internet.jpg'
import phoneImg from '../../../assets/start-telefon.jpg'
import tvImg from '../../../assets/start-tv.jpg'
import monitoringImg from '../../../assets/start-monitoring.jpg'

export default function OfferPositions() {
	return (
		<section className='offer-positions'>
			<Position
				number='01'
				title='internet'
				text='dla domu i firmy'
				imgOffer={internetImg}
				description='Światłowodowy i radiowy, dla domu i biznesu. Niskie ceny.'
			/>
			<Position
				number='02'
				title='telefon'
				text='dedykowany'
				imgOffer={phoneImg}
				description='Jeden pakiet, a bez limitu połączeń i smsów.'
			/>
			<Position
				number='03'
				title='TV'
				text='ćwierć tysiąca kanałów'
				imgOffer={tvImg}
				description='Telewizja kablowa nowej generacji. Dostosuj swoje pakiety.'
			/>
			<Position
				number='04'
				title='ochrona'
				text='bezpieczeństwo'
				imgOffer={monitoringImg}
				description='Bezpieczeństwo Twoja, Twoich bliskich i Twojego mienia.'
			/>
		</section>
	);
}
