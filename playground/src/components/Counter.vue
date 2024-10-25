<script setup lang="ts">
import { ref } from "vue"

const greeting = ref("Hello, Vue 3!")
const counter = ref<number | 1>(0)

const incrementCounter = () => {
  counter.value++

  const foo = "string"

  // eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with
  if (foo.charAt(0) === "b") {
    console.warn("foo")
  }
}
</script>

<template>
  <div>
    <h1>{{ greeting }}</h1>
    <button @click="incrementCounter">Click me!</button>
    <p>Counter: {{ counter }}</p>
  </div>
</template>

<style>
.a {
  color: red;
}
</style>
