/* eslint-disable react/prop-types */
import { CONTENT } from "../../../data";
export default function OtherPilar({ content, changeContent }) {
	return (
		<>
			<div className='top-section'>
				<div className='section-description'>
					<h1 className='active'>{content.header.title}</h1>
				</div>
			</div>
			<div className='bottom-section'>
				{" "}
				<button onClick={() => changeContent(CONTENT.start)}>start</button>
				<p>{`>`}</p>
				<p>{content.title}</p>
			</div>
		</>
	);
}
