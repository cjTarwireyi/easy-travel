import * as axios from 'axios';
import {API} from './config';

const getPassengers = async function(){
  try{
    console.log(API);
    const response = await axios.get(`${API}/passengers`);
    let data = parseList(response);
    return response.data;
}catch(error){

}

}

const getHero = async function(id) {
  try {
    console.log(API);
    const response = await axios.get(`${API}/passengers/${id}`);
    let hero = parseItem(response, 200);
    return hero;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const updatePassenger = async function(passenger) {
  try {
    const response = await axios.put(`${API}/passengers/${passenger.id}`, passenger);
    const updatedPassenger = parseItem(response, 200);
    return updatedPassenger;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const dataService ={
    getPassengers,
    getHero,
    updatePassenger
}

export const parseItem = (response, code) => {
  if (response.status !== code) throw Error(response.message);
  let item = response.data;
  if (typeof item !== 'object') {
    item = undefined;
  }
  return item;
};

const parseList = response => {
    if (response.status !== 200) throw Error(response.message);
    if (!response.data) return [];
    let list = response.data;
    if (typeof list !== 'object') {
      list = [];
    }
    return list;
  };