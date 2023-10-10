import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Search.scss'
import SearchSvg from '../../svgs/SearchSvg'
import { useDispatch } from 'react-redux'
import { setShowSuggestions } from '../../Features/Search/SearchSlice'

interface ISearchProps {
    query?: string
}

export default function Search({query} : ISearchProps) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hanldeFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        dispatch(setShowSuggestions(true))
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        navigate(`/search?query=${e.target.value}`)
    }

    return (
        <label className='searchbar' htmlFor="searchbar">
            <input type="search" id="searchbar" placeholder="Search for a company" className='search__input'
                onFocus={hanldeFocus} onChange={handleChange}
                value={query}
            />
            <SearchSvg />
        </label>
    )
}