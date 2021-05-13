import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Nothing to see here!</h1>
      <Link to="/">
        <button className="ui button">Go to homepage</button>
      </Link>
    </div>
  );
};

export default NotFound;
