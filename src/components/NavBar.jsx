import React, { useEffect, useState,useContext } from 'react'
import {FiSun,FiMoon} from 'react-icons/fi'
import logo from '../images/logo.svg'
import { regions } from '../helpers'
import { Context } from '../context/context'
function NavBar() {
    const {setRegion} = useContext(Context)
    const [theme,setTheme] = useState('light')


    useEffect(()=>{
        document.documentElement.dataset.theme = theme
    },[theme])

    const changeTheme = ()=>{
        setTheme(theme === 'light' ? 'dark' : 'light')
    }


  return (
    <nav className='navbar'>
        <div className="container navbar__container">
            <a href="#!" className="navbar__logo">
                <img src={logo} alt="logo" />
                <span>REACT WEATHER</span>
            </a>
            <div className="navbar__block">
                <a href="#!" className="navbar__theme" onClick={changeTheme}>
                    {theme === 'light' ? <FiMoon /> : <FiSun />}
                </a>
                <select className='navbar__select' onClick={(e)=>setRegion(e.target.value)}>
                    {
                        regions.map((region)=>(
                            <option key={region.id} value={region.name}>{region.name}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    </nav>
  )
}

export default NavBar