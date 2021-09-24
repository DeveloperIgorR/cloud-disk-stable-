import { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class Tooltip extends Component{
    static propTypes = {
        children: PropTypes.node.isRequired,
        content: PropTypes.string,
        position: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
    }
   
    static defauiltProps = {
        content: 'Tooltip content',
        style: {},
        position: 'top'
    }

    render(){
        const {children, content, style, position} = this.props

        const classes = classNames(
            'tooltip',
            {position}
        )

        return(
            <span className='tooltipWrapper'>
                <span style={style} className={classes}>{content}</span>
                <span className='targetElement'>{children}</span>
            </span>
        )
    }

}