import React, { Component } from 'react';
import OpenSocket from 'socket.io-client';
import './App.css';
import StartPage from "./Containers/StartPage/StartPage";
import {HashRouter, Link, Route, Switch} from 'react-router-dom';
import GamePage from "./Containers/GamePage/GamePage";
import SelectColorPage from "./Containers/SelectColorPage/SelectColorPage";
import GameModePage from "./Containers/GameModePage/GameModePage";
import {CSSTransition} from "react-transition-group";
import EnterNamePage from "./Containers/EnterNamePage/EnterNamePage";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            color: 0,
        }
    }
  componentDidMount() {
    //const io = OpenSocket('http://localhost:3001');
    //io.on('news', (data) => {
    //    console.log(data);
    //    io.emit('my other event', { my: 'data' });
    //    console.log(io);
    //});
  }

  submitPlayerData = (data) =>
      this.setState({
          ...data,
      });

  render() {
    return (
        <HashRouter>
            <div className="App">
                {routes.map(({path, Component}) => (
                    <Route key={path} exact path={path}>
                        {({ match, history }) => (
                            <CSSTransition
                                in={match != null}
                                timeout={300}
                                classNames="page"
                                unmountOnExit
                            >
                                <div className="page">
                                    <Component history={history}
                                               submitPlayerData={this.submitPlayerData}
                                               playerData={this.state}/>
                                </div>
                            </CSSTransition>
                        )}</Route>
                ))}
            </div>
        </HashRouter>
    );
  }
}

const routes = [
    { path: '/',         name: 'Start',     Component: StartPage },
    { path: '/name',     name: 'Name',      Component: EnterNamePage },
    { path: '/color',    name: 'Color',     Component: SelectColorPage },
    { path: '/mode',     name: 'GameMode',  Component: GameModePage },
    { path: '/game',     name: 'Game',      Component: GamePage },
]

export default App;
