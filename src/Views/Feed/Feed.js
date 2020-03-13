import React, { useState, useEffect } from 'react';
import { 
  SafeAreaView, 
  FlatList, 
  StatusBar
} from 'react-native';

import feed from '../../Services/feed';
import { Header } from '../../Components/Header';
import { Foto } from '../../Components/Foto';
import { Comentarios } from '../../Components/Comentarios';
import addComment from '../../Services/addComment';
import {takeImgLike, photoLike} from '../../Services/likes';

const Feed = () => {
  const [ fotos, setFotos ] = useState([]);
  
  useEffect(() => {
    feed(setFotos);
  }, []);  

  return (
    <>
      <StatusBar 
        backgroundColor="white"
        barStyle="dark-content"
      />
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>  
          <SafeAreaView>
            <Header 
              userName={item.userName}
              userURL={item.userURL}
            />
            <Foto 
              description={item.description} 
              url={item.url}
              numberOfLikes={item.likes}
              takeImgLike={takeImgLike}
              photoLike={photoLike}
            />
            <Comentarios 
              comentarios={item.comentarios}
              addComment={addComment}
            />
          </SafeAreaView>
        }
      />
    </>
  );
};

export default Feed;
