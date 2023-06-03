import NavBar from './component/navbar';
import {Routes, Route, Navigate} from 'react-router-dom';
import Users from './component/users';
import AddUser from './component/adduser';
import Page404 from './component/page404';
import React from 'react';
import UpdateUser from './component/updateuser';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <NavBar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Navigate replace to="/users" />} />
            <Route path='/users' Component={Users} />
            <Route path='/add-user' Component={AddUser} />
            <Route path='/update-user/:id' Component={UpdateUser} />
            <Route
              path="*"
              Component={
                Page404
              }
            />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
