import { useRef, useEffect, useState } from "react";
import Menu from "./Menu";

export default function Navbar() {
	const [isNavScrolled, setIsNavScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrolled = window.scrollY > 88;
			setIsNavScrolled(scrolled);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const modal = useRef();

	function handleOpenMenu() {
		modal.current.open();
	}

	return (
		<nav id='nav' className={isNavScrolled ? "active" : null}>
			<p className='company_name'>gointer</p>
			<button onClick={handleOpenMenu} className='menu'>
				<i className='fa-solid fa-bars'></i>
			</button>
			<Menu ref={modal} buttonCaption='Close' />
		</nav>
	);
}
