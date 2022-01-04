import React, { Component } from "react";

class ListaDeCategorias extends Component {
  _handleEventoInput(e) {
      if (e.key == "Enter") {
          console.log("categoria adicionada")
      }
  }

  render() {
    return (
      <div className="listaCategorias">
        <ul>
          <li>Categorias</li>
        </ul>
        <input
          type="text"
          placeholder="Insira uma Categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </div>
    );
  }
}

export default ListaDeCategorias;
