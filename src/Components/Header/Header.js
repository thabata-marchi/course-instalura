import React from 'react';
import { View, Text, Image } from 'react-native';
import estilo from './style';

const Header = ({userName, userURL}) => {
  return (
    <View style={estilo.header}>
      <Image
        source={{uri: userURL}}
        style={estilo.imagem} 
      />
      <Text>{userName}</Text> 
    </View>
  )
}

export default Header;