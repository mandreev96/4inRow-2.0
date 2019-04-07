import React, {Component} from 'react';
import Title from "../../Components/Title";
import LargeButton from "../../Components/LargeButton";
import ModalContent from "./ModalContent";
import Services from "../../Services/Services";
import {GAME_TYPE} from "../../constants";

export default class GameModePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            gameMode: null,
        }
    }

    openModalSinglePlayer = () =>
        this.setState({showModal: true, gameMode: GAME_TYPE.SINGLE_PLAYER});
    openModalMultiplayer = () =>
        this.setState({showModal: true, gameMode: GAME_TYPE.MULTIPLAYER});
    closeModal = () =>
        this.setState({showModal: false, gameMode: null});

    startSinglePlayer = async (difficulty) => {
        const {name, color} = this.props.playerData;
        const res = await Services.addToSinglePlayer(name, color, difficulty);
        this.props.submitPlayerData({id: res.id});
        console.log(res);
        console.log(this.props);
        this.closeModal();
        this.props.history.push('/game');
    };

    startMultiplayer = () => {

    };

    selectedGameType = () => {
        const {gameMode} = this.state;
        switch (gameMode) {
            case GAME_TYPE.SINGLE_PLAYER:
                return this.startSinglePlayer;
            case GAME_TYPE.MULTIPLAYER:
                return this.startMultiplayer;
            default:
                return this.closeModal;
        }
    };

    render() {
        return (
            <div className='wrapPage'>
                <Title text={'select_game_type'}/>
                <div className='largeButtonsWrap'>
                    <LargeButton onClick={this.openModalSinglePlayer}
                                 text={'single player'}/>
                    <LargeButton onClick={this.openModalMultiplayer}
                                 text={'multiplayer'}/>
                </div>
                <ModalContent close={this.closeModal}
                              state={this.state.showModal}
                              startGame={this.selectedGameType()}/>
            </div>
        )
    }

}
