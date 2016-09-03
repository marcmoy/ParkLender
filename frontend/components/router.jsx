import React from 'react';
//Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//Components
import App from './App';
// import HomePageContainer from './home/home_page_container';
import SearchPageContainer from './search/search_page_container';
//Actions
import { openWhereTo, closeWhereTo } from '../actions/whereto_actions';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._activateWhereTo = this._activateWhereTo.bind(this);
    this._turnOffWhereTo = this._turnOffWhereTo.bind(this);
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

  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
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
