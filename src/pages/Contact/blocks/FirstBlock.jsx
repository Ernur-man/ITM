import './first.less'
import { useRef, useState } from 'react'

export default function FirstBlock(){
    const [activeName, setActiveName] = useState('nameInp')
    const [activeMail, setActiveMail] = useState('mailInp')
    const [activeTable, setActiveTable] = useState(false)

    const days = [
      { day: 'Tue', time: '09:00 am - 06:00 pm' },
      { day: 'Wed', time: '09:00 am - 06:00 pm' },
      { day: 'Thu', time: '09:00 am - 06:00 pm' },
      { day: 'Fri', time: '09:00 am - 06:00 pm' },
      { day: 'Sat', time: 'Closed' },
      { day: 'Sun', time: 'Closed' }
    ]

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
                        <p>Phone number (Telegram, WhatsApp): <a href="tel:+77773331234">+7(777) 333 1234</a></p>
                        <p className='esp'>Email: <a href="denis@itmcon.com">denis@itmcon.com</a></p>

                        <h4>Hours</h4>

                        <div>
                            <h3>
                                {
                                    !activeTable && (
                                        <span>Open Today <p>09:00 am - 06:00 pm</p> </span>
                                    )
                                }
                                {
                                    activeTable && (
                                        <span>Mon	09:00 am - 06:00 pm</span>
                                    )
                                }
                                <i className="fa-solid fa-caret-down" onClick={()=>setActiveTable(activeTable === false ? true : false)}>

                                </i>
                            </h3>
                            {
                                activeTable && (
                                    <table>
                                        <tbody>
                                            {
                                                days.map((el,i)=>(
                                                    <tr key={i}>
                                                        <td>{el.day}</td>
                                                        <td>{el.time}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                )
                            }
                        </div>
                        
                    </aside>
                </article>
            </div>
        </main>
    )
}
