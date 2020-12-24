import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavBar } from '../components';
import * as authAction from '../store/ducks/auth/actions';

const PrivateRoute = ({ component: Component, auth, logOut, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => 
        auth.isLogged ? (
          <>
            <NavBar onLogOut={logOut} {...props} />
            <Component {...props} />
          </>
        ) : (
          <Redirect to='/chain' />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStatetoProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = {
  logOut: authAction.logOut
};

export default connect(mapStatetoProps, mapDispatchToProps)(PrivateRoute);
