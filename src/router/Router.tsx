import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Route, Switch } from 'react-router'
import { useLocation } from 'react-router-dom'

import Home from '../components/pages/Home'
import WeDo from '../components/pages/WeDo'
import WeAre from '../components/pages/WeAre'

const Router = () => {
    const location = useLocation();
    const [_, rootPath] = location.pathname.split("/");
    return (
        <>
            <AnimatePresence exitBeforeEnter >
                <Switch location={location} key={rootPath} >
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/we_do">
                        <WeDo />
                    </Route>
                    <Route exact path="/we_are">
                        <WeAre />
                    </Route>
                </Switch>
            </AnimatePresence>
        </>
    )
}

export default Router
