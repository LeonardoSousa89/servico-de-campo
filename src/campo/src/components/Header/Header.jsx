import React,{Component} from 'react'
import {Link} from 'react-router-dom'

import './Header.css'

export default class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="largeDevices">
                    <Link to="/" className="title">Serviço de campo&copy;</Link>
                    <Link to="/" className="link"><h5>form</h5></Link>
                    <Link to="/tabela-1" className="link"><h5>tb1</h5></Link>
                    <Link to="/tabela-2" className="link"><h5>tb2</h5></Link>
                    <Link to="/tabela-3" className="link"><h5>tb3</h5></Link>
                    <Link to="/tabela-4" className="link"><h5>tb4</h5></Link>
                    <Link to="/tabela-5" className="link"><h5>tb5</h5></Link>
                    <Link to="/tabela-6" className="link"><h5>tb6</h5></Link>
                    <Link to="/tabela-7" className="link"><h5>tb7</h5></Link>
                    <Link to="/tabela-8" className="link"><h5>tb8</h5></Link>
               </div>
            
               <div className="smallDevices">
                    <Link to="/" className="titleLittle">Serviço de campo&copy;</Link>
               </div>
            </div>

        )
    }
}