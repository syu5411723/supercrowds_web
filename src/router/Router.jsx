import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/pages/Home'

const Router = () => {
    return (
        <>
            <AnimatePresence>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </AnimatePresence>
        </>
    )
}

export default Router
