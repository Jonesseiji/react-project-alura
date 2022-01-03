//#region Imports
//Cada componente tem seu módulo de export default nos seus arquivos index.js
import "./assets/App.css";
import "./assets/index.css";
import { Component } from "react";
import FormularioDeCadastro from "./components/FormularioDeCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
//#endregion

class App extends Component {
  constructor() {
    super();

    this.state = {
      notas: [],
    };
  }

  criarNota(titulo, texto) {

    //cria objeto
    const novaNota = { titulo, texto };
    //cria novo Array
    const novoArrayNotas = [...this.state.notas, novaNota];
    //cria um novo estado
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  render() {
    return (
      <div className="App">
        <FormularioDeCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </div>
    );
  }
}

export default App;
