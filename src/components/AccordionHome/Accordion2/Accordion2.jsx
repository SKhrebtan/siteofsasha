import { useState } from "react";
import { AccordionData } from "../data";
import { AccordionItem2 } from "./AccordionItem2";
import './Accordion2.css';

export const Accordion2 = () => {
    const [openId, setOpenId] = useState(null);

    return (
        <ul className="accordion2">
            {AccordionData.map((faqItem, id) => 
                <AccordionItem2
                    onClick={()=> id===openId ? setOpenId(null) : setOpenId(id)}
                    faqItem={faqItem}
                    isOpen={id === openId}
                    key={id}
                />
            )}
        </ul>
    )
}