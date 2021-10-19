import React from 'react';
import styled from "styled-components"
import { Pressable } from 'react-native';

// const StyledPressable=styled.Pressable`
//   width:80%;
// `;

const WriteMessage = styled.TextInput.attrs({

    elevation: 5,
  
  })`
    color: #111;
    background-color:#fff;
    border-radius:8px;
    /* padding:5px; */
    padding:0px 15px;
    margin-right:10px;
    /* height:50px; */
    width:80%;
`;

export default WriteMessage
