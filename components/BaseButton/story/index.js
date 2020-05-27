import BaseButton from '../index.vue'

export default { title: 'BaseButton' }

export const basic = () => ({
  components: { BaseButton },
  template: '<base-button>Do not click here!</base-button>'
})
