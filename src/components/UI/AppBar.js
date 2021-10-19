import React, {useState, useEffect} from 'react';
import { Appbar as AppbarPaper, Snackbar } from 'react-native-paper';
import Switch from './Switch';
const AppBar = (props) => {

    return(
      <AppbarPaper style={{
        backgroundColor:"#0e5e55",
        elevation:0 ,  

      }}
          

      >
            {/* <AppbarPaper.BackAction canGoBack={false} onPress={()=>{props.navigation.goBack();}}/> */}

            <AppbarPaper.Content title="Whatsapp UI" subtitle="Franklin Fontalvo" color="#fff" />
            <Switch />

      </AppbarPaper>
    )
}

export default AppBar;