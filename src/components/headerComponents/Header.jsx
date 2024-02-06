import ParticlesAnimation from '../ParticlesAnimation'
import Navbar from './navComponents/Navbar'
import InternetPromo from './promoContent/InternetPromo'
export default function Header() {
	return (
		<>
			<ParticlesAnimation />
			<Navbar />
			<InternetPromo />
		</>
	);
}
