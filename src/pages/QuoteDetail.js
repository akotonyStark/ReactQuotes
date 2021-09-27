import React from 'react'
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom'
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
  {
    id: 'q4',
    author: 'Thanos',
    text: 'Fun isnt something one considers when balancing the universe, but this...hehe..does put a smile on my face',
  },
]

function QuoteDetail() {
  const params = useParams()
  const match = useRouteMatch()

  console.log(match)
  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId)
  console.log(quote)

  if (!quote) {
    return <HighlightedQuote text='No quote found' />
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className='centered'>
          <Link to={`/quotes/${params.quoteId}/comments`} className='btn--flat'>
            Load Comments
          </Link>
        </div>
      </Route>

      {/* <Route path={`/quotes/${params.quoteId}/comments`}> */}
      <Route path={`${match.path}/comments`}>
        <Comment></Comment>
      </Route>
    </>
  )
}

export default QuoteDetail
