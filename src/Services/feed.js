import api from "./api";

const feed = async (callback) => {
  try{
    const response = await api.get('/feed');
    callback(response.data);
  } catch(err){
    console.log(err);
  }
}

export default feed;