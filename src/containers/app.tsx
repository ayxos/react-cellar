import * as React from 'react';
const connect = require('react-redux').connect;

import { loginUser, logoutUser } from '../actions/session';
import Button from '../components/button';
import Content from '../components/content';
import LoginModal from '../components/login/login-modal';
import Logo from '../components/logo';
import NavigatorItem from '../components/navigator-item';

import { LinkContainer } from 'react-router-bootstrap';

import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';


interface IAppProps extends React.Props<any> {
  session: any;
  login: () => void;
  logout: () => void;
};

function mapStateToProps(state) {
  return {
    session: state.session,
    router: state.router,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(loginUser()),
    logout: () => dispatch(logoutUser()),
  };
}

function renderNavbar(firstName, lastName, isLoggedIn, logout) {
  return (<Navbar inverse>
    <Logo/>
    <Navbar.Collapse>
      <Nav>
        <NavigatorItem isVisible={ isLoggedIn } linkTo={'/list'} mr>
            <NavItem>Browse Products</NavItem>
        </NavigatorItem>
        <NavigatorItem isVisible={ isLoggedIn } linkTo={'/create'} mr>
            <NavItem>Add Product</NavItem>
        </NavigatorItem>
      </Nav>
      <Nav pullRight>
          <NavDropdown eventKey={3} title="About" id="basic-nav-dropdown">
              <LinkContainer to="/about">
                  <MenuItem eventKey={3.3}>About</MenuItem>
              </LinkContainer>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        <NavigatorItem isVisible={ isLoggedIn } linkTo={'/profile'} mr>
            <NavItem>
              <div data-testid="user-profile">
                { `${ firstName } ${ lastName }` }
              </div>
            </NavItem>
        </NavigatorItem>
      <NavigatorItem isVisible={ isLoggedIn } mr>
          <NavItem>
            <Button onClick={ logout } className="white">
              Logout
            </Button>
        </NavItem>
      </NavigatorItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>);
}

class App extends React.Component<IAppProps, void> {
  render() {
    const { children, session, login, logout } = this.props;
    const token = session.get('token', false);
    const isLoggedIn = token && token !== null && typeof token !== 'undefined';
    const firstName = session.getIn(['user', 'first'], '');
    const lastName = session.getIn(['user', 'last'], '');

    return (
      <div>
        <LoginModal
          onSubmit={ login }
          isPending={ session.get('isLoading', false) }
          hasError={ session.get('hasError', false) }
          isVisible={ !isLoggedIn } />

        {renderNavbar(firstName, lastName, isLoggedIn, logout)}

        <Content isVisible={ isLoggedIn }>
          { children }
        </Content>

        <div className="container">
          <p className="pull-right"><a href="/">Back Home</a></p>
          <p>Built as a sample application with
            <a
              href="https://facebook.github.io/react/">
              &nbsp;React.js
            </a>,
            <a href="http://twitter.github.com/bootstrap/">
              &nbsp;Bootstrap
            </a>,
            <a href="http://nodejs.org/">&nbsp;Node.js</a>,
            <a href="http://expressjs.com/">&nbsp;Express</a>, and
            <a href="http://www.mongodb.org/">&nbsp;MongoDB</a> by&nbsp;
            <a href="http://ayxos.com" target="_blank">
              Marco A. Pajares</a>. Following the example of&nbsp;
            <a href="http://coenraets.org" target="_blank">
              Christophe Coenraets</a>.
            <br></br>
            The source code for this application is available in
            <a
              href="https://github.com/ayxos/react-cellar">
              &nbsp;this repository
            </a> on GitHub.
          </p>
        </div>
      </div>
    );
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
