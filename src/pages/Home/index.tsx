import React from 'react';
import Typewriter from 'typewriter-effect';
import { useSpring, animated } from 'react-spring';
import './styles.css';

import { Container, Header, Intro } from './styles';

const Home: React.FC = () => {
  const calc = (x: number, y: number) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];
  const trans1 = (x: number, y: number) =>
    `translate3d(${x / 10}px,${y / 10}px,0)`;
  const trans2 = (x: number, y: number) =>
    `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
  const trans3 = (x: number, y: number) =>
    `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
  const trans4 = (x: number, y: number) =>
    `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

  function Card() {
    const [props, set] = useSpring(() => ({
      xy: [0, 0],
      config: { mass: 10, tension: 550, friction: 140 },
    }));
    return (
      <div
        className="container"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <animated.div
          class="card1"
          style={{ transform: props.xy.interpolate(trans1) }}
        />
        <animated.div
          class="card2"
          style={{ transform: props.xy.interpolate(trans2) }}
        />
        <animated.div
          class="card3"
          style={{ transform: props.xy.interpolate(trans3) }}
        />
        <animated.div
          class="card4"
          style={{ transform: props.xy.interpolate(trans4) }}
        />
      </div>
    );
  }

  return (
    <Container>
      <Card />
      <Header>
        <a href="#home">Home</a>
        <a href="#port">Portfólio</a>
        <a href="#contact">Contato</a>
      </Header>
      <Intro>
        <h3>
          Olá! me chamo <strong>Evert Junior</strong>
        </h3>
        <Typewriter
          onInit={(typewriter: any) => {
            typewriter
              .typeString(
                'Eu sou um </br> designer de </br><strong>comunicação</br>visual</strong>',
              )
              .pauseFor(350)
              .deleteChars(17)
              .typeString('<strong>UI/UX.</strong>')
              .pauseFor(450)
              .deleteChars(19)
              .typeString('desenvolvedor</br><strong>ReactJS</strong>')
              .pauseFor(350)
              .deleteChars(2)
              .typeString('<strong> Native</strong>')
              .pauseFor(350)
              .deleteChars(12)
              .typeString('<strong>Node.js</strong>')
              .pauseFor(350)
              .deleteChars(7)
              .typeString('<strong>TypeScript.</strong>')
              .pauseFor(500)
              .start();
          }}
          options={{
            loop: true,
          }}
        />
      </Intro>
    </Container>
  );
};

export default Home;
