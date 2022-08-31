import React from 'react'
import './style.scss'
import vk from '../../../Assets/vk.svg'
import upload from '../../../Assets/upload.svg'
import { useState } from 'react'
import { useForm } from "react-hook-form";

export default function Share(props) {
  const [filesArray, setFilesArray] = useState([]);
  let [checked = 'disabled', setChecked] = useState();
  let [data, setData] = useState();
  const{ register, handleSubmit } = useForm();
  const onSubmit = data => setData(data);

  async function sendStory(){
    console.log(JSON.stringify(data))
    let res = await fetch('http://localhost:3000/stories',{
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    let result = await res.json();
  }

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

  function files(e) {
    const values = Object.entries(e.target.files);

    values.forEach(entry => {
      setFilesArray((prev) => {
        console.log(prev);
        return [...prev, entry]
      })
    })
  }

  function deleteFile(index) {
    const newArray = [...filesArray];
    newArray.splice(index, 1);
    setFilesArray(newArray);
  }
  
  function disable(e){
    e.target.checked ? setChecked(String('')): setChecked(String('disabled'))
  }

  return (
    <div className='share'>
        <div className="share_container">
          
            <h1>поделитесь историей</h1>
            <button className='vk'>
              <img src={vk} alt="ВКонтакте" />
              <div className='auth'>Войдите через VK ID</div>
            </button>
          <form  id='form' onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col">
                <label htmlFor="email">
                  Email    
                </label>
                <input {...register('email')} type="text" className="input email" name='email' placeholder='Электронный адрес' required />
              </div>
              <div className="col">
                <label htmlFor="name">
                  Имя*
                </label>
                <input {...register('name')} type="text" className="input name" name='name' placeholder='Ваше имя' required />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="hero">
                  О ком ваша история*
                </label>
                <input {...register('hero')} type="text" className='input hero' name='hero' placeholder='Имя героя' required />
              </div>
            </div>
            <label htmlFor="story">
              Ваша история*
            </label>
            <textarea {...register('story')} name="story"  className='input high' placeholder='Расскажите о себе или о своих родственниках, которые принимали участие в строительстве магистрали'></textarea>
            <div className="row">
              <div className="col">
              <label htmlFor="place">
                    Место работы на БАМе
                  </label>
                <span className="icon">
                  
                  <input {...register('place')} type="text" name='place' className="with_icon input place " placeholder='Место работы' />
                </span>
              </div>
              <div className="col">
              <div className="row dates">
                <div className="col">
                  <label htmlFor="from">
                    Годы работы
                  </label>
                  <span className="icon date_from" >
                    <input {...register('from')} type="date" className="with_icon from input" name='from' min='1972-04-05' max='1984-10-27' placeholder='05 апреля 1972' onChange={(e) => numToMonth(e)} onChangeCapture={(e) => dateCheck(e)} />
                  </span>
                </div>
                <div className="col">
                <label htmlFor="to">
                  0
                  </label>
                  <span className="icon date_to">
                    <input {...register('to')} type="date" className="with_icon to input" name='to' min='1972-04-05' max='1984-10-27' placeholder="27 октября 1984" onChange={(e) => numToMonth(e)} onChangeCapture={(e) => dateCheck(e)} />
                  </span>
                </div>
              </div>
              
              </div>
            </div>
            <label htmlFor="dropzone">Добавьте фото</label>
            <div className="uploaded">
            {filesArray.map((item, index) => {
                return (
                  <span
                    key={item[1].name}
                    className="file"
                  >
                    {item[1].name}
                    <span onClick={() => deleteFile(index)} />
                  </span>
                )
              })}
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
                <input {...register('files')} type="file" className='high input' multiple name='files[]' id='drop' onChange={(e) => files(e)}></input>
              </label>
            </div>
            <div className="mail">
              <p>Если вы хотите загрузить видео, пожалуйста, напишите нам на почту <a href='mailto:video@bam.ru'>video@bam.ru</a>, и мы ответим вам в ближайшее время
              </p>
            </div>
            <div className="submit">
              <input type="checkbox" id='tnc' name='tnc' onChange={(e) => disable(e)}/>
              <label htmlFor='tnc'>Принимаю условия пользовательского соглашения</label>
            </div>
            <button type='submit' onClick={() => sendStory()} disabled={checked}>Поделиться историей</button>
          </form>
        </div>
    </div>
  )
}
