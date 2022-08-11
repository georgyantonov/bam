import React from 'react'
import Instruction from './Instruction/Instruction'
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'
import './style.scss'

export default function Header() {
  return (
    <header className='header'>
        <div className="header_items">
        <Logo></Logo>
        <Nav></Nav>
        <Instruction></Instruction>
        </div>
    </header>
  )
}
