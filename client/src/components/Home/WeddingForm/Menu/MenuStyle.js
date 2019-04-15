import styled from "styled-components";

const MenuStyleComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    padding: 0 8%;
    margin-bottom: 5%;
    text-align: left;
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
      color: #4c4e19    }
  }

  .image {
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
  }

  .attendance {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
  }

  .participant {
    background: #858f7f;
    color: white;
    padding: 3% 0;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 2%;
  }

  .radioSection {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100vw;
    justify-content: center;
  }

  .MuiFormGroup-root-101 {
    width: 100vw;
  }
`;

export { MenuStyleComponent };
