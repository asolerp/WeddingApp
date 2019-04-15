import styled from "styled-components";

const HomeStyleComponent = styled.div`

@font-face {
  font-family: 'Gloss';
  src: url(${props => props.font}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'RLight';
  src: url(${props => props.font2}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

  @import url("https://fonts.googleapis.com/css?family=Amatic+SC");
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  h1 {
    font-family: "Roboto";
    font-weight: bold;
    color: white;
  }

  p {
    font-size: 6vw;
    font-weight: bold;
    color: #858f7f;
  }

  .lenguages {
    position: absolute;
    top: 15px;
    right: 25px;
    display: flex;
    z-index:20;

    p {
      margin: 0 5%;
      color: white;
      font-size: 15px;
    }
  }

  .imagenHome {
    margin-top: 25%;
    width: 55vw;
    height: 40vh;
    object-fit: cover;
    border-radius: 50%;
    border: 10px solid white;
  }

  .imageSection {
    padding: 0 10%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100vw;
    background-image: url(${props => props.img});
    background-size: 100% auto;
    background-repeat: no-repeat;
    z-index: 2;
  }

  .infoSection {
    z-index: 20;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100vw;
    z-index: 1;
  }

  .welcomeMessage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10%;
    margin-bottom: 10%;

    h1 {
      font-family: "Gloss";
      font-size: 7.2vw;
      color: #4c4e19;
      font-weight: 100;
    }

    p {
      font-family: "RLight";
      font-size: 3.2vw;
      color: #4c4e19;
    }
  }

  .iconSection {
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-content: center;
    z-index: 10;
    margin-bottom: 5%;
  }

  .icon {
    font-size: 40px;
    border: 1px solid #44604d;
    border-radius: 50%;
    padding: 5%;
    color: #858f7f;
    margin-bottom: 5%;
  }

  .iconLabel {
    font-family: "RLight";
    font-size: 3vw;
    color: #858f7f;
    font-weight: bold;
    text-decoration: none;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .imagenOlivo {
    position: absolute;
    transform: rotate(300deg);
    width: 84vw;
    top: -49%;
    right: -58%;
    opacity: 0.3;
    z-index: -5;
  }

  .iconContainer {
    align-self: flex-end
  }

`;

export { HomeStyleComponent };
