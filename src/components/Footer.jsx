export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer>
			<p>GoInter &copy; {year}</p>
			<p>
				Napisana przez
				<a href='https://github.com/Dsrkblood' target='_black'>
					<i className='fa-brands fa-github'></i>dsrkblood
				</a>
			</p>
		</footer>
	);
}
