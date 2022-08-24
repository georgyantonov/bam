import React from 'react'
import Instruction from './Instruction/Instruction'
import Logo from './Logo/Logo'
import MobileNav from './Nav/MobileNav'
import Nav from './Nav/Nav'
import NavItems from './Nav/NavItems'
import './style.scss'

export default function Header() {
  return (
    <header className='header'>
        <div className="header_items">
          <div className='logo'>
              <Logo></Logo>
          </div>
          <Nav></Nav>
          <div className='burgerm'>
            <MobileNav/>
          </div>
          <div className='instr'>
            <Instruction></Instruction>
          </div>
        </div>
    </header>
  )
}
