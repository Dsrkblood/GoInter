/* eslint-disable react/prop-types */
import ParticlesAnimation from "./ParticlesAnimation";
import Navbar from "./navComponents/Navbar";
import BrandPillarsVault from "./promoContent/BrandPillarsVault";
export default function Header({ changeContent, content }) {
	return (
		<>
			<Navbar changeContent={changeContent} />
			<ParticlesAnimation />
			<BrandPillarsVault content={content} changeContent={changeContent} />
		</>
	);
}
