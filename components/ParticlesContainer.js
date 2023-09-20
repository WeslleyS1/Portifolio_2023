import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';

const ParticlesContainer = () => {
  // init particles
  const initParticles = useCallback(async (tsParticles) => {
    await loadFull(tsParticles);
  }, []);

  const particlesInit = useCallback(async () => { }, []);

  const particlesLoaded = useCallback((container) => { }, []);

  return (
    <Particles className='w-full h-full absolute translate-z-0'
      id='tsparticles'
      init={initParticles}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: ''
          }
        },
        fps_limit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 70
            },
            repulse: {
              distance: 150,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: '#e68e2e'
          },
          links: {
            color: '#f5d393',
            distance: 150,
            enable: true,
            opacity: 0.5,
            with: 1
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800
            },
            value: 100
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            random: true,
            value: 5
          }
        }
      }}
    />
  );



};

export default ParticlesContainer;
