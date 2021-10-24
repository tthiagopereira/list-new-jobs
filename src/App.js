import { Component } from "react";
import { ListaNotas } from "./components/ListaNotas/ListaNotas";
import './App.css'
import { Form } from "./components/form/form";

class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: []
    };
  }

  createNota(titulo, texto) {
    const newNota = {titulo, texto}
    const newArrayNotas = [...this.state.notas, newNota]
    const newState = {
      notas: newArrayNotas
    }
    this.setState(newState)
  }

  render() {
    return (
      <section className="conteudo">
        <Form createNota={this.createNota.bind(this)}/>
        <ListaNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
