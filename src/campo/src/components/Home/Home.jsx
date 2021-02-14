import React,{Component} from 'react'

import firebase from '../Database/firebase'

import './Home.css'

export default class Home extends Component{

    constructor(props){
        super(props)

        this.state = {
            contato:'',
            nome:'',
            numero:'',
            observacao:'',
            parceiros:[],
            status:'',
            ultima_visita:''
        }

        //this.renderizar =  this.renderizar.bind(this)
    }

/*
renderizar = (props) =>{
    return(
        <div>
            
                <h1>{props.nome}</h1>
                <h1>{props.idade}</h1>
            
        </div>
    )
}
*/

limpar = (e) =>{
    this.setState({
        contato:'',
        nome:'',
        numero:'',
        observacao:'',
        parceiros:[],
        status:'',
        ultima_visita:''
    })
    console.log('limpou')
    e.preventDefault()
}

alterar = (e) =>{
    console.log('alterou')
    e.preventDefault()
}
 
    render(){
        return(
            <div className="formularioPagina">
                <h1 className="formulario">formulário</h1>
                {/** <renderizar nome="Leonardo" idade="32"/> */}
            <form type="submit" className="HomeComponentlargeDevices">
                <input className="contato"
                    type="text"
                    placeholder="chave de pesquisa. Ex: CONTATO3"
                    value={this.state.contato}
                />

             <div className="nomeNumero">
                        <input className="nome"
                            type="text"
                            placeholder="nome"
                            value={this.state.nome}
                        />

                        <input className="numero"
                            type="text"
                            placeholder="numero"
                            value={this.state.numero}
                        />
                </div>

            <div className="parceirosStatus">
                    <input className="parceiros"
                        type="text"
                        placeholder=" parceiros"
                        value={this.state.parceiros}
                    />
                

                    <input className="status"
                        type="text"
                        placeholder=" status"
                        value={this.state.status}
                    />
           </div>

                <textarea className="observacao"
                    type="text"
                    placeholder="observação"
                    value={this.state.observacao}
                />

                <button className="alterar" onClick={this.alterar}>alterar</button>
                <button className="limpar" onClick={this.limpar}>limpar</button>
        </form>
            </div>
        )
    }
}