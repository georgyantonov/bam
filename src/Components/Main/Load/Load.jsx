import React from 'react'
import './style.scss'
import story from '../../../Assets/Story.svg'

export default function Load () {
  return (
    <div className='load_history'>
      <a href=""> 
        <img src={story} alt="История" />
        <span>Загрузить историю</span>
      </a>
    </div>
  )
}
