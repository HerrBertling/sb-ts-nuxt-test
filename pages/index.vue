<template>
  <div class="container">
    <logo />
    <h1 class="title">
      sb-ts-nuxt-test
    </h1>
    <h2 class="subtitle">
      A storybook typescript nuxt test
    </h2>
    <p>{{ count }}</p>
    <base-button @click="updateCount(1)">CLICK ME!</base-button>
    <base-button @click="updateCount(-1)">NO, CLICK ME!</base-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Logo from '~/components/Logo.vue'
import BaseButton from '@/components/BaseButton/index.vue'

@Component({
  components: {
    BaseButton,
    Logo
  }
})
export default class Home extends Vue {
  count: number = 0

  updateCount(value: number) {
    this.count = this.count + value
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1280px;
  grid-gap: 2rem;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
