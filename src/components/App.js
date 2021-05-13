import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      resultsString: "Search for something!",
      images: [],
      query: null,
    };
  }

  onSearchSubmit = async (term) => {
    this.setState({ query: term });
    if (term === null || term === "") {
      this.setState({ resultsString: "Search for something!" });
    } else {
      const response = await unsplash.searchPhotos(term);
      if (response.data.results.length > 0) {
        this.setState({
          resultsString: `Found ${response.data.results.length} images for '${term}'!`,
          images: response.data.results,
        });
      } else {
        this.setState({ resultsString: `No results for '${term}'!` });
      }
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui segment">
          <p>{this.state.resultsString}</p>
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
