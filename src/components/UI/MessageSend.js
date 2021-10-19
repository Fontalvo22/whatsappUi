import React from 'react';
import styled from "styled-components/native"
import { View, Text, FlatList } from "react-native";
import MessageTexts from './MessageTexts';

const StyledMessageSend = styled.View`
    background-color: #ecfdd7;
    padding: 15px;
    margin-right: 15px;
    margin-left: 10px;
    border-radius: 10px;
`;

const MessageSend = (props) => {
        return(
            <View
                style={{
                    paddingLeft:20,
                    flex:1,
                    alignItems:"flex-end"
                }}
            >
                
                <StyledMessageSend elevation={3}>      
                    <MessageTexts>{props.message}</MessageTexts>
                </StyledMessageSend>
            </View>
        )
}

export default MessageSend
