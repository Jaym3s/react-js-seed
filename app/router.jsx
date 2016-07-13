import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, IndexRoute, Route} from 'react-router'
import {syncReduxAndRouter} from 'redux-simple-router'

import reducers from 'reducers'
import {createHistory} from 'history/lib'
import configureStore from 'store/configureStore'

import BaseView from 'containers/base.view'
import IndexView from 'containers/index/index.view'

export default class AppRouter {
    constructor() {
        const history = createHistory()
        const store = configureStore()

        syncReduxAndRouter(history, store, state => state.router)

        this.router = <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={BaseView}>
                    <IndexRoute component={IndexView} />
                </Route>
            </Router>
        </Provider>
    }

    run() {
        render(this.router, document.getElementById('app-container'))
    }
}
