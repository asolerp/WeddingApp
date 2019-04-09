import styled from "styled-components";

const AsistenciaStyleComponent = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Amatic+SC");
   display: -webkit-flex; /* NEW */
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  /* height: ${props => props.height - 50}px; */


  .image {
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
     background-size: cover;
  }

  .header {
    padding: 0 8%;
    margin-bottom: 5%;
    text-align: left;
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


  .subtitle {

  }

  .attendance {
    /* display: -webkit-flex;  */
    /*
    -webkit-flex-direction: column; */
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export { AsistenciaStyleComponent };
