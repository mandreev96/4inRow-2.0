import React, {Component} from 'react';
import Button from "../../Components/Button";
import Title from "../../Components/Title";
import {Link} from "react-router-dom";
import TopName from "../../Components/TopName";
import WrapTopName from "../../Components/WrapTopName";

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

    actions = () => ({
        actions: {
            toGoChangeColor: this.props.history.push('/color'),
            toGoChangeName: this.props.history.push('/name'),
        }
    });

    render() {
        console.log(this.props);
        const {name, color} = this.props.playerData;
        return (
            <div className='wrapPage'>
                <WrapTopName name={name} color={color} actions={this.actions}/>
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
