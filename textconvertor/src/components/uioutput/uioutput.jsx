import React from "react";
import "./uioutput.css";

class uioutput extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      gender: "",
      country: "",
      check: "",
      profile: "",
      showProfile: false,
    };
  }
  render() {
    return (
      <div>
        {" "}
        <div class="header">
          <h1>Please Enter the registeration details</h1>
        </div>
        <form>
          <div class="fname">
            <span>
              <h3>Please Enter Your FirstName: </h3>
              <label htmlFor="name"></label>
              <input
                class="txt"
                type="text"
                value={this.state.firstName}
                onChange={(e) => this.setState({ firstName: e.target.value })}
                name="name"
                id="name"
                required
              />
            </span>
          </div>

          <div class="lname">
            <span>
              <h3>Please Enter Your LastName: </h3>
              <label htmlFor="lname"></label>
              <input
                class="txt"
                type="text"
                value={this.state.lastName}
                onChange={(e) => this.setState({ lastName: e.target.value })}
                name="lname"
                id="lname"
                required
              />
            </span>
          </div>

          <div class="gender">
            <span>
              <h3>Please Select Your Gender: </h3>
              <label htmlFor="lname"></label>
              <select id="lname" name="lname" required>
                <option
                  value={this.state.gender}
                  onChange={(e) => this.setState({ gender: e.target.value })}
                >
                  Select
                </option>
                <option
                  value={this.state.gender}
                  onChange={(e) => this.setState({ gender: e.target.value })}
                >
                  Male
                </option>
                <option
                  value={this.state.gender}
                  onChange={(e) => this.setState({ gender: e.target.value })}
                >
                  Female
                </option>
                <option
                  value={this.state.gender}
                  onChange={(e) => this.setState({ gender: e.target.value })}
                >
                  Others
                </option>
              </select>
            </span>
          </div>
          <div class="check">
            <span>
              <h3>
                Please Select Whether You Want To Reciecve Marketing Emails:{" "}
              </h3>
              <input
                type="radio"
                value={this.state.check}
                onChange={(e) => this.setState({ check: e.target.value })}
                name="check"
                id="check"
              />
              <label htmlFor="check">Yes</label>
              <br />
              <input
                type="radio"
                value={this.state.check}
                onChange={(e) => this.setState({ check: e.target.value })}
                name="uncheck"
                id="uncheck"
              />
              <label htmlFor="uncheck">No</label>
            </span>
          </div>
          <div class="profile">
            <span>
              <h3>Please Upload Your Profile Picture: </h3>
              <label htmlFor="profile"></label>
              <input
                class="txt"
                type="file"
                value={this.state.profile}
                onChange={(e) => this.setState({ profile: e.target.value })}
                name="profile"
                id="profile"
                required
              />
            </span>
          </div>

          <div class="button">
            <button class="click" type="submit">
              Click here to submit{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default uioutput;
