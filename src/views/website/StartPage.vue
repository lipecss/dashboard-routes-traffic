<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'StartPage',
  metaInfo () {
    return {
      meta: [
        { name: 'robots', content: 'index, follow' },
        { name: 'description', content: 'Bla bla bla bla ...' },
        { name: 'keywords', content: 'bla, blabla, blablabla, blablablabla' }
      ]
    }
  },
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
  props: {},
  components: {},
  computed: {},
  methods: {},
  filters: {},
  watch: {}
}
</script>

<style scoped lang="scss">
</style>
