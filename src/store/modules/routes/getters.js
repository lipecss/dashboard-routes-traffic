export default {
  'routeList' (state) {
    return state.routeList
  },
  'allDays' (state) {
    return state.routeList.map(valor => valor.date).filter((item, i, arr) => arr.indexOf(item) === i)
  },
  'kilometersPerDay' (state) {
    const days = state.routeList.filter((item, i, arr) => arr.indexOf(item) === i)

    const forecast = days.reduce((acc, val) => {
      const existingForecast = acc.find(f => f.date === val.date)
      if (existingForecast) {
        existingForecast.initialKm += val.initialKm
        existingForecast.finalKm += val.finalKm
      } else {
        acc.push({ ...val })
      }

      return acc
    }, []).map(({ initialKm, finalKm }) => finalKm - initialKm)

    return forecast
  },
  'allFines' (state) {
    const days = state.routeList.filter((item, i, arr) => arr.indexOf(item) === i)

    const forecast = days
      .reduce((acc, val) => {
        const existingForecast = acc.find(f => f.date === val.date)
        if (existingForecast) {
          existingForecast.finesTotalAmount += val.finesTotalAmount
        } else {
          acc.push({ ...val })
        }

        return acc
      }, [])
      .map(({ finesTotalAmount }) => finesTotalAmount)

    return forecast
  }
}
