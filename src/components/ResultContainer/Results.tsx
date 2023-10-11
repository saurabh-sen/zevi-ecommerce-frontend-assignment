import React from 'react'
import { useSelector } from 'react-redux';

import ResultsCard from './ResultsCard';
import './Results.scss'
import { RootState } from '../../GlobalState/store';

export interface IResultsData {
  id: number;
  title: string;
  mrp: number;
  selling: number;
  rating: number;
  review_count: number;
  image: string;
  wishlist: boolean;
  brand: string;
};

const Results = () => {

  const filteredResults = useSelector((state: RootState) => state.search.filteredResults);

  return (
    <section className='result__cards'>
      {
         filteredResults.length === 0 ? <p>No Results Found</p>
         : filteredResults.map((result, index) => <ResultsCard key={index} {...result} />)
      }
    </section>
  )
}

export default Results