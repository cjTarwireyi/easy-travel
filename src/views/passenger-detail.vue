<template>
  <div>    
    <div class="columns">
        <div class="column is-3"></div> 
      <div class="column is-6">
        <div class="card">
          <div class="card edit-detail">
            <header class="card-header">
              <p class="card-header-title">{{ fullName }}</p>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="field">
                  <label class="label" for="firstName">first name</label>
                  <input
                    class="input"
                    id="firstName"
                    v-model="passenger.firstName"
                  />
                </div>
                <div class="field">
                  <label class="label" for="lastName">last name</label>
                  <input
                    class="input"
                    id="lastName"
                    v-model="passenger.lastName"
                  />
                </div>
                <div class="field">
                  <label class="label" for="idNumber">ID No</label>
                  <input
                    class="input"
                    id="idNumber"
                    type="text"
                    v-model="passenger.IdNumber"
                  />
                </div>
                <div class="field">
                  <label class="label" for="dateOfBirth">DOB</label>
                  <input
                    class="input"
                    id="dateOfBirth"
                    type="text"
                    v-model="passenger.dateOfBirth"
                  />
                </div>
                <div class="field">
                  <label class="label">Gender</label>
                  <label class="radio" for="female">
                    <input
                      type="radio"
                      id="female"
                      value="female"
                      v-model="passenger.gender"
                    />
                    Female
                  </label>
                  <label class="radio" for="male">
                    <input
                      type="radio"
                      id="male"
                      value="male"
                      v-model="passenger.gender"
                    />
                    Male
                  </label>
                  <div class="color-line"></div>
                </div>
                <div class="field">
                  <div class="columns">
                    <label class="column"> Departure </label>
                    <div class="select is-primary column is-3">
                      <select
                        id="departure"
                        v-model="passenger.departure"
                        :class="{ invalid: !passenger.departure }"
                        @keyup.esc="clearDeparture()"
                      >
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
                    <label class="column"> Destination </label>
                    <div class="select is-primary column is-3">
                      <select
                        id="destination"
                        v-model="passenger.destination"
                        :class="{ invalid: !passenger.destination }"
                        @keyup.esc="clearDestination()"
                      >
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
                    <input
                      type="checkbox"
                      class="is-primary"
                      id="active"
                      v-model="passenger.active"
                    />
                  </label>
                </div>
              </div>
            </div>
            <footer class="card-footer">
              <button
                class="link card-footer-item cancel-button"
                @click="cancel()"
              >
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
            <div class="column is-3"></div> 
    </div>

  </div>
</template>

<script>
import { dataService } from '../shared';
import {mapGetters} from 'vuex';
export default {
  name: 'passengerDetail',
  data(){
    return{
      passenger:{}
    }
  },
  created() {
      this.passenger = this.getPassengerById(this.id);
  },
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...mapGetters(['getPassengerById']),
    fullName() {
      return `${this.passenger.firstName} ${this.passenger.lastName}`;
    },
  },
  methods: {
    cancel() {
      this.$router.push({name:'passengers'});
    },
    async save() {
      await dataService.updatePassenger(this.passenger);
      this.$router.push({name:'passengers'});
    },
  }
};
</script>
