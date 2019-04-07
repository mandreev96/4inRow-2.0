import React, {PureComponent} from 'react';
import TopName from "./TopName";

export default class WrapTopName extends PureComponent {
    actions = () =>
        this.props.actions();
    render() {
        console.log(this.props.actions);
        const {name, color, actions} = this.props;
        return (
            <div className='wrapTopName'>
                <TopName name={name} color={color} actions={actions}/>
            </div>
        )
    }
}