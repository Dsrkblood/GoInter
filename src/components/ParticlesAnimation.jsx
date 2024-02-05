import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
export default function ParticlesAnimation() {
	const init = useCallback(async engine => {
		await loadSlim(engine);
	}, []);
	return (
		<div id='hero-bg'>
			<Particles
				className='particles'
				options={{
					fullScreen: {
						enable: false,
					},
					fpsLimit: 120,
					interactivity: {
						events: {
							onClick: {
								enable: true,
								mode: "push",
							},
							onDiv: {
								enable: false,
								type: "circle",
							},
							onHover: {
								enable: true,
								mode: "slow",
								parallax: {
									enable: false,
									force: 60,
									smooth: 10,
								},
							},
							resize: {
								delay: 0.5,
								enable: true,
							},
						},
						modes: {
							push: {
								quantity: 2,
							},
							repulse: {
								distance: 100,
								duration: 0.4,
							},
						},
					},
					particles: {
						color: {
							value: "#fff",
						},
						links: {
							color: "#fff",
							distance: 150,
							enable: true,
							opacity: 0.5,
							width: 1,
						},
						move: {
							direction: "none",
							enable: true,
							outModes: {
								default: "out",
							},
							random: false,
							speed: 10,
							straight: false,
						},
						number: {
							density: {
								enable: true,
							},
							value: 100,
						},
						opacity: {
							value: 0.5,
						},
						shape: {
							type: "circle",
						},
						size: {
							value: { min: 1, max: 5 },
						},
					},
					detectRetina: true,
				}}
				init={init}
			/>
		</div>
	);
}
