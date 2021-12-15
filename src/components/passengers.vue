<template>
  <div class="content-container">
    <div class="section content-title-group">
      <h2 class="title">Passengers</h2>
    </div>
    <div class="columns">
      <div class="column is-8">
        <div class="card edit-detail">
          <header class="card-header">
            <p class="card-header-title"></p>
          </header>
          <div class="card-content">
            <div class="content">             
              <div class="field">
                <label class="label" for="firstName">first name</label>
                <input class="input" id="firstName" v-model="passenger.firstName" />
              </div>
              <div class="field">
                <label class="label" for="lastName">last name</label>
                <input class="input" id="lastName" v-model="passenger.lastName" />
              </div>
              <div class="field">
                <label class="label" for="idNumber">ID No</label>
                <input class="input" id="idNumber" type="text" v-model="passenger.IdNumber"/>
              </div>
             <div class="field">
                <label class="label" for="dateOfBirth">DOB</label>
                <input class="input" id="dateOfBirth" type="text" v-model="passenger.dateOfBirth" />
              </div>
               <div class="field">
                <label class="label">Gender</label>
                <label class="radio" for="female">
                  <input type="radio" id="female" value="female" v-model="passenger.gender"/>
                  Female
                </label>
                <label class="radio" for="male">
                  <input type="radio" id="male" value="male" v-model="passenger.gender" />
                  Male
                </label>               
                <div class="color-line"></div>
              </div>
              <div class="field">
                <label for="power">
                  Departure
                  <div class="select is-primary">
                    <select id="departure" v-model="passenger.departure" :class="{invalid: !passenger.departure}" @keyup.esc="clearDeparture()">
                      <option disabled value>Please select one</option>
                      <option>Cape Town CBD</option>
                      <option>Cape Town Bellville</option>
                      <option>Joburg</option>
                      <option>Musina</option>
                    </select>
                  </div>
                </label>
              </div>
              <div class="field">
                <label for="power">
                  Destination
                  <div class="select is-primary">
                    <select id="destination" v-model="passenger.destination" :class="{invalid: !passenger.destination}" @keyup.esc="clearDestination()">
                      <option disabled value>Please select one</option>
                      <option>Cape Town CBD</option>
                      <option>Cape Town Bellville</option>
                      <option>Joburg</option>
                      <option>Musina</option>
                    </select>
                  </div>
                </label>
              </div>
              <div class="field">
                <label class="checkbox" for="active">
                  active
                  <input type="checkbox" class="is-primary" id="active" v-model="passenger.active" />
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
        <div class="notification is-info">{{message}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Passengers',
  data(){
    return{
      passenger:{
        firstName:'John',
        lastName:'Dor',
        IdNumber:'12345',
        dateOfBirth:'',
        gender:'female',
        active:true,
        departure:'',
        destination:''
      },
        message:'',
    }
  },

  methods: {
    cancel() {
      this.message='';
    },
    save() {
      this.message = JSON.stringify(this.passenger,null,'\n');
    },
    clearDropdown(){
      this.passenger.departure='';
    },
    clearDestination() {
      this.passenger.destination='';
    }
  },
};
</script>
