import React from 'react';

import './App.scss';
import logo from "./assets/zevi-logo.png";
import Search from './components/Search/Search';
import SearchSuggestions from './components/SearchSuggestions/SearchSuggestions';
import { useSelector } from 'react-redux';
import { RootState } from './GlobalState/store';

function App() {

  const showSuggestions = useSelector((state: RootState) => state.search.showSuggestions)

  return (
    <div className="App">
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
