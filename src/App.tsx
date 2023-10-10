import React from 'react';

import './App.scss';
import logo from "./assets/zevi-logo.png";
import Search from './components/Search/Search';
import SearchSuggestions from './components/SearchSuggestions/SearchSuggestions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './GlobalState/store';
import { setShowSuggestions } from './Features/Search/SearchSlice';

function App() {

  const dispatch = useDispatch();

  const showSuggestions = useSelector((state: RootState) => state.search.showSuggestions)

  // close suggestions when user clicks outside of suggestions
  const handleCloseSuggestions = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains('App')) {
      dispatch(setShowSuggestions(false))
    }
  }

  return (
    <div className="App" onClick={handleCloseSuggestions}>
      <header className="nav">
        <img src={logo} alt="zevi dot ai logo" />
      </header>
      <Search />
      {
        showSuggestions && <SearchSuggestions />
      }
    </div>
  );
}

export default App;
