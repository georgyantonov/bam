import React from 'react'
import { useState } from 'react';
import './style.scss'

export default function Nav() {
    const [array, setArray] = useState([
        { 
            id: 0,
            name: "Архив",
            url: "#",
        },
        {
            id: 1,
            name: "Дневник БАМа",
            url: "#",
        },
        {
            id: 2,
            name: "Народный альманах",
            url: "#",
        },
        {
            id: 3,
            name: "О проекте",
            url: "#",
        },
        {
            id: 4,
            name: "Партнеры",
            url: "#",
        },
        {
            id: 5,
            name: "Новости",
            url: "#",
        }
    ]) ;
    return (
    
        <div  className='navbarmenu'>
            <ul >
            { array.map(({id, name, url}, index)=> {
                return(
                    
                    <li  key={id}>
                        <a className='nav_item' id={url} >
                           { name } 
                        </a>
                    </li>
                    
                )
            })}
            </ul>
        </div>
      )
}
