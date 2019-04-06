import React, {PureComponent} from 'react';

export default class Name extends PureComponent {
    render() {
        return (
            <h2 className='title'>{this.props.text}</h2>
        )
    }

}
