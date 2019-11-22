import React from 'react';
import UserForm from './UserForm';

const Login = (props) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">
          Todolist Igaku
      </h1>
      <UserForm {...props} />
    </div>
  </div>
);

export default Login;
