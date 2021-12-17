<template>
  <div class="content-container">
    <div class="section content-title-group">
      <h2 class="title">Passengers</h2>
    </div>
     <div class="columns">
      <div class="column is-3">
         <div class="card" v-show="passengers.length">
        <header class="card-header">
          <p class="card-header-title">Passenger list</p>
        </header>
        <ul class="list is-hoverable">
            <li v-for="passenger in passengers" :key="passenger.id">
                <a class="list-item" @click="selectedPassenger = passenger" :class="{'is-active': selectedPassenger==passenger}"> 
                  <span class="width-95-display-inline-block margin-l-5">{{passenger.firstName}}</span>
                </a>
            </li>
        </ul>
        </div>
            <div class="notification is-info" v-show="message">{{ message }}</div>
      </div>    
    </div>
    <PassengerDetail v-if="selectedPassenger" :passenger = "selectedPassenger"/>  
  </div>
</template>

<script> 

const mockApiPassengers = [
        {
          id: 10,
          firstName: 'Gladys',
          lastName: 'May',
          IdNumber:'2001',
          dateOfBirth:new Date(2001,7,1),
          gender:'female',
          active:true,
          departure:'',
          destination:'',
          numberOfItems:2
        },
        {
          id: 20,
          firstName: 'Jane',
          lastName: 'Govender',
           IdNumber:'2002',
          dateOfBirth:new Date(2001,7,1),
          gender:'female',
          active:true,
          departure:'',
          destination:'',
          numberOfItems:2
        },
        {
          id: 30,
          firstName: 'Peter',
          lastName: 'Drygh',
          IdNumber:'2003',
          dateOfBirth:new Date(2001,7,1),
          gender:'male',
          active:true,
          departure:'',
          destination:'',
          numberOfItems:2
        },
        {
          id: 40,
          firstName: 'Jake',
          lastName: 'Moore',
          IdNumber:'2004',
          dateOfBirth:new Date(2001,7,1),
          gender:'male',
          active:true,
          departure:'',
          destination:'',
          numberOfItems:2
        },
      ];

import PassengerDetail from '@/components/passenger-detail';
export default {
  name: 'Passengers',
  components:{PassengerDetail},
  name: 'Passengers',
  data(){
    return{
      selectedPassenger:undefined,
      passengers:[]
    }
  },
  
    created () {
      this.loadPassengers();
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
      this.passengers = await this.getPassengers();
      this.message = '';
    },
   
    clearDeparture(){
      this.selectedPassenger.departure='';
    },
    clearDestination() {
      this.selectedPassenger.destination='';
    }
  },
};
</script>
