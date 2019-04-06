import React, {Component} from 'react';
import Title from "../../Components/Title";
import ChipsCarousel from "./Components/ChipsCarousel";
import Button from "../../Components/Button";
import {Link} from "react-router-dom";

export default class SelectColorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedColor: 0,
        };
    }

    selectColor = (color) => {
        this.setState({selectedColor: color});
    };
    submitColor = () => {
        this.props.submitPlayerData({color: this.state.selectedColor});
    };

    render() {
        console.log(this);
        return (
            <div className='wrapPage'>
                <Title text='select_color_chip'/>
                <ChipsCarousel classes={'wrapCarousel'} selectColor={this.selectColor}/>
                <Link to={'/mode'}>
                    <Button click={this.submitColor} classes='button_submit'>Select color</Button>
                </Link>
            </div>
        )
    }
}
