import React from "react";
import { TextInput } from "react-native";

const CustomInput = ({value, setValue, placeholder, secureTextEntry, placeholderTextColor, style}) => {
    return(
        <TextInput value={value} onChangeText={setValue} placeholder={placeholder} secureTextEntry={secureTextEntry}
            placeholderTextColor={placeholderTextColor} style={style}/>
    );
};

export default CustomInput;