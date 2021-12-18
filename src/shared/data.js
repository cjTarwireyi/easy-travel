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

export const data ={
    getPassengers,
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