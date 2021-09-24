import React from 'react'
import { useParams, Route } from 'react-router-dom'
import Comment from '../components/comments/Comments'

function QuoteDetail() {
  const params = useParams()

  return (
    <>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comment></Comment>
      </Route>
    </>
  )
}

export default QuoteDetail
