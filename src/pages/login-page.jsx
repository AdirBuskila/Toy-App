import React from 'react';
import { connect } from 'react-redux';
import { MyLogin } from '../cmps/login';

class _Login extends React.Component {
  state = {

  };

 onCloseModal = () => {
 }

  onGoBack = () => {
  };

  changeEditMode = () => {
  };

  render() {
    return (
       <div className='Login-container'>   
        <h1>Login Page</h1>
        <MyLogin />
      </div>
    )
  } 
}

function mapStateToProps(state) {
  return {};
}
const mapDispatchToProps = {
};

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Login);
