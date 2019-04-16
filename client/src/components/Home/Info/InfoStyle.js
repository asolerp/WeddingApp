import styled from "styled-components";

const InfoStyleComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5% 10%;
    text-align: center;
    position: relative;
    overflow: hidden;

    .text {
        margin: 8% 0;
        font-family: "RLight"
    }

    .back {
        text-decoration: none;
        background-color: #858f7f;
        color: white;
        padding: 2%;
        border: 1px solid #858f7f;
        border-radius: 5px;
    }

    .icon {
        margin-right: 2%;
    }

    .infoContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;

    }

    p {
        display: flex;
        margin: 1% 0;
        font-family: "RLight"
    }

    .contacto {
        width: 70vw;
        margin-bottom: 5%;
    }

    .imagenOlivo {
        position: absolute;
        transform: rotate(321deg);
        width: 89vw;
        top: 1%;
        right: -21%;
        opacity: 0.3;
        z-index: -5;
  }
`;

export { InfoStyleComponent };
