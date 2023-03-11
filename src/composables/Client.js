import { reactive, readonly, computed } from "vue";
import { xml } from "./Xml";

const defaultState = {
  form: {},

  formDemoData: { 
    FamilyName: "Gajdoš", 
    GivenName: "Gabriel", 
    booleanGivenFamilyName: 1, 
    FamilyName: "Gajdoš", 
    GivenName: "Gabriel", 
    BuildingNumber: "55", 
    PropertyRegistrationNumber: "35", 
    IdentifierValue: "6805216671", 
    Nationality: "Slovenska", 
    StreetName: "Slatinsky", 
    PostalCode: "82107", 
    Municipal: "Bratislava", 
    PhoneNumber: "985689055", 
    Email: "email.email@gmail.com", 
    Sex: "ZENA", 
    MaritalStatus: "5", 
    GivenFamilyName: "Gadd",
    CompletionPlace: "Bratislava",
    CompletionDate: "2023-03-08"
 },
  representative: {},
  legalRepresentative: {},
  family: {},
  validatedErrors: [],
};

const state = reactive(defaultState);

const getters = {
  getForm: computed(() => state.form),
  getRepresentative: computed(() => state.representative),
  getLegalRepresentative: computed(() => state.legalRepresentative),
  getFamily: computed(() => state.family),
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
  setFamily: (inputs) => {
    state.family = inputs;
  },

  createXml: () => {
    xml(state);
  },

  setDemoDataForm: () => {
    Object.assign(state.form, state.formDemoData);
  },
};


export default () => ({
  state: readonly(state),
  ...getters,
  ...actions,
});

