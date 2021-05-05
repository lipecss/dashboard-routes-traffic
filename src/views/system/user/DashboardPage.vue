<template>
  <b-container fluid class="dashborad-page">
    <b-row>
      <b-col>
        <p>OIII</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { getRoutes } from '@/services/api'

export default {
  name: 'UserDashboardPage',
  metaInfo () {
    return {
      title: this.$t('pages.system.user.dashboardPage.html.title')
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  async mounted () {
    const result = await getRoutes()
    console.log(result)
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  data () {
    return {
      liveDatas: null
    }
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
.dashborad-page {
  color: #000;
  .dashborad-page__content {
    padding-top: 70px;
    padding-left: 0;
    padding-right: 0;
    overflow: hidden;
    overflow-y: auto;
  }
  @media screen and (min-width: 375px) {}
  @media screen and (min-width: 425px) {}
  @media screen and (min-width: 576px) {}
  @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1024px) {
    .dashborad-page__content {
      padding-top: 0;
      padding-left: 85px;
      padding-right: 15px;
      .dashborad-page__content-info {
        height: 90vh;
        position: relative;
      }
    }
  }
  @media screen and (min-width: 1400px) {}
  @media screen and (min-width: 1600px) {}
}
</style>
