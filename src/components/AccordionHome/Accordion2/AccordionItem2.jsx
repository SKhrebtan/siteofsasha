import { useRef } from 'react'
// import {ReactComponent as ArrowSvg} from 'img/arrowdown2.svg'
import './Accordion2.css'
import { ReactComponent as PlusSvg } from 'img/plus.svg';
import { ReactComponent as MinusSvg } from 'img/minus.svg';

export const AccordionItem2 = ({ faqItem, onClick, isOpen }) => {
    const itemRef = useRef(null)
    return (
            <li className={`accordion-item2 ${isOpen ? 'isopened' : ''}`}>
            {/* <button
                onClick={()=>onClick()}
                type='button'
                className='accordion-header2'>
                {faqItem.q}
                <ArrowSvg className={`accordion-arrow ${isOpen ? 'active' : ''}`} />
            </button> */}
            <button
                onClick={()=>onClick()}
                type='button'
                className='accordion-header2'>
                {faqItem.q}
                {isOpen ? <MinusSvg className='accordion-minus' /> : <PlusSvg className='accordion-plus' />}
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
