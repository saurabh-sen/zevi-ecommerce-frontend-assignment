import React from 'react'
import { useLocation } from 'react-router-dom'

import SearchSvg from '../../svgs/SearchSvg'
import logo from "../../assets/zevi-logo.png";
import ResultContainer from '../../components/ResultContainer/ResultContainer';
import './SearchResults.scss'

const SearchResults = () => {

  return (
    <div className="search__results">
      <header className="search__header">
        <div className="search__logo__container">
          <SearchWithinResults />
          <img src={logo} alt="zevi dot ai logo" />
        </div>
      </header>      
      <p className="filter__text">Search Results</p>
      <ResultContainer />
    </div>
  )
}

const SearchWithinResults = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query") || "";
  const [searchQuery, setSearchQuery] = React.useState(query);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
  }

  return (
    <label className='searchbar' htmlFor="searchbar">
      <input type="search" id="searchbar" placeholder="Search for a company" className='search__input'
        onChange={handleChange}
        value={searchQuery}
      />
      <SearchSvg />
    </label>
  )
}

export default SearchResults