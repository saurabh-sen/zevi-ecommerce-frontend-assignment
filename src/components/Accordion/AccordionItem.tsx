import Star from "../../svgs/Star"
import "./Accordion.scss"

interface IAccordionItemProps {
    id: string
    title: string
}

const AccordionItem = ({ id, title }: IAccordionItemProps) => {
    return (
        <label className="accordion__content__item" htmlFor={`checkbox${id}`}>
            <input type="checkbox" name="checkbox" id={`checkbox${id}`} className="checkbox" />
            <label htmlFor="checkbox" className="accordion__item__text">{title}</label>
        </label>
    )
}

interface IRating {
    rating: number
}

const AccordionItemRating = ({ rating }: IRating) => {
    return (
        <label className="accordion__content__item" htmlFor={`checkbox${rating}`}>
            <input type="checkbox" name="checkbox" id={`checkbox${rating}`} className="checkbox" />
            <div className="stars__container">
                {
                    [...Array(5)].map((_, index) => <Star key={index} filled={index < rating} />
                    )
                }
            </div>
        </label>
    )
}

export { AccordionItem, AccordionItemRating }