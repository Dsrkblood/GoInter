import OtherPilar from "./OtherPilar";
import StartPilars from "./StartPilars";

export default function BrandPillarsVault({ content }) {
	return (
		<div id='header' className='container'>
			{content.title === "start" ? (
				<StartPilars content={content} />
			) : (
				<OtherPilar content={content} />
			)}
		</div>
	);
}
