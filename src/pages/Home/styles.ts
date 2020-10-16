import styled from 'styled-components';
import ParallaxBackground from '../../components/ParallaxBackground';

export const Container = styled.div`
  padding: 0 16vh;
`;

export const Introduction = styled.div`
  height: 100vh;
  background: #160c29;
  margin: 0 -16vh;

  div {
    position: absolute;
    max-width: 90%;
    max-height: 90vh;
  }
`;

export const Header = styled.nav`
  position: relative;
  max-width: 300px;
  margin: 0 auto;
  flex-direction: row;
  padding-top: 16px;

  a {
    color: #fff;
    font-size: 16px;
    margin: 20px;
  }
`;

export const IntroText = styled.div`
  margin: 20% 16vh 0;
  font-family: 'Fira Mono';

  h3 {
    color: #fff;
    margin-left: 5px;

    strong {
      color: #b620e0;
    }
  }

  div {
    color: #fff;
    font-size: 62px;
    font-weight: bold;
    min-width: 500px;

    strong {
      color: #b620e0;
    }
  }
`;

export const WhatIDo = styled.div`
  background: #fff;
  height: 80vh;

  div {
    padding-top: 30px;

    h1 {
      margin-top: 40px;
    }
  }
`;
