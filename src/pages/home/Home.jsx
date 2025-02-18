import React, { useEffect } from 'react'
import './Home.scss'
import logo from '../../assets/logo-home.svg'
import loader from '../../assets/loader.png'

export default function Home() {

    useEffect(() => {

        const time = 6000
        
        setInterval(() => {
            window.location.assign('/welcome')
        }, time)

    }, [])

  return (
    <div className='home'>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="loading">
            <img src={loader} alt="loading" />
        </div>
    </div>
  )
}
