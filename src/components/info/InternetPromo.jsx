import { useEffect, useState, useCallback } from "react";
import SocialMedia from "./SocialMedia";
import ActivePromo from "./ActivePromo";

export default function InternetPromo() {
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
		<div className='container'>
			<div className='top'>
				<div className='promo-text' key={active ? "Internet" : "TV"}>
					<ActivePromo
						active={active}
						content={["internet", "na", "każdą", "kieszeń"]}
						smallContent={{
							first: "najlepszy dostawca",
							seccond: "w twojej okolicy",
						}}
					/>
					<ActivePromo
						active={!active}
						content={["telewizja", "na", "każdą", "kieszeń"]}
						smallContent={{
							first: "bogata oferta",
							seccond: "kanałów tematycznych",
						}}
					/>
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
					className={active ? null : "active"}>
					02
				</button>
			</div>
		</div>
	);
}
