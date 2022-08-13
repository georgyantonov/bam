import React from 'react'
import About from './About/About'
import Content from './Content/Content'
import Load from './Load/Load'
import './style.scss'
import Share from './Share/Share'
export default function Main() {
  return (
    <main>
        <div className="first_screen">
            <Content></Content>
            <Load></Load>
        </div>
        <About></About>
        <Share></Share>
    </main>
  )
}
