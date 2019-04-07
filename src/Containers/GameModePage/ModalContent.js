import React, {PureComponent} from 'react';
import Modal from 'react-modal';
import Title from "../../Components/Title";
import LargeButton from "../../Components/LargeButton";
import {DIFFICULT_GAME} from "../../constants";
import Loading from "./Loading";
import {Transition} from "react-transition-group";

export default class ModalContent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }

    enableLoading = () =>
        this.setState({loading: true});

    offLoading = () =>
        this.setState({loading: false});

    startGame = (difficulty) => {
        this.enableLoading();
        this.props.startGame(difficulty);
    };

    render() {
        const {close, state} = this.props;
        const {loading} = this.state;
        return (
            <Modal
                ariaHideApp={false}
                closeTimeoutMS={400}
                isOpen={state}
                contentLabel="modal"
                onRequestClose={() => close()}
            >
                    {loading ? <Loading onClick={this.offLoading}/> :
                        <>
                            <Title text={'select_difficult'}/>
                            <div className='largeButtonsWrap'>
                                <LargeButton onClick={() => this.startGame(DIFFICULT_GAME.EASY) }
                                             text={'Weak in the head'}/>
                                <LargeButton onClick={() => this.startGame(DIFFICULT_GAME.HARD) }
                                             text={'The God'}/>
                            </div>
                        </>}
            </Modal>
        )
    }
}
