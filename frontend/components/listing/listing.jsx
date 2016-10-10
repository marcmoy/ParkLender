import React from 'react';
import { Link, DirectLink, Element, Events, scroll, scrollSpy, scroller }
  from 'react-scroll';
import { Location, Price, Size, Vehicles, Description, Photo }
  from './listing_form_components';
import Confirm from './listing_form_components';

const formFields = [
  { name: 'Location', component: Location },
  { name: 'Price', component: Price },
  { name: 'Size', component: Size },
  { name: 'Vehicles', component: Vehicles },
  { name: 'Description', component: Description },
  { name: 'Photo', component: Photo },
  { name: 'Confirmation', component: Confirm }
];

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.buildLinks = this.buildLinks.bind(this);
    this.buildElements = this.buildElements.bind(this);
    this.updateField = this.updateField.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
  }

  componentDidMount() {
    scrollSpy.update();
  }

  scrollTo(target) {
    return () => {
      scroller.scrollTo(target, {
        duration: 500,
        smooth: true,
        delay: 300
      });
    };
  }

  buildLinks() {
    let links = [];
    for (let i = 0; i < formFields.length; i++) {
      let name = formFields[i].name;
      links.push(
        <Link key={name} activeClass="active" className={name} to={name}
          spy={true} smooth={true} duration={500} activeClass='active'>
          <h5>Step {i + 1}</h5>
          {name}
        </Link>
      );
    }
    return links;
  }

  buildElements() {
    let elements = [];
    for (let i = 0; i < formFields.length; i++) {
      let field = formFields[i];
      let name = field.name;
      let FieldComponent = field.component;
      let nextName;
      if (formFields[i + 1]) nextName = formFields[i + 1].name;
      elements.push(
        <Element key={name} name={name} className='element'>
          <FieldComponent
            currentUser={this.props.currentUser}
            listing={this.props.listing}
            updateListing={this.props.updateListing}
            updateField={this.updateField}
            scrollNext={this.scrollTo(nextName)}
            createSpot={this.props.createSpot}/>
        </Element>
      );
    }
    return elements;
  }

  updateField(field) {
    return (selectOption) => {
      let listing = this.props.listing;
      listing[field] = selectOption.value;
      this.props.updateListing(listing);
    };
  }

  render() {
    return(
      <div className='listings-container'>
        <div className='left-menu'>
          { this.buildLinks() }
        </div>
        <div className='main'>
          { this.buildElements() }
        </div>
      </div>
    );
  }
}
export default Listing;
