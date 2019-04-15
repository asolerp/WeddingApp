import React from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Icon from "@material-ui/core/Icon";
import { InfoStyleComponent } from './InfoStyle'
import Div100vh from "react-div-100vh";
import olivo from "../../../images/olivo1.png";

const Info = props => {
    console.log(props)
    return (
        <InfoStyleComponent>
            <Div100vh style={{height: "100rvh"}} className="infoContainer">
                <img className="imagenOlivo" src={olivo} alt="boda" />
                <p>{props.lenguage.InfoPage.mainText}</p>
                <div className="contacto">
                    <p>Carol</p>
                    <p><Icon className="icon">phone</Icon> +34 605 555 240</p>
                    <p><Icon className="icon">email</Icon> carolinabaudes@gmail.com</p>
                </div>
                <div className="contacto">
                    <p>Alberto</p>
                    <p><Icon className="icon">phone</Icon> +34 696 487 907</p>
                    <p><Icon className="icon">email</Icon> albertosolpal@gmail.com</p>
                </div>
                <p>{props.lenguage.InfoPage.subText}</p>
                <div className="contacto">
                    <p>Estefanía</p>
                    <p><Icon className="icon">phone</Icon> +34 690 125 183</p>
                </div>
                <Link to={"/home"}>Atrás</Link>
            </Div100vh>
        </InfoStyleComponent>
    )
}

const mapStateToProps = ({ authReducer }) => {
    const { user, lenguage } = authReducer;

    return {
        user,
        lenguage
    };
};

export default connect(
    mapStateToProps,
    {}
)(Info);
