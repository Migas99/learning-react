import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from 'react-modal';

import { signIn, signOut } from "../redux/actions";

import users from "../api/authentication";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


const GoogleAuth = ({ signIn, signOut, auth }) => {

  const onAuthChange = () => {
    if (auth.isSignedIn) signOut();
    else signIn(auth.userId);
  };

  return (
    <button
      className="ui red google button"
      onClick={onAuthChange}
    >
      <i className="google icon" />
      {auth.isSignedIn ? `Sign Out with Google` : `Sign In with Google`}
    </button>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    auth: auth,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
