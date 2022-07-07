export default {
  name: 'Form',
  data() {
    return {
      text: ''
    }
  },
  template: `
    <input v-model="text" placeholder="Type here">
    <p>{{ text }}</p>
  `
}
