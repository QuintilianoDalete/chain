import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => 
        auth.isLogged ? (
          <>
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

export default connect(mapStatetoProps)(PrivateRoute);
