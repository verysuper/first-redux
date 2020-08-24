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
                <h1>{this.props.user} : {this.props.counter}</h1>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("mapStateToProps->state",state)
    return {
        user:state.user,
        counter:state.counter
    }
}

export default connect(mapStateToProps)(App);
