import React, {Component} from 'react';
import '../style.css';

export default class Cell extends Component{

    changeCellColor = () => {
        switch (this.props.state) {
            case 1:
                return {backgroundColor: 'red'};
            case 2:
                return {backgroundColor: 'blue'};
            default:
                return {backgroundColor: 'transparent'};
        }
    };

    classes = () =>
        (this.props.classes) ?
            this.props.classes :
            '';

    render() {
        return (
            <div className={`point`}>
                <div className='point-shell point_hover' style={this.changeCellColor()}/>
            </div>
        );
    }
}
