import React from 'react';
import { View, ScrollView } from 'react-native';
import ChatPreview from "../../components/UI/ChatPreview";

const ChatsView = (props) => {   
    
    

    const chats=[{
        name:"Franklin",
        timeLastMessage:"3:00",
        lastMessage:"Esta es una prueba para el preview de los chats",
    },

    {
        name:"Lorem ipsum",
        timeLastMessage:"3:00",
        lastMessage:"Esta es una prueba para el preview de los chats",
    },
    {
        name:"Prueba",
        timeLastMessage:"3:00",
        lastMessage:"Esta es una prueba para el preview de los chats",
    },
    {
        name:"API",
        timeLastMessage:"3:00",
        lastMessage:"Esta es una prueba para el preview de los chats",
    },
    {
        name:"ya casi esta listo",
        timeLastMessage:"3:00",
        lastMessage:"Esta es una prueba para el preview de los chats",
    },
    {
        name:"ya casi esta listo",
        timeLastMessage:"3:00",
        lastMessage:"Esta es una prueba para el preview de los chats",
    },{
        name:"ya casi esta listo",
        timeLastMessage:"3:00",
        lastMessage:"Esta es una prueba para el preview de los chats",
    },
    {
        name:"ya casi esta listo",
        timeLastMessage:"3:00",
        lastMessage:"Esta es una prueba para el preview de los chats",
    },
    {
        name:"ya casi esta listo",
        timeLastMessage:"3:00",
        lastMessage:"Esta es una prueba para el preview de los chats",
    },
    {
        name:"ya casi esta listo",
        timeLastMessage:"3:00",
        lastMessage:"Esta es una prueba para el preview de los chats",
    },
    {
        name:"ya casi esta listo",
        timeLastMessage:"3:00",
        lastMessage:"Esta es una prueba para el preview de los chats",
    },
    {
        name:"ya casi esta listo",
        timeLastMessage:"3:00",
        lastMessage:"Esta es una prueba para el preview de los chats",
    },
    {
        name:"ya casi esta listo",
        timeLastMessage:"3:00",
        lastMessage:"Esta es una prueba para el preview de los chats",
    },
    {
        name:"ya casi esta listo",
        timeLastMessage:"3:00",
        lastMessage:"Esta es una prueba para el preview de los chats",
    },
    {
        name:"ya casi esta listo",
        timeLastMessage:"3:00",
        lastMessage:"Esta es una prueba para el preview de los chats",
    },
    {
        name:"ya casi esta listo",
        timeLastMessage:"3:00",
        lastMessage:"Esta es una prueba para el preview de los chats",
    },]

    return(
        
        <ScrollView >
            {
                chats.map((chat, key)=>{
                    return(
                        <ChatPreview 
                            key={key}
                            contactName={chat.name}
                            message={chat.lastMessage}
                            timeLastMessage={chat.timeLastMessage}
                            navigate={()=>{props.navigation.navigate("Chat", {chatInfo:chat})}}
                        />
                    );
                })
            }
       
        </ScrollView>
    )
    
}

export default ChatsView;