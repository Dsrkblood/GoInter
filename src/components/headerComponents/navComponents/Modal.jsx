import { createPortal } from "react-dom";
export default function Modal({ open, handleOpen }) {
	if (open) {
		return createPortal(
			<div className={`modal`}>
				<div className='top'>
					<button onClick={handleOpen}>
						<i className='fa-solid fa-xmark'></i>
					</button>
				</div>
				<div className='links'>
					<a onClick={handleOpen} href='#top'>
						start
					</a>
					<a href='#'>internet</a>
					<a href='#'>telefon</a>
					<a href='#'>telewizja</a>
					<a href='#'>monitoring</a>
					<a href='#'>promocje</a>
					<a href='#'>zamów usługę</a>
					<a href='#'>o nas</a>
					<a href='#'>kontakt</a>
				</div>
			</div>,
			document.getElementById("modal")
		);
	}
}
