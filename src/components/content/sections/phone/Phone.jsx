/* eslint-disable react/prop-types */
import OferIcon from "./OferIcon";
import OferList from "./OferList";

export default function Phone({ data }) {
	let oferIcons = [];
	let oferList = [];

	for (const el in data.icons) {
		oferIcons.push(
			<OferIcon key={data.icons[el].description} data={data.icons[el]} />
		);
	}

	data.functions.map(el => oferList.push(<OferList key={el[0]} data={el} />));

	return (
		<section id='bundle-division' className='phone-section'>
			<div className='container'>
				<div className='content-header'>
					<p className='title'>idealny</p>
					<h2>telefon dla firmy i domu</h2>
					<p>Nowoczesne i bezpieczne rozwiązania za bajecznie niskie ceny.</p>
				</div>
				<div className='container-icons'>{oferIcons}</div>
				<div className='phone-header'>
					<h3>mnóstwo</h3>
					<h4>Funkcjonalności</h4>
					<p>Abonament telefoniczny NOLIMIT już za 25 zł / użytkownika</p>
				</div>
				<div className='container-list'>
					<ul>{oferList}</ul>
				</div>
			</div>
		</section>
	);
}
