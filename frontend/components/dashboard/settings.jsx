import React from 'react';
import { withRouter } from 'react-router';
import Tabs from './tabs';
import Footer from '../footer/footer';
import { addSpinner, removeSpinner } from '../../util/loader';
import IMAGES from '../../util/images';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageUrl: IMAGES.defaultImage };
    this.upload = this.upload.bind(this);
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if(!error){
        if (results[0].resource_type === 'image') {

          let image = new Image(); // initialize an Image object

          // created an event listener for when image loaded
          image.onload = () => {
            this.setState({ imageUrl: results[0].url });
            removeSpinner();
          };

          image.src = results[0].url; // after setting src, load begins
          addSpinner(); // add spinner for user feedback
        }
      }
    });
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
              <input type='text'></input>
              <h4>First Name</h4>
              <input type='text'></input>
              <h4>Last Name</h4>
              <input type='text'></input>
              <h4>Email</h4>
              <input type='text'></input>
              <h4>Password</h4>
              <input type='text'></input>
              <h4>Confirm Password</h4>
              <input type='text'></input>
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
              <button className='continue-button'>Save</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Settings);
