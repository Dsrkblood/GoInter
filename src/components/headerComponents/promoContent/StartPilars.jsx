import { useEffect, useState, useCallback } from "react";
import SocialMedia from "./SocialMedia";
import BrandPilar from "./BrandPilar";

export default function StartPilars({ content }) {
	const [active, setActive] = useState(true);

	const handleActive = useCallback(function handleActive(boolen) {
		setActive(boolen);
	}, []);

	useEffect(() => {
		const timer = setInterval(() => {
			setActive(prevActive => !prevActive);
		}, 10000);

		return () => clearInterval(timer);
	}, [handleActive]);
	return (
		<>
			<div className='top'>
				<div className='main-pilar' key={active ? "Internet" : "TV"}>
					<BrandPilar active={active} content={content.headerFirst} />
					<BrandPilar active={!active} content={content.headerSecond} />
				</div>
				<SocialMedia />
			</div>
			<div className='bottom'>
				<button
					onClick={() => handleActive(true)}
					className={active ? "active" : null}>
					01
				</button>
				<button
					onClick={() => handleActive(false)}
					className={!active ? "active" : null}>
					02
				</button>
			</div>
		</>
	);
}
