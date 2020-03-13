import api from "./api";

const runLogin = async (username,password) => {  
  const response = await api.post('/users/login', {
    userName: username,
    password: password
  });


  if( response.status === 200) {
    console.log( "Deu certo!!" );
    return response.headers['x-access-token']
    
  } else {
    throw new Error('Não foi possível logar!');
  }

}

export default runLogin;  