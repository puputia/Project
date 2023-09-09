import React, { Component } from "react";
import styled from "styled-components";
import oc from "open-color";
import "../App.css";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
// import Amane1 from "../assets/Amane1.jpg";

import Header from "../components/Header.js";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronRight}  from "@fortawesome/free-solid-svg-icons";
import { faFolder}  from "@fortawesome/free-solid-svg-icons";
export class Categorize extends Component {
  render() {
    return (
      <CateContainer>
        <Header />
        <TitleWrap>
          <Title>
            📂&nbsp;수원&nbsp;
            <FontAwesomeIcon icon={faChevronRight} style={{ color: "gray" }} />
          </Title>
          <Title>
            📂&nbsp;수원화성&nbsp;
            <FontAwesomeIcon icon={faChevronRight} style={{ color: "gray" }} />
          </Title>
          <Title>
            📂&nbsp;202110&nbsp;
            <FontAwesomeIcon icon={faChevronRight} style={{ color: "gray" }} />
          </Title>
        </TitleWrap>
        <CateContents>
          <Container>
            <Row m="auto" style={{ textAlign: "Center", alignItems: "center" }}>
              <Col style={{ margin: "10px" }}>
                <Card style={{ maxWidth: "15rem" }}>
                  <FontAwesomeIcon icon={faFolder} style={{ height: "20vh", color: "A286DB" }} />
                  <Card.Body>
                    <Card.Title>먹을거</Card.Title>
                   
                  </Card.Body>
                </Card>
              </Col>
              <Col style={{ margin: "10px" }}>
                <Card style={{ maxWidth: "15rem" }}>
                  <FontAwesomeIcon icon={faFolder} style={{ height: "20vh", color: "#A286DB" }} />
                  <Card.Body>
                    <Card.Title>kakaotalk20211024</Card.Title>
                    
                  </Card.Body>
                </Card>
              </Col>
              <Col style={{ margin: "10px" }}>
                <Card style={{ maxWidth: "15rem" }}>
                  <FontAwesomeIcon
                    icon={faFolder}
                    style={{ height: "20vh", color: "#FFE359" }}
                  />
                  <Card.Body>
                    <Card.Title>kakaotalk20211024</Card.Title>
                    
                  </Card.Body>
                </Card>
              </Col>
              <Col style={{ margin: "10px" }}>
                <Card style={{ maxWidth: "15rem" }}>
                  <FontAwesomeIcon
                    icon={faFolder}
                    style={{ height: "20vh", color: "#FFE359" }}
                  />
                  <Card.Body>
                    <Card.Title>kakaotalk20211024</Card.Title>
                    
                  </Card.Body>
                </Card>
              </Col>

              <Col style={{ margin: "10px" }}>
                <Card style={{ maxWidth: "15rem" }}>
                  {/* <Card.Img
                    variant="top"
                    src={faFolder}
                    alt="Card image"
                    style={{ height: "28vh" }}
                  /> */}
                  <FontAwesomeIcon
                    icon={faFolder}
                    style={{ height: "20vh", color: "#FFE359" }}
                  />
                  <Card.Body>
                    <Card.Title>kakaotalk20211024</Card.Title>
                    
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </CateContents>
      </CateContainer>
    );
  }
}

export default Categorize;

const CateContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%
    height:150vh;
    background-color: ${oc.grape[0]}
    
`;

const Title = styled.div`
    margin-left: 8px;
  flex-direction: row;
`;

const CateContents = styled.div`
  max-width: 100%;
  
`;


const Info = styled.div`
  max-width: 100%;
  width:10em;
 
  background-color: ${oc.violet[1]}
  
`;

const TitleWrap = styled.div`
display: flex;
flex-direction: row;
width: 100%
text-algin: center;
align-items: center;
align-items: center;

margin: 0 auto;
height: 10vh;
padding-left: 25px;
font-size: 18px;
font-weight: bold;
background-color: ${oc.blue[1]}
  
`;




