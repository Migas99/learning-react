import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { term: "" };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <div className="ui action input">
              <input
                type="text"
                placeholder="Search ..."
                value={this.state.term}
                onChange={this.onInputChange}
              />
              <button className="ui button">
                Search
              </button>
            </div>
          </div>
        </form>
    );
  }
}

export default SearchBar;
