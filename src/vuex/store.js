import { createStore } from 'vuex'

export const store = createStore({
  state: {
    searchQuery: '',
    radioValue: 'all',
  },
  mutations: {
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
    setRadioValue(state, value) {
      state.radioValue = value;
    }
  },
});


