import * as axios from 'axios';
import {API} from './config';

const getPassengers = async function(){
  try{
    const response = await axios.get(`${API}/passengers.json`);
    let data = parseList(response);
    return response.data;
}catch(error){

}

}
const getHero = async function(id) {
  try {
    const response = await axios.get(`${API}/passengers/${id}`);
    let hero = parseItem(response, 200);
    return hero;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const data ={
    getPassengers,
    getHero
}

const parseList = response => {
    if (response.status !== 200) throw Error(response.message);
    if (!response.data) return [];
    let list = response.data;
    if (typeof list !== 'object') {
      list = [];
    }
    return list;
  };