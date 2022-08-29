import './style.scss'
import React from 'react'
import NavItems from './NavItems'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'
import {CSSTransition} from 'react-transition-group'

export default function MobileNav() {
  const [open,setOpen] = useState(false)
  const close = <AiOutlineClose className="burger" onClick = { ()=> setOpen(!open)}/>;
  const menu = <AiOutlineMenu className="burger" onClick = { (e)=> setOpen(!open)}/>;
  const linkClick = () => setOpen(false);

  return (
    <div className='mobile_nav' >
      {open ? close : menu}
      <CSSTransition
        in={open}
        timeout={200}
        onEnter= {() => setOpen(true)}
        onClick = {() => setOpen(false)} >
          <NavItems 
            isMobile = {true}
            linkClick = {linkClick}
        /></CSSTransition>
        
    </div>
  )
}
