import React, { useState } from 'react'
import './Login.scss'
import { Link, useNavigate } from 'react-router-dom'

const data =[
    {
        id: 1,
        username: 'bekzaad',
        password: '111'
    }
]
function Login() {
    const [guest, setGuest] = useState('')

    const guestHandle = (e) => {
        setGuest('guest')
        window.sessionStorage.setItem('pass', 'guest')
    }

    const navigate = useNavigate()
    const loginHandle = (ev)=>{
        const Username = ev.target.elements.username.value
        const Password = ev.target.elements.password.value

        for (let i = 0; i < data.length; i++) {
            if(data[i].username === Username && data[i].password === Password){
                window.sessionStorage.setItem('pass', 'togri')
                break
            }
            else{
                window.sessionStorage.setItem('pass', 'hato')
            }
        }

        if(window.sessionStorage.getItem('pass') === 'togri'){
            navigate('/')
        }
        else{
            alert('Admin Paroli hato kiritildi')
        }
        if(window.sessionStorage.getItem('pass') === 'guest'){
            navigate('/')
        }
    }

  return (
    <div>
        <div className="login">
            <form onSubmit={loginHandle} id='frm' className='form-control w-25 m-auto' action="#">
                <input type="text" className='form-control' placeholder='UserName' name='username'/>
                <input type="text" className='form-control' placeholder='Password' name='password'/>
                <button type='submit' className="btn btn-primary mt-2">
                    Kirish
                </button>
            </form>
            <div className="guest">
                <b>Yoki mehmon sifatida kirish</b>
                <Link onClick={guestHandle} to='/' className="btn btn-primary mt-2">
                    Mehmon
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Login