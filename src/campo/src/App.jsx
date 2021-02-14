import React, {Component} from 'react'
import {Switch,Route,BrowserRouter} from 'react-router-dom'

import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Tabela1 from './components/Tabela/Tabela1'
import Tabela2 from './components/Tabela/Tabela2'
import Tabela3 from './components/Tabela/Tabela3'
import Tabela4 from './components/Tabela/Tabela4'
import Tabela5 from './components/Tabela/Tabela5'
import Tabela6 from './components/Tabela/Tabela6'
import Tabela7 from './components/Tabela/Tabela7'
import Tabela8 from './components/Tabela/Tabela8'

import './App.css';

export default class App extends Component{
  

  render(){
    
    return (
      <div className="App">
          <BrowserRouter>
              <Header/>
              <Switch>
                  <Route exact={true} path="/" component={Home}/>
                  <Route exact={true} path="/tabela-1" component={Tabela1}/>
                  <Route exact={true} path="/tabela-2" component={Tabela2}/>
                  <Route exact={true} path="/tabela-3" component={Tabela3}/>
                  <Route exact={true} path="/tabela-4" component={Tabela4}/>
                  <Route exact={true} path="/tabela-5" component={Tabela5}/>
                  <Route exact={true} path="/tabela-6" component={Tabela6}/>
                  <Route exact={true} path="/tabela-7" component={Tabela7}/>
                  <Route exact={true} path="/tabela-8" component={Tabela8}/>
              </Switch>
              <Footer/>
          </BrowserRouter>
      </div>
    );
  }
}
