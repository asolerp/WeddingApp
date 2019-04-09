import styled from "styled-components";

const HomeStyleComponent = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Amatic+SC");
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  h1 {
    font-family: "Calligraffitti", cursive;
    font-weight: bold;
    color: white;
  }

  p {
    font-size: 6vw;
    font-weight: bold;
    color: #858f7f;
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
  }

  .infoSection {
    z-index: 20;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100vw;
  }

  .welcomeMessage {
    display: flex;
    justify-content: center;
    align-items: center;


    p {
      background: #5b8067;
      margin: 0 10%;
      padding: 2% 2% 60% 2%;
      border-radius: 5px;
      color: white;
      font-size: 14px;
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
  }

  .iconLabel {
    font-family: "Calligraffitti", cursive;
    color: #858f7f;
    font-weight: bold;
  }

  .imagenOlivo {
    position: absolute;
    transform: rotate(35deg);
    width: 84vw;
    top: 33%;
    right: -26%;
    opacity: 0.3;
    z-index: -5;
  }

  .iconContainer {
    align-self: flex-end
  }

`;

export { HomeStyleComponent };
