import React from "react";
import "./userinput.css";

class userinput extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      showParagraph: false,
    };
  }
  render() {
    return (
      <div>
        {" "}
        <div class="header">
          <h1>Welcome to this Text Convertor </h1>
        </div>
        <form>
          <div class="box">
            <h3>Enter the text here which you want to capitalize: </h3>
            <label htmlFor="bio"></label>
            <input
              class="txt"
              type="text"
              value={this.state.input}
              onChange={(e) => this.setState({ input: e.target.value })}
              name="bio"
              id="bio"
            />
          </div>

          <div class="convert">
            {this.state.showParagraph && (
              <h2>{this.state.input.toUpperCase()} </h2>
            )}
          </div>
          <div class="button">
            <button
              class="click"
              onClick={() => {
                this.setState({
                  showParagraph: !this.state.showParagraph,
                });
              }}
            >
              Click to Covert it into UpperCase{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default userinput;
