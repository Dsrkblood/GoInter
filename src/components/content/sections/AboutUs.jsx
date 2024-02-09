import aboutUsImg from "../../../assets/tmp_aboutus.png";

export default function AboutUs() {
	return (
		<section className='section-bg about-us'>
			<div className='container'>
				<div className='box content'>
					<h5>wybierz nas</h5>
					<h3>
						<span>GOINTER</span> jest pewny
					</h3>
					<p>Wykorzystaj potęgę światłowodu!</p>
					<p>
						Szybki, sprawdzony i tani światłowód w firmie <span>GOINTER</span>,
						to pewny dostęp do Internetu, telewizji oraz telefonii w naszym
						regionie. Możlowiści technologii światłowodowej są nieporównywalnie
						wyższe od starszych łączy radiowych i telefonicznych.
					</p>
					<div className='btn'>
						<button>oferta światłowodu</button>
					</div>
				</div>
				<div className='box content-img'>
					<img
						src={aboutUsImg}
						alt='Kobieta siedząca na toletu z wyciągniętym kciukiem w górę, trzymająca na kolanie laptopa'
					/>
				</div>
			</div>
		</section>
	);
}
