import { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class Tooltip extends Component{
    static propTypes = {
        children: PropTypes.node.isRequired,
        content: PropTypes.string
    }
   
    static defauiltProps = {
        content: 'Tooltip content',
        style: {}
    }

    render(){
        const {children, content, style} = this.props

        const classes = classNames(
            'tooltip'
        )

        return(
            <span className='tooltipWrapper'>
                <span style={style} className={classes}>{content}</span>
                <span className='targetElement'>{children}</span>
            </span>
        )
    }

}