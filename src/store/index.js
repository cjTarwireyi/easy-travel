import Vue from 'vue'
import Vuex from 'vuex'
import {dataService} from '../shared'
import {ADD_PASSENGER, GET_PASSENGERS,DELETE_PASSENGER,UPDATE_PASSENGER, ADD_PASSENGERS} from './mutation-types'
Vue.use(Vuex)
const state = {
  passengers:[]
};
const mutations = {
  [GET_PASSENGERS](state,passengers){
    state.passengers=passengers
  },
  [ADD_PASSENGER](state, passenger){
    state.passengers.push(passenger);
  },
  [DELETE_PASSENGER](state,passenger){
    state.passengers =[...state.passengers.filter(P => P.ID !== passenger.id)];
  },
  [UPDATE_PASSENGER](state,passenger){
    const index = state.passengers.findIndex(p => p.id ===passenger.id);
    state.passengers.splice(index,1,passenger);
    state.passengers =[...state.passengers];
  }
};
const actions = {
  async getPassengersAction({commit}){
    const passengers = await dataService.getPassengers();
  
    commit(GET_PASSENGERS,passengers);
  },
  async addPassengerAction({commit}, passenger){
    
    const addedPassenger = await dataService.addPassenger(passenger);
   
    commit(ADD_PASSENGER, addedPassenger);
  },
  async deletePassengerAction({commit}, passenger){
    const deletedPassengerId = await dataService.deletePassenger(passenger);
    commit(DELETE_PASSENGER, deletedPassengerId);
  },
  async updatePassengerAction({commit}, passenger){
    const updatedPassenger = await dataService.updatePassenger(passenger);
    commit(UPDATE_PASSENGER, updatedPassenger);
  }
};
const getters ={
  getPassengerById: state => id => state.passengers.find(p => p.id == id)
};
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  getters
})
