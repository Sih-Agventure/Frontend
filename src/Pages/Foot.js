import React from 'react'
import '../App.css';

function Foot() {
  return (
    <nav className='foot'>
      <img src='https://tillable.com/wp-content/uploads/2020/02/TillableTM-Logo-01.svg' height={200} width={150}></img>
      <ul className='foot-links'>
        <li>Rent</li>
        <li>Buy</li>
        <li>Sell</li>
        <li>Loan</li>
        <li>Manage</li>
        <li>More</li>
        <li>Login | Call Us: 123456789 </li>
      </ul>
    </nav>
  )
}

export default Foot