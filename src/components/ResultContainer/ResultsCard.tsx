import * as React from "react";

import FilledHeart from "../../svgs/FilledHeart";
import Heart from "../../svgs/Heart";
import Star from "../../svgs/Star";
import { IResultsData } from "./Results";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../GlobalState/store";
import { setfilteredResults } from "../../Features/Search/SearchSlice";

const ResultsCard = ({ id, title, mrp, selling, rating, review_count, wishlist, image }: IResultsData) => {

  const filteredResults = useSelector((state: RootState) => state.search.filteredResults);

  const dispatch = useDispatch();

  const [mouseHover, setMouseHover] = React.useState(false);

  const handleMouseHover = () => {
    setMouseHover(true);
  }

  const handleMouseOut = () => {
    setMouseHover(false);
  }
  
  const handleWishlist = (id: number) => {
    return () => {
      const result = filteredResults.map((item) => item.id === id ? { ...item, wishlist: !item.wishlist } : item);
      dispatch(setfilteredResults(result));
    }
  }

  return (
    <div className='result__card' onMouseOver={handleMouseHover} onMouseOut={handleMouseOut}>
      <div className="card__image">
        <img src={image} alt="company logo" />
        <span className="wishlist__icon" onClick={handleWishlist(id)}>
          {
            wishlist ? <FilledHeart /> : <Heart />
          }
        </span>
        {
          mouseHover && <button className="card__view-product">View Product</button>
        }

      </div>
      <p className="card__title">{title}</p>
      <p className="card__price">
        <span className="card__price__mrp">Rs. {mrp}</span>
        <span className="card__price__selling">Rs.{selling}</span>
      </p>
      <div className="card__rating">
        <Rating rating={rating} />
        <span className="rating__text">{`(${review_count})`}</span>
      </div>
    </div>
  )
}

interface IRatingProps {
  rating: number;
}

const Rating = ({ rating }: IRatingProps) => {
  return (
    <div className="rating__container">
      {
        [...Array(5)].map((_, index) => <Star key={index} filled={index < rating} />
        )
      }
    </div>
  )
}

export default ResultsCard;