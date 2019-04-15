import styled from "styled-components";

const BusStyleComponent = styled.div`
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
      font-family: "Gloss", cursive;
      color: #4c4e19
    }
    .subtitle {
      font-family: "RLight", cursive;
      text-align: center;
      color: #4c4e19
    }
  }

  .attendance {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export { BusStyleComponent };
