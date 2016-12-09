import React from 'react';
//Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//Components
import App from './App';
import HomePageContainer from './home/home_page_container';
import { requestSpots } from '../actions/spots_actions';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._requestSpots = this._requestSpots.bind(this);
  }

  _requestSpots() {
    this.context.store.dispatch(requestSpots());
  }

  render(){
    return(
      <Router history={ hashHistory } onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" component={ App } onEnter={ this._requestSpots }>
          <IndexRoute component={HomePageContainer} />
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
