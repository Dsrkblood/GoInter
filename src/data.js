import speedImage01 from "./assets/price-icon01.png";
import speedImage02 from "./assets/price-icon02.png";
import speedImage03 from "./assets/price-icon03.png";

export const CONTENT = {
	start: {
		title: "start",
		headerFirst: {
			title: ["internet", "na", "każdą", "kieszeń"],
			description: "najlepszy dostawca w twojej okolicy",
		},
		headerSecond: {
			title: ["telewizja", "dla", "całej", "rodziny"],
			description: "bogata oferta kanałów tematycznych",
		},
		offer: {
			opticalFiber: {
				titleH3: "wybierz swój",
				titleH2: "internet światłowodowy",
				titleParagraph: "Dostępny również w Pakietach z Telewizją.",
				packageFirst: {
					title: "internet 100 mb/s",
					download: 100,
					upload: 20,
					img: { speedImage01 },
					description: [
						"Szybki internet światłowodowy",
						"Dwupasmowy router Wi-Fi ac",
						"Gwarancja niezawodności",
						"Wsparcie techniczne",
					],
					price: 50,
				},
				packageSecond: {
					title: "internet 300 mb/s",
					download: 300,
					upload: 60,
					img: { speedImage02 },
					description: [
						"Szybki internet światłowodowy",
						"Dwupasmowy router Wi-Fi ac",
						"Gwarancja niezawodności",
						"Wsparcie techniczne",
					],
					price: 80,
				},
				packageThird: {
					title: "internet 600 mb/s",
					download: 600,
					upload: 120,
					img: { speedImage03 },
					description: [
						"Szybki internet światłowodowy",
						"Dwupasmowy router Wi-Fi ac",
						"Gwarancja niezawodności",
						"Wsparcie techniczne",
					],
					price: 100,
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
				titleParagraph: "Dostępny również w pakietach z telewizją.",
				packageFirst: {
					title: "internet 100 mb/s",
					download: 100,
					upload: 20,
					img: { speedImage01 },
					description: [
						"Szybki internet światłowodowy",
						"Dwupasmowy router Wi-Fi ac",
						"Gwarancja niezawodności",
						"Wsparcie techniczne",
					],
					price: 50,
				},
				packageSecond: {
					title: "internet 300 mb/s",
					download: 300,
					upload: 60,
					img: { speedImage02 },
					description: [
						"Szybki internet światłowodowy",
						"Dwupasmowy router Wi-Fi ac",
						"Gwarancja niezawodności",
						"Wsparcie techniczne",
					],
					price: 80,
				},
				packageThird: {
					title: "internet 600 mb/s",
					download: 600,
					upload: 120,
					img: { speedImage03 },
					description: [
						"Szybki internet światłowodowy",
						"Dwupasmowy router Wi-Fi ac",
						"Gwarancja niezawodności",
						"Wsparcie techniczne",
					],
					price: 100,
				},
				btnText: "zamów",
			},
			radio: {
				titleH3: "wybierz swój",
				titleH2: "internet radiowy",
				titleParagraph:
					"W nowym standardzie AC zapewniamy duży zasięg oraz większe szybkości dla pobierania i wysyłania danych, oraz wyższą odporność na zakłócenia",
				packageFirst: {
					title: "wiwi 20",
					download: 20,
					upload: 5,
					img: { speedImage01 },
					description: [],
					price: 50,
				},
				packageSecond: {
					title: "wifi 30",
					download: 30,
					upload: 10,
					img: { speedImage02 },
					description: [],
					price: 80,
				},
				packageThird: {
					title: "wifi 50",
					download: 50,
					upload: 15,
					img: { speedImage03 },
					description: [],
					price: 100,
				},
				btnText: "zamów",
			},
			business: {
				titleH3: "najlepsza",
				titleH2: "oferta dla biznesu",
				titleParagraph:
					"Inwestujemy w nowe technologie i infrastrukturę, aby rozszerzać i ulepszać nasze usługi w wydajny i opłacalny sposób. Pozwala nam to oferować łącza światłowodowe charakteryzujące niską ceną i wysoką stabilnością oraz przepustowością sięgającą nawet 10Gb/s. Zawsze staramy się je dostosować do potrzeb klienta i sposobu wykorzystywania Internetu w firmie.",
				packageFirst: {
					title: "sym 300",
					download: 300,
					upload: 300,
					img: { speedImage01 },
					description: [
						"Gwarancja niezawodności",
						"Wspracie techniczne",
						"Idealny dla małego biznesu",
					],
					price: null,
				},
				packageSecond: {
					title: "sym 600",
					download: 600,
					upload: 600,
					img: { speedImage02 },
					description: [
						"Gwarancja niezawodności",
						"Wspracie techniczne",
						"Idealny dla urzędów",
					],
					price: null,
				},
				packageThird: {
					title: "syn 900",
					download: 900,
					upload: 900,
					img: { speedImage03 },
					description: [
						"Gwarancja niezawodności",
						"Wspracie techniczne",
						"Dla mega wymagających",
					],
					price: null,
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
	},
};
