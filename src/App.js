import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

class App extends React.Component {
    handleClick=()=>{
        const { dispatch } = this.props
        dispatch({
            type:"add"
        })
    }
    render() {
        return (
            <div className="App">
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}

export default connect()(App);
