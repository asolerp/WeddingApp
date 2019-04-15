import styled from "styled-components";

const LoginStyleComponent = styled.div`

@font-face {
  font-family: 'Gloss';
  src: url(${props => props.font}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  h1 {
    width: 100vw;
    line-height: 89px;
    font-family: "Gloss";
    color: white;
    font-size: 15vw;
    margin-bottom: 35%;
    font-weight: 100px;
    font-weight: 100;
  }

  .lenguages {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    p {
      margin: 0%;
      font-weight: bold;
      color: white;
      margin: 0 3% 10% 3%
    }

  }

  .form {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    overflow: hidden;

    fieldset {
      border: 1px solid white;
    }

    label {
      color: white;
    }

    input {
      margin-left: 20px;
    }

    .formContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;

export { LoginStyleComponent };
