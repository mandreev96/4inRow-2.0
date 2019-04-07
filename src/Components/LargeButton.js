import React, {PureComponent} from 'react';

export default class LargeButton extends PureComponent {

    click = () =>
        this.props.onClick();

    render() {
        return (
            <div className='largeButton' onClick={this.click}>
                <div className="largeButton_submit">{this.props.text}</div>
            </div>
        )
    }

}
