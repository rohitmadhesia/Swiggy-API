import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 67
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentdidmount");
  }

  render() {
    console.log("render");
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>
          {count} : {count2}
        </h4>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1
            });
          }}
        >
          increase
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1
            });
          }}
        >
          dec
        </button>
      </div>
    );
  }
}

export default User;
