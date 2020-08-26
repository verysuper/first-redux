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

    handleChange=(event)=>{
        const { dispatch } = this.props
        dispatch({
            type:"set",
            name:event.target.value
        })
    }

    render() {
        return (
            <div className="App">
                <h1>{this.props.user} : {this.props.counter}</h1>
                <input type="text" onChange={this.handleChange} value={this.props.user}/>
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
