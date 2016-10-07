import React from 'react';

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <footer className='footer'>
        <div className='container'>
          <ul>
            <h5>COMPANY</h5>
            <li><a>About</a></li>
            <li><a>Careers</a></li>
            <li><a>Press</a></li>
          </ul>
          <ul>
            <h5>CONNECT</h5>
            <li><a href='https://github.com/marcmoy/ParkLender'>Github</a></li>
            <li><a href='https://www.linkedin.com/in/marcmoy'>LinkedIn</a></li>
            <li><a href='https://www.facebook.com/marc.moy.1'>Facebook</a></li>
          </ul>
          <ul>
            <h5>COMMUNITIES</h5>
            <li><a>Owners</a></li>
            <li><a>Meetups</a></li>
            <li><a>Developers</a></li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
