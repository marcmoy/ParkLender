import React from 'react';
import { withRouter } from 'react-router';
import $ from 'jquery';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { loggingIn: false };
		this.update = this.update.bind(this);
		this.errorMessages = this.errorMessages.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDemo = this.handleDemo.bind(this);
		this.animate = this.animate.bind(this);
		this.submitText = this.submitText.bind(this);
    this.formTitle = this.formTitle.bind(this);
		this.signUpFields = this.signUpFields.bind(this);
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
		let user;

		if (this.props.formType === "signup") {
			user = {
				username: this.props.username,
				password: this.props.password,
				confirm: this.props.confirm,
				email: this.props.email,
				fname: this.props.fname,
				lname: this.props.lname
			};

		} else {
			user = {
				username: this.props.username,
				password: this.props.password
			};
		}

		this.setState({ loggingIn: true });

		let callback = () => {
			this.setState({ loggingIn: false });
		};

		this.props.processForm({ user }, callback);
	}

	handleDemo(e) {
		e.preventDefault();
		this.props.update({ username: "", password: "", formType: "login" });
		this.update = this.update.bind(this);

		this.username = 'demo-user'.split('');
		this.password = 'go_fullstack_go'.split('');
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

			this.setState({ loggingIn: true });

			let success = () => {
				this.setState({ loggingIn: false });
				this.props.update({ username: "", password: "" });
			};

			this.props.processForm({ user }, success);
			window.clearInterval(this.interval);
		}
	}

	update(field) {
		return e => {
			this.props.update({[field]: e.currentTarget.value });
		};
	}

	submitText() {
		let text;
		if (this.props.formType === "signup") {
			text = this.state.loggingIn ?
			'CREATING ACCOUNT...' : 'CREATE ACCOUNT';
		} else {
			text = this.state.loggingIn ?
			'LOGGING IN...' : 'LOGIN';
		}
		return text;
	}

  formTitle() {
    if (this.props.formType === "signup") return "Sign Up";
		return "Login";
  }

	signUpFields() {
		if (this.props.formType === "signup") {
			return(
				<div>
					<input type="text" spellcheck="false"
						id="email"
						className="form-control"
						placeholder="Email"
						value={this.props.email}
						onChange={this.update("email")}/>

					<input type="text" spellcheck="false"
						id="fname"
						className="form-control"
						placeholder="First name"
						value={this.props.fname}
						onChange={this.update("fname")}/>

					<input type="text" spellcheck="false"
						id="lname"
						className="form-control"
						placeholder="Last name"
						value={this.props.lname}
						onChange={this.update("lname")}/>
				</div>
			);
		}
	}

	// FUTURE FEATURE

	// confirmPassword() {
	// 	if (this.props.formType === "signup") {
	// 		return(
	// 			<input type="password"
	// 				id="confirm"
	// 				className="form-control"
	// 				placeholder="Confirm"
	// 				value={this.props.confirm}
	// 				onChange={this.update("confirm")}/>
	// 		);
	// 	}
	// }

	render() {

		return (
			<form className='session-form' onSubmit={this.handleSubmit}>
        <h3 className="session-form-title">{this.formTitle()}</h3>

				<input type="text" spellcheck="false"
					id="username"
					className="form-control"
					placeholder="Username"
					value={this.props.username}
					onChange={this.update("username")}/>

				{this.signUpFields()}

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
