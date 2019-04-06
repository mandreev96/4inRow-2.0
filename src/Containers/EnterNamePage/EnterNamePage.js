import React, {Component} from 'react';
import Button from "../../Components/Button";
import Title from "../../Components/Title";
import {Link} from "react-router-dom";

export default class EnterNamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            notification: false,
        };
    }

    onChangeText = (value) =>
        this.setState({inputText: value, notification: false});

    saveName = () => {
        const {inputText} = this.state;
        if (inputText) {
            this.props.submitPlayerData({name: this.state.inputText});
        } else {
            this.setState({notification: true})
        }
    };

    activeLink = () => {
        if (this.state.inputText) {
            return {pathname: '/color'};
        }
        return '/name';
    };

    changeClassNameNotification = () => {
        const { notification } = this.state;
        return (notification) ?
            'input-notification_show input-notification' :
            'input-notification_transparent input-notification';
    };

    render() {
        return (
            <div className='wrapPage'>
                <Title text={'enter_name'}/>
                <input className='input' type="text" onChange={(event) => this.onChangeText(event.target.value)}/>
                <p className={this.changeClassNameNotification()}>Enteeeeer NAAAAMEEE!!1</p>
                <Link to={this.activeLink()} params={this.state}>
                    <Button click={this.saveName} classes='button_submit'>Save name</Button>
                </Link>
            </div>
        )
    }
}
