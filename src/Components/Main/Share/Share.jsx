import React from 'react'
import './style.scss'
import vk from '../../../Assets/vk.svg'

export default function Share() {
  return (
    <div className='share'>
        <div className="share_container">
          
            <h1>поделитесь историей</h1>
            <button className='vk'>
              <img src={vk} alt="ВКонтакте" />
              <div className='auth'>Войдите через VK ID</div>
            </button>
          <form>
            <div className="row">
              <div className="col">
            <label htmlFor="email">
              Email*    
            </label>
            <input type="text" className="email" name='email' placeholder='Электронный адрес' required />
            </div>
            <div className="col">
            <label htmlFor="name">Имя*</label>
            <input type="text" className="name" name='name' placeholder='Ваше имя' required />
            </div>
            </div>
          </form>
        </div>
    </div>
  )
}
