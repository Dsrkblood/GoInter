import { createPortal } from "react-dom";
import LinkModal from "./LinkModal";
import { CONTENT } from "../../../data.js";

export default function Modal({ open, handleOpen, changeContent }) {
	const allLinks = [];
	for (const key in CONTENT) {
		if (CONTENT[key].title) {
			allLinks.push(CONTENT[key]);
		}
	}

	if (open) {
		return createPortal(
			<div className={`modal`}>
				<div className='top'>
					<button onClick={handleOpen}>
						<i className='fa-solid fa-xmark'></i>
					</button>
				</div>
				<div className='links'>
					{allLinks.map(content => (
						<LinkModal
							key={content.title}
							handleOpen={handleOpen}
							changeContent={changeContent}
							content={content}
						/>
					))}
				</div>
			</div>,
			document.getElementById("modal")
		);
	}
}
