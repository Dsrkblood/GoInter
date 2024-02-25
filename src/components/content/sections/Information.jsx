import aboutUsImg from "../../../assets/tmp_aboutus.png";

export default function Information() {
	return (
		<section className='section-bg info'>
			<div className='container'>
				<div className='box content'>
					<h3>wybierz nas</h3>
					<h4>
						<span className='highlighted-text'>GOINTER</span> jest pewny
					</h4>
					<p className='italic'>Wykorzystaj potęgę światłowodu!</p>
					<p className='description'>
						Szybki, sprawdzony i tani światłowód w firmie{" "}
						<span className='highlighted-text'>GOINTER</span>, to pewny dostęp
						do Internetu, telewizji oraz telefonii w naszym regionie. Możlowiści
						technologii światłowodowej są nieporównywalnie wyższe od starszych
						łączy radiowych i telefonicznych.
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
