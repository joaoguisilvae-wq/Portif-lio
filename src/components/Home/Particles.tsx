import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function HeroParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setReady(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: true },
      fpsLimit: 60,
      detectRetina: true,
      background: {
        color: "transparent",
      },
      particles: {
        number: {
          value: 130,
          density: { enable: true, area: 900 },
        },
        color: {
          value: ["#bea4ff", "#81849e", "#a38cf5"],
        },
        opacity: {
          value: { min: 0.2, max: 0.75 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
        move: {
          enable: true,
          speed: 0.55,
          random: true,
          straight: false,
        },
        links: {
          enable: true,
          distance: 120,
          color: "#bea4ff",
          opacity: 0.16,
          width: 1,
        },
      },
      interactivity: {
        detect: "window",
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: { enable: true },
        },
        modes: {
          repulse: {
            distance: 95,
            duration: 0.42,
            speed: 3.1,
            factor: 145,
            maxSpeed: 180,
            easing: "ease-out-quad",
          },
          push: {
            quantity: 5,
            distance: 100,
          },
        },
      },
    }),
    [],
  );

  if (!ready) {
    return null;
  }

  return <Particles id="hero-particles" options={options} />;
}

export default HeroParticles;
