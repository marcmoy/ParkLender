import React from 'react';
//Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//Components
import App from './App';
import HomePage from './home/home_page';
import SearchPageContainer from './search/search_page_container';
//Actions
import { openWhereTo, closeWhereTo } from '../actions/whereto_actions';
import { splashOn, splashOff } from '../actions/splash_actions';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._activateWhereTo = this._activateWhereTo.bind(this);
    this._turnOffWhereTo = this._turnOffWhereTo.bind(this);
    this._activateSplash = this._activateSplash.bind(this);
    this._turnOffSplash = this._turnOffSplash.bind(this);
  }

  _ensureLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  _activateWhereTo() {
    this.context.store.dispatch(openWhereTo());
  }

  _turnOffWhereTo() {
    this.context.store.dispatch(closeWhereTo());
  }

  _activateSplash() {
    this.context.store.dispatch(splashOn());
  }

  _turnOffSplash() {
    this.context.store.dispatch(splashOff());
  }

  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App } >
          <IndexRoute component={ HomePage }
            onEnter={ this._activateSplash }
            onLeave={ this._turnOffSplash } />
          <Route path="/search" component={ SearchPageContainer }
            onEnter={ this._activateWhereTo }
            onLeave={ this._turnOffWhereTo }/>
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
