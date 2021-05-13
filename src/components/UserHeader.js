import React from "react";
import { connect } from "react-redux";

const UserHeader = ({ userId, users }) => {
  const user = users.filter((user) => user.id === userId)[0];
  
  if (!user) {
    return (
      <div className="ui left floated content">
        <i className="ui avatar image" />
        <div className="header">Loading ...</div>
      </div>
    );
  }

  return (
    <div className="ui left floated content">
      <i className="ui avatar image" />
      <div className="header">{user.name}</div>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return { users: users };
};

export default connect(mapStateToProps)(UserHeader);
