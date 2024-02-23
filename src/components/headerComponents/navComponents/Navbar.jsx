/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Links from "./Links";
import { CONTENT } from "../../../data";

export default function Navbar({ changeContent }) {
	const [isNavScrolled, setIsNavScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrolled = window.scrollY > 0;
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
			<nav className={isNavScrolled || isOpen ? "active" : null}>
				<p className='highlighted-text'>gointer</p>
				<div className='mobile'>
					<button
						onClick={handleOpen}
						className={`icon ${isOpen ? "active" : null}`}>
						<div className='bar'></div>
					</button>
				</div>
				<div className={`sidebar ${isOpen ? "active" : null}`}>
					<Links handleOpen={handleOpen} changeContent={changeContent} />
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
					<div className='container'>
						<i className='fa-solid fa-ellipsis'></i>
						<div className='popup'>
							<a href='#top' onClick={() => changeContent(CONTENT.promotions)}>
								promocje
							</a>
							<a href='#top' onClick={() => changeContent(CONTENT.order)}>
								zamów usługę
							</a>
							<a href='#top' onClick={() => changeContent(CONTENT.aboutus)}>
								o nas
							</a>
							<a href='#top' onClick={() => changeContent(CONTENT.contact)}>
								kontakt
							</a>
						</div>
					</div>
				</div>
			</nav>

			<a href='#top' className={`arrow-top ${isNavScrolled ? "active" : null}`}>
				<i className='fa-solid fa-chevron-up'></i>
			</a>
		</>
	);
}
