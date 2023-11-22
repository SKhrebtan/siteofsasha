import { useState } from "react";
import { AccordionData } from "./data";
import { AccordionItem } from "./AccordionItem";
import './Accordion.css';

export const Accordion = () => {
    const [openId, setOpenId] = useState(null);

    return (
        <ul className="accordion">
            {AccordionData.map((faqItem, id) => 
                <AccordionItem
                    onClick={()=> id===openId ? setOpenId(null) : setOpenId(id)}
                    faqItem={faqItem}
                    isOpen={id === openId}
                    key={id}
                />
            )}
        </ul>
    )
}