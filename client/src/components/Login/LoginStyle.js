import styled from "styled-components";

const LoginStyleComponent = styled.div`

@font-face {
font-family: 'Gloss';
src: url(${props => props.font}) format('truetype');
font-weight: normal;
font-style: normal;
}

@font-face {
font-family: 'RLight';
src: url(${props => props.font2}) format('truetype');
font-weight: normal;
font-style: normal;
}
height: ${props => props.height}px;
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
display: none;
justify-content: space-around;
align-items: center;
flex-direction: column;

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

.doMobile {
position: absolute;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #858f7f;
top: 0;
left: 0;
z-index: 10;

p {
font-family: "RLight";
color: white;
font-size: 8vw;
}

}


@media (min-width: 481px) and (max-width: 567px) {

.doMobile {
display: none;
}

.form {
display: flex;
}

}

@media (min-width: 321px) and (max-width: 480px) {
.doMobile {
display: none;
}

.form {
display: flex;
}

}

@media (min-width: 120px) and (max-width: 320px) {
.doMobile {
display: none;
}

.form {
display: flex;
}

height: 110vh;
}
`;

export { LoginStyleComponent };

