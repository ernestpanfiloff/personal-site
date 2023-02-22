import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './main'
import About from './About'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/about" component={About} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
