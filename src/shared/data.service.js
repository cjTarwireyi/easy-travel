import * as axios from 'axios';
import {API} from './config';

const getPassengers = async function(){
  try{
    const response = await axios.get(`${API}/passengers`); 
    return response.data;
}catch(error){

}

}

const getPassenger = async function(id) {
  try {   
    const response = await axios.get(`${API}/passengers/${id}`);
    let passenger = parseItem(response, 200);
    return passenger;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const addPassenger = async function(passenger) {
  try {
    const response = await axios.post(`${API}/passengers`, passenger);
    const addedPassenger = parseItem(response, 201);
    return addedPassenger;
  } catch (error) {
    return null;
  }
};

const deletePassenger = async function(passenger) {
  try {
    const response = await axios.delete(`${API}/passengers/${passenger.id}`);
    parseItem(response, 200);
    return passenger.id;
  } catch (error) {
    console.error(error);
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
    getPassenger,
    updatePassenger,
    addPassenger,
    deletePassenger
}

export const parseItem = (response, code) => {
  if (response.status !== code) throw Error(response.message);
  let item = response.data;
  if (typeof item !== 'object') {
    item = undefined;
  }
  return item;
};
