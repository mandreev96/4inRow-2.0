import React, {Component} from 'react';
import './style.css';
import Title from "../../Components/Title";
import Field from "./Components/Field";
import {Redirect} from "react-router-dom";
import TopName from "../../Components/TopName";

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
            yourMove: false,
            rival: null,
        };
    }

    dropChip = (column) => {

    };

    render() {
        console.log(this.props);
        const {name, color} = this.props.playerData;
        return (
            <div className='wrapPage'>
                <TopName name={name} color={color}/>
                <Field field={this.state.field}
                       dropChip={this.dropChip}/>
            </div>
        )
    }
}

export default GamePage;
