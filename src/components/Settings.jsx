import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Settings extends Component {
  render() {
    return (
      <div>
        <Link to='/details' className='text-[20px] rounded-[7px] bg-blue-500 px-[25px] text-[#fff] py-[10px] '>Details</Link>
      </div>
    )
  }
}
