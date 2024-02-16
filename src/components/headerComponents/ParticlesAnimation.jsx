import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
export default function ParticlesAnimation() {
	const init = useCallback(async engine => {
		await loadSlim(engine);
	}, []);
	return (
		<Particles
			id='particles'
			options={{
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
							quantity: 0,
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
						opacity: 0.3,
						width: 1,
					},
					move: {
						direction: "none",
						enable: true,
						outModes: {
							default: "out",
						},
						random: false,
						speed: 5,
						straight: false,
					},
					number: {
						density: {
							enable: true,
						},
						value: 150,
					},
					opacity: {
						value: 0.4,
					},
					shape: {
						type: "circle",
					},
					size: {
						value: { min: 2, max: 4 },
					},
				},
				detectRetina: true,
			}}
			init={init}
		/>
	);
}
