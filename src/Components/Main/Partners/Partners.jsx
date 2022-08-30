import React from 'react'
import './style.scss'
import iri from '../../../Assets/iri.png'
import rzd from '../../../Assets/rzd.png'
import vk from '../../../Assets/vk.png'

export default function Partners() {
    let partnersArray = [
        {
            logo: iri,
            name:'ИРИ',
            text:'Проект создан при поддержке Института развития интернета',
        },
        {
            logo: rzd,
            name: 'ОАО "РЖД"',
            text:'Генеральный партнер ОАО "РЖД"',
        },
        {
            logo: vk,
            name:'VK',
            text:'Технологический и информационный партнер Компания VK',
        }
    ]
  return (
    <div className='partners'>
        <div className='partners_header'>
            <span>Партнеры</span>
        </div>
        <div className="partners_cards">
            { partnersArray.map(({logo, text, name},item, index) => {
                return(
                    <div className="card" key={text}>
                        <div className="part_logo">
                            <div>
                            <img src={logo} alt={name} />
                            </div>
                        </div>
                        <div className='part_text'>
                            <div>
                                <p>{text}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
