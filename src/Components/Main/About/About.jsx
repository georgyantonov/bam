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
          </div>
        </div>
    </div>
  )
}
