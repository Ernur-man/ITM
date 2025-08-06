import { useState, useRef } from 'react'
import './widgetChat.less'

export default function WidgetChat(){
    const [activeModal, setActiveModal] = useState(false)
    const [activeName, setActiveName] = useState('nameInpModal')
    const [activeMail, setActiveMail] = useState('mailInpModal')

    const inpNameModal = useRef(null)
    const inpMailModal = useRef(null)
    
    function movePlaceholderNameModal(){
        const el = inpNameModal.current
        setActiveName('active_nameModal')
        el.focus()
    }
    function removePlaceholderNameModal(){
        const el = inpNameModal.current
        if (!el.value){
            setActiveName('nameInpModal')
        }
    }
    function movePlaceholderMailModal(){
        const el = inpMailModal.current
        setActiveMail('active_mailModal')
        el.focus()
    }
    function removePlaceholderMailModal(){
        const el = inpMailModal.current
        if (!el.value){
            setActiveMail('mailInpModal')
        }
    }

    function checkModal(e){
        const tag_Name = e.target.tagName.toLowerCase()
       if(tag_Name === "main"){
            setActiveModal(false)
       }
    }
    return(
        <>
            <main onClick={checkModal} className='layer'>
                <div className="widget" onClick={()=>setActiveModal(activeModal === true ? false : true)}>
                    <nav>
                        <i className="fa-solid fa-message"></i>
                    </nav>
                </div>
                {
                    activeModal && (
                            <aside className='ModalWindow'>
                                <article>
                                    <h3>ITM Consulting</h3>
                                </article>
                                <form>
                                    <p className={activeName} onClick={movePlaceholderNameModal}>Name</p>
                                    <input type="text" ref={inpNameModal} onBlur={removePlaceholderNameModal} onClick={movePlaceholderNameModal}/>
                                    <p className={activeMail} onClick={movePlaceholderMailModal}>Email*</p>
                                    <input type="text" ref={inpMailModal} onClick={movePlaceholderMailModal} onBlur={removePlaceholderMailModal}/>
                                    <textarea placeholder='How can we help?*'></textarea>
                                    <button>SEND</button>
                                </form>
                                <p>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
                            </aside>
                    )
                }
            </main>
        </>
    )
}