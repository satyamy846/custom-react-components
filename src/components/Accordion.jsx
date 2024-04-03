import './Styles/Accordion.css';
import { useState } from 'react';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccordionItem from './AccordionItem';
const items = [
    {
        title: "What is stack?",
        content: [
            {
                content_text: "Linear data structure which works on LIFO principal"
            },
        ]

    },
    {
        title: "What is linked lists",
        content: [
            {
                content_text: "Linear data structure which has two nodes one stores data and another points to the next node"
            },
        ]
    },
]



const Accordion = () => {
    return (
        <div className='container'>
            <div className="accordian-container">
                {items.map((item, index) => {
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
        </div>
    )
}

export default Accordion;