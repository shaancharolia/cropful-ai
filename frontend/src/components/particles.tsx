import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { ISourceOptions } from "tsparticles";



// Define props interface
interface ParticlesComponentProps {
  id: string;
}

const ParticlesComponent: React.FC<ParticlesComponentProps> = (props) => {
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load the slim version of tsparticles
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container: any): void => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
    
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: "#02780A",
        },
        links: {
          color: "#02780A",
          distance: 50,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
