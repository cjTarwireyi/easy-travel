<template>
  <div class="content-container">
   
     <div class="columns">
           <div class="column is-3"></div>
      <div class="column is-6" v-if="passengers">
         <div class="section content-title-group">
      <h2 class="title">Passengers</h2>
    </div>
          <ul class="column is-12">
            <li v-for="passenger in passengers" :key="passenger.id">
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <div :key="passenger.name" class="name">
                      {{ passenger.firstName }} {{ passenger.lastName }}
                    </div>
                    <div class="description">{{ passenger.description }}</div>
                  </div>
                </div>
                <footer class="card-footer">
                  <router-link :to="{name: 'passenger-detail', params:{id: passenger.id} }"
                    tag="button"                
                    class="link card-footer-item">
                    <i class="fas fa-check"></i>
                    <span>Select</span>
               </router-link>
                </footer>
              </div>
            </li>
          </ul>           
    </div> 
             <div class="column is-3"></div> 
  </div>
  </div>
</template>

<script> 

import {data} from '../shared/data.js';

export default {
  name: 'Passengers',
  data(){
    return{     
      passengers:[]
    }
  },
  
    async created () {
     await this.loadPassengers();
    },
  methods: {
   async getPassengers(){
      return new Promise(resolve =>{
        setTimeout(() => resolve(mockApiPassengers),3000);
      })
    },
    async loadPassengers(){
      this.passengers = [];
      this.message = 'getting passengers. please wait';
      this.passengers = await data.getPassengers();
      this.message = '';
    },
   
    clearDeparture(){
      this.selectedPassenger.departure='';
    },
    clearDestination() {
      this.selectedPassenger.destination='';
    },
    cancelPassenger(){
      this.selectedPassenger = undefined;
    },
    savePassenger(passenger){
      const index  = this.passengers.findIndex(i => i.id === passenger.id);
      this.passengers.splice(index,1,passenger);
      this.passengers = [...this.passengers];
      this.selectedPassenger = undefined;
    }    
  },
};
</script>
