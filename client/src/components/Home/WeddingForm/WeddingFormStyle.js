import styled from "styled-components";

const WeddingFormStyleComponent = styled.div`
  /* button {
      padding: 2%;
      width: 30vw;
      border: 1px solid black;
      border-radius: 10px;
      font-size: 5vw;
      background: transparent;
    } */
  position: relative;
  overflow: ${props => (props.scroll ? "scroll" : "hidden")};

  overflow: scroll;

  .footer {
    position: fixed;
    bottom: 0;
    width: 100vw;
    box-sizing: border-box;
  }

  .carousel .slide {
    background: white;
  }
  .section {
    background: white;
    display: -webkit-flex; /* NEW */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }

  .loading {
    background: #858f7f;
    font-size: 30px;
    color: white;
    display: -webkit-flex; /* NEW */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    /* position: relative;
    overflow: hidden; */
  }

  .buttonSection2 {
    width: 100vw;
    display: -webkit-flex; /* NEW */
    display: flex;
    /* justify-content: flex-end; */
    flex-direction: column;
    align-items: center;
    padding-bottom: 5%;
  }

  .buttonSection {
    width: 100vw;
    display: -webkit-flex; /* NEW */
    display: flex;
    /* justify-content: flex-end; */
    flex-direction: column;
    align-items: center;
    padding-bottom: 5%;
  }

  .rowButtons {
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
  }
`;

export { WeddingFormStyleComponent };
