import React from 'react'
import { faker } from '@faker-js/faker';

import SearchSvg from '../../svgs/SearchSvg'
import logo from "../../assets/zevi-logo.png";
import ResultContainer from '../../components/ResultContainer/ResultContainer';
import './SearchResults.scss'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../GlobalState/store';
import { handleSearchFilter, setSearchResults } from '../../Features/Search/SearchSlice';
import { IResultsData } from '../../components/ResultContainer/Results';

const SearchResults = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {
    const result : IResultsData[] = [];
    for(let i = 1; i <= 10; i++) {
      const data = {
        id: i,
        title: faker.commerce.productName(),
        mrp: +faker.commerce.price({ min: 10, max: 400, dec: 0 }),
        selling: +faker.commerce.price({ min: 10, max: 400, dec: 0 }),
        rating: faker.number.int({ min: 1, max: 5 }),
        review_count: faker.number.int({ min: 10, max: 1000 }),
        image: faker.image.fashion(240, 325, true),
        wishlist: faker.datatype.boolean(),
        brand: faker.helpers.arrayElement(["Mango", "H&M"])
      }
      result.push(data);
    }

    dispatch(setSearchResults(result))
  }, [dispatch])

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

  const searchQuery = useSelector((state: RootState) => state.search.searchQuery);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(handleSearchFilter(e.target.value))
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
