import { useEffect, useState, useCallback } from "react";

export default function Motto() {
	const [text, setText] = useState(true);

	const handleText = useCallback(function handleText(boolen) {
		setText(prevText => boolen);
	}, []);

	useEffect(() => {
		console.log("restert");
		const timer = setInterval(() => {
			setText(prevText => !prevText);
		}, 10000);
		return () => clearInterval(timer);
	}, [handleText]);
	return (
		<div className='info'>
			<div className='top'>
				<div className='mott-text' key={text ? "internet" : "telewizja"}>
					{text ? (
						<h1 className={text && "active"}>
							internet
							<br />
							na
							<br />
							każdą
							<br />
							kieszeń
							<h6>
								najlepszy dostawca
								<br /> w twojej okolicy
							</h6>
						</h1>
					) : (
						<h1 className={!text && "active"}>
							telewizja
							<br />
							dla
							<br />
							całej
							<br />
							rodziny
							<h6>
								bogata oferta
								<br /> kanałów tematycznych
							</h6>
						</h1>
					)}
				</div>
				<div className='social'>
					<p className='social-heading'>media </p>
					<div className='social-icons'>
						<a href='#'>
							<i className='fa-brands fa-facebook-f'></i>
						</a>
						<a href='#'>
							<i className='fa-brands fa-linkedin-in'></i>
						</a>
						<a href='#'>
							<i className='fa-brands fa-x-twitter'></i>
						</a>
					</div>
				</div>
			</div>
			<div className='bottom'>
				<button
					onClick={() => handleText(true)}
					className={text ? "active" : null}>
					01
				</button>
				<button
					onClick={() => handleText(false)}
					className={text ? null : "active"}>
					02
				</button>
			</div>
		</div>
	);
}
