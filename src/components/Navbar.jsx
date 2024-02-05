import { useRef } from "react";
import Menu from "./Menu";

export default function Navbar() {
	const modal = useRef();

	function handleOpenMenu() {
		modal.current.open();
	}

	return (
		<nav id='nav'>
			<p className='company_name'>gointer</p>
			<button onClick={handleOpenMenu} className='menu'>
				<i className='fa-solid fa-bars'></i>
			</button>
			<Menu ref={modal} buttonCaption='Close' />
		</nav>
	);
}
