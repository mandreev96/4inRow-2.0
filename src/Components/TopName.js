import React, {PureComponent} from 'react';
import Chip from "./Chip";

export default class TopName extends PureComponent {
    goToChangeName = () =>
        this.props.actions.goToChangeName ?
            this.props.actions.goToChangeName() :
            null;
    goToChangeColor = () =>
        this.props.actions.goToChangeColor ?
            this.props.actions.goToChangeColor() :
            null;


    render() {
        console.log(this.goToChangeName);
        console.log(this.goToChangeColor);
        const {name, color} = this.props;
        return (
            <div className='viewPlayer'>
                {name && <h2 className='titlePlayerName' onClick={this.goToChangeName}>{name}</h2>}
                {color !== null && <Chip color={color} onClick={this.goToChangeColor}/>}
            </div>
        )
    }

}