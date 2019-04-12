import styled from "styled-components";

const LoginStyleComponent = styled.div`
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  h1 {
    color: white;
    font-size: 15vw;
    text-shadow: 0px 0px 2px #494949;
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
