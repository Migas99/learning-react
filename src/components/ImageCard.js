import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans());
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 5);
    this.setState({ spans: spans });
  };

  render() {
    const source = this.props.image.urls.full;
    const description = this.props.image.description;

    return (
      <div style={{ gridRowEnd: `${this.state.spans} span` }}>
        <img ref={this.imageRef} src={source} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
