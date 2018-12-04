import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  user: store.user
});

const mapDispatchToProps = dispatch => ({
  logemail: (event) => {
    dispatch(actions.logEmail(event.target.value));
  },
  logpass: (event) => {
    dispatch(actions.logPass(event.target.value));
  },
  login: (event) => {
    dispatch(actions.logIn(event));
  }
});

const Login = (props) => {
  return (
    <div>
      <p>But first, log in!</p>
      <input type='text' placeholder="Email, please!" onChange={props.logemail} />
      <input type='text' placeholder="Password, please!" onChange={props.logpass} />
      <button onClick={() => { props.login(props.user); }}>Log in!</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);