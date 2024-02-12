import { useEffect, useState } from "react";

import MenuModal from "./MenuModal";

export default function Navbar() {
	const [isNavScrolled, setIsNavScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

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

	function handleOpen() {
		setIsOpen(prevOpen => !prevOpen);
	}

	return (
		<nav id='nav' className={isNavScrolled ? "active" : null}>
			<p className='company_name highlighted-text'>gointer</p>
			<div className='mobile'>
				<button onClick={handleOpen} className='menu'>
					<i className='fa-solid fa-bars'></i>
				</button>
			</div>
			<div className='desktop'>
				<a href='#'>start</a>
				<a href='#'>internet</a>
				<a href='#'>telefon</a>
				<a href='#'>telewizja</a>
				<a href='#'>monitoring</a>
				<i className='fa-solid fa-ellipsis'></i>
			</div>
			<MenuModal open={isOpen} onClick={handleOpen} />
		</nav>
	);
}
