import { Link } from "react-router-dom"
import './first.less'
import Header from '../../../components/Header'
export default function FirstBlock(){
    return(
        <>
            
            <main className="first">
                
                <Header/>
                <div className="container">
                    <article>
                        <span>STRATEGY.HEIGHT.<br/><p>SUCCESS.</p></span>
                        <button><Link to="/contact">Contact Us</Link></button>
                    </article>
                </div>
            </main>
        </>
    )
}