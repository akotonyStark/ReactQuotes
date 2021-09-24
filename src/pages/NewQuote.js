import React from 'react'
import QuoteForm from '../components/quotes/QuoteForm'
import { useHistory } from 'react-router-dom'

function NewQuote() {
  const history = useHistory()

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData)

    //history.replace('/quotes')
    history.push('/quotes')
  }
  return (
    <>
      <div>New Quote</div>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </>
  )
}

export default NewQuote
