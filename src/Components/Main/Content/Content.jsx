import React from 'react'
import play from'../../../Assets/Play.svg'
import './style.scss'

export default function Content() {
  return (
    <div className='content'>
        <div className="years">50</div>
        <div className="abbreviation">БАМ</div>
        <div className="play">
          <img src={play} alt="Смотреть видео" />
          Смотреть видео
        </div>
    </div>
  )
}
