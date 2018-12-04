import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import Login from '../components/Login.jsx';
import Main from '../components/Main.jsx';

const mapStateToProps = store => ({
  user: store.user,
});

const mapDispatchToProps = dispatch => ({

});

function Logged(props) {
  const checkLog = props.user.logged;
  if (!checkLog) {
    return <Login />;
  }
  return <Main />;
}

export default connect(mapStateToProps, mapDispatchToProps)(Logged);