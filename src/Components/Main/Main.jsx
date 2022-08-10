import React from 'react'
import Content from './Content/Content'
import Load from './Load/Load'
import './style.scss'

export default function Main() {
  return (
    <main>
        <div className="first_screen">
            <Content></Content>
            <Load></Load>
        </div>
    </main>
  )
}
