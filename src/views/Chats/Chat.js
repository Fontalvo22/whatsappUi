import React, { useState } from 'react';
import { ScrollView,  ImageBackground, View } from "react-native";

import ChatsTimeSeparator from '../../components/UI/ChatsTimeSeparator';
import MessageReceived from '../../components/UI/MessageReceived';
import MessageSend from '../../components/UI/MessageSend';
import WriteMessage from '../../components/UI/WriteMessage';
import SendAudio from '../../components/UI/SendAudio';


const Chat = (props) => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    
    const [inputText, setInputText]=useState(null);

    const checkText = () =>{
        if(inputText==null || !inputText.trim()){
            setIsInputFocused(false)
        }else{
            setIsInputFocused(true)
        }
    }
 
    return(
        <ImageBackground
            source={require("../../images/WhatsappDefaultBg.jpg")}
            style={{ flex:1 }}
            
        >  
            <ScrollView >
                        
                    <ChatsTimeSeparator lastTimeConected={"Today"} />

                    <MessageSend message="Esta es una prueba"/>
                    <MessageReceived message="Hola Mundo!" />
                    
            </ScrollView>

            <View style={{
                flexDirection:"row",
                // marginRight:10,
                marginLeft:10,
                marginBottom:10,

            }}>
                
                <WriteMessage
                    value={null}
                    onBlur={checkText}
                    onFocus={()=>{setIsInputFocused(true)}}
                    onChangeText={ text => {setInputText(text)}}
                />
                <SendAudio messageText={isInputFocused}/>
            </View>
        </ImageBackground>

    )
}

export default Chat;