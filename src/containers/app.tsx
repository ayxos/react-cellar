import * as React from 'react';
const connect = require('react-redux').connect;
const Link = require('react-router').Link;

import { loginUser, logoutUser } from '../actions/session';
import Button from '../components/button';
import Content from '../components/content';
import LoginModal from '../components/login/login-modal';
import Logo from '../components/logo';
import Navigator from '../components/navigator';
import NavigatorItem from '../components/navigator-item';

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


        <Navbar>
          <Logo/>
          <Navbar.Collapse>
            <Nav>
              <NavigatorItem isVisible={ isLoggedIn } mr>
               <Link to="/">Counter</Link>
             </NavigatorItem>
             <NavigatorItem isVisible={ isLoggedIn } mr>
               <Link to="/about">About</Link>
             </NavigatorItem>
             <NavigatorItem isVisible={ isLoggedIn } mr>
               <Link to="/list">List</Link>
             </NavigatorItem>
              <NavigatorItem isVisible={ isLoggedIn } mr>
               <Link to="/create">Create</Link>
             </NavigatorItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavigatorItem isVisible={ isLoggedIn } mr>
                <div data-testid="user-profile">
                  { `${ firstName } ${ lastName }` }
                </div>
              </NavigatorItem>
            <NavigatorItem isVisible={ isLoggedIn }>
              <Button onClick={ logout } className="bg-red white">
                Logout
              </Button>
            </NavigatorItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Content isVisible={ isLoggedIn }>
          { children }
        </Content>
      </div>
    );
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
