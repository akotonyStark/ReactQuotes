import React from 'react'
import { useParams, Route } from 'react-router-dom'
import Comment from '../components/comments/Comments'

import HighlightedQuote from '../components/quotes/HighlightedQuote'

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
]

function QuoteDetail() {
  const params = useParams()

  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId)
  console.log(quote)

  if (!quote) {
    return <HighlightedQuote text='No quote found' />
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params}/comments`}>
        <Comment></Comment>
      </Route>
    </>
  )
}

export default QuoteDetail
