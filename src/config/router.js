import React, { useState } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import Login from '../screens/login'
import Home from '../screens/home'
import Memos from '../screens/memos'
import NewMemo from '../screens/newMemo'
import Memo from '../screens/memo'

import Header from '../components/header'
import Footer from '../components/footer'

import PrivateRoute from '../utils/privateRoute'

const Routes = () => {
  const [haveToken, setHaveToken] = useState(localStorage.getItem('token'))

  return (
    <Router>
      <Header haveToken={haveToken} setHaveToken={setHaveToken}></Header>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route
          exact
          path='/login'
          component={props => (
            <Login setHaveToken={setHaveToken} {...props}></Login>
          )}
        ></Route>
        <PrivateRoute exact path='/memos' component={Memos}></PrivateRoute>
        <PrivateRoute exact path='/new/memo' component={NewMemo}></PrivateRoute>
        <PrivateRoute exact path='/memo/:id' component={Memo}></PrivateRoute>
        <Redirect to='/'></Redirect>
      </Switch>
      <Footer></Footer>
    </Router>
  )
}

export default Routes
