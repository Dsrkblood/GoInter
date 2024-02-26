/* eslint-disable react/prop-types */
import monitoringImg from "../../../../assets/monitoring.png";
import Icon from "./Icon";
export default function Monitoring({ data }) {
	let sectionIcons = [];

	for (const el in data.icons)
		sectionIcons.push(<Icon data={data.icons[el]} />);

	return (
		<>
			<section id='top-section' className='monitoring-section'>
				<div className='container'>
					<div className='content-header'>
						<p className='title'>POSTAW NA BEZPIECZEŃSTWO</p>
						<h2>Telewizja Przemysłowa</h2>
						<p className='italic'>
							GoInter świadczy kompleksowe usługi w zakresie montażu oraz
							serwisu systemów Monitoringu IP.
						</p>
						<div className='content'>
							<p>
								Jesteśmy gotowi specjalnie dla państwa firmy skonfigurować nowy
								system telewizji przemysłowej, lub zmodernizować już istniejącą
								instalację cctv. W naszej ofercie znajdą Państwo montaż zarówno
								systemów IP jak i systemów AHD (analogowych).
							</p>
							<p>
								Skrót CCTV pochodzi od angielskich słów: Closed Circuit Tele
								Vision i oznacza telewizję połączoną w układzie zamkniętym.
								Zamknięty system kamer daje możliwość monitorowania potencjalnie
								zagrożonych miejsc- zarówno publicznych jak i prywatnych
								gwarantując tym samym poczucie bezpieczeństwa.
							</p>
							<ul>
								<li>Dopasowany do Twoich potrzeb</li>
								<li>Szybka instalacja</li>
								<li>Bezpieczeństwo Twojego mienia</li>
								<li>Wygoda i nowoczesność</li>
							</ul>
						</div>
					</div>
					<div className='content-img'>
						<img src={monitoringImg} alt='' />
					</div>
				</div>
			</section>
			<section className='gradient'>{sectionIcons}</section>
			<section>
				<div className='container'>
					<div className='content-header'>
						<h3>Monitoring</h3>
						<div className='content'>
							<p>
								Telewizja przemysłowa możne być zastosowana wszędzie , nie ma
								żadnych przeciwwskazań do montowania kamer w obiektach
								zamkniętych , terenach otwartych, na zewnątrz budynku gdzie
								temperatura spada poniżej zera. Obecna technologia pozwala na
								skonfigurowanie monitoringu w każdych warunkach atmosferycznych.
							</p>
						</div>
					</div>
					<div className='content-header'>
						<h3>Instalacja kamer</h3>
						<div className='content'>
							<p>
								Monitoring to nie tylko kamera to także rejestrator, monitory,
								przewody wideo, zasilacze itp. O czyściwie wybór odpowiednich
								komponentów to podstawa poprawnie działającej instalacji
								ponieważ wybór systemu kamer często zależny od warunków
								technicznych panujących na monitorowanym obiekcie. Dlatego calą
								inwestycją powinni zając się profesjonaliści, nasi
								wykwalifikowani i doświadczeni pracownicy do każdego zlecenia
								podchodzą indywidualnie.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
