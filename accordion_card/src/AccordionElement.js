import './css/AccordionElement.css'
import seta from './images/icon-arrow-down.svg'
import { useState } from 'react'



function AccordionElement({title, message}){
    const [show, setShow] = useState(false)
    const [rotateArrow, setRotateArrow] = useState(false)

    function handlerClick(){
        setShow(!show)
        setRotateArrow(!rotateArrow)
    }

    return(
        <div onClick={handlerClick} className="AccordionElement">
            <div className="header">
                <h1>{title}</h1>
                <div className={`box-arrow arrow-down ${rotateArrow ? 'rotate-arrow': ''}`}>
                    <img src={seta} alt="arrow-down"/>
                </div>
            </div>
            <div className={`message ${show ? 'show': 'not-show'}`}>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default AccordionElement;