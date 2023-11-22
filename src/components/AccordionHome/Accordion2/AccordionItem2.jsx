import { useRef } from 'react'
import {ReactComponent as ArrowSvg} from 'img/arrowdown2.svg'
import './Accordion2.css'

export const AccordionItem2 = ({ faqItem, onClick, isOpen }) => {
    const itemRef = useRef(null)
    return (
            <li className={`accordion-item2 ${isOpen ? 'isopened' : ''}`}>
            <button
                onClick={()=>onClick()}
                type='button'
                className='accordion-header2'>
                {faqItem.q}
                <ArrowSvg className={`accordion-arrow ${isOpen ? 'active' : ''}`} />
            </button>
            <div
                className="accordion-collapse"
                style={
                    isOpen ? {height: itemRef.current.scrollHeight} : {height: '0px'}
                }
            >
                        <div className='accordion-body' ref={itemRef}>{faqItem.a}</div>
                        </div>
                       
                    </li>
    )
}
