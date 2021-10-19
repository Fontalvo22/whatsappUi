import React from 'react';
import styled from "styled-components/native";

import { View } from "react-native";

// import Icon from 'react-native-vector-icons/FontAwesome';

import MessageTexts from './MessageTexts';
const MessageStyled = styled.View`
    background-color: #fff;
    padding: 15px;
    margin-right: 15px;
    margin-left: 10px;
    border-radius: 10px;
    
`;

const MessageReceived = (props)=>{
    return(

        <View
            style={{
                paddingLeft:20,
                flex:1,
                alignItems:"flex-start"
            }}
        >
            
            <MessageStyled elevation={3}>      
                <MessageTexts>{props.message}</MessageTexts>
            </MessageStyled>
        </View>
    )    
};


export default MessageReceived
