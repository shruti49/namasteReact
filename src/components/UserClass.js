import React from "react";
import UserContext from "../context/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };

    this.handleClick = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    console.log(this.props.userInfo.name + " Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.userInfo.name + " Child Mounted");
  }

  componentDidUpdate() {
    console.log(this.props.userInfo.name + " Child Updated");
  }

  render() {
    const { name, location, avatar_url } = this.props.userInfo;
    const { count } = this.state;

    console.log(this.props.userInfo.name + " Child Render");

    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1>
        <button onClick={this.handleClick}>Increment</button> */}
        <img src={avatar_url} className="user-img" />
        <div className="user-detail">
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
        </div>

        <UserContext.Consumer>
          {({ loggedInUser }) => <h4>loggedInUser: {loggedInUser}</h4>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default UserClass;
