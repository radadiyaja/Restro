import React, { Component } from 'react';

class RestaurantSearch extends Component {
    constructor() {
        super();
        this.state = { searchData: null }
    }
    Search(key) {
        console.warn(key)
        fetch("http://localhost:3000/restaurent?q=" + key).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp);
                this.setState({searchData:resp})
            })
        })
    }
    render() {
        return (
            <div>
                <h1>RestaurantSearch</h1>
                <input type="text" onChange={(event) => this.Search(event.target.value)} />
                {
                    this.state.searchData?
                    <div>{this.state.searchData.map((item)=>
                    <div>{item.name}</div>)}</div>
                    :""
                }
            </div>
        );
    }
}

export default RestaurantSearch;