import styled from "styled-components";

const ResumenStyleComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  img {
    width: 100vw;
    height: 40vh;
    object-fit: cover;
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
    height: 40vh;
  }
`;

export { ResumenStyleComponent };
