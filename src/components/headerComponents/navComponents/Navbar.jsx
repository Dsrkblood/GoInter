import { useEffect, useState } from "react";
import Modal from "./Modal";

export default function Navbar({ changeContent }) {
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
		<>
			<nav id='nav' className={isNavScrolled ? "active" : null}>
				<p className='company_name highlighted-text'>gointer</p>
				<div className='mobile'>
					<button onClick={handleOpen} className='menu'>
						<i className='fa-solid fa-bars'></i>
					</button>
					<Modal
						open={isOpen}
						handleOpen={handleOpen}
						changeContent={changeContent}
					/>
				</div>
				<div className='desktop'>
					<a href='#top'>start</a>
					<a href='#top'>internet</a>
					<a href='#top'>telefon</a>
					<a href='#top'>telewizja</a>
					<a href='#top'>monitoring</a>
					<i className='fa-solid fa-ellipsis'></i>
				</div>
			</nav>

			<a href='#top' className={`back ${isNavScrolled ? "active" : null}`}>
				<i className='fa-solid fa-chevron-up'></i>
			</a>
		</>
	);
}
