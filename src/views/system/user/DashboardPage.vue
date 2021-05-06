<template>
  <b-container fluid class="dashborad-page">
    <b-row>
      <b-col cols="12">
        <BaseLineChart
          :days="allDays"
          :kilometers="kilometersPerDay"
          :finesByDay="allFines"
          :average="averageKM"
        />
      </b-col>
    </b-row>

    <b-row class="mb-3">
      <b-col cols="12" md="6" lg="4" v-for="(card, index) in cards" :key="index" class="mb-3">
        <BaseCard
          :propTitle="card.title"
          propTheme="light"
          :propIcon="card.icon"
          :propIconTheme="card.theme"
        >
          <template v-slot:value>
            <span class="text-success mr-2">
              <slot name="value">{{ total[card.name] }}</slot>
            </span>
          </template>
        </BaseCard>
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
    this.routesFromAPI = result
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  data () {
    return {
      routesFromAPI: [],
      kilometers: [],
      cards: [
        { title: 'Total Days', name: 'days', icon: ['fas', 'calendar-day'], theme: 'red' },
        { title: 'Total Kilometers', name: 'kilometers', icon: ['fas', 'truck'], theme: 'green' },
        { title: 'Total Fines', name: 'fines', icon: ['fas', 'money-bill-alt'], theme: 'blue' }
      ]
    }
  },
  props: {},
  components: {
    BaseLineChart: () => import('@/components/fragments/BaseLineChart'),
    BaseCard: () => import('@/components/fragments/BaseCard')
  },
  computed: {
    allDays () {
      return this.routesFromAPI.map((valor) => valor.date).filter((item, i, arr) => arr.indexOf(item) === i)
    },
    kilometersPerDay () {
      const days = this.routesFromAPI.map((valor) => valor)
        .filter((item, i, arr) => arr.indexOf(item) === i)

      const forecast = days.reduce((acc, val) => {
        const existingForecast = acc.find(f => f.date === val.date)
        if (existingForecast) {
          existingForecast.initialKm += val.initialKm
          existingForecast.finalKm += val.finalKm
        } else {
          acc.push(val)
        }

        return acc
      }, []).map(({ initialKm, finalKm }) => finalKm - initialKm)

      return forecast
    },
    averageKM () {
      // Average
      const average = this.kilometers.reduce((acc, val) => {
        const value = (val / this.kilometers.length).toFixed(2)
        acc.push(value)
        return acc
      }, [])

      return average
    },
    allFines () {
      const days = this.routesFromAPI.map((valor) => valor)
        .filter((item, i, arr) => arr.indexOf(item) === i)

      const forecast = days.reduce((acc, val) => {
        const existingForecast = acc.find(f => f.date === val.date)
        if (existingForecast) {
          existingForecast.finesTotalAmount += val.finesTotalAmount
        } else {
          acc.push(val)
        }

        return acc
      }, []).map(({ finesTotalAmount }) => finesTotalAmount)

      return forecast
    },
    total () {
      return {
        days: this.allDays.length,
        kilometers: this.kilometersPerDay.reduce((total, km) => total + km, 0),
        fines: this.allFines.reduce((total, fine) => total + fine, 0)
      }
    }
  },
  methods: {},
  filters: {},
  watch: {
    kilometersPerDay (newVal) {
      this.kilometers = newVal
    }
  }
}
</script>

<style lang="scss" scoped>
.dashborad-page {
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
