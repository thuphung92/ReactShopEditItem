import React, { Component } from 'react'
import { FaUserAlt, FaCartPlus } from "react-icons/fa"
import { Nav, Navbar, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {

        const styles={
            user:{
                color: 'white',
                display: 'flex'
            },
            link:{
                textDecoration: 'none'
            }
        }

        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand>MiShop</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {this.props.token ? 
                            <>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/addproduct">Add Product</Nav.Link>
                            <Nav.Link as={Link} to="/updateproduct">Update Product</Nav.Link>
                            <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                            </>
                            :null}
                        </Nav>
                        
                        <Nav>
                            {this.props.username ? 
                            <>
                            <Nav.Link href="#deets"> <span style={{paddingRight: '8px'}}><FaUserAlt/></span> {this.props.username}</Nav.Link>
                            <Nav.Link href="#deets"><FaCartPlus/></Nav.Link>
                            </>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                        </Navbar.Collapse>   
                    </Container>
                </Navbar>
                
            </div>
        )
    }
}
