export default {
  appendPet: (state, { gornushi, pet }) => {
    state[gornushi].push(pet)
  }
}
