import React, {Component} from 'react';
import Column from "./Column";
import TopLine from "./TopLine";

export default class Field extends Component{

    renderColumns = () => {
        const columns = [...this.props.field];
        return columns.map((column, index) =>
            <Column column={column}
                    index={index}
                    key={index}
                    dropChip={this.props.dropChip}/>);
    };

    renderTransparentCells = () => {
        const field = [...this.props.field];
        return field.map((column, index) =>
            <div className='column' key={index} onClick={() => this.props.dropChip(index)}>
                {column.map((cell, index) =>
                    <div className='point-transparent'
                         key={index}
                    />
                )}
            </div>)
    };

    render() {
        return (
            <div className='field'>
                <TopLine/>
                <div className='field-static field-static_transparent'>
                    <div className='field-chipsShell'>
                        {this.renderTransparentCells()}
                    </div>
                </div>
                <div className='field-static'>
                    <div className="field-chipsShell field-chipsShell_game">
                        {this.renderColumns()}
                    </div>
                </div>
            </div>
        )
    }
}
