/* eslint-disable react/prop-types */
export default function InternetCard({ data, btnText }) {
	return (
		<div className='card-box'>
			<div className='header'>
				<h3>{data.title}</h3>
			</div>
			<div className='performance'>
				<div>
					<div className='download'>
						<p>{data.download}</p>
						<p className='units'>mb/s</p>
					</div>
					<div className='upload'>
						<p>{data.upload}</p>
						<p className='units'>mb/s</p>
					</div>
				</div>
				<div className='performance-icon'>
					<img src={data.img} alt={data.imgAlt} />
				</div>
			</div>
			<div className='plan-features'>
				<ul>
					{data.description.map(des => (
						<li key={des}>{des}</li>
					))}
				</ul>
			</div>
			<div className='plan-price'>
				{data.price !== null && (
					<>
						<span className='small'>zł</span>
						<span className='big highlighted-text'>{data.price}</span>
						<span className='small'>/ms-c</span>
					</>
				)}
			</div>

			<a href='#'>{btnText}</a>
		</div>
	);
}
