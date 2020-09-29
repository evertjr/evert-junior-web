import styled from 'styled-components';

import starsBackground from '../../assets/background/stars.jpg';

export const Container = styled.div`
  padding: 16px 80px;
  height: 800px;
  /* 
  background-image: linear-gradient(
      to bottom,
      rgb(255, 255, 255, 0) 5%,
      #160c29
    ),
    url(${starsBackground});
  background-size: contain; */
`;

export const Header = styled.nav`
  display: flex;
  max-width: 300px;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;

  a {
    color: #fff;
    font-size: 16px;
  }
`;

export const Intro = styled.div`
  margin-top: 200px;
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

    strong {
      color: #b620e0;
    }
  }
`;
