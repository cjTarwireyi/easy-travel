import Vue from 'vue'
import Vuex from 'vuex'
import {dataService} from '../shared'
import {GET_PASSENGERS} from './mutation-types'
Vue.use(Vuex)
const state = {
  passengers:[]
};
const mutations = {
  [GET_PASSENGERS](state,passengers){
    state.passengers=passengers
  }
};
const actions = {
  async getPassengersAction({commit}){
    const passengers = await dataService.getPassengers();
    commit(GET_PASSENGERS,passengers);
  }
};
const getters ={};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
