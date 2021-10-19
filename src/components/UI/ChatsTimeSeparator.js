import React from 'react';
import { Text } from 'react-native';

import styled from "styled-components/native"


const StyledChatsSeparator = styled.View`
        background-color: #d3e8f7;
        width: 80px;
        padding: 10px;
        margin:auto;
        align-self:center;
        margin:20px 0px;
        border-radius:10px;
`;

const ChatsTimeSeparator = (props) => {
    return(
        <StyledChatsSeparator>
            <Text style={{
                color:"#7c7c7c",
                fontWeight:"bold",
                textAlign:"center"
            }}>
            
                {props.lastTimeConected.toUpperCase()}
            
            </Text>
        </StyledChatsSeparator>
    )   
}

export default ChatsTimeSeparator