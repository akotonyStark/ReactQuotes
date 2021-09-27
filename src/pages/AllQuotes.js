import React from 'react'
import QuoteList from '../components/quotes/QuoteList'
const DUMMY_DATA = [
  {
    id: 'q1',
    author: 'Banner',
    text: 'Hulk Smash',
  },
  {
    id: 'q2',
    author: 'Stark',
    text: 'Genius billionaire playboy philanthropist',
  },
  {
    id: 'q3',
    author: 'Spiderman',
    text: 'With great power comes great responsibility',
  },
  {
    id: 'q4',
    author: 'Thanos',
    text: 'Fun isnt something one considers when balancing the universe, but this...hehe..does put a smile on my face',
  },
]

function AllQuotes() {
  return (
    <>
      <h2>All Quotes</h2>
      <div>
        <QuoteList quotes={DUMMY_DATA} />
      </div>
    </>
  )
}

export default AllQuotes
