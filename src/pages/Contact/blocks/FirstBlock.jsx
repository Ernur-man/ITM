import './first.less'
import { useRef, useState } from 'react'

export default function FirstBlock(){
    const [activeName, setActiveName] = useState('nameInp')
    const [activeMail, setActiveMail] = useState('mailInp')

    const inpName = useRef(null)
    const inpMail = useRef(null)
    
    function movePlaceholderName(){
        const el = inpName.current
        setActiveName('active_name')
        el.focus()
    }
    function removePlaceholderName(){
        const el = inpName.current
        if (!el.value){
            setActiveName('nameInp')
        }
    }
    function movePlaceholderMail(){
        const el = inpMail.current
        setActiveMail('active_mail')
        el.focus()
    }
    function removePlaceholderMail(){
        const el = inpMail.current
        if (!el.value){
            setActiveMail('mailInp')
        }
    }

    return(
        <>
            <main className="contact">
                <div className="container">
                    <h2>CONTACT US</h2>
                    <article>
                        <aside>
                            <h3>Drop us a line</h3>
                            <form>
                                <p className={activeName} onClick={movePlaceholderName}>Name</p>
                                <input type="text" ref={inpName} onBlur={removePlaceholderName} onClick={movePlaceholderName}/>
                                <p className={activeMail} onClick={movePlaceholderMail}>Email*</p>
                                <input type="text" ref={inpMail} onClick={movePlaceholderMail} onBlur={removePlaceholderMail}/>
                                <textarea placeholder="Message"></textarea>
                                <button>SEND</button>
                            </form>
                        </aside>
                        <aside>
                            <h3>ITM Consulting</h3>
                            <p className='esp'>Location: Heidar Aliyev Street 2, 010000 Astana, Kazakhstan</p>
                            <p>Phone number (Telegram, WhatsApp): +7(777) 333 1234</p>
                            <p className='esp'>Email: denis@itmcon.com</p>

                            <h4>Hours</h4>

                            <p>Open today</p>
                        </aside>
                    </article>
                </div>
            </main>
        </>
    )
}