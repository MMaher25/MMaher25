import React from 'react'
import { Navbar, NavItem, Icon } from 'react-materialize';


class Navigation extends React.Component {
  render() {
    return (
        <Navbar brand={<a />} alignLinks="right">
          <NavItem href="get-started.html">
            <Icon>
              search
            </Icon>
          </NavItem>
          <NavItem href="get-started.html">
            <Icon>
              view_module
            </Icon>
          </NavItem>
          <NavItem href="get-started.html">
            <Icon>
              refresh
            </Icon>
          </NavItem>
          <NavItem href="get-started.html">
            <Icon>
              more_vert
            </Icon>
          </NavItem>
        </Navbar>
    );
  }
}

export default Navigation;