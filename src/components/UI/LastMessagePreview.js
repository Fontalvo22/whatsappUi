import React from 'react';
import { Text, Animated } from 'react-native';

const LastMessagePreview = (props) => {
    
    let message = props.message;
    
    if (message.length>=5) {
        message = message.substring(0, 35) + "...";
    }

    return(
        <Text style={{
            color:"#878787",
            fontSize:16,
        }}>
            { message }
        </Text>
    )
}

export default LastMessagePreview;