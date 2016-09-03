import React from 'react';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.errorMessages = this.errorMessages.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDemo = this.handleDemo.bind(this);
		this.animate = this.animate.bind(this);
		this.submitText = this.submitText.bind(this);
    this.formTitle = this.formTitle.bind(this);
	}

	update(field) {
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	errorMessages() {
		if (this.props.errors.length === 0){
			return;
		} else {

			let errors = this.props.errors.map((error,idx) => {
				return(
					<li className="error-message" key={idx}>
            <a className="text-danger">{error}</a>
          </li>
				);
			});

			if (errors) {
				return(
					<ul className="login-signup-form-error">
						{errors}
					</ul>
				);
			}
		}
	}

	handleSubmit(e) {
		e.preventDefault(e);
		const user = this.state;
		this.props.processForm({ user });
	}

	handleDemo(e) {
		e.preventDefault();
		this.setState({ username: "", password: "" });

		this.username = ['d','e','m','o','-','u','s','e','r'];
		this.password = ['p','a','s','s','w','o','r','d'];
		this.currentUsername = "";
		this.currentPass = "";

		this.interval = window.setInterval(this.animate, 50);
	}

	animate() {
		if (this.username.length > 0){
			this.currentUsername = this.currentUsername + this.username.shift();
			this.setState({ username: this.currentUsername });

		} else if (this.password.length > 0) {
			this.currentPass = this.currentPass + this.password.shift();
			this.setState({ password: this.currentPass });

		} else {
			let user = this.state;
			this.props.processForm({ user });
			window.clearInterval(this.interval);
		}
	}

	submitText() {
		if (this.props.formType === "signup") return "CREATE ACCOUNT";
		return "LOGIN";
	}

  formTitle() {
    if (this.props.formType === "signup") return "Sign Up";
		return "Login";
  }

	render() {

		return (
			<form onSubmit={this.handleSubmit}>
        <h1>{this.formTitle()}</h1>

				<input type="text"
					className="login-input"
					placeholder="Username"
					value={this.state.username}
					onChange={this.update("username")}/>

				<br />
					<input type="password"
						className="login-input"
						placeholder="Password"
						value={this.state.password}
						onChange={this.update("password")}/>

				{this.errorMessages()}

				<br />
				<div className="login-signup-buttons-div">
					<button
						type="submit"
						className="submit-button">{this.submitText()}</button>
					<button
						className="demo-button"
						onClick={this.handleDemo}>DEMO</button>
				</div>
			</form>
		);
	}
}

export default withRouter(SessionForm);
