<template>
  <div class="menu">
    <div class="menu__content">
      <img src="@/assets/logo.png" width="100%" height="100%" alt="">
      <button  @click.prevent="logout" class="default-button">{{ $t('buttons.logOut') }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheNavbarDashboard',
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  data () {
    return {}
  },
  components: {},
  computed: {},
  methods: {
    logout () {
      this.logoutEvent()
    }
  },
  filters: {},
  watch: {}
}
</script>

<style lang="scss">
.menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  width: 100vw;
  z-index: 8;
  overflow: hidden;
  background: $gray-hard;
  color: #fff;
  .menu__content {
    width: 50px;
    margin: 10px 15px;
  }
  @media screen and (min-width: 375px) {}
  @media screen and (min-width: 425px) {}
  @media screen and (min-width: 576px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1024px) {}
  @media screen and (min-width: 1400px) {}
  @media screen and (min-width: 1600px) {}
}
</style>
