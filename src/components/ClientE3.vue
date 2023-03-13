<script setup>
import { reactive, watch } from "vue";
import useClient from "../composables/Client.js";
import TextField from "./inputs/TextField.vue";
import DateField from "./inputs/DateField.vue";
import FamilyPerson from "./ClientFamily/FamilyPerson.vue";

const { setForm, getFamily, setFamily } = useClient();
const family = reactive({});

watch(family, () => {
  setFamily(family);
});
</script>

<template>
  <div
    style="
      margin-top: 50px;
      background-color: rgb(243 244 246);
      padding: 1.5rem;
    "
  >
    <div class="govuk-heading-m">E3) Rodinné pomery žiadateľa</div>

    <p class="govuk-body-s">
      Manžel/-ka; druh/družka; zákonný zástupca/iná fyzická osoba, ktorá poberá
      na dieťa príjem
    </p>

    <TextField
      v-model="family.GivenName"
      :current-value="getFamily.GivenName"
      key="family.GivenName"
      label="Meno partnera"
      placeholder="Uveďte meno partnera"
      :required="false"
    />

    <TextField
      v-model="family.FamilyName"
      :current-value="getFamily.FamilyName"
      key="family.FamilyName"
      label="Priezvisko partnera"
      placeholder="Uveďte priezvisko partnera"
      :required="false"
    />

    <DateField
      v-model="family.DateOfBirth"
      :current-value="family.DateOfBirth"
      key="family.DateOfBirth"
      label="Dátum narodenia"
      placeholder="Dátum narodenia"
      :input-short="true"
      :required="false"
    />

    <div class="govuk-form-group">
      <h4 class="govuk-label-wrapper">
        <label class="govuk-label govuk-label--s" for="family_typeOfPerson">
          Typ osoby
        </label>
      </h4>
      <select
        class="govuk-select"
        id="family_typeOfPerson"
        v-model="family.Person"
      >
        <option value="undefined" disabled>-- Vybrať --</option>
        <option :value="'MANZEL'">Manžel/ka</option>
        <option :value="'DRUH'">Druh/ družka</option>
        <option :value="'ZAK_ZAST'">Zákonný zástupca</option>
        <option :value="'INA_FO'">
          Iná fyzická osoba, ktorá poberá na dieťa príjem
        </option>
      </select>
    </div>

    <div class="govuk-heading-s">Nezaopatrené deti</div>

    <details class="govuk-details" data-module="govuk-details">
      <summary class="govuk-details__summary">
        <span class="govuk-details__summary-text">
          Poznámky nezaopatrené deti
        </span>
      </summary>
      <div class="govuk-details__text">
        Maloleté deti do 18 rokov, prípadne staršie deti študujúce na SŠ alebo
        VŠ.
      </div>
    </details>

    <family-person></family-person>
  </div>
</template>
