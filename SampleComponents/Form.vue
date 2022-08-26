<script>
export default {
  props: {
    inputValue: String
  },
  data() {
    return {
      text: this.inputValue
    }
  }
}
</script>

<template>
  <input v-model="text" placeholder="Type here">
  <p>{{ text }}</p>
</template>
