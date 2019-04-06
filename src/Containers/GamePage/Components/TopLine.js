import React, {PureComponent} from 'react';
import Cell from "./Cell";

export default class TopLine extends PureComponent {

    line = 7;

    renderCells = () => {
        const line = [];
        for (let i = 0; i < this.line; i++) {
            line.push(<Cell key={i} classes={'point_hover'}/>)
        }
        return line;
    };

    render() {
        return (
            <div style={{display: 'flex'}}>
                {this.renderCells()}
            </div>
        )
    }

}
