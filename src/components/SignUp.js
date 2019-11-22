import React from 'react';
import UserForm from './UserForm';

const SignUp = (props) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">
          Sign up to start your workflow!
      </h1>
      <UserForm {...props} />
    </div>
  </div>
);

export default SignUp;
