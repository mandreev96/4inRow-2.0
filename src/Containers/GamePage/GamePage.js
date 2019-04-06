import React, {Component} from 'react';
import './style.css';
import Title from "../../Components/Title";
import Field from "./Components/Field";
import CheckGameStatus from '../../CheckGameStatus';
import Services from '../../Services/Services';
import {Redirect} from "react-router-dom";

class GamePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            field: [
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0]
            ],
            yourMove: true,
        };
    }

    dropChip = (column) => {
        const field = [...this.state.field];
        const yourMove = !this.state.yourMove;
        const updatableCell = field[column].lastIndexOf(0);
        field[column][updatableCell] = (!yourMove) ?
            1 : 2;
        this.setState({
            field,
            yourMove,
        });
        console.log(CheckGameStatus(field));
    };

    render() {
        console.log(this.context.router)
        return (
            <div>
                <Title text='start_game'/>
                <Field field={this.state.field}
                       dropChip={this.dropChip}/>
            </div>
        )
    }
}

export default GamePage;
