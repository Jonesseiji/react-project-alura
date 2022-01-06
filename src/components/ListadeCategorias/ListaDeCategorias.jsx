import React, { Component } from "react";
import "./ListaDeCategorias.css";
class ListaDeCategorias extends Component {
  _handleEventoInput(e) {
    if (e.key == "Enter") {
      let valorCategoria = e.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }

  render() {
    return (
      <div className="listaCategorias">
        <ul className="listaCategorias_lista">
          {this.props.categorias.map((categoria, index) => {
            return (
              <li key={index} className="listaCategorias_item">
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="listaCategorias_input"
          placeholder="Insira uma Categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </div>
    );
  }
}

export default ListaDeCategorias;
