/* eslint-disable react/prop-types */
import ContactContainer from "./ContactContainer";

export default function Footer({ changeContent }) {
	const year = new Date().getFullYear();
	return (
		<footer>
			<div className='top'>
				<ContactContainer changeContent={changeContent} />
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
