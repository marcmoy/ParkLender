import React from 'react';
import { withRouter } from 'react-router';
import SessionForm from './form';
import FormHeader from './form_header';

class SessionView extends React.Component {

	constructor(props){
		super(props);
		this.state = { username: "", password: "" };

    this.closeModal = this.closeModal.bind(this);
    this.goHome = this.goHome.bind(this);
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

	render() {
		return (
			<div class="modal fade" id="">
        <div className="login-signup-div">
          <FormHeader
						formType={this.props.formType}
						goHome={this.goHome} />
          <SessionForm
						processForm={this.props.processForm}
						formType={this.props.formType}
						goHome={this.goHome}
						errors={this.props.errors} />
        </div>
			</div>
		);
	}
}

export default withRouter(SessionView);
