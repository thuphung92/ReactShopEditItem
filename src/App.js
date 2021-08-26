import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Logout from './views/Logout';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/ProtectedRoute'

import SingleProduct from './views/SingleProduct';
import AddProduct from './views/AddProduct';
import UpdateProduct from './views/UpdateProduct'


import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state={
      username:'',
      token:''
    }
  }

  static getDerivedStateFromProps=(props,state)=>{
    return {"token":localStorage.getItem('token'), "username":localStorage.getItem('username')}
  }
  
  setUser = (username)  =>{
    this.setState({username});
  }
  
  setToken=(token)=>{
    this.setState({token})
  }
  
  doLogout=()=>{
    localStorage.clear()
    this.setToken('')
    this.setUser('')
  }

  render() {
    return (
      <div>
         <NavBar token={this.state.token} username={this.state.username}/>

          <Switch>
            <ProtectedRoute token={this.state.token} exact path = "/" render={()=><Home/>}/>
            <ProtectedRoute token={this.state.token} exact path = "/product:id" render={(props)=><SingleProduct {...props} />}/>
            <ProtectedRoute token={this.state.token} exact path = "/addproduct" render={()=><AddProduct/>}/>
            <ProtectedRoute token={this.state.token} exact path = "/updateproduct" render={()=><UpdateProduct/>}/>
            <ProtectedRoute token={this.state.token} exact path = "/logout" render={()=><Logout doLogout={this.doLogout}/>}/>

            <Route exact path = "/login" render={()=><Login setToken={this.setToken} setUser={this.setUser}/>}/>
          </Switch>
      </div>
    )
  }
}
