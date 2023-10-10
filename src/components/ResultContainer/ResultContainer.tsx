import React from 'react'
import Filters from './Filters'
import Results from './Results'

const ResultContainer = () => {
  return (
    <section className='result__container' style={{
      display: 'flex',
      gap: '1rem',
    }}>
      <Filters />
      <Results />
    </section>
  )
}

export default ResultContainer