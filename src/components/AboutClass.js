import { Component } from "react";
import UserClass from "./UserClass";

class AboutClass extends Component {
  constructor() {
    super();

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy",
        avatar_url: "Dummy",
      },
    };

    console.log("Parent Constructor");
  }

  async componentDidMount() {
    console.log("Parent Mounted");

    const response = await fetch("https://api.github.com/users/shruti49");
    const json = await response.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });

    //If we don't clear this, it will keep hanging in our code and decrease the performance of app
    //this is a disadvanatge of SPA, we don't shift to pages we shift to components in a single page
    //It is imp to clear this interval when we shift to other components
    //And this clearing will happen in unmount phase
    this.timer = setInterval(() => console.log("hello"), 100);
  }

  componentDidUpdate() {
    console.log("Parent Updated");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Parent Unmounted");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About</h1>
        <h2>Namster React Practise</h2>
        <UserClass userInfo={this.state.userInfo} />
        {/* <UserClass name={"First"} location={"Delhi"} />
        <UserClass name={"Second"} location={"US"} /> */}
      </div>
    );
  }
}

export default AboutClass;
