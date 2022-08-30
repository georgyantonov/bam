import './style.scss'
import React, { StrictMode } from 'react'
import NavItems from './NavItems'
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'
import {CSSTransition} from 'react-transition-group'

export default function MobileNav() {
  const [open,setOpen] = useState(false)
  const close = <AiOutlineClose className="burger" onClick = { (e)=> setOpen(!open)}/>;
  const menu = <AiOutlineMenu className="burger" onClick = { (e)=> setOpen(!open) && scrollBlock}/>;
  const linkClick = () => setOpen(false);
  function scrollBlock(e){
    
    open ? document.querySelector('body').style.overflow = '' : document.querySelector('body').style.overflow = 'hidden'
  }

  return (
    <div className='mobile_nav' onClick={(e) => scrollBlock(e)}>
      {open ? close : menu}
      <CSSTransition
        in={open}
        timeout={200}
        onEnter= {() => setOpen(true)}
        onClick = {() => setOpen(false)} 
        >
          <NavItems 
            isMobile = {true}
            linkClick = {linkClick}
        /></CSSTransition>
        
    </div>
  )
}
