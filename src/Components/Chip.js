import React, {PureComponent} from 'react';
import {MAPPING_COLOR_TO_CLASSNAME} from "../constants";

export default class Chip extends PureComponent {
    onClick = () =>
        this.props.onClick && this.props.onClick();
    render() {
        const {color} = this.props;
        return <div className={`chip ${MAPPING_COLOR_TO_CLASSNAME[color]}`}
                    onClick={this.onClick}/>
    }
}