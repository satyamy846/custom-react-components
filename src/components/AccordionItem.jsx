import { useState } from "react";
import './Styles/AccordionItem.css';
const AccordionItem = ({title, content})=>{
    const content_items = [...content];
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    return (
        <>
            <div className="accordion" onClick={()=> setIsAccordionOpen(!isAccordionOpen)}>
                <div className='accordion-heading'>
                    <div className='accordion-title'>{title}</div>
                    {isAccordionOpen ? '-' : "+"}
                </div>
                <div className={`accordion-body ${isAccordionOpen ? 'accordion-active' : ''}`}>
                {content_items.map((item, index) => (
                    <div className="accordion-content-text" key={index}>{item.content_text}</div>
                ))}
                </div>
            </div>
        </>
    )
}

export default AccordionItem;