/* eslint-disable react/prop-types */
import ListItem from "./ListItem";
import { CONTENT } from "../../../data";

export default function Contact({ changeContent }) {
	return (
		<div className='container'>
			<div className='info-box about'>
				<h5>o nas</h5>
				<p>
					Łomianki, Dąbrowa, Kiełpin, Dziekanów leśny i okolice - naszym zdaniem
					najlepszy i najszybszy Internet w okolicy.
				</p>
				<p>Zapraszamy.</p>
				<h5 className='highlighted-text'>
					<span>GOINTER</span>
				</h5>
			</div>
			<ListItem
				classes='info-box offer'
				title='oferta'
				data={{
					list: [
						["Internet dla każdego", CONTENT.internet],
						["Telefon", CONTENT.phone],
						["Telewizja", CONTENT.tv],
						["Monitoring", CONTENT.monitoring],
					],
				}}
				changeContent={changeContent}
			/>
			<ListItem
				classes='info-box important'
				title='ważne'
				data={{
					list: [
						["O nas", CONTENT.aboutus],
						["Kontakt", CONTENT.contact],
						["Promocje", CONTENT.promotions],
						["Zamów usługę", CONTENT.order],
					],
				}}
				changeContent={changeContent}
			/>

			<div className='info-box contact'>
				<div className='column'>
					<h5>kontakt</h5>
					<a href='tel:73 017 29 80'>73 017 29 80</a>
					<a href='mailto:gointer@gmail.com'>gointer@gmail.com</a>
				</div>
				<div className='column'>
					<h5>biuro</h5>
					<p>ul. Warszawska 00</p>
					<p>05-092 Łomianki</p>
				</div>
			</div>
		</div>
	);
}
