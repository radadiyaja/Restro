import React, { Component } from 'react';
import { Table, } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'


class RestauranstList extends Component {
    constructor() {
        super()
        this.state = { list: null }
    }
    componentDidMount() {
        this.Makedata()
    }
    Makedata(){
        fetch("http://localhost:3000/restaurent").then((response) => {
            response.json().then((result) => {
                this.setState({ list: result })
            })
        })
    }
    Delete(id){
       
        fetch("http://localhost:3000/restaurent/"+id,{
            method:"DELETE",
            headers:{"content-type":"Application/json"},
            body:JSON.stringify(this.state)}).then((result)=>{result.json().then((resp)=>{alert("Restaurant has been sucessfully deleted")
            this.Makedata()
        })
        })
}
    render() {
        console.warn(this.state)
        return (
            <div>
                <h1>RestauranstList</h1>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Rating</th>
                                        <th>Location</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        this.state.list.map((item, i) =>

                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.rating}</td>
                                                <td>{item.address}</td>
                                                <td><Link to={/Update/ + item.id} ><FontAwesomeIcon icon={faEdit} color="blue" /></Link>
                                                    <span onClick={()=>this.Delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" /></span>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        : <p>Please wait </p>
                }
            </div>
        );
    }
}

export default RestauranstList;