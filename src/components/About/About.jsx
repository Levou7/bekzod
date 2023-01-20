/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import './About.scss'
import Typed from 'react-typed'

import avatar from '../../assets/img/avatar.jpg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../Context/Context'
import { useState } from 'react'

function About() {
    const [color, setColor] = useState('red')
    const {ism2} = useContext(Context)
    const {vaz2} = useContext(Context)
    const {ish2} = useContext(Context)
    
    const {tel2} = useContext(Context)
    const {tg2} = useContext(Context)

    useEffect(()=>{
        fetch('https://63c8cf4e904f040a9650aeb0.mockapi.io/user')
        .then(response => response.json())
        .then(data => {
            console.log(data.avatar)
        })
    }, [])

  return (
    <div>
        {
            window.sessionStorage.getItem('pass') === 'togri' ?
            <div>
                <div className="about container">
                    <div className="about-head">
                        <div className='about-head-s'>
                            <p>Salom Men</p>
                            <h2 style={{color: color}}>{ism2}</h2>
                            <h2 style={{color: color}}>{vaz2}</h2>
                            {/* <Typed
                            className='typed-name'
                                strings={[
                                '',
                                ''
                                ]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop >
                                <input type="text" />
                            </Typed> */}
                            <p>{ish2}</p>
                            <label htmlFor="#">
                                <a href={'tel:' + tel2}><i style={{color: color}} className="bi bi-telephone"></i>+{tel2}</a>
                            </label>
                            <label htmlFor="#">
                                <a href={tg2}><i style={{color: color}} className="bi bi-telegram"></i>Telegram</a>
                            </label>
                        </div>
                        <div className='about-head-f'>
                            <label htmlFor="#" className='avatar'>
                                <img src={avatar} alt="avatar" />
                                <span style={{border: `3px solid ${color}`}} className='before'></span>
                                <span style={{border: `3px solid ${color}`}} className='after'></span>
                            </label>
                        </div>
                    </div>
                </div>
                <button className="setting" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"><i className="bi bi-gear-fill"></i></button>

                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">Sozlamalar</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i className="bi bi-x-lg"></i></button>
                    </div>
                    <div className="offcanvas-body">
                        <Link to='/settings'>Sozlamalarga o`tish</Link>
                        <div className='colors'>
                            <span onClick={()=> setColor('red')} className='red color'></span>
                            <span onClick={()=> setColor('green')} className='green color'></span>
                            <span onClick={()=> setColor('blue')} className='blue color'></span>
                            <span onClick={()=> setColor('cyan')} className='cyan color'></span>
                            <span onClick={()=> setColor('white')} className='white color'></span>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div className="about container">
                <div className="about-head">
                    <div className='about-head-s'>
                        <p>Salom Men</p>
                        <Typed
                        className='typed-name'
                            strings={[
                            'Bekzaad Ergashev',
                            'Kompyuter mutahassisi'
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop >
                            <input type="text" />
                        </Typed>
                        <p>Men Bekzod Ergashev Hozirda Kompyuterlarni tuzatish bilan shugullanaman</p>
                        <label htmlFor="#">
                            <a href="tel:998934252623"><i className="bi bi-telephone"></i>+998 93 425 26 23</a>
                        </label>
                        <label htmlFor="#">
                            <a href="https://t.me/bekzadergashev"><i className="bi bi-telegram"></i>Telegram</a>
                        </label>
                    </div>
                    <div className='about-head-f'>
                        <label htmlFor="#" className='avatar'>
                            <img src={avatar} alt="avatar" />
                        </label>
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export {About as AboutCompo}