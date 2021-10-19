//React Utilities
import React, { useState } from 'react';

//Styled Components
import styled from "styled-components"

//Icons Component
import Icon from 'react-native-vector-icons/FontAwesome';

//Container icon
const StyledSendAudio = styled.View`
    background-color:#17796a;
    padding:20px;
    border-radius:1000px;
    width:15%;
    align-items:center;
    justify-content:center;
`;

//Icons

//Microphone Icon

const AudioIcon = styled(Icon).attrs({
    name:"microphone",
    size:20,
    color:"#fff",
    elevation:3
})``;

//Send message plane Icon
const SendIcon = styled(Icon).attrs({
    name:"paper-plane",
    size:20,
    color:"#fff",
    elevation:3
})``;

const SendAudio = (props) => {
    const [messageStatus, setMessageStatus] = useState(props.messageText)
    
    return(
        <StyledSendAudio>
            { props.messageText==true ? <SendIcon /> : <AudioIcon/> }
        </StyledSendAudio>
    );
}

export default SendAudio
