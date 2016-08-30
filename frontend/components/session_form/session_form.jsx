import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDemo = this.handleDemo.bind(this);
		this.animate = this.animate.bind(this);
	}

	componentDidUpdate(){
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.loggedIn){
			hashHistory.push("/");
		}
	}

	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	handleSubmit(e){
		e.preventDefault(e);
		const user = this.state;
		this.props.processForm({ user });
	}

	handleDemo(e){
		e.preventDefault();
		this.setState({ username: "", password: "" });

		this.username = ['d','e','m','o','-','u','s','e','r'];
		this.password = ['p','a','s','s','w','o','r','d'];
		this.currentUsername = "";
		this.currentPass = "";

		this.interval = window.setInterval(this.animate, 100);
	}

	animate() {
		if (this.username.length > 0){
			this.currentUsername = this.currentUsername + this.username.shift();

			this.setState({
				username: this.currentUsername
			});
		} else if (this.password.length > 0) {
			this.currentPass = this.currentPass + this.password.shift();

			this.setState({
				password: this.currentPass
			});
		} else {

			let user = this.state;
			this.props.processForm({ user });
			window.clearInterval(this.interval);
		}
	}

	navLink(){
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
	}

	renderErrors(){
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
			<div className="login-form-container">
				<form className="login-form-box">
					Welcome to ParkLender!
					<br/>
					Please { this.props.formType } or { this.navLink() }
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
				</form>
			</div>
		);
	}

}

export default SessionForm;
