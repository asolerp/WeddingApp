import styled from "styled-components";

const AsistenciaStyleComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .image {
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
  }

  .header {
    padding: 0 8%;
    margin-bottom: 5%;
    text-align: center;
    width: 100vw;
    .title {
      text-align: center;
      font-size: 32px;
      font-family: "Calligraffitti", cursive;
    }
    .subtitle {
      font-family: "Calligraffitti", cursive;
      text-align: center;
    }
  }

  .attendance {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export { AsistenciaStyleComponent };
