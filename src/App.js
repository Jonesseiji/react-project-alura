//#region Imports
//Cada componente tem seu módulo de export default nos seus arquivos index.js
import "./assets/App.css";
import "./assets/index.css";
import { Component } from "react";
import FormularioDeCadastro from "./components/FormularioDeCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListadeCategorias";
import Categorias from "./data/Categorias";
import ArrayDeNotas from "./data/Notas";
//#endregion

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <div className="App">
        <FormularioDeCadastro
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <main className="conteudoPrincipal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(
              this.categorias
            )}
            categorias={this.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNotas.bind(this.notas)}
            notas={this.notas}
          />
        </main>
      </div>
    );
  }
}

export default App;
