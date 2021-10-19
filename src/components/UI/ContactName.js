import React from 'react';
import { Text } from 'react-native-paper';

const ContactName = (props) => {

    return(
        <Text
            style={{
                fontWeight:"bold",
                fontSize:20,
                letterSpacing:1
            }}
        >
            {props.name}
        </Text>
    )
}

export default ContactName;