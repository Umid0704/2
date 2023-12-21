import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Cobinet extends Component {
  render() {
    return (
      <div>
        <Link to='/settings' className='text-[20px] rounded-[7px] bg-blue-500 px-[25px] text-[#fff] py-[10px] '>Settings</Link>
        <Link to='/dashboard' className='text-[20px] rounded-[7px] bg-blue-500 px-[25px] text-[#fff] py-[10px] '>Dashboard</Link>
      </div>
    )
  }
}
