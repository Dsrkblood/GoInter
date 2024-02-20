/* eslint-disable react/prop-types */
import { CONTENT } from "../../../data.js";

export default function Modal({ handleOpen, changeContent }) {
	const allLinks = [];
	for (const key in CONTENT) {
		if (CONTENT[key].title) {
			allLinks.push(
				<a
					key={CONTENT[key].title}
					href='#top'
					onClick={() => {
						handleOpen();
						changeContent(CONTENT[key]);
					}}>
					{CONTENT[key].title}
				</a>
			);
		}
	}
	return <>{allLinks}</>;
}
