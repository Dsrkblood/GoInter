/* eslint-disable react/prop-types */
import { CONTENT } from "../../../data";

export default function InternetCard({ data, btnText, changeContent }) {
	return (
		<div className='card-box'>
			<div className='header'>
				<h3>{data.title}</h3>
			</div>
			{data.performance !== undefined && (
				<div className='performance'>
					<div>
						<div className='download'>
							<p>{data.performance.download}</p>
							<p className='units'>mb/s</p>
						</div>
						<div className='upload'>
							<p>{data.performance.upload}</p>
							<p className='units'>mb/s</p>
						</div>
					</div>
					<div className='performance-icon'>
						<img src={data.performance.img} alt={data.performance.imgAlt} />
					</div>
				</div>
			)}
			<div className='plan-features'>
				<ul>
					{data.description.map(des => {
						return (
							<li
								className={
									data.description[0] === des && data.highlighted
										? "highlighted"
										: null
								}
								key={des}>
								{des}
							</li>
						);
					})}
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

			<a href='#top' onClick={() => changeContent(CONTENT.contact)}>
				{btnText}
			</a>
		</div>
	);
}
