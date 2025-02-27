import { defineStore } from 'pinia'

export const useHelperStore = defineStore({
  id: 'helper',
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
