import React, {PureComponent} from 'react';
import Title from "../../Components/Title";

export default class Loading extends PureComponent {
    render() {
        return (
            <div onClick={this.props.onClick}>
                <div className="sk-fading-circle">
                    <div className="sk-circle1 sk-circle"/>
                    <div className="sk-circle2 sk-circle"/>
                    <div className="sk-circle3 sk-circle"/>
                    <div className="sk-circle4 sk-circle"/>
                    <div className="sk-circle5 sk-circle"/>
                    <div className="sk-circle6 sk-circle"/>
                    <div className="sk-circle7 sk-circle"/>
                    <div className="sk-circle8 sk-circle"/>
                    <div className="sk-circle9 sk-circle"/>
                    <div className="sk-circle10 sk-circle"/>
                    <div className="sk-circle11 sk-circle"/>
                    <div className="sk-circle12 sk-circle"/>
                </div>
                <Title text='loading'/>
            </div>
        )
    }
}
