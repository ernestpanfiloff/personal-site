import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Main from './main' 
import About from './About'

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App
