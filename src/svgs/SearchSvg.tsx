import React from 'react'

interface ISearchProps {
    className?: string;
    style?: React.CSSProperties;
}

const SearchSvg: React.FC<ISearchProps> = (props) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a69fad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search__icon"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
    )
}

export default SearchSvg;