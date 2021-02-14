import React,{Component} from 'react'

import firebase from '../Database/firebase'

import './Tabelas.css'

export default class Tabela1 extends Component{



    constructor(props){
        super(props)

        this.state = {
            valores : [],
            nome:'',
            numero:''
        }

        this.revisao = this.revisao.bind(this)
        this.lista = this.lista.bind(this)
    }




  /**revisão */
    revisao = () =>{

           /**revisão */
           firebase.database().ref('lista1').child('contato2').on('value',(snapshot)=>{
            let numero = this.state
            numero = snapshot.val().numero
            this.setState({numero})
        })
        firebase.database().ref('lista1').child('contato2').on('value',(snapshot)=>{
            let nome = this.state
            nome = snapshot.val().nome
            this.setState({nome})
        })
    }
  /**revisão */





    lista = () =>{
        firebase.database().ref('lista1').on('value', (snapshot)    =>{
            let valores = this.state
            valores.valores = []

            snapshot.forEach((dados)=>{
              valores.valores.push({
                    nome:dados.val().nome,
                    numero:dados.val().numero,
                    parceiros:dados.val().parceiros,
                    status:dados.val().status,
                    visita:dados.val().visita,
                    observacao:dados.val().observacao
                }) 
            })
            this.setState(valores)
        })
    }


    componentDidMount = () =>{
         /**revisão */
         console.log(this.revisao())
          /**revisão */
         this.lista()
    }

   

    render(){
        //const {nome,numero} = this.state
        
        return(
            <div classsName="tabela1">
                {/**revisão */}
                {/**                                     
                <div classsName="revisao">
                    <h5 classsName="rev">nome   :  {nome}  </h5>
                    <h5 classsName="rev">numero :  {numero}</h5>
                </div>
                */}
                <div classsName="Tabela-1" border="1px">
                    <h2 classsName="lista1">Lista 1</h2>
                    <table>
                        <thead>
                            <tr>
                                <td>nome</td>
                                <td>número</td>
                                <td>status</td>
                                <td>parceiros(s)</td>
                                <td>visita</td>
                                <td>observação</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.valores.map((valor,indice)=>{
                                    return(
                                        <tr key={indice}>
                                             <td>{valor.nome}</td>
                                             <td>{valor.numero}</td>
                                             <td>{valor.status}</td>
                                             <td>{valor.parceiros}</td>
                                             <td>{valor.visita}</td>
                                             <td>{valor.observacao}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}