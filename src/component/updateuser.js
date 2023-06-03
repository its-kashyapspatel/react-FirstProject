import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class UpdateUser extends Component {
    constructor() {
        super();
        this.state={
            firstname:"",
            lastname:"",
            gender:"male",
            dob:"",
            email:""
        }
    }
    baseURL = "http://localhost:3001/users";
    id= window.location.pathname.split("/")[2];
    handleUpdate = (e) => {
        e.preventDefault();
        axios.put(this.baseURL+"/"+this.id, this.state)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }
    handleChange = (e) => {
        const {name, value} = e.target;
        // console.log(name + ": " + value);
        this.setState({
            [name]:value
        })
    }
    componentDidMount() {
        axios.get(this.baseURL + "/" + this.id)
        .then(res => {
            // console.log(res);
            const dob = res.data.dob.toLocaleString().substr(0,10);
            console.log(dob);
            this.setState({
                ...res.data,
                dob:dob
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
    render() {
        // console.log(this.props);
        // console.log(window.location.pathname.split("/")[2]);
        const {firstname, lastname, gender, dob, email} = this.state; 
        return (
            <div className='col-sm-6 adduser'>
                <h4>
                    Update User
                </h4>
                <form>
                    <div className='row'>
                        <div className='col'>
                            <div className="form-group">
                                <label>First Name:</label>
                                <input type="text" className="form-control" placeholder="Enter First Name" 
                                name="firstname"
                                value={firstname}
                                onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="form-group">
                                    <label>Last Name:</label>
                                    <input type="text" className="form-control" placeholder="Enter Last Name" name="lastname"
                                    value={lastname}
                                    onChange={this.handleChange}
                                    />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className="form-group">
                                    <label>Gender:</label>
                                    <select className="form-control" name="gender" value={gender} onChange={this.handleChange}>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="form-group">
                                    <label>Date of Birth:</label>
                                    <input type="date" className="form-control" value={dob} placeholder="Enter Date of Birth" name="dob"
                                    onChange={this.handleChange}
                                    />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" className="form-control" placeholder="Enter Email" name="email"
                        value={email}
                        onChange={this.handleChange}
                        />
                    </div>
                    <button className='btn btn-block btn-info' onClick={this.handleUpdate}>Update</button> &nbsp; &nbsp; &nbsp;
                    <button className='btn btn-warning'><Link to="/users">Cancel</Link></button>
                </form>
            </div>
        );
    }
}
