// import axios from '@nuxtjs/axios'
export const state = () => ({
  valueCompetitions: '',
  valueCountry: '',
  valuePeriod: 'В любое время'
})

export const mutations = {
  SET_VALUE_COUNTRY (state, sts) {
    state.valueCountry = sts
  },
  SET_VALUE_COMPETITIONS (state, sts) {
    state.valueCompetitions = sts
  },
  SET_VALUE_PERIOD (state, sts) {
    state.valuePeriod = sts
  }
}
export const actions = {
  setValueCountry ({
    commit
  }, sts) {
    commit('SET_VALUE_COUNTRY', sts)
  },
  setValueCompetitions ({
    commit
  }, sts) {
    commit('SET_VALUE_COMPETITIONS', sts)
  },
  setValuePeriod ({
    commit
  }, sts) {
    commit('SET_VALUE_PERIOD', sts)
  },
  async getValueCountry ({
    commit
  }) {
    const {
      countries
    } = await this.$axios.$get('/api/Countries/getListAllVisible')
    console.log('countries', countries)
    commit('SET_VALUE_COUNTRY', countries)
  },
  async getValueCompetitions ({
    commit
  }) {
    const listQuery = {
      Page: 1,
      Limit: 1000,
      Title: '',
      ValueC: ''
    }
    const {
      competitions
    } = await this.$axios.$get('/api/Competitions/', {
      params: listQuery
    })
    console.log('competitions', competitions)
    commit('SET_VALUE_COMPETITIONS', competitions)
  }
}

export const getters = {
  getValueCountry: state => state.valueCountry,
  getValueCompetitions: state => state.valueCompetitions,
  getPeriod: state => state.valuePeriod
}
