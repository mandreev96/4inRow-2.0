import React, {PureComponent} from 'react';

export default class MainTitle extends PureComponent {
    render() {
        return <h1 className='mainTitle' style={this.props.style}>{this.props.text}</h1>
    }
}
