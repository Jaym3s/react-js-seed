import React, {PropTypes} from 'react'

const BaseView = ({children}) => {
    return <div>{children}</div>
}

BaseView.propTypes = {children: PropTypes.element}
export default BaseView
