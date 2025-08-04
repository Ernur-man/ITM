import { Link } from "react-router-dom"
import './header.less'
import { useState } from "react"
export default function Header(){
    const [active, setActive] = useState('HOME')
    const menu = ["HOME", "ABOUT", "SERVICES", "CONTACT"]
    
    return(
        <>
            <header>
                <div className="container">
                    <h1>LOGO</h1>
                    <menu>
                        {
                            menu.map((el,i)=>(
                                <Link key={i} to={active === "HOME" ? "/" : `/${active}`} className={active === el ? "active" : ""} onClick={(e)=>setActive(e.target.innerText)}>{el}</Link>
                            ))
                        }
                    </menu>
                </div>
            </header>
        </>
    )
}