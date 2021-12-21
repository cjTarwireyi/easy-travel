<template>
  <div>
    <div class="columns">
      <div class="column is-12">
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
                    v-model="clonedPassenger.firstName"
                  />
                </div>
                <div class="field">
                  <label class="label" for="lastName">last name</label>
                  <input
                    class="input"
                    id="lastName"
                    v-model="clonedPassenger.lastName"
                  />
                </div>
                <div class="field">
                  <label class="label" for="idNumber">ID No</label>
                  <input
                    class="input"
                    id="idNumber"
                    type="text"
                    v-model="clonedPassenger.IdNumber"
                  />
                </div>
                <div class="field">
                  <label class="label" for="dateOfBirth">DOB</label>
                  <input
                    class="input"
                    id="dateOfBirth"
                    type="text"
                    v-model="clonedPassenger.dateOfBirth"
                  />
                </div>
                <div class="field">
                  <label class="label">Gender</label>
                  <label class="radio" for="female">
                    <input
                      type="radio"
                      id="female"
                      value="female"
                      v-model="clonedPassenger.gender"
                    />
                    Female
                  </label>
                  <label class="radio" for="male">
                    <input
                      type="radio"
                      id="male"
                      value="male"
                      v-model="clonedPassenger.gender"
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
                        v-model="clonedPassenger.departure"
                        :class="{ invalid: !clonedPassenger.departure }"
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
                        v-model="clonedPassenger.destination"
                        :class="{ invalid: !clonedPassenger.destination }"
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
                      v-model="clonedPassenger.active"
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
    </div>
  </div>
</template>

<script>

export default {
  name: 'passengerDetail',
  data(){
    return{
      clonedPassenger:{...this.passenger}
    }
  },
   async created() {
  },
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    fullName() {
      return `${this.clonedPassenger.firstName} ${this.clonedPassenger.lastName}`;
    },
  },
   methods: {
  cancel() {
    this.$emit('cancel');
  },
  save() {
    this.$emit('save',this.clonedPassenger);
  },
   }
};
</script>
