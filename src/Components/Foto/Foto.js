import React, { useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import style from './style';

const Foto = ({url, description, numberOfLikes, takeImgLike, photoLike}) => {
  const [ like, setLike ] = useState(false);
  const [ likesNumber, setLikesNumber ] = useState(numberOfLikes);

  const clickLike = () => {
    const [newLike, qnt] = photoLike(like, likesNumber);

    setLikesNumber(qnt);
    setLike(newLike);
  }

  return (
    <>
      <Image
        source={{uri: url}}
        style={style.imagem}
      />
      <Text
        style={style.description  }
      >{description}</Text>
      <View style={style.viewLike}>
        <TouchableOpacity onPress={clickLike}>
          <Image 
            source={takeImgLike(like)}
            style={style.like}
          />        
        </TouchableOpacity>
        <Text>curtidas: {likesNumber}</Text>
      </View>
    </>
  )
};

export default Foto;
