import OtherPilar from "./OtherPilar";
import StartPilars from "./StartPilars";

export default function BrandPillarsVault({ content }) {
	return (
		<div
			id='header'
			className={content.title === "start" ? "container" : "container-section"}>
			{content.title === "start" ? (
				<StartPilars content={content} />
			) : (
				<OtherPilar content={content} />
			)}
		</div>
	);
}
