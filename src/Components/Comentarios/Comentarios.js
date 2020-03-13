import React, { useState } from 'react';
import { FlatList, Text, TextInput, Image, View, TouchableOpacity } from 'react-native';
import style from './style';

const Comentarios = ({ comentarios, addComment }) => {

  const [ comments, setComment ] = useState(comentarios);

  const commented = () => {
    boxInput.clear();
    const newComment = addComment(contentInput,'Thabata Marchi');
    setComment([...comments, newComment]);
  }

  let boxInput;
  let contentInput = '';

  return(
    <>
      <FlatList 
        data={comments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =>
          <View style={style.inline}> 
            <Text>{item.userName} </Text>
            <Text>{item.text}</Text>
          </View>
        }
      />
      <View style={style.inline}>
        <TextInput 
          ref={textInput => boxInput = textInput}
          onChangeText={text => contentInput = text}
          placeholder={'Deixe seu comentário...'}
          style={{flex:1}}
        />
        <TouchableOpacity onPress={commented}>
          <Image 
            source={require('../../../res/images/send.png')}
            style={style.imgSend}
          ></Image>
        </TouchableOpacity>
      </View>
    </>  
  )

}

export default Comentarios;