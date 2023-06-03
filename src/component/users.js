import React, {Component} from 'react';
import '../css/users.css';
import Axios from 'axios'
import UserData from './userdata';

export default class Users extends Component {
    constructor() {
        super();
        this.state={
          data:[],
          error:null
        }
    }

    getUsers = () => {
        const URL = 'http://localhost:3001/users';
        Axios.get(URL)
        .then((res) => {
          this.setState({data: res.data});
        })
        .catch((err) => {
          this.setState({error: err});
        })
    }
    
    componentDidMount() {
        this.getUsers();
    }

    render() {
        const {error,data} = this.state;

        const userData = data.length > 0 &&
        (
            data.map((user, index) => {
                return (
                    <UserData user={user} key={index} getUsers={this.getUsers}/>
                )
            })
        )

        if (error) {
            return (<div className='userlist'>Oops! something went wrong.</div>);
        } else {
            return (
                <div className='userlist'>
                    <h4>
                        Users List
                    </h4>
                    {
                        data.length > 0 ? (
                            <table className='table'>
                                <thead className='bg-info'>
                                    <tr>
                                        <th>Id</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Gender</th>
                                        <th>Dob</th>
                                        <th>Email</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userData}
                                </tbody>
                            </table>
                        ):(<p>No data found</p>)
                    }
                </div>
            );
        }
    }
}