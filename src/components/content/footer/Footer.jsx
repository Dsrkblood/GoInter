/* eslint-disable react/prop-types */
import Contact from "./Contact";

export default function Footer({ changeContent }) {
	const year = new Date().getFullYear();
	return (
		<footer>
			<div className='top'>
				<Contact changeContent={changeContent} />
			</div>
			<div className='bottom'>
				<p>GoInter &copy; {year}</p>
				<p>
					Napisana przez
					<a href='https://github.com/Dsrkblood' target='_black'>
						<i className='fa-brands fa-github'></i>dsrkblood
					</a>
				</p>
			</div>
		</footer>
	);
}
