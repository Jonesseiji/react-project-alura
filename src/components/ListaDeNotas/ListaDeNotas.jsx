//#region Imports
import React, { Component } from "react";
import CardNota from "../CardNota";
import "./ListaDeNotas.css";
//#endregion

class ListaDeNotas extends Component {
  constructor() {
    super();
    this.state = { notas: [] };
  }
  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas.bind(this));
  }

  _novasNotas(notas) {
    this.setState({ ...this.state, notas });
  }

  render() {
    return (
      <div className="listaNotas_area">
        <ul className="listaNotas">
          {this.state.notas.map((nota, index) => {
            return (
              <li className="listaNotas_item" key={index}>
                <CardNota
                  indice={index}
                  apagarNota={this.props.apagarNota}
                  titulo={nota.titulo}
                  texto={nota.texto}
                  categoria={nota.categoria}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListaDeNotas;
