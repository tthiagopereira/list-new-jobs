import { Component } from "react";
import './style.css'

export class Form extends Component {
    
    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";
    }

    _handlerMudancaTitulo(event) {
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    _handlerMudancaTexto(event) {
        event.stopPropagation();
        this.texto = event.target.value;
    }

    _createNota(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.createNota(this.titulo, this.texto);
    }

    render() {
        return (
            <form className="form-cadastro"
                onSubmit={this._createNota.bind(this)}>
                <input 
                    className="form-cadastro_input" 
                    type="text" 
                    placeholder="Titulo" 
                    onChange={this._handlerMudancaTitulo.bind(this)}/>

                <textarea 
                    className="form-cadastro_input" 
                    rows={15} 
                    placeholder="Escreva sua nota"
                    onChange={this._handlerMudancaTexto.bind(this)}/>
                <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
            </form>
        )
    }
}