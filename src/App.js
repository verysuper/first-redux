import React from 'react';
import './App.css';
import { connect, useDispatch } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import { useLocation} from "react-router";

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Topics() {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
                    </Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    let location = useLocation(); //取得url嵌入的參數
    console.log("useLocation",location)
    let { topicId } = useParams();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch({
            type: 'set',
            name: topicId
        });
    };
    let display = null
    if(topicId){
        display = (
            <button onClick={handleClick}>set name</button>
        )
    }
    return (
        <div>
            <h3>Requested topic ID: {topicId}</h3>
            {display}
        </div>
    )
}

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
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to={{
                                    pathname: "/",
                                    search: "?sort=name",
                                    hash: "#the-hash",
                                    state: { fromDashboard: true }
                                }}>Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/topics">Topics</Link>
                            </li>
                        </ul>

                        <Switch>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/topics">
                                <Topics />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </Router>
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
