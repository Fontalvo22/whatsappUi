import React, { useState } from 'react';
import { Switch as SwitchPaper } from 'react-native-paper';

const Switch = (props) => {
    

    const [switchStatus, setSwitchState] = useState(false);

    const onSwitchChange = () =>{
        
        if(switchStatus==false){
            setSwitchState(true);
        }else{
            setSwitchState(false);
        }
    
    }

    return <SwitchPaper value={switchStatus} onValueChange={()=>{
        onSwitchChange(); 
        if( props.onValueChange != null && props.onValueChange != undefined ){
            props.onValueChange();
        }
    }} />



}

export default Switch
