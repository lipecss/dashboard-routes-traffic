<template>
  <div class="i18n" @mouseenter="isHover = true">
    <font-awesome-icon :icon="['fa', 'globe-americas']" size="lg" style="color: #0491fb"/>
      <div class="i18n__content" v-if="isHover"  @mouseleave="isHover = false">
        <button
          class="i18n__content--button"
          v-for="lang in languages"
          :key="lang.flag"
          @click="changeLocale(lang.language)"
        >
          <flag :iso="lang.flag" v-bind:squared="false" />
          <span>{{ lang.title }}</span>
        </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseI18nButton',
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  data () {
    return {
      isHover: false,
      languages: [
        { flag: 'br', language: 'pt-BR' },
        { flag: 'us', language: 'en' }
      ]
    }
  },
  props: {},
  components: {},
  computed: {},
  methods: {
    changeLocale (locale) {
      this.$i18n.locale = locale
      this.isHover = false
    }
  },
  filters: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.i18n {
  position: fixed;
  bottom: 10px;
  left: 10px;

  &__content {
    display: inline-grid;
    position: absolute;
    left: 0;
    top: -80px;

    &--button {
      padding: 0 23px;
      line-height: 34px;
      border: 2px solid #d2d2cc;
      background: transparent;
      border-radius: 4px;
      transition: 0.3s;
      color: #d2d2cc;

      &:hover {
        background: #212529;
        color: #fff;
        box-shadow: 0 10px 15px 0 rgb(0 0 0 / 10%);
        transform: translateY(-5px);
        a {
          color: #fff;
        }
      }
    }
  }
}
</style>
