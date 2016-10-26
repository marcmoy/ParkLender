import React from 'react';
import { withRouter } from 'react-router';
import Tabs from './tabs';
import Footer from '../footer/footer';
import { addSpinner, removeSpinner } from '../../util/loader';
import IMAGES from '../../util/images';
import { updateUser } from '../../util/user_api_util';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    let currentUser = this.props.currentUser;
    this.state = {
      success: [],
      errors: [],
      saving: false,
      imageUrl: currentUser.photo.url,
      thumbnail: currentUser.photo.thumbnail,
      username: currentUser.username,
      email: currentUser.email,
      fname: currentUser.fname,
      lname: currentUser.lname
    };
    this.upload = this.upload.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.notices = this.notices.bind(this);
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if(!error){
        if (results[0].resource_type === 'image') {

          let image = new Image(); // initialize an Image object

          // created an event listener for when image loaded
          image.onload = () => {
            this.setState({
              imageUrl: results[0].url,
              thumbnail: results[0].thumbnail_url
            });
            removeSpinner();
          };
          image.src = results[0].url; // after setting src, load begins
          addSpinner(); // add spinner for user feedback
        }
      }
    });
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = this.props.currentUser;

    if (user.username === 'demo-user') {

      this.setState({
        errors: ["Sorry! Demo cannot be modified. Try making an account."],
        success: []
      });

      return;
    }

    user = Object.assign({}, user, this.state);

    this.setState({ saving: true });

    let success = data => {
      this.setState({
        saving: false,
        success: ['Account settings saved!'],
        errors: []
      });
      this.props.receiveUpdatedUser(data);
    };

    let error = data => {
      const errors = data.responseJSON;
      this.setState({
        saving: false,
        success: [],
        errors: errors
      });
    };

    updateUser(user, success, error);
  }

  notices() {
    let msgs = [];

    this.state.success.forEach(msg => {
      msgs.push(
        <li className='success'>
          <a className='text-success'>{msg}</a>
        </li>
      );
    });

    this.state.errors.forEach(msg => {
      msgs.push(
        <li className='error'>
          <a className='text-danger'>{msg}</a>
        </li>
      );
    });

    if (msgs.length) {
      return <ul className='notices'>{msgs}</ul>;
    }
  }

  render() {
    return(
      <div>
        <div className='dashboard-container'>
          <div className='dashboard container'>
            <div className='row'>
              <h1>Account Settings</h1>
              <div className='col-md-3'>
                <div className='text-center'>
                  <div className='img-preview profile-view'>
                    <div className="load-message"></div>
                    <img src={this.state.imageUrl} />
                  </div>

                  <button
                    className='continue-button upload-photo'
                    onClick={this.upload}>
                    Change photo
                  </button>
                </div>
              </div>
              <div className='col-md-9'>
                {this.notices()}
                <form className='form-horizontal'>
                  <div className='form-group'>
                    <label className='col-lg-2 control-label'>Username</label>
                    <div className='col-lg-10'>
                    <input type="text" spellcheck="false"
                      className='form-control'
          						id="username"
          						value={this.state.username}
          						onChange={this.update("username")}/>
                    </div>
                  </div>

                  <div className='form-group'>
                    <label className='col-lg-2 control-label'>First Name</label>
                    <div className='col-lg-10'>
                    <input type="text" spellcheck="false"
                      className='form-control'
                      id="fname"
                      value={this.state.fname}
                      onChange={this.update("fname")}/>
                    </div>
                  </div>

                  <div className='form-group'>
                    <label className='col-lg-2 control-label'>Last Name</label>
                    <div className='col-lg-10'>
                    <input type="text" spellcheck="false"
                      className='form-control'
                      id="lname"
                      value={this.state.lname}
                      onChange={this.update("lname")}/>
                    </div>
                  </div>

                  <div className='form-group'>
                    <label className='col-lg-2 control-label'>Email</label>
                    <div className='col-lg-10'>
                    <input type="text" spellcheck="false"
                      className='form-control'
                      id="email"
                      value={this.state.email}
                      onChange={this.update("email")}/>
                    </div>
                  </div>

                  <button
                    className='continue-button'
                    onClick={this.handleSubmit}>
                    {!this.state.saving ? 'Update Settings' : 'Updating...'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Settings);
