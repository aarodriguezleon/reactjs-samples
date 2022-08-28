import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import MainPage from './Pages/MainPage/MainPage'
import CityPage from './Pages/CityPage/CityPage'
import WellcomePage from './Pages/WellcomePage/WellcomePage'
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage'
const app = () => {
    return (
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <WellcomePage/>                     
                    </Route>
                    <Route path='/main'>
                        <MainPage/>
                    </Route>
                    <Route path='/city'>
                        <CityPage/>                     
                    </Route>
                    <Route>
                        <NotFoundPage/>  
                    </Route>
                </Switch>
            </Router>           
    )
}

export default app
