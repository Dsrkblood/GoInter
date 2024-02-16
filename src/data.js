import speedImage01 from "./assets/price-icon01.png";
import speedImage02 from "./assets/price-icon02.png";
import speedImage03 from "./assets/price-icon03.png";

export const CONTENT = {
	start: {
		title: "start",
		headerFirst: {
			title: ["internet", "na", "każdą", "kieszeń"],
			highlighted: false,
			description: "najlepszy dostawca w twojej okolicy",
		},
		headerSecond: {
			title: ["telewizja", "dla", "całej", "rodziny"],
			highlighted: false,
			description: "bogata oferta kanałów tematycznych",
		},
		offer: {
			opticalFiber: {
				titleH3: "wybierz swój",
				titleH2: "internet światłowodowy",
				titleParagraph: "Dostępny również w Pakietach z Telewizją.",
				packages: {
					first: {
						title: "internet 100 mb/s",
						performance: {
							download: 100,
							upload: 20,
							img: speedImage01,
							imgAlt: "Obrazek pokazujący najmniejsze osiągi internetu",
						},

						highlighted: false,
						description: [
							"Szybki internet światłowodowy",
							"Dwupasmowy router Wi-Fi ac",
							"Gwarancja niezawodności",
							"Wsparcie techniczne",
						],
						price: 50,
					},
					second: {
						title: "internet 300 mb/s",
						performance: {
							download: 300,
							upload: 60,
							img: speedImage02,
							imgAlt: "Obrazek pokazujący średnie osiągi internetu",
						},
						highlighted: false,
						description: [
							"Szybki internet światłowodowy",
							"Dwupasmowy router Wi-Fi ac",
							"Gwarancja niezawodności",
							"Wsparcie techniczne",
						],
						price: 80,
					},
					third: {
						title: "internet 600 mb/s",
						performance: {
							download: 600,
							upload: 120,
							img: speedImage03,
							imgAlt: "Obrazek wskazujący największe osiągi internetu",
						},
						highlighted: false,
						description: [
							"Szybki internet światłowodowy",
							"Dwupasmowy router Wi-Fi ac",
							"Gwarancja niezawodności",
							"Wsparcie techniczne",
						],
						price: 100,
					},
				},
				btnText: "zamów",
			},
		},
	},
	internet: {
		title: "internet",
		header: {
			title: "internet światłowodowy, radiowy i dla biznesu",
		},
		offer: {
			opticalFiber: {
				titleH3: "szybki i nowoczesny",
				titleH2: "internet światłowodowy 600 mb/s",
				titleParagraph: "Dostępny również w Pakietach z Telewizją.",
				packages: {
					first: {
						title: "internet 100 mb/s",
						performance: {
							download: 100,
							upload: 20,
							img: speedImage01,
							imgAlt: "Obrazek pokazujący najmniejsze osiągi internetu",
						},
						highlighted: false,
						description: [
							"Szybki internet światłowodowy",
							"Dwupasmowy router Wi-Fi ac",
							"Gwarancja niezawodności",
							"Wsparcie techniczne",
						],
						price: 50,
					},
					second: {
						title: "internet 300 mb/s",
						performance: {
							download: 300,
							upload: 60,
							img: speedImage02,
							imgAlt: "Obrazek pokazujący średnie osiągi internetu",
						},
						highlighted: false,
						description: [
							"Szybki internet światłowodowy",
							"Dwupasmowy router Wi-Fi ac",
							"Gwarancja niezawodności",
							"Wsparcie techniczne",
						],
						price: 80,
					},
					third: {
						title: "internet 600 mb/s",
						performance: {
							download: 600,
							upload: 120,
							img: speedImage03,
							imgAlt: "Obrazek wskazujący największe osiągi internetu",
						},
						highlighted: false,
						description: [
							"Szybki internet światłowodowy",
							"Dwupasmowy router Wi-Fi ac",
							"Gwarancja niezawodności",
							"Wsparcie techniczne",
						],
						price: 100,
					},
				},
				btnText: "zamów",
			},
			radio: {
				titleH3: "wybierz swój",
				titleH2: "internet radiowy",
				titleParagraph:
					"W nowym standardzie AC zapewniamy duży zasięg oraz większe szybkości dla pobierania i wysyłania danych, oraz wyższą odporność na zakłócenia",
				packages: {
					first: {
						title: "wifi 20",
						performance: {
							download: 20,
							upload: 5,
							img: speedImage01,
							imgAlt: "Obrazek pokazujący najmniejsze osiągi internetu",
						},
						highlighted: false,
						description: [],
						price: 50,
					},
					second: {
						title: "wifi 30",
						performance: {
							download: 30,
							upload: 10,
							img: speedImage02,
							imgAlt: "Obrazek pokazujący średnie osiągi internetu",
						},
						highlighted: false,
						description: [],
						price: 80,
					},
					third: {
						title: "wifi 50",
						performance: {
							download: 50,
							upload: 15,
							img: speedImage03,
							imgAlt: "Obrazek wskazujący największe osiągi internetu",
						},
						highlighted: false,
						description: [],
						price: 100,
					},
				},
				btnText: "zamów",
			},
			business: {
				titleH3: "najlepsza",
				titleH2: "oferta dla biznesu",
				titleParagraph:
					"Inwestujemy w nowe technologie i infrastrukturę, aby rozszerzać i ulepszać nasze usługi w wydajny i opłacalny sposób. Pozwala nam to oferować łącza światłowodowe charakteryzujące niską ceną i wysoką stabilnością oraz przepustowością sięgającą nawet 10Gb/s. Zawsze staramy się je dostosować do potrzeb klienta i sposobu wykorzystywania Internetu w firmie.",
				packages: {
					first: {
						title: "sym 300",
						performance: {
							download: 300,
							upload: 300,
							img: speedImage01,
							imgAlt: "Obrazek pokazujący najmniejsze osiągi internetu",
						},
						highlighted: false,
						description: [
							"Gwarancja niezawodności",
							"Wspracie techniczne",
							"Idealny dla małego biznesu",
						],
						price: null,
					},
					second: {
						title: "sym 600",
						performance: {
							download: 600,
							upload: 600,
							img: speedImage02,
							imgAlt: "Obrazek pokazujący średnie osiągi internetu",
						},
						highlighted: false,
						description: [
							"Gwarancja niezawodności",
							"Wspracie techniczne",
							"Idealny dla urzędów",
						],
						price: null,
					},
					third: {
						title: "sym 900",
						performance: {
							download: 900,
							upload: 900,
							img: speedImage03,
							imgAlt: "Obrazek wskazujący największe osiągi internetu",
						},
						highlighted: false,
						description: [
							"Gwarancja niezawodności",
							"Wspracie techniczne",
							"Dla mega wymagających",
						],
						price: null,
					},
				},
				btnText: "zapytaj o cenę",
			},
		},
	},
	phone: {
		title: "telefon",
		header: {
			title: "telefon",
		},
	},
	tv: {
		title: "telewizja",
		header: {
			title: "telewizja - oferta nowoczenej telewizji",
		},
		offer: {
			opticalFiber: {
				titleH3: "nasza",
				titleH2: "aktualna oferta",
				packages: {
					first: {
						title: "smart",

						highlighted: true,
						description: [
							"Liczba wszystkich kanałów: 152",
							"Liczba kanałów HD: 102",
							"Gwarancja niezawodności",
							"Wsparcie techniczne",
							"Dekoder z nagrywarką",
						],
						price: 55,
					},
					second: {
						title: "optimum",

						highlighted: true,
						description: [
							"Liczba wszystkich kanałów: 196",
							"Liczba kanałów HD: 132",
							"Gwarancja niezawodności",
							"Wsparcie techniczne",
							"Dekoder z nagrywarką",
						],
						price: 69,
					},
					third: {
						title: "platinium",

						highlighted: true,
						description: [
							"Liczba wszystkich kanałów: 231",
							"Liczba kanałów HD: 159",
							"Gwarancja niezawodności",
							"Wsparcie techniczne",
							"Dekoder z nagrywarką",
						],
						price: 102,
					},
				},
				btnText: "zapytaj o szczegóły",
			},
		},
	},
	monitoring: {
		title: "monitoring",
		header: {
			title: "monitoring ip - oferta w gointer",
		},
	},
	promotions: {
		title: "promocje",
		header: {
			title: "promocje i ważne informacje",
		},
	},
	order: {
		title: "zamów usługę",
		header: {
			title: "zamów usługę",
		},
	},
	aboutus: {
		title: "o nas",
		header: {
			title: "o nas",
		},
	},
	contact: {
		title: "kontakt",
		header: {
			title: "dane kontaktowe",
		},
		icons: {
			phone: {
				graphics: "fa-solid fa-phone",
				row: true,
				headerFirst: "Infolinia" ,
				headerSecond:"Pomoc techniczna",
				descriptionFirst: "00 000 00 00" ,
				descriptionSecond: "000 000 000",
			},
			location: {
				graphics: "fa-solid fa-location-dot",
				row: false,
				headerFirst: "GoInter",
				descriptionFirst: "ul. Warszawska 00",
				descriptionSecond:"05-092 Łomianki"
			},
			mail: {
				graphics: "fa-regular fa-envelope",
				row: false,
				headerFirst: "Biuro Obsługi Klienta czynne:",
				descriptionFirst: "Pon-Pt: 9 - 17",
				email: "gointer@gmail.com",
			},
		},
	},
};
