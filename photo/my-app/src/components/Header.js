import React, { Component } from "react";
import styled from "styled-components";
import LogoImg from "../assets/Logo/pnglogo.png";
import "../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export class Header extends Component {
    render() {
      return (
        <HeaderWrapper>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LogoBox>
                <img src={LogoImg} alt="logo img" height="35em" width="45em" />
              </LogoBox>
              <Navbar.Brand href="#home" style={{ fontFamily: "yg-jalnan" }}>
                PHOTOCATE
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Photo Categorize</Nav.Link>
                <Nav.Link href="#pricing">Photo Edit</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </HeaderWrapper>
      );
    }
  }

export default Header;
  
const HeaderWrapper = styled.div`
  
`;

const LogoBox = styled.div`
  margin-right: 8px;
  
`;
