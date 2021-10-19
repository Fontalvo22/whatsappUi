import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Avatar } from 'react-native-paper';

import ContactName from "./ContactName"; 
import LastMessagePreview from "./LastMessagePreview";

const ChatPreview = (props) => {
return(
    <View
        
        style={{
            paddingLeft:20,
            paddingRight:20,
        }}
        >
            <Pressable onPress={()=>{
                // props.openChat();
                props.navigate()
            }}
        >
        <View

            style={{
                paddingTop:15,
                paddingBottom:15,
                alignItems: 'flex-start',
                flexDirection:"row",                
                // borderBottomWidth:1,
                // borderBottomColor:"#b6b6b6",
                overflow:"scroll",

            }}
        >
            
            <Avatar.Image

                size={60}
                source={{uri: 'https://picsum.photos/200/300'}}
                        
            />
            
            {/* Chat Info Container */}
                
            <View
                style={{
                    paddingLeft:20,
                    paddingTop:5,
                
                }}
            >
                <ContactName name={props.contactName}/>
                <LastMessagePreview message={props.message}/>
            </View>

            <Text>{props.timeLastMessage}</Text>

        </View>
        </Pressable>
    </View>
    )
}

export default ChatPreview;