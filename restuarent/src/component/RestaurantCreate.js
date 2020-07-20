import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = { name: null,address:null,rating:null,email:null }
    }
    Create() {
        fetch("http://localhost:3000/restaurent",{
            method:"POST",
            headers:{"content-type":"Application/json"},
            body:JSON.stringify(this.state)}).then((result)=>{result.json().then((resp)=>{alert("Restaurant has been sucessfully created")
        })
        })
    }
    render() {
        return (
            <div>
                <h1>RestaurantCreate</h1>
                <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder="Restaurant Name" /><br /><br />
                <input onChange={(event) => { this.setState({ address: event.target.value }) }} placeholder="Restaurant Address" /><br /><br />
                <input onChange={(event) => { this.setState({ rating: event.target.value }) }} placeholder="Restaurant Rating" /><br /><br />
                <input onChange={(event) => { this.setState({ email: event.target.value }) }} placeholder="Restaurant Email  " /><br /><br />
                <button onClick={() =>this.Create()}>Create Restaurant </button>
            </div>
        );
    }
}

export default RestaurantCreate;