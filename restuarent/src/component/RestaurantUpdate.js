import React, { Component } from 'react';

class RestaurantUpdate extends Component {
    constructor(){
        super();
        this.state={name:null,email:null,address:null,rating:null}
    }
    componentDidMount(){
        fetch(" http://localhost:3000/restaurent/"+this.props.match.params.id).then((response) => {
            response.json().then((result) => {console.warn(result)
                 this.setState({ name:result.name,address:result.address,rating:result.rating,email :result.email,id:result.id })
                
            })
        })
    }
    Update(){
        fetch("http://localhost:3000/restaurent/"+this.state.id,{
            method:"PUT",
            headers:{"content-type":"Application/json"},
            body:JSON.stringify(this.state)}).then((result)=>{result.json().then((resp)=>{alert("Restaurant has been sucessfully updated")
        })
        })
    }
    render() {
        console.warn(this.state)
        return (
            <div>
                <h1>RestaurantUpdate</h1>
                <div>
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder="Restaurant Name" value={this.state.name}/><br /><br />
                    <input onChange={(event) => { this.setState({ address: event.target.value }) }} placeholder="Restaurant Address" value={this.state.address} /><br /><br />
                    <input onChange={(event) => { this.setState({ rating: event.target.value }) }} placeholder="Restaurant Rating" value={this.state.rating} /><br /><br />
                    <input onChange={(event) => { this.setState({ email: event.target.value }) }} placeholder="Restaurant Email" value={this.state.email}/><br /><br />
                    <button onClick={() => this.Update()}>Update Restaurant </button>
                </div>
            </div>
        );
    }
}

export default RestaurantUpdate;