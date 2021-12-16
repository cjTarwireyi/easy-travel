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
    <div class="columns" v-if="selectedPassenger">
      <div class="column is-3">
           <div class="card">
        <div class="card edit-detail">
          <header class="card-header">
            <p class="card-header-title">{{fullName}} </p>
          </header>
          <div class="card-content">
            <div class="content">             
              <div class="field">
                <label class="label" for="firstName">first name</label>
                <input class="input" id="firstName" v-model="selectedPassenger.firstName" />
              </div>
              <div class="field">
                <label class="label" for="lastName">last name</label>
                <input class="input" id="lastName" v-model="selectedPassenger.lastName" />
              </div>
              <div class="field">
                <label class="label" for="idNumber">ID No</label>
                <input class="input" id="idNumber" type="text" v-model="selectedPassenger.IdNumber"/>
              </div>
             <div class="field">
                <label class="label" for="dateOfBirth">DOB</label>
                <input class="input" id="dateOfBirth" type="text" v-model="selectedPassenger.dateOfBirth" />
              </div>
               <div class="field">
                <label class="label">Gender</label>
                <label class="radio" for="female">
                  <input type="radio" id="female" value="female" v-model="selectedPassenger.gender"/>
                  Female
                </label>
                <label class="radio" for="male">
                  <input type="radio" id="male" value="male" v-model="selectedPassenger.gender" />
                  Male
                </label>               
                <div class="color-line"></div>
              </div>
              <div class="field">
              <div class="columns">
                <label class="column">
                  Departure
                 
                </label>
                 <div class="select is-primary column">
                    <select id="departure" v-model="selectedPassenger.departure" :class="{invalid: !selectedPassenger.departure}" @keyup.esc="clearDeparture()">
                      <option disabled value>Please select one</option>
                      <option>Cape Town CBD</option>
                      <option>Cape Town Bellville</option>
                      <option>Joburg</option>
                      <option>Musina</option>
                    </select>
                  </div>
                  </div>
              </div>
              <div class="field">
                 <div class="columns">
                <label class="column">
                  Destination                 
                </label>
                 <div class="select is-primary column">
                    <select id="destination" v-model="selectedPassenger.destination" :class="{invalid: !selectedPassenger.destination}" @keyup.esc="clearDestination()">
                      <option disabled value>Please select one</option>
                      <option>Cape Town CBD</option>
                      <option>Cape Town Bellville</option>
                      <option>Joburg</option>
                      <option>Musina</option>
                    </select>
                  </div>
                  </div>
              </div>
              <div class="field">
                <label class="checkbox" for="active">
                  active
                  <input type="checkbox" class="is-primary" id="active" v-model="selectedPassenger.active" />
                </label>
              </div>
            </div>
          </div>
          <footer class="card-footer">
            <button class="link card-footer-item cancel-button" @click="cancel()">
              <i class="fas fa-undo"></i>
              <span>Cancel</span>
            </button>
            <button class="link card-footer-item" @click="save()">
              <i class="fas fa-save"></i>
              <span>Save</span>
            </button>
          </footer>
        </div>
        <div class="notification is-info"></div>
      </div>
      </div>
    </div>
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

export default {
  name: 'Passengers',
  data(){
    return{
      selectedPassenger:undefined,
      passengers:[]
    }
  },
    computed: {
      fullName() {
        return `${this.selectedPassenger.firstName} ${this.selectedPassenger.lastName}`; 
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
    cancel() {
      this.message='';
    },
    save() {
      this.message = JSON.stringify(this.selectedPassenger,null,'\n');
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
