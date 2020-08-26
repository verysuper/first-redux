import React from 'react';
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

//將store的state指定給對應的props
const mapStateToProps = state => {
    console.log("mapStateToProps->state",state)
    return {
        user:state.user,
        counter:state.counter
    }
}

//連結store的state和component
export default connect(mapStateToProps)(App);
