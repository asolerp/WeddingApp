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

    .infoContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;

    }

    p {
        display: flex;
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
