import { Route, Switch } from 'react-router-dom'
import AllQuotes from './pages/AllQuotes'
import QuoteDetail from './pages/QuoteDetail'

function App() {
  return (
    <Switch>
      <Route path='/quotes'>
        <AllQuotes />
      </Route>
      <Route path='/quotes/:quoteId' exact>
        <QuoteDetail />
      </Route>
      <Route path='/new-quote'></Route>
    </Switch>
  )
}

export default App
