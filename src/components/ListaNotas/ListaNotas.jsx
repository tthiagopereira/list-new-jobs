import { Component } from "react";
import { CardNotas } from "../CardNota/cardNotas";
import './style.css'

export class ListaNotas extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul className="lista-notas">
                {this.props.notas.map((nota, index) => {
                    return (            
                    <li className="lista-notas_item" key={index}>
                        <CardNotas titulo={nota.titulo} texto={nota.texto}/>
                    </li>
                    )
                })}
            </ul>
        );
    }
}