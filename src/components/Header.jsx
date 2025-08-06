import { Link } from "react-router-dom"
import './header.less'
import { useEffect, useState } from "react"
import logo from '../assets/LOGO.webp'


export default function Header(){
    const [active, setActive] = useState('')
    const menu = ["HOME", "ABOUT", "SERVICES", "CONTACT"]
    
    useEffect(()=>{
        if(active){
            localStorage.setItem('nav',active)
        }
        
    },[active])

    useEffect(()=>{
        const newActive = localStorage.getItem('nav')
        setActive(newActive)
    },[])

    return(
        <>
            <div className="nav-bar">
                <nav></nav>
                <nav></nav>
                <nav></nav>
            </div>
            <header>
                <div className="container">
                    <img src={logo}/>
                    <menu>
                        {
                            menu.map((el,i)=>(
                                <Link key={i} to={el == "HOME" ? "/" : `/${el}`} className={active === el ? "active" : ""} onClick={()=>setActive(el)}>{el}</Link>
                            ))
                        }
                    </menu>
                </div>
            </header>
        </>
    )
}