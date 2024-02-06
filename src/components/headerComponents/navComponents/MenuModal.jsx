export default function MenuModal({ open, ...props }) {
	if (open) {
		return (
			<div className={"menu-modal"}>
				<button {...props}>
					<i className='fa-solid fa-xmark'></i>
				</button>
				<div className='links'>
					<a href='#'>start</a>
					<a href='#'>internet</a>
					<a href='#'>telefon</a>
					<a href='#'>telewizja</a>
					<a href='#'>monitoring</a>
					<a href='#'>promocje</a>
					<a href='#'>zamów usługę</a>
					<a href='#'>o nas</a>
					<a href='#'>kontakt</a>
				</div>
			</div>
		);
	}
}
