import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <form className="ui form" onSubmit={onFormSubmit}>
      <div className="field">
        <label>Video Search</label>
        <div className="ui left icon input focus ">
          <i className="search icon" />
          <input
            type="text"
            placeholder="Search for a video ..."
            value={term}
            onChange={onInputChange}
          />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
