import React, {Component} from 'react';
import '../style.css';
import Cell from "./Cell";

export default class Column extends Component{
    renderCells = () => {
        const cells = [...this.props.column];
        return cells.map((cell, index) => <Cell state={cell} key={index}/>)
    };

    dropChip = (index) =>
        this.props.dropChip(index);

    render() {
        return (
            <div className='column'
                 onClick={() => this.dropChip(this.props.index)}>
                {this.renderCells()}
            </div>
        );
    }
}
