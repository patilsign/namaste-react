import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
    console.log(this.props.name.name + "Constructor Child Called");
  }
  componentDidMount() {
    console.log(this.props.name.name + "componentDidMount() Child Called");
  }
  render() {
    console.log(this.props.name.name + "render() Child Called");
    const { name, location } = this.props.name;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h2>Class Based Component -------</h2>
        <p>
          {count} "----" {count2}
        </p>
        <button
          className="increase"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>
        <h3>Name: {name}</h3>
        <h4>Location :{location}</h4>
        <br />
      </div>
    );
  }
}

export default UserClass;
