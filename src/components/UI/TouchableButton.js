import React from 'react';
import { TouchableRipple } from "react-native-paper";
import { TouchableNativeFeedback } from 'react-native';

const TouchableButton = (props) =>{
    return(
        <TouchableRipple
            onPress={() => console.log('Pressed')}
            background={TouchableNativeFeedback.Ripple("#fff", true, 20)}
        >                
        
            {
                props.children
            }

        </TouchableRipple>
    );
}

export default TouchableButton