import './style.scss'
import logo from '../../Assets/Logo.svg'
import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="footer_wrapper">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="pcu">
                <div className="politics">
                    <a href='#'>Политика конфиденциальности</a>
                </div>
                <div className="copyright">&#169; 2022</div>
                <div className='user_agreement'>
                    <a href='#'>Пользовательское соглашение</a>
                </div>
            </div>
        </div>
    </footer>
  )
}
