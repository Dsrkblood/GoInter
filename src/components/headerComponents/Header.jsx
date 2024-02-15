import ParticlesAnimation from "./ParticlesAnimation";
import Navbar from "./navComponents/Navbar";
import BrandPillarsVault from "./promoContent/BrandPillarsVault";
export default function Header({ changeContent }) {
	return (
		<>
			<ParticlesAnimation />
			<Navbar changeContent={changeContent} />
			<BrandPillarsVault />
		</>
	);
}
