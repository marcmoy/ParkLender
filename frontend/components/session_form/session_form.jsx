import React from 'react';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = { username: "", password: "" };

		this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDemo = this.handleDemo.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.animate = this.animate.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) this.goHome();
	}

	goHome() {
		this.props.router.push("/");
	}

	closeModal(e) {
		if (e.target === e.currentTarget) this.goHome();
	}

	update(field) {
		return e => { this.setState({[field]: e.currentTarget.value }); };
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

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="login-signup-modal" onClick={this.closeModal}>
				<div className="login-signup-div">
					Welcome to ParkLender!
					<br/>
					{ this.props.formType }
					{ this.renderErrors() }
					<div className="login-form">
						<br />
						<label> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>

						<br />
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>

						<br />
						<button onClick={this.handleSubmit}>SUBMIT</button>
						<button onClick={this.handleDemo}>DEMO</button>
					</div>
				</div>
			</div>
		);
	}

}

export default withRouter(SessionForm);
