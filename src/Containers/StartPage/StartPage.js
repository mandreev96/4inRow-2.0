import React, {PureComponent} from 'react';
import './style.css';
import MainTitle from "../../Components/MainTitle";
import {Transition} from 'react-transition-group';
import {Redirect} from "react-router-dom";


class StartPage extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            showLogo: false,
        };
        this.redirected = false;
        this.duration = 1200;
        this.defaultStyle = {
            transition: `${this.duration}ms linear`,
            opacity: 1,
        };
        this.transitionStyles = {
            entering: { opacity: 1 },
            entered:  { opacity: 1 },
            exiting:  { opacity: 0 },
            exited:   { opacity: 0 },
        };
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({showLogo: true});
            clearTimeout(this.timer);
            }, 100);
    }

    activateRedirect = (state) => {
        if (state === 'entered' && this.redirected === false) {
            this.redirected = true;
            return <Redirect to={'/name'} />;
        }
    };


    render() {
        const showing = this.state.showLogo;
        return <Transition in={showing} timeout={3600} >
            {state => {
                console.log(state);
                return (
                    <div className='startPage' style={{
                        ...this.defaultStyle,
                        ...this.transitionStyles[state]}}>
                        <MainTitle text='4 in row'/>
                        {this.activateRedirect(state)}
                    </div>
                )}}
        </Transition>
    }

}

export default StartPage;
