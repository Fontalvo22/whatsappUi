import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider as PaperProvider, Switch } from 'react-native-paper';

import Home from "./src/views/Home";
import AppBar from './src/components/UI/AppBar';

import ChatHeader from "./src/components/UI/ChatHeader";

import Chat from "./src/views/Chats/Chat"
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: (props) => <AppBar />,
          }}
        >

          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Chat" component={Chat}

              options={{
                header: props => <ChatHeader contactName={props.route.params.chatInfo.name} navigation={props.navigation}/>,

              }}
 

          />

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;