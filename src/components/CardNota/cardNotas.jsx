import { Component } from "react";
import "./style.css"

export class CardNotas extends Component {
    render() { 
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                    <p className="card-nota_texto">{this.props.texto}</p>
                </header>
            </section>
        );
    }
}