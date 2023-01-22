import React from 'react'
import './Settings.scss'

import avatar from '../../assets/img/avatar.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../Context/Context'

function Settings() {
  const {setIsm2} = useContext(Context)
  const {setVaz2} = useContext(Context)
  const {setIsh2} = useContext(Context)

  const [ism, setIsm] = useState('Bekzad Ergashev')
  const [vaz, setVaz] = useState('Kompyuter Mutahassisi')
  const [ish, setIsh] = useState('Men Bekzod Ergashev Hozirda Kompyuterlarni tuzatish bilan shugullanaman')
  
  const {setTel2} = useContext(Context)
  const {setTg2} = useContext(Context)

  const {setAvatar2} = useContext(Context)

  const [tel, setTel] = useState('998 93 425 26 23')
  const [tg, setTg] = useState('https://t.me/bekzadergashev')
  
  const changeHandle = (e)=>{
    e.preventDefault()
    let target = e.target
    setIsm2(target.ism.value)
    setVaz2(target.vaz.value)
    setIsh2(target.ish.value)

    setIsm(target.ism.value)
    window.localStorage.setItem('ism', target.ism.value)
    setVaz(target.vaz.value)
    window.localStorage.setItem('vaz', target.vaz.value)
    setIsh(target.ish.value)
    window.localStorage.setItem('ish', target.ish.value)
  }

  const changeHandleAddres = (e)=>{
    e.preventDefault()
    let target = e.target
    setTel2(target.tel.value)
    setTg2(target.tg.value)

    setTel(target.tel.value)
    window.localStorage.setItem('tel', target.tel.value)
    setTg(target.tg.value)
    window.localStorage.setItem('tg', target.tg.value)
  }
  const [image, setImage] = useState(null)
  const [file, setFile] = useState('no')
  return (
    <div>
      <div className="about container">
          <div className="about-head">
              <div className='about-head-s'>
                  <p>Salom Men</p>
                    <h2>{!window.localStorage.getItem('ism') ? ism : window.localStorage.getItem('ism')}</h2>
                    <h2>{!window.localStorage.getItem('vaz') ? vaz : window.localStorage.getItem('vaz')}</h2>
                    <p>{!window.localStorage.getItem('ish') ? ish : window.localStorage.getItem('ish')}</p>
                  <form onSubmit={changeHandle} className='frm' action="#">
                    <input type="text" placeholder='Ism' name='ism'/>
                    <input type="text" placeholder='Ishi vazifasi' name='vaz'/>
                    <input type="text" placeholder='Nimalar bilan shug`ullanishi' name='ish'/>
                    <button type='submit'>O`zgartirish</button>
                  </form>
                  <label htmlFor="#">
                      <a href={"tel:" + !window.localStorage.getItem('tel') ? tel : window.localStorage.getItem('tel')}><i className="bi bi-telephone"></i>+{!window.localStorage.getItem('tel') ? tel : window.localStorage.getItem('tel')}</a>
                  </label>
                  <label htmlFor="#">
                      <a href={!window.localStorage.getItem('tg') ? tg : window.localStorage.getItem('tg')}><i className="bi bi-telegram"></i>Telegram</a>
                  </label>
                  <form className='frm' onSubmit={changeHandleAddres} action="#">
                    <input type="number" placeholder='Telefon nomerni o`zgartirish' name='tel'/>
                    <input type="text" placeholder='Telegram manzilni ozgartirish' name='tg'/>
                    <button type='submit'>O`zgartirish</button>
                  </form>
              </div>
              <div className='about-head-f'>
                  <label htmlFor="in" className='avatar'>
                      {
                        image ? <img src={image} alt="avatar" />
                        :
                        <img src={window.localStorage.getItem('avatarImg') ? window.localStorage.getItem('avatarImg') : avatar} alt="avatar" />
                      }
                      <form action="#">
                        <h5 className='newAv1' onClick={()=> document.querySelector('.newAv').click()}>Yangi rasm</h5>
                      <input className='newAv' onChange={({ target: {files}})=>{
                        files[0] && setFile(files[0].name)
                        if(files){
                          setImage(URL.createObjectURL(files[0]))
                        }
                        const reader = new FileReader()
                        reader.onload = async (event) => {
                          window.localStorage.setItem('avatarImg', event.target.result)
                          // console.log(event.target.result);
                        }
                        reader.readAsDataURL(files[0])
                        console.log(reader);
                      }}
                        accept='image/*' id='in' type="file" hidden/>
                      </form>
                  </label>
              </div>
          </div>
      </div>
      <Link to='/' className='href'><i className="bi bi-box-arrow-left"></i>Qaytish</Link>
  </div>
  )
}

export default Settings