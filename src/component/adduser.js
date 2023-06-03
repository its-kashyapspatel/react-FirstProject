import React, { Component } from 'react'
import '../css/adduser.css';
import axios from 'axios';

export default class AddUser extends Component {
    constructor() {
        super();
        this.state={
            success:false,
            user:{
                firstname:"",
                lastname:"",
                gender:"male",
                dob:"",
                email:""
            }
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        // console.log(name + ": " + value);
        this.setState({
            user: {
                ...this.state.user,
                [name]:value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const URL = 'http://localhost:3001/users';
        axios.post(URL, this.state.user)
        .then(res => {
            this.setState({
                user: {
                    firstname:"",
                    lastname:"",
                    gender:"male",
                    dob:"",
                    email:""
                },
                success:true
            });
        })
        .catch(err => {
            console.log(err);
        })
    }

  render() {
    const {firstname, lastname, gender, dob, email} = this.state; 
    return (
        <>
        {
            this.state.success && (
                <div class="alert alert-success alert-dismissible col-sm-6 alert-box">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>Success!</strong> User Added Successfully.
                </div>
            ) 
        }
        <div className='col-sm-6 adduser'>
            <h4>
                Add User
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
                <button className='btn btn-block btn-info' onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>
        </>
    );
  }
}
