import React from 'react';
import { withRouter } from 'react-router';
import $ from 'jquery';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.update = this.update.bind(this);
		this.errorMessages = this.errorMessages.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDemo = this.handleDemo.bind(this);
		this.animate = this.animate.bind(this);
		this.submitText = this.submitText.bind(this);
    this.formTitle = this.formTitle.bind(this);
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
		let user = {
			username: this.props.username,
			password: this.props.password
		};
		this.props.processForm({ user });
	}

	handleDemo(e) {
		e.preventDefault();
		this.props.update({ username: "", password: "" });
		this.update = this.update.bind(this);
		this.username = ['D','e','m','o','-','U','s','e','r'];
		this.password = ['p','a','s','s','w','o','r','d'];
		this.currentUsername = "";
		this.currentPass = "";
		this.interval = window.setInterval(this.animate, 50);
	}

	animate() {
		if (this.username.length > 0){
			this.currentUsername = this.currentUsername + this.username.shift();
			this.props.update({ username: this.currentUsername });

		} else if (this.password.length > 0) {
			this.currentPass = this.currentPass + this.password.shift();
			this.props.update({ password: this.currentPass });

		} else {

			let user = {
				username: this.props.username,
				password: this.props.password
			};
			
			this.props.processForm({ user });
			this.props.update({ username: "", password: "" });
			window.clearInterval(this.interval);
		}
	}

	update(field) {
		return e => {
			this.props.update({[field]: e.currentTarget.value });
		};
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
			<form className='session-form' onSubmit={this.handleSubmit}>
        <h3 className="session-form-title">{this.formTitle()}</h3>

				<input type="text"
					id="username"
					className="form-control"
					placeholder="Username"
					value={this.props.username}
					onChange={this.update("username")}/>

				<input type="password"
					id="password"
					className="form-control"
					placeholder="Password"
					value={this.props.password}
					onChange={this.update("password")}/>

				{this.errorMessages()}

				<div className="session-form-btn-div">
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
