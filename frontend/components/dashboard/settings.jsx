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
    user = Object.assign({}, user, this.state);
    let success = this.props.receiveUpdatedUser;
    updateUser(user, success);
  }

  render() {
    return(
      <div>
        <div className='dashboard-container'>
          <Tabs
              router={this.props.router}
              pathname={this.props.location.pathname}
            />
          <div className='dashboard'>
            <h1>Account Settings</h1>
            <form>

              <h4>Username</h4>
              <input type="text"
    						id="username"
    						value={this.state.username}
    						onChange={this.update("username")}/>

              <h4>First Name</h4>
              <input type="text"
                id="fname"
                value={this.state.fname}
                onChange={this.update("fname")}/>

              <h4>Last Name</h4>
              <input type="text"
                id="lname"
                value={this.state.lname}
                onChange={this.update("lname")}/>

              <h4>Email</h4>
              <input type="text"
                id="email"
                value={this.state.email}
                onChange={this.update("email")}/>

              <h4>Profile Photo</h4>
              <button
                className='continue-button upload-photo'
                onClick={this.upload}>
                Upload Image
              </button>

              <div className='img-preview'>
                <div className="load-message" />
                <img src={this.state.imageUrl} />
              </div>

              <button
                className='continue-button'
                onClick={this.handleSubmit}>Save
              </button>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Settings);
