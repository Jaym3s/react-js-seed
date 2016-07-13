import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {bindActionCreators} from 'redux'
import * as UserActions from 'actions/user'

const mapStateToProps = state => state.userReducer
const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch)

export class IndexView extends Component {
    constructor() {
        super(...arguments)
        console.log(...arguments)
    }

    render() {
        return <div>
            <h3>Index Page Carlos</h3>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexView)
