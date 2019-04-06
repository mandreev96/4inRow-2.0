import React, {PureComponent} from 'react';

export default class Button extends PureComponent{
    click = () =>
        this.props.click();
    render() {
        return (
            <button className={`button ${this.props.classes}`}
                       onClick={this.click}>
                {this.props.children}
            </button>
        );
    }
}
