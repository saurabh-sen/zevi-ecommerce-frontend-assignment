import React from 'react'

import './Filters.scss'
import Accordion from '../Accordion/Accordion'

export interface IBrandFilter {
  id: string
  name: string
}

export interface IPriceRangeFilter {
  id: string
  name: string
}

const BrandsFilter: IBrandFilter[] = [
  {
    id: "1",
    name: "Apple",
  },
  {
    id: "2",
    name: "Samsung",
  }
]

const PriceRangeFilter: IPriceRangeFilter[] = [
  {
    id: "1",
    name: "Under 100",
  },
  {
    id: "2",
    name: "1000 - 3000",
  }
]

const Filters = () => {
  return (
    <section className="filter__container">
      <Accordion title="Brands" childrens={BrandsFilter} />
      <hr className='divider' />
      <Accordion title="Price Range" childrens={PriceRangeFilter} />
      <hr className='divider' />
      <Accordion title="Ratings" />
    </section>
  )
}

export default Filters