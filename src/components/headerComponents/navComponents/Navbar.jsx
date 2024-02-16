import { useEffect, useState } from "react";
import Modal from "./Modal";
import { CONTENT } from "../../../data";

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
					<a href='#top' onClick={() => changeContent(CONTENT.start)}>
						start
					</a>
					<a href='#top' onClick={() => changeContent(CONTENT.internet)}>
						internet
					</a>
					<a href='#top' onClick={() => changeContent(CONTENT.phone)}>
						telefon
					</a>
					<a href='#top' onClick={() => changeContent(CONTENT.tv)}>
						telewizja
					</a>
					<a href='#top' onClick={() => changeContent(CONTENT.monitoring)}>
						monitoring
					</a>
					<i className='fa-solid fa-ellipsis'></i>
				</div>
			</nav>

			<a href='#top' className={`back ${isNavScrolled ? "active" : null}`}>
				<i className='fa-solid fa-chevron-up'></i>
			</a>
		</>
	);
}
