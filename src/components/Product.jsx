import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Product extends Component {
  render() {
    return (
      <div>
        <Link to='/id' className='text-[20px] rounded-[7px] bg-blue-500 px-[25px] text-[#fff] py-[10px] '>Id</Link>
        <Link to='/settings' className='text-[20px] rounded-[7px] bg-blue-500 px-[25px] text-[#fff] py-[10px] '>Settings</Link>
      </div>
    )
  }
}
