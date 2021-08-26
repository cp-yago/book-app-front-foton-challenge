import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import BookDetail from './pages/BookDetail'
import CreateBook from './pages/CreateBook'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/book/form/" exact component={CreateBook} />
        <Route path="/book/:bookId" component={BookDetail} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes