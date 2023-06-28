import styled from "styled-components";

export const Content = styled.main`
  align-items: center;

  width: 100%;
  height: 100%;

  h2 {
    padding: 100px 0px 40px 0px;
    display: flex;
    font-family: "Marvel";
    align-items: center;
    justify-content: center;
    font-size: 6vh;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const BackButton = styled.div`
`

export const CardThumb = styled.div`
  img {
    height: 500px;
    border-radius: 40px;
    border: solid 10px black;

    box-shadow: 2px 2px 10px 3px rgba(255, 0, 0, 0.7);
  }
`;

export const CardDesc = styled.div`
  background: #ec1d24;
  color: white;
  height: 450px;
  width: 300px;
  margin: 10px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 3px rgba(255, 0, 0, 0.5);
  border: solid 5px black;

  h2,
  p {
    padding: 5px;
    text-align: justify;
  }

  div#img {
    height: 400px;
    width: 100%;
    background-size: cover;
    transition: all 1s;
  }
`;

export const ButtonMore = styled.div`
  background: #f1f1f1;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  cursor: pointer;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
  margin: 20px auto;
  padding: 0 50px;
  border-radius: 5px;
  transition: all 0.4s;

  &:hover {
    background: #ec1d24;
    color: white;
  }
  svg {
    margin: 0 8px;
  }
`;
