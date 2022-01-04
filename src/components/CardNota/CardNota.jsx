//#region Imports
import React, { Component } from "react";
import "./cardNota.css";
import {ReactComponent as DeleteSVG} from "../../assets/img/delete-icon.svg";
//#endregion

class CardNota extends Component {
  render() {
    return (
      <section className="cardNota">
        <header className="cardNota_cabecalho">
          <h3 className="cardNota_titulo">{this.props.titulo}</h3>
          <DeleteSVG />
        </header>
        <p className="cardNota_texto">{this.props.texto} </p>
      </section>
    );
  }
}

export default CardNota;

