import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = { user: null, password: null }
    }
    Submit() {
        console.warn(this.state);
        fetch("http://localhost:3000/login?q=" + this.state.user).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp);
                if (resp.length > 0) {
                    console.warn(this.props.history.push("list"));
                }
                else {
                    alert("check username and password")
                }
            })
        })
    }
    render() {
        return (
            <div>
                username{" "}<input type="text" placeholder="Name" onChange={(event) => this.setState({ user: event.target.value })} /><br /><br />
                password{" "}<input type="password" placeholder="Password" onChange={(event) => this.setState({ password: event.target.value })} /><br /><br />
                <button onClick={() => this.Submit()}>submit</button>
            </div>
        );
    }
}

export default Login;