import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Restaurant from '../components/Restaurant.jsx';

const mapStateToProps = store => ({
  user: store.user,
});

const mapDispatchToProps = dispatch => ({

});

class Main extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
     <div>
      <h2>Welcome, {this.props.user.firstName}!</h2>
      <Restaurant />
     </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);