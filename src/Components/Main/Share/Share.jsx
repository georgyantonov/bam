import React from 'react'
import './style.scss'
import vk from '../../../Assets/vk.svg'
import upload from '../../../Assets/upload.svg'

export default function Share() {
  function dateCheck(e){

    e.target.className = e.target.value !== '' ? 'with_icon input ' : 'with_icon input'
  };

  function numToMonth(e){
    let months = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря',
    ];
    let nums = e.target.value.split('-')
    let days = nums[2]
    let years = nums[0]
    e.target.setAttribute('placeholder', String(days + " " + months[nums[1]-1] +' '  + years ))
  };

function files(e){
  console.log(e)
  var inputFile = document.getElementById('drop').files;
  console.log(inputFile)
  const values = Object.entries(inputFile)
  console.log(values)
  let uploaded = document.querySelector('.uploaded')
  let span = document.createElement('span')

  values.forEach(entry => {

    const file = entry[1]
    console.log(file)
    let span1 = document.createElement('span')
    let spanCreated = uploaded.appendChild(span1)
    spanCreated.innerText = file.name.length > 10 ? file.name.slice(0, 10) : file.name 
    spanCreated.classList.add("file")
    console.log(spanCreated)
    spanCreated.appendChild(span)
  })
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
            <textarea name="story"  className='input high' placeholder='Расскажите о себе или о своих родственниках, которые принимали участие в строительстве магистрали'></textarea>
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
                  <span className="icon date_from" >
                    <input type="date" className="with_icon from input" name='from' min='1972-04-05' max='1984-10-27' placeholder='05 апреля 1972' onChange={(e) => numToMonth(e)} onChangeCapture={(e) => dateCheck(e)} />
                  </span>
                </div>
                <div className="col">
                <label htmlFor="to">
                  0
                  </label>
                  <span className="icon date_to">
                    <input type="date" className="with_icon to input" name='to' min='1972-04-05' max='1984-10-27' placeholder="27 октября 1984" onChange={(e) => numToMonth(e)} onChangeCapture={(e) => dateCheck(e)} />
                  </span>
                </div>
              </div>
              
              </div>
            </div>
            <label htmlFor="dropzone">Добавьте фото</label>
            <div className="uploaded">

            </div>
            <div className='dropzone high'>
              <label htmlFor="drop">
              <div className='files'>
                <p>
                  Перетащите файлы в эту область
                </p>
              </div>
                <div className="input_button">
                  <div className="input__file-icon-wrapper">
                    <img className="input__file-icon" src={upload} alt="Выбрать файл" />
                  </div>
                  <div className="input__file-button-text">Выберите файл</div>
                </div>
                <input type="file" className='high input' multiple name='files[]' id='drop' onChange={(e) => files(e)}></input>
              </label>
                
            </div>
          </form>
        </div>
    </div>
  )
}
