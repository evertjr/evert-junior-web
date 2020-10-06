import styled from 'styled-components';

export const Container = styled.div``;

export const Introduction = styled.div`
  padding: 16px 80px;
  height: 800px;

  div {
    position: absolute;
    max-width: 90%;
  }
`;

export const Header = styled.nav`
  position: relative;
  max-width: 300px;
  margin: 0 auto;
  flex-direction: row;

  a {
    color: #fff;
    font-size: 16px;
    margin: 20px;
  }
`;

export const IntroText = styled.div`
  margin-top: 20%;
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
