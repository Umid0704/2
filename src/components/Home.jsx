import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Home extends Component {
  render() {
    return (
      <div className='mt-[20px]'>
        <Link to='/product' className='text-[20px] rounded-[7px] bg-blue-500 px-[25px] text-[#fff] py-[10px] '>Product</Link>
        <Link to='/cobinet' className='text-[20px] rounded-[7px] bg-blue-500 px-[25px] text-[#fff] py-[10px] '>Cobinet</Link>
      </div>
    )
  }
}
