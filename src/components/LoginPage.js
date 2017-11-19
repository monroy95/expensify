import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify App</h1>
      <p>It&#39;s time to get your expenses under control.</p>
      <button className="btn" onClick={startLogin}>Log in with <i className="fa fa-google-plus" aria-hidden="true" /></button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin()),
});

export { LoginPage as LoginPageComponent };

export default connect(undefined, mapDispatchToProps)(LoginPage);

