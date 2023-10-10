import React from 'react'

import './Search.scss'
import SearchSvg from '../../svgs/SearchSvg'
import { useDispatch } from 'react-redux'
import { setShowSuggestions } from '../../Features/Search/SearchSlice'

export default function Search() {

    const dispatch = useDispatch();

    const hanldeFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        dispatch(setShowSuggestions(true))
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // route to search results page
    }

    return (
        <div className="app__search">
            <label className='searchbar' htmlFor="searchbar">
                <input type="search" id="searchbar" placeholder="Search for a company" className='search__input'
                onFocus={hanldeFocus} onChange={handleChange}
                />
                <SearchSvg />
            </label>
        </div>
    )
}