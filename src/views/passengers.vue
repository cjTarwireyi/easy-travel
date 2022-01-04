<template>
  <div class="content-container">
   
     <div class="columns">
           <div class="column is-3"></div>
      <div class="column is-6" v-if="passengers">
         <div class="section content-title-group">
      <h2 class="title">Passengers</h2>
       <router-link
            tag="button"
            class="button add-button"
            :to="{ name: 'passenger-detail', params: { id: 0 } }"
          >
            <i class="fas fa-plus"></i>
          </router-link>
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
                   <button
                    class="link card-footer-item"
                    @click="askToDelete(passenger)"
                  >
                    <i class="fas fa-trash"></i>
                    <span>Delete</span>
                  </button>
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
  <Modal
      :message="modalMessage"
      :isOpen="showModal"
      @handleNo="closeModal"
      @handleYes="deletePassenger"
    >
    </Modal>
  </div>
</template>

<script> 

import Modal from '@/components/modal';
import{mapState,mapActions} from 'vuex';

export default {
  name: 'Passengers',
  data(){
    return{ 
      passengerToDelete: null,
         showModal: false,   
    }
  },
   components: {
    Modal,
  },  
  async created () {
     await this.loadPassengers();
    },
  methods: {
    ...mapActions(['getPassengersAction','deletePassengerAction']),
   async getPassengers(){
      return new Promise(resolve =>{
        setTimeout(() => resolve(mockApiPassengers),3000);
      })
    },
     async deletePassenger() {
      if (this.passengerToDelete) {
        await this.deletePassengerAction(this.passengerToDelete);
      }     
      await this.loadPassengers();
     
    },
    askToDelete(passenger) {
      this.passengerToDelete = passenger;
      this.showModal = true;
    },
     async deletePassenger() {
      this.closeModal();
      if (this.passengerToDelete) {
        await this.deletePassengerAction(this.passengerToDelete);
      }
      await this.loadPassengers();
    },
    closeModal() {
      this.showModal = false;
    },
    async loadPassengers(){
      
      this.message = 'getting passengers. please wait';
     // this.passengers = await dataService.getPassengers();
     await this.getPassengersAction()
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
  },
  computed:{
     ...mapState(['passengers']),
      modalMessage() {
      const name =
        this.passengerToDelete && this.passengerToDelete.fullName
          ? this.passengerToDelete.fullName
          : '';
      return `Would you like to delete ${name} ?`;
    },
  }
};
</script>
