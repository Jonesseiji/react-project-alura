//#region Imports
import React, { Component } from "react";
import "./FormularioDeCadastro.css";
//#endregion

class FormularioDeCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }
  _handleMudancaTitulo(evento) {
    console.log(evento.target.value);
    this.titulo = evento.target.value;
    evento.stopPropagation();
  }
  _handleMudancaTexto(evento) {
    console.log(evento.target.value);
    this.texto = evento.target.value;
    evento.stopPropagation();
  }
  _criarNota(evento) {
    console.log(`[FORM SUCCESS] Título: ${this.titulo} || Nota: ${this.texto}`);
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="formCadastro" onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Insira o título"
          className="formCadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
          /* o bind(this) está associando ao this.titulo instanciado no handleMudancaTitulo(evento) */
        />
        <textarea
          rows={25}
          placeholder="Escreva sua nota..."
          className="formCadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="formCadastro_input formCadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}
export default FormularioDeCadastro;
