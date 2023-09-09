import React, { Component } from "react";
import styled from "styled-components";

import "../App.css";


export class Footer extends Component {
    render() {
      return (
        <FooterContainer>
            <Contents>이것은 푸터입니다.</Contents>
        </FooterContainer>
      );
    }
  }

export default Footer;
  
const FooterContainer = styled.div`
  max-width: 100%;
  background-color: black;
 
  display: flex;
  flex-direction: column;
  justify-content: bottom;
  height: 13vh;
`;

const Contents = styled.div`

  color: white;
`;
