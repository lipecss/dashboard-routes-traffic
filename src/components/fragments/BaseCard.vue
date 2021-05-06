<template>
  <div class="base-card" :class="theme">

    <div class="base-card__content">
      <b-row>
        <b-col>
          <h5 h5 v-if="propTitle" class="card-title text-uppercase text-muted">{{ propTitle }}</h5>
          <span class="h2 font-weight-bold mb-0"><slot name="value"></slot></span>
        </b-col>
        <b-col cols="auto">
          <div class="base-card__content--icon" :class="themeIcon">
            <font-awesome-icon :icon="propIcon" style="color: #ffff" size="lg"/>
          </div>
        </b-col>
      </b-row>
      <p class="base-card__content--text-sm mt-3 mb-0">Current Month</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
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
  props: {
    propTitle: { type: String, default: '' },
    propTheme: {
      type: String,
      default: 'normal',
      validator: (value) => {
        return ['normal', 'dark', 'light'].indexOf(value) !== -1
      }
    },
    propIcon: {
      type: Array,
      default () {
        return ['fab', 'github']
      }
    },
    propIconTheme: {
      type: String,
      default: 'red',
      validator: (value) => {
        return ['red', 'green', 'blue'].indexOf(value) !== -1
      }
    }
  },
  components: {},
  computed: {
    theme () {
      switch (this.propTheme) {
        case 'dark':
          return 'base-card__theme--dark'
        case 'light':
          return 'base-card__theme--light'
        default:
          return 'base-card__theme--normal'
      }
    },
    themeIcon () {
      switch (this.propIconTheme) {
        case 'blue':
          return 'base-card__content--icon--gradient-blue'
        case 'green':
          return 'base-card__content--icon--gradient-green'
        default:
          return 'base-card__content--icon--gradient-red'
      }
    }
  },
  methods: {},
  filters: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.base-card {
  display: inline-block;
  position: relative;
  width: 100%;
  min-height: 170px;
  text-align: center;
  padding: 20px 10px;
  word-wrap: break-word;
  overflow: hidden;
  vertical-align: top;
  border-radius: 6px;

  // inicio propTheme
  &.base-card__theme--normal {
    background-color: #f8f8f2;
    color: #000000;
  }
  &.base-card__theme--dark {
    background-color: #353734;
    color: rgba(#f8f8f2, 0.5);
  }
  &.base-card__theme--light {
    background-color: #d2d2cc;
    color: #000000;
  }
  // fim propTheme

  .base-card__title {
    margin-top: 10px;
    margin-bottom: 15px;
    font-weight: bold;
    text-transform: uppercase;
    color: #000000;
  }

  .base-card__content {
    &--text-sm {
      text-align: center;
      font-weight: 600;
      text-transform: uppercase;
    }

    &--icon {
      display: flex;
      justify-content: center;
      border-radius: 50%;
      align-items: center;
      width: 50px;
      height: 50px;

      &--gradient-red {
        background: linear-gradient(87deg,#f5365c,#f56036);
      }

      &--gradient-green {
        background: linear-gradient(87deg,#2dce89,#2dcecc);
      }

      &--gradient-blue {
        background: linear-gradient(87deg,#11cdef,#1171ef);
      }
    }
  }
}
</style>
