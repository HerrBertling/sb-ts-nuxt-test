import Logo from '../Logo.vue'

export default {
  component: Logo,
  title: 'Logo'
}

export const LogoStory = () => ({
  components: { Logo },
  template: `<Logo />`
})
