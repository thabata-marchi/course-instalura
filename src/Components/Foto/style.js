import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get('screen').width;
const style = StyleSheet.create({
  imagem: {
    width: largura,
    height: largura,
  }, 
  like: {
    width: 40,
    height: 40,
    margin: 10,
  },
  description: {
    marginLeft: 10,
    marginTop: 10,
  },
  viewLike: {
    flexDirection: "row",
    alignItems: "center",
  } 
})

export default style;