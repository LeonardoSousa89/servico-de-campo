import React,{Component} from 'react'

import firebase from '../Database/firebase'

import Footer from '../Footer/Footer'

import './Home.css'

export default class Home extends Component{

    constructor(props){
        super(props)

        this.state = {
            valores:[],
            id:'',
            nome:'',
            numero:'',
            observacao:'',
            parceiros:[],
            status:'',
            visita:''
        }
       // this.obter = this.obter.bind(this)
        this.limpar = this.limpar.bind(this)
        this.alterar = this.alterar.bind(this)
        //this.renderizar =  this.renderizar.bind(this)
        
        firebase.database()
        .ref('lista1')
        .child('contato1')
        .on('value',(snapshot)  =>{
            let nome  = this.state
            nome.nome = snapshot.val().nome 
                this.setState(nome)
        })

        firebase.database()
        .ref('lista1')
        .child('contato1')
        .on('value',(snapshot)  =>{
            let numero   = this.state
            numero.numero = snapshot.val().numero 
                this.setState(numero)
        })

        firebase.database()
        .ref('lista1')
        .child('contato1')
        .on('value',(snapshot)  =>{
            let parceiros   = this.state
            parceiros.parceiros = snapshot.val().parceiros 
                this.setState(parceiros)
        })

        firebase.database()
        .ref('lista1')
        .child('contato1')
        .on('value',(snapshot)  =>{
            let status   = this.state
            status.status = snapshot.val().status 
                this.setState(status)
        })

        firebase.database()
        .ref('lista1')
        .child('contato1')
        .on('value',(snapshot)  =>{
            let observacao   = this.state
            observacao.observacao = snapshot.val().observacao 
                this.setState(observacao)
        })

        firebase.database()
        .ref('lista1')
        .child('contato1')
        .on('value',(snapshot)  =>{
            let visita   = this.state
            visita.visita = snapshot.val().visita 
                this.setState(visita)
        })

        firebase.database()
        .ref('lista1')
        .child('contato1')
        .on('value',(snapshot)  =>{
            let id   = this.state
            id.id = snapshot.val().id 
                this.setState(id)
        })
       /* */
       /*
       firebase.database()
               .ref('lista1')
               .on('value',(snapshot)   =>{
                   let valores = this.state
                    valores.valores = []

                    snapshot.forEach(data =>{
                        valores.valores.push({
                            nome:data.val().nome,
                            numero:data.val().numero,
                            parceiros:data.val().parceiros,
                            status:data.val().status,
                            visita:data.val().visita
                        })
                    })
                    this.setState(valores)
               })*/
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
        id:0,
        nome:'',
        numero:'',
        observacao:'',
        parceiros:[],
        status:'',
        visita:''
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
            <div className="contatoVisita">
                <input className="contato"
                    type="text"
                    placeholder="id"
                    value={this.state.id}
                />
                 <input className="visita"
                    type="text"
                    placeholder="primeira visita"
                    value={this.state.visita}
                />
                </div>

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
                {/*
                {
                    this.state.valores.map(dados =>{
                        return(
                            <ul>
                                <li>{dados.nome}</li>
                                <li>{dados.numero}</li>
                                <li>{dados.status}</li>
                                <li>{dados.parceiros}</li>
                                <li>{dados.visita}</li>
                                <li>{dados.observacao}</li>
                            </ul>
                        )
                    })
                }*/}

                <button className="alterar" onClick={this.alterar}>alterar</button>
                <button className="limpar" onClick={this.limpar}>limpar</button>
        </form>
        <Footer/>
            </div>
        )
    }
}