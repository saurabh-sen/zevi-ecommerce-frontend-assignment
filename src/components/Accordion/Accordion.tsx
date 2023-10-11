import React from 'react'

import { IBrandFilter, IPriceRangeFilter } from "../ResultContainer/Filters";
import { AccordionItem, AccordionItemRating } from "./AccordionItem";
import "./Accordion.scss"
import Down from "../../svgs/Down";

interface IAccordionProps {
    title: string
    childrens?: IBrandFilter[] | IPriceRangeFilter[];
    onChange: (id: number) => (e : React.ChangeEvent<HTMLInputElement>) => void;
}

const Accordion = ({ title, childrens, onChange }: IAccordionProps) => {

    const [isOpen, setIsOpen] = React.useState(true);

    return (
        <div className="accordion">
            <div className="accordion__title" onClick={() => setIsOpen(!isOpen)}>
                <p className="accordion__title__text">{title}</p>
                <span className="accordion__title__icon" >
                    <Down />
                </span>
            </div>
            {
                isOpen && <AccordionContent title={title} childrens={childrens} onChange={onChange} />
            }

        </div>
    )
}

const AccordionContent = ({ title, childrens, onChange }: IAccordionProps) => {
    return (
        <div className="accordion__content">
            {
                title !== 'Ratings'
                    ? <>
                        {
                            childrens?.map((child) => <AccordionItem key={child.id} id={child.id} title={child.name} onChange={onChange} />)
                        }
                    </>
                    : <>
                        <AccordionItemRating rating={5} onChange={onChange} />
                        <AccordionItemRating rating={4} onChange={onChange} />
                        <AccordionItemRating rating={3} onChange={onChange} />
                        <AccordionItemRating rating={2} onChange={onChange} />
                        <AccordionItemRating rating={1} onChange={onChange} />
                    </>
            }

        </div>
    )
}

export default Accordion;