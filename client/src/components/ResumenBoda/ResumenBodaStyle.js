import styled from "styled-components";

const ResumenBodaStyleComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  box-sizing: border-box;
  margin: 0;
  padding: 0

  table {
    width: 90vw;
  }

  .chartContainer {
    width: 30vw;
    height: 30vh;
    text-align: center;
  }


  .chartsSection  {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    margin-bottom: 5%
  }

  img {
    width: 100vw;
    height: 40vh;
    object-fit: cover;
  }

  .header {
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
    height: 40vh;
  }
`;

export { ResumenBodaStyleComponent };
