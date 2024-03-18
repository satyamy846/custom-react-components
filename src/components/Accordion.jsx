import './Styles/Accordion.css';
import { useState } from 'react';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const items = [
    {
        title:"Workshops",
        content_heading1: "Service",
        content:[
            {
                content_heading:"Service",
                content_text:"LoDDoS - DDOS Testing Tool"
            },
            {
                content_heading:"Plan Advanced bills",
                content_text:"$0.20/billed"
            },
        ]

    },
    {
        title:"Model Development",
        content:[
            {
                content_heading:"Service",
                content_text:"System Performance Monitoring"
            },
            {
                content_heading:"Plan Advanced bills",
                content_text:"$2.60/billed"
            },
        ]
    },
    {
        title:"Ongoing Consulting",
        content:[
            {
                content_heading:"Service",
                content_text:"Technical Support Services"
            },
            {
                content_heading:"Plan Advanced bills",
                content_text:"$12/billed"
            },
        ]
    },
    {
        title:"For Startups",
        content:[
            {
                content_heading:"Service",
                content_text:"Bug Monitoring and realtime fixes"
            },
            {
                content_heading:"Plan Advanced bills",
                content_text:"$18/billed"
            },
        ]
    },
]

const AccordionItem = ({title, content})=>{
    const content_items = [...content];
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    return (
        <>
            <div className="Accordion" onClick={()=> setIsAccordionOpen(!isAccordionOpen)}>
                <div className='Accordion-Heading'>
                    <div className='Accordion-Title'>{title}</div>
                    {isAccordionOpen ? '-' : "+"}
                </div>
                <div className={`Accordion-Body ${isAccordionOpen ? 'Accordion-Active' : ''}`}>
                {content_items.map((item) => (
                    <>
                    <div className="Accordion-Content-Header">{item.content_heading}</div>
                    <div className="Accordion-Content-Text">{item.content_text}</div>
                    </>
                ))}
                </div>
            </div>
        </>
    )
}

const Accordion = () =>{
    return (
        <>
            <div className="Accordian-Container">
                {items.map((item, index) =>{
                    return (
                        <>
                            <AccordionItem
                                key={index}
                                title={item.title}
                                content={item.content}
                            />
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Accordion;