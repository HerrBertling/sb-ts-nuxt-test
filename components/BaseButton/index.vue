<template>
  <button :class="$style.button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({})
export default class BaseButton extends Vue {}
</script>

<style module>
.button {
  background: fuchsia;
  border: 1px solid fuchsia;
}
.button:hover,
.button:focus,
.button:active {
  background: rebeccapurple;
  border-color: rebeccapurple;
}
</style>
