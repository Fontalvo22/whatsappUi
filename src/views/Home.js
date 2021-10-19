import React from 'react';
import { Text, View } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import StatusView from './Status/StatusView';
import ChatsView from "./Chats/ChatsView";
import CallsView from './Calls/CallsView';

const Tab = createMaterialTopTabNavigator();

const Home = (props) => {

    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#ffffff89',
                tabBarIndicatorStyle:{
                    backgroundColor:"#fff",
                    paddingTop:3,
                },
                tabBarStyle:{
                    paddingTop:0,
                    paddingBottom:5,
                    backgroundColor:"#0e5e55",

                },
                

                tabBarPressColor:"#fff",
            })}
        

            tabBarStyle={{
                paddingBottom: 50
            }}

        >   
        <Tab.Screen name="chats" component={ChatsView}
            style={{
                transition:".5s"     

            }}
            options={{ tabBarLabel: 'CHATS' }}

        />

            <Tab.Screen name="status"
                options={{ tabBarLabel: 'status' }}

                component={StatusView}
            />

            <Tab.Screen name="LLAMADAS" component={CallsView} /> 

        </Tab.Navigator>
            
            
    )
}

export default Home;