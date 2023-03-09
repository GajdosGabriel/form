import { reactive, readonly, computed } from "vue";
import { xml } from "./Xml";

const defaultState = {
  form: {
     booleanGivenFamilyName: 0, 
     FamilyName: "Gajdoš", 
     GivenName: "Gabriel" 
  },
  representative: {},
  legalRepresentative: {},
  validatedErrors: [],
};

const state = reactive(defaultState);

const getters = {
  getForm: computed(() => state.form),
  getRepresentative: computed(() => state.representative),
  getLegalRepresentative: computed(() => state.legalRepresentative),
  getvalidatedErrors: computed(() => state.validatedErrors),
};

const actions = {
  getValidate: () => {
    state.validatedErrors.push(["Validate error"]);
  },
  setForm: (inputs) => {
    Object.assign(state.form, inputs);
  },
  setRepresentative: (inputs) => {
    state.representative = inputs;
  },
  setLegalRepresentative: (inputs) => {
    state.legalRepresentative = inputs;
  },

  createXml: () => {
    xml(state);
  },
};

export default () => ({
  state: readonly(state),
  ...getters,
  ...actions,
});

