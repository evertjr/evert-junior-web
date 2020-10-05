import React from 'react';
import Typewriter from 'typewriter-effect';
import ParallaxBackground from '../../components/ParallaxBackground';

import { Container, Header, Intro } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <ParallaxBackground />
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
