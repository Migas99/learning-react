import React, { useState } from "react";
import SeasonDisplay from "./components/SeasonDisplay";
import Loader from "./components/Loader";

const loadingMessage = "Trying to obtain your location ...";

// Conditional rendering
const renderHelper = (lat) => {
    if (lat.lat && !lat.errorMessage) {
      return <SeasonDisplay lat={lat.lat} />;
    }

    if (!lat.lat && lat.errorMessage) {
      return <div>Error: {lat.errorMessage}</div>;
    }

    return <Loader message={loadingMessage} />;
  };

// Function way
const App = () => {
  const [lat, setLat] = useState({ lat: null, errorMessage: null });

  window.navigator.geolocation.getCurrentPosition(
    (position) => setLat({ lat: position.coords.latitude }),
    (err) => setLat({ errorMessage: err.message })
  );

  return <div>{renderHelper(lat)}</div>;
};

// Class way
class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: null };
  }

  // Requests are made here
  componentDidMount() {
    // Get current location and set it
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    return <div className="red border">{this.renderContent()}</div>;
  }

  // Conditional rendering
  renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    return <Loader message={loadingMessage} />;
  }

  // Do something each time the component is updated
  // good for auto complete check boxs for example
  //   componentDidUpdate() {

  //   }

  //   Do something when the component will be destroyed
  //   componentWillUnmount() {

  //   }
}

export default App;
