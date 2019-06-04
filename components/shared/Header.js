import React from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import auth0Client from '../../services/auth0';

const BsNavLink = (props) => {
  const { route, title } = props;
  return (
    <Link href={route}>
      <a className="nav-link port-navbar-link"> {title} </a>
    </Link>
  )
}

const Login = () => {
  return (
    <span onClick={auth0Client.login} className="nav-link port-navbar-link clickable"> Login </span>
  )
}

const Logout = () => {
  return (
    <span className="nav-link port-navbar-link clickable"> Logout </span>
  )
}

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">Andy Au</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/" title="Home" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/about" title="About" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/portfolios" title="Portfolio" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/blogs" title="Blog" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/cv" title="CV" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <Login />
              </NavItem>
              <NavItem className="port-navbar-item">
                <Logout />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
