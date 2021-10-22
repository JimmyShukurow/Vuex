<template>
  <div class="home">
    <h1>Betje haywan aljakmy?</h1>
    <button v-on:click="togglePetForm" class="btn btn-primary"> Add new Pet </button>

    <b-form @submit.prevent="handleSubmit"  v-if="showPetForm">

      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Gornushi" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.gornushi"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

       <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="formData.age"
          placeholder="Enter age"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        gornushi: null
      }
    }
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      const { name, age, gornushi } = this.formData
      const payload = {
        gornushi,
        pet: {
          name,
          age
        }
      }
      this.addPet(payload)

      // reset form
      this.formData = {
        name: '',
        age: 0,
        gornushi: null
      }
    }
  }
}
</script>
