import React from 'react'

import { IBrandFilter, IPriceRangeFilter } from "../ResultContainer/Filters";
import { AccordionItem, AccordionItemRating } from "./AccordionItem";
import "./Accordion.scss"
import Down from "../../svgs/Down";

interface IAccordionProps {
    title: string
    childrens?: IBrandFilter[] | IPriceRangeFilter[]
}

const Accordion = ({ title, childrens }: IAccordionProps) => {

    const [isOpen, setIsOpen] = React.useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="accordion">
            <div className="accordion__title" onClick={handleToggle}>
                <p className="accordion__title__text">{title}</p>
                <span className="accordion__title__icon" >
                    <Down />
                </span>
            </div>
            {
                isOpen && <AccordionContent title={title} childrens={childrens} />
            }

        </div>
    )
}

const AccordionContent = ({ title, childrens }: IAccordionProps) => {
    return (
        <div className="accordion__content">
            {
                title !== 'Ratings'
                    ? <>
                        {
                            childrens?.map((child) => <AccordionItem key={child.id} id={child.id} title={child.name} />)
                        }
                    </>
                    : <>
                        <AccordionItemRating rating={5} />
                        <AccordionItemRating rating={4} />
                        <AccordionItemRating rating={3} />
                        <AccordionItemRating rating={2} />
                        <AccordionItemRating rating={1} />
                    </>
            }

        </div>
    )
}

export default Accordion;