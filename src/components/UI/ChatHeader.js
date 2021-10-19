import React from 'react';
import { Appbar as AppbarPaper, Avatar, IconButton } from 'react-native-paper';



const ChatHeader = (props) => {

    return(
            <AppbarPaper style={{
                    backgroundColor:"#0e5e55",
                    elevation:1,
                    padding:10,  
                }}
            >
                <AppbarPaper.BackAction onPress={()=>{props.navigation.goBack()}}/>

                <Avatar.Image
                    size={45}
                    source={{uri: 'https://picsum.photos/200/300'}}        
                />

                <AppbarPaper.Content title={props.contactName} subtitle={"Ult. Vez 11:45"} color="#fff" /> 
                
                <IconButton icon="video" color="#fff" size={30} />
                <IconButton icon="phone" color="#fff" size={30} />
            
            </AppbarPaper>
        )
}

export default ChatHeader;