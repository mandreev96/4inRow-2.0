import React, {PureComponent} from 'react';
import {textDecorator} from "../Utils/Utils";
import {Transition} from 'react-transition-group';

export default class Title extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            waiting: false,
        };
        this.timer = null;
        this.duration = 400;
        this.defaultStyle = {
            transition: `${this.duration}ms linear`,
            opacity: 0,
        };
        this.transitionStyles = {
            entering: { opacity: 0, paddingTop: 0, marginBottom: 50 },
            entered:  { opacity: 1 },
            exiting:  { opacity: 0, paddingTop: 20, marginBottom: 30 },
            exited:   { opacity: 1 },
        };
    }
    translateOnFocus = () => {
        if (!this.state.waiting) {
            this.setState({waiting: true});
            this.timer = setTimeout(() => this.setState({focus: true}), 3000);
        }
    };
    returnOriginal = () => {
        clearTimeout(this.timer);
        this.setState({
            focus: false,
            waiting: false,
        });
    };
    render() {
        return (
            <Transition in={this.state.focus} timeout={200}>
                {state => {
                    return <h2 className='title'
                               style={{
                                   ...this.defaultStyle,
                                   ...this.transitionStyles[state]
                               }}
                               onMouseEnter={this.translateOnFocus}
                               onMouseLeave={this.returnOriginal}>
                        {textDecorator(this.props.text, (state === 'exiting' || state === 'entered'))}
                    </h2>
                }}
            </Transition>
        )
    }
}
