import React, { Component } from "react";
import styled from "styled-components";
import oc from "open-color";
import "../App.css";

import Header from "../components/Header.js";
import Folder from "../assets/Folder.png";
import Local from "../assets/Local.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from 'react-bootstrap';

import { faFolder}  from "@fortawesome/free-solid-svg-icons";
export class ImgUpload extends Component {
  render() {
    return (
      <UploadContainer>
        <Header />
        <Title>포토편집</Title>
        <SubTitle>편집할 사진을 업로드 해주세요</SubTitle>
        <Upload>
          <LocalUpload>
            <img
              src={Local}
              alt="logo img"
              style={{ width: "15em", margin: "30px auto" }}
            />
            <Button
              style={{
                display: "flex",
                justifyContent: "center",
                borderRadius: "30px",
                width: "8em",
                alignItems: "center",
                textAlign: "center",
                margin: "auto",
              }}
            >
              로컬에서 열기
            </Button>
          </LocalUpload>

          <ShareUpload>
            <img
              src={Folder}
              alt="logo img"
              style={{ width: "15em", margin: "30px auto" }}
            />
            <Button
              style={{
                display: "flex",
                justifyContent: "center",
                borderRadius: "30px",
                width: "10em",
                alignItems: "center",
                textAlign: "center",
                margin: "auto",
              }}
            >
              공유폴더에서 열기
            </Button>
          </ShareUpload>
        </Upload>
      </UploadContainer>
    );
  }
}

export default ImgUpload;

const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-contents : center;
    max-width: 100%
    height:150vh;
    background-color: ${oc.grape[0]}
    
`;

const Title = styled.div`
 text-align: center;
 align-items: center;
 margin: 0 auto;
 padding-top: 45px;
 font-weight: bold;
 font-size: 30px;
`;

const SubTitle = styled.div`
    margin: 0 auto;
    text-align: center;
`;

const Upload = styled.div`
    display: flex;
    flex-direction: row;
    margin : 10px auto;
    text-align: center;
    align-items: center;
    max-width: 100%;
    height: 500px;
    margin-bottom:800px;
    border : 1px solid #cccccc;
  
`;


const LocalUpload = styled.div`
  width: 400px;
  height: 500px;
  background-color: pink;

padding-top:50px;
`;
 
const ShareUpload = styled.div`
  width: 400px;
  height: 500px;
  background-color: #DEABDE;
  padding-top:50px;
`;








