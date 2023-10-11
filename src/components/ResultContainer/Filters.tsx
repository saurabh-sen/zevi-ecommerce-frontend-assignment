import React from 'react'

import './Filters.scss'
import Accordion from '../Accordion/Accordion'
import { useDispatch } from 'react-redux'
import { handleBrandFilter, handlePriceRangeFilter, handleRatingFilter } from '../../Features/Search/SearchSlice'

export interface IBrandFilter {
  id: number
  name: string
}

export interface IPriceRangeFilter {
  id: number;
  name: string;
  minValue: number;
  maxValue: number;
}

const BrandsFilter: IBrandFilter[] = [
  {
    id: 1,
    name: "Mango",
  },
  {
    id: 2,
    name: "H&M",
  }
]

const PriceRangeFilter: IPriceRangeFilter[] = [
  {
    id: 1,
    name: "Under 100",
    minValue: 0,
    maxValue: 100
  },
  {
    id: 2,
    name: "1000 - 3000",
    minValue: 1000,
    maxValue: 3000
  }
]

const Filters = () => {

  const dispatch = useDispatch();

  const handleBrandCheck = (id: number) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const checked = e.target.checked;
      dispatch(handleBrandFilter({ id, checked }))
    }
  }

  const handlePriceCheck = (id: number) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const checked = e.target.checked;
      dispatch(handlePriceRangeFilter({ id, checked }))
    }
  }

  const handleRatingCheck = (rating: number) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(handleRatingFilter({ rating: rating, checked: e.target.checked }))
    }
  }

  return (
    <section className="filter__container">
      <Accordion title="Brands" childrens={BrandsFilter} onChange={handleBrandCheck} />
      <hr className='divider' />
      <Accordion title="Price Range" childrens={PriceRangeFilter} onChange={handlePriceCheck} />
      <hr className='divider' />
      <Accordion title="Ratings" onChange={handleRatingCheck} />
    </section>
  )
}

export default Filters