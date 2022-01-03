//#region Imports
import React, { Component } from "react";
import CardNota from "../CardNota";
import "./ListaDeNotas.css";
//#endregion

class ListaDeNotas extends Component {
  render() {
    return (
      <div className="listaNotas_area">
        <ul className="listaNotas">
          {this.props.notas.map((nota, index) => {
            return (
              <li className="listaNotas_item" key={index}>
                <CardNota titulo={nota.titulo} texto={nota.texto} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListaDeNotas;
