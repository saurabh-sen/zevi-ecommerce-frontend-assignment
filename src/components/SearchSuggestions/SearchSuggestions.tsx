import React from 'react'

import './SearchSuggestions.scss'
import { ITrendData, trendData, popularSuggestionsData } from '../../data/trendData'

const SearchSuggestions: React.FC = () => {
  return (
    <section className='search__suggestions'>
      <div className="suggestions__trends">
        <p className="trends__text heading">Latest Trends</p>
        <div className="trends__container">
          {
            trendData.map(trend => <TrendCard key={trend._id} {...trend} />)
          }
        </div>
      </div>
      <div className="suggestions__popular">
        <p className="popular__text heading">Popular Suggestions</p>
        <div className="popular__container">
          {
            popularSuggestionsData.map((suggestion) => <p key={suggestion._id} className="popular__suggestion">{suggestion.title}</p>)
          }
        </div>
      </div>
    </section>
  )
}

export default SearchSuggestions

const TrendCard: React.FC<ITrendData> = ({ image, title }) => {
  return (
    <div className="trend__card">
      <div className="trend__card--image">
        <img src={image} alt={title} />
      </div>
      <p className="trend__card--description">{title}</p>
    </div>
  )
}