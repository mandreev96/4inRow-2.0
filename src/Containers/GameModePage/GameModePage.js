import React, {Component} from 'react';
import {GAME_TYPE} from "../../constants";
import Title from "../../Components/Title";
import LargeButton from "../../Components/LargeButton";
import Modal from 'react-modal';
import App from "../../App";

export default class GameModePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        }
    }

    openModal = () =>
        this.setState({showModal: true});
    closeModal = () =>
        this.setState({showModal: false});

    render() {
        return (
            <div className='wrapPage'>
                <Title text={'select_game_type'}/>
                <div className='largeButtonsWrap'>
                    <LargeButton onClick={this.openModal}
                                 gameType={GAME_TYPE.MULTIPLAYER}/>
                    <LargeButton onClick={this.openModal}
                                 gameType={GAME_TYPE.SINGLE_PLAYER}/>
                </div>
                <Modal
                    ariaHideApp={false}
                    closeTimeoutMS={2000}
                    isOpen={this.state.showModal}
                    contentLabel="modal"
                    onRequestClose={() => this.closeModal()}
                    style={{width: '50%', height: '50%'}}
                >
                    <h2>Add modal content here</h2>
                </Modal>
            </div>
        )
    }

}
