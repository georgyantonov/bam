import React from 'react'
import './style.scss'
import vk from '../../../Assets/vk.svg'

export default function Share() {
  function dateCheck(e){
    console.log('Получен фокус на поле ввода');
    e.target.className = e.target.value !== '' ? 'with_icon from input  has-value' : ''
  }
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
                <input type="text" className="input email" name='email' placeholder='Электронный адрес' required />
              </div>
              <div className="col">
                <label htmlFor="name">
                  Имя*
                </label>
                <input type="text" className="input name" name='name' placeholder='Ваше имя' required />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="hero">
                  О ком ваша история*
                </label>
                <input type="text" className='input hero' name='hero' placeholder='Имя героя' required />
              </div>
            </div>
            <label htmlFor="story">
              Ваша история*
            </label>
            <textarea name="story"  className='input story' placeholder='Расскажите о себе или о своих родственниках, которые принимали участие в строительстве магистрали'></textarea>
            <div className="row">
              <div className="col">
              <label htmlFor="place">
                    Место работы на БАМе
                  </label>
                <span className="icon">
                  
                  <input type="text" name='place' className="with_icon input place " placeholder='Место работы' />
                </span>
              </div>
              <div className="col">
              <div className="row dates">
                <div className="col">
                  <label htmlFor="from">
                    Годы работы
                  </label>
                  <span className="icon date_from">
                    <input type="date" className="with_icon from input" name='from' min='1972-04-05' max='1984-10-27' placeholder='05 апреля 1972' onChange={(e) => dateCheck(e)}/>
                  </span>
                </div>
                <div className="col">
                <label htmlFor="to">
                  0
                  </label>
                  <span className="icon date_to">
                    <input type="date" className="with_icon from input" name='to' min='1972-04-05' max='1984-10-27' placeholder="27 октября 1984" onChange={(e) => dateCheck(e)} />
                  </span>
                </div>
              </div>
              </div>
            </div>
          </form>
        </div>
    </div>
  )
}
