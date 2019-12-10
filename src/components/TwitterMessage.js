import React from "react";

class TwitterMessage extends React.Component {
	constructor() {
		super();

		this.state = {
			inputValue: ''
		};
	}

	handleChange = (event) => {

		if (this.props.maxChars) {

			this.setState({
				inputValue: event.target.value
			})

		}

	}

	render() {
		return (
		<div>
			<strong>Your message:</strong>
			<input onChange={event => this.handleChange(event)} type="text" name="message" id="message" value={this.state.inputValue}/>
			Remaining Characters: {this.props.maxChars - this.state.inputValue.length}
		</div>
		);
	}
}

export default TwitterMessage;