<template>
    <div>
        <h1> {{ animal.name }} ({{ this.$route.params.gornushi }})</h1>
        <p> Sorty: {{ animal.breed}} </p>
        <p> Age: {{ animal.age}} </p>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted () {
    const animal = this[this.$route.params.gornushi][this.$route.params.id]
    this.animal = animal
  }
}
</script>
