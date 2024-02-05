import { useEffect, useState } from "react";

export default function Motto() {
	const [text, setText] = useState(true);

	useEffect(() => {
		const timer = setInterval(() => {
			setText(prevText => !prevText);
		}, 10000);
		return () => clearInterval(timer);
	}, []);
	return (
		<div className='info'>
			<div className='top'>
				<div className='mott-text' key={text ? "internet" : "telewizja"}>
					{text ? (
						<h1 className={text && "animation"}>
							internet
							<br />
							na
							<br />
							każdą
							<br />
							kieszeń
						</h1>
					) : (
						<h1 className={!text && "animation"}>
							telewizja
							<br />
							dla
							<br />
							całej
							<br />
							rodziny
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
				<p className={text && "first"}>01</p>
				<p className={!text && "first"}>02</p>
			</div>
		</div>
	);
}
