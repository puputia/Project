import React, { Component } from 'react';
import styled from "styled-components";
import oc from "open-color";
import "../App.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faChessBoard } from "@fortawesome/free-solid-svg-icons";
import Photo from "../assets/love.png";

export class Edit extends Component {
    render() {
        return (
          <EditWrapper>
            <Toolbar>
              <DropdownButton
                id="dropdown-basic-button"
                title="열기"
                style={{ margin: "auto" }}
              >
                <Dropdown.Item href="#/action-1">내 pc에서 열기</Dropdown.Item>
                <Dropdown.Item href="#/action-2">공유폴더 열기</Dropdown.Item>
              </DropdownButton>

              <FontAwesomeIcon
                icon={faCircleDown}
                size="2x"
                style={{
                  margin: "14px auto",
                  textAlign: "left",
                  marginLeft: "-120px",
                }}
              />

              <FileName>
                <div
                  class="filename"
                  style={{ margin: "auto", marginLeft: "2em" }}
                >
                  kakaotalk202230505.jpg
                </div>
              </FileName>

              <Back>
                <FontAwesomeIcon
                  icon={faRotateLeft}
                  style={{ marginRight: "15px" }}
                />
                <FontAwesomeIcon
                  icon={faRotateRight}
                  style={{ marginRight: "15px" }}
                />
              </Back>

              <Zoom>
                <FontAwesomeIcon icon={faMagnifyingGlass} /> 확대
              </Zoom>
            </Toolbar>
            <EditContents>
              <ImageArea>
                <img src={Photo} alt="logo img" style={{maxWidth:"100%"}} />
              </ImageArea>
            </EditContents>
            <EditControl>
              <Mosaic>
                <FontAwesomeIcon icon={faChessBoard} size="2x" />
                <div>모자이크</div>
              </Mosaic>
              <Blur>
                <FontAwesomeIcon icon={faDroplet} size="2x" />
                <div>블러</div>
              </Blur>
              <ColorFilter>
                <FontAwesomeIcon icon={faPalette} size="2x" />
                <div>색필터</div>
              </ColorFilter>
            </EditControl>
          </EditWrapper>
        );
    }
}

export default Edit;





const  EditWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%
    height:100vh;
    background-color: ${oc.gray[9]};
   
`;



// const EditContainer = styled.div`
    
// `;


const Toolbar = styled.div`
    display:flex;
    // justify-contents:center;
    flex-direction: row;
    color: white;
    text-align: center;
    
    max-width: 100%
    width: 500vh;
    height: 8vh;
    background-color: ${oc.gray[7]};
   
`;


const FileName = styled.div`
    display:flex;
    justify-contents:center;
    text-align: center;
    
`

const ImageArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 58px auto;
  width: 50vh;
  max-height: 100%;
  
  background-color: ${oc.violet[3]};
`;


const EditContents = styled.div`
    max-width: 100%
    width: 300vh;
    height: 80vh;
    background-color: ${oc.gray[9]};

`;

const EditControl = styled.div`
    display:flex;
    flex-direction: row;
    max-width: 100%
    width: 500vh;
    height: 12vh;
    background-color: ${oc.gray[7]};
    color: white;
    text-align: center;
    align-items: center;
`;

const Zoom = styled.div`
  
    flex-direction: row;
  
    
    margin : 20px auto;
   
    text-align: right;
    align-items:center;
   
`;


const Back = styled.div`
  
    flex-direction: row;
   
    margin : 20px auto;
    margin-right :  -100px
    text-align: right;
    align-items:center;
   
`;


const Mosaic = styled.div`
   margin: 5px auto;
   flex-direction: column;
`;

const Blur = styled.div`
   flex-direction: column;
   margin: 5px auto;
`;

const ColorFilter = styled.div`
    flex-direction: column;
    margin: 5px auto;
`;
