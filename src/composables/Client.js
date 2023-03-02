
import { reactive, readonly, computed } from "vue";


const defaultState = {
  form: {},
  progresbar: 20,
  slide8: {},
};

const state = reactive(defaultState);

const getters = {
  getForm: computed(() => state.form),
  incomesActual: computed(() => {
    let sumar = 0;
    if (Number.isInteger(state.slide8.five)) {
      sumar += state.slide8.five;
    }
    if (Number.isInteger(state.slide8.six)) {
      sumar += state.slide8.six;
    }
    if (Number.isInteger(state.slide8.seven)) {
      sumar += state.slide8.seven;
    }
    if (Number.isInteger(state.slide8.eight)) {
      sumar += state.slide8.eight;
    }

    return Number(sumar);
  }),

  extensActual: computed(() => {
    let sumar = 0;
    if (state.slide6.partner == 1 || state.slide6.partner == 2) {
      sumar += Number(234.42 + 163.53);
    } else {
      sumar += Number(234.42);
    }

    if (state.slide7.children) {
      sumar += Number(107.03 * state.slide7.children);
    }
    return Math.round(1.6 * sumar);
  }),
};

const actions = {
  setProgresbar: (number) => {
    state.progresbar = number;
  },
  setForm: (inputs) => {
    state.form = inputs;
  },
};

export default () => ({
  state: readonly(state),
  ...getters,
  ...actions,
});
