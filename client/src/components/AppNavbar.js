import React, { Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppNavbar extends Component {
    // constructor(props){
    //   super(props);
    //   // this.toggle = this.toggle.bind(this);

      //state
      state = {
        isOpen: false

      }

    //toggle
      toggle = () => {
        this.setState({
          isOpen : !this.state.isOpen
        });
      }

//render
    render() {

      return (
        <div>
          <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
              <NavbarBrand href="/">
               UA   TaskList Test
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle}/>

              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="https://github.com/kilik42">
                      Github
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </div>
      );


    }




}



export default AppNavbar;
