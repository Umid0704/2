import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Balance from './components/Balance'
import Dashboard from './components/Dashboard'
import Details from './components/Details'
import Id from './components/Id'
import Product from './components/Product'
import Settings from './components/Settings'
import Cobinet from './components/Cobinet'
export default class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/balance' element={<Balance/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/details' element={<Details/>} />
          <Route path='/id' element={<Id/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/settings' element={<Settings/>} />
          <Route path='/cobinet' element={<Cobinet/>} />
        </Routes>
      </div>
    )
  }
}
