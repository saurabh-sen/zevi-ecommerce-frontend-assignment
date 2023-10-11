import Star from "../../svgs/Star"
import "./Accordion.scss"

interface IAccordionItemProps {
    id: number;
    title: string;
    onChange: (id: number) => (e : React.ChangeEvent<HTMLInputElement>) => void;
}

const AccordionItem = ({ id, title, onChange }: IAccordionItemProps) => {
    return (
        <label className="accordion__content__item" htmlFor={`checkbox${title}`}>
            <input type="checkbox" name="checkbox" id={`checkbox${title}`} className="checkbox" onChange={onChange(id)} />
            <label htmlFor="checkbox" className="accordion__item__text">{title}</label>
        </label>
    )
}

interface IRating {
    rating: number;
    onChange: (id: number) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AccordionItemRating = ({ rating, onChange }: IRating) => {
    return (
        <label className="accordion__content__item" htmlFor={`checkbox${rating}`}>
            <input type="checkbox" name="checkbox" id={`checkbox${rating}`} className="checkbox" onChange={onChange(rating)}  />
            <div className="stars__container">
                {
                    [...Array(5)].map((_, index) => <Star key={index} filled={index < rating} />)
                }
            </div>
        </label>
    )
}

export { AccordionItem, AccordionItemRating }