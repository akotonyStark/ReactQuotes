import React from 'react'
import QuoteForm from '../components/quotes/QuoteForm'

function NewQuote() {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData)
  }
  return (
    <>
      <div>New Quote</div>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </>
  )
}

export default NewQuote
