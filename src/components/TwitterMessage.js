import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      charLength: 0,
      charValue: ""
    };
  }

  saveCharLength = (event) => {
    this.setState({
      charLength: event.target.value.length,
      charValue: event.target.value
    })
  }

  showRemainingChar = () => {
    console.log(this.props.maxChar)
  }
  

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value = {this.state.charValue} onChange = {this.saveCharLength}/>
        <p>{this.props.maxChars - this.state.charLength}</p>
      </div>
    );
  }
}

export default TwitterMessage;
