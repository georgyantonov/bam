import React from 'react'
import './style.scss'
import  wedding from '../../../Assets/weding.png'
import employees from '../../../Assets/employees.png'

export default function About() {
  return (
    <div className="about_bam">
        <div className="about_header">
            <span>БАЙКАЛО-</span>
            <br/>АМУРСКАЯ <br/>МАГИСТРАЛЬ
        </div>
        <div className="description">
        грандиозный замысел, проект, который <br/> когда-то стал реальным благодаря<br/> героическому труду обычных людей
        </div>
        <div className="bam_info">
          <div className="wedding">
            <img src={wedding} alt="Свадьба" />
          </div>
          <div className="employees">
            <img src={employees} alt="Строители" />
            <div className="bg"></div>
            <p className='portal'>Это портал, посвященный БАМу,<br/> и интерактивный архив, где найдут свое<br/> место истории всех героев великой<br/> стройки — от начала до наших дней</p>
            <p className='tell'>Вы узнаете больше о настоящем БАМе: почувствуете дух того <br/> времени через истории людей, воспоминания, дневники, мемуары,<br/> очерки, фотографии.<br/><br/>
                Расскажите историю: свою или ваших родных! Загружайте<br /> фотографию своих героев. Станьте соавтором великой истории<br /> Байкало-амурской магистрали!</p>
          </div>
        </div>
    </div>
  )
}
