<script setup>
import { reactive, watch } from "vue";
import useClient from "../composables/Client.js";
import TextField from "./inputs/TextField.vue";
import DateField from "./inputs/DateField.vue";

const { state, setRepresentative, getRepresentative } = useClient();
const representative = reactive({});

watch(representative, () => {
  setRepresentative(representative);
});
</script>

<template>
  <div style="margin-top: 50px">
    <div class="govuk-heading-m">
      A3) Údaje o splnomocnencovi žiadateľa pre účely nárokového konania /
      Reprezentative
    </div>

    <p class="govuk-body">(v prílohe priložte plnomocenstvo)</p>

    <fieldset class="govuk-fieldset" style="margin-bottom: 30px">
      <div
        id="changed-name-hint"
        class="govuk-label govuk-label--s"
        style="margin-bottom: 20px"
      >
        Bude Vás v konaní pred Centrom právnej pomoci zastupovať iná fyzická
        osoba?
      </div>
      <div class="govuk-radios govuk-radios--inline" data-module="govuk-radios">
        <div class="govuk-radios__item">
          <input
            class="govuk-radios__input"
            id="booleanRepresentative-0"
            v-model="representative.boolean"
            type="radio"
            :value="0"
            checked
          /><label
            class="govuk-label govuk-radios__label"
            for="booleanRepresentative-0"
          >
            Nie
          </label>
        </div>
        <div class="govuk-radios__item">
          <input
            class="govuk-radios__input"
            id="booleanRepresentative-1"
            v-model="representative.boolean"
            type="radio"
            :value="1"
          /><label
            class="govuk-label govuk-radios__label"
            for="booleanRepresentative-1"
          >
            Áno
          </label>
        </div>
      </div>
    </fieldset>

    <div
      class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
      v-if="representative.boolean"
    >
      <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
        Údaje o zástupcovi / Reprezentative
      </legend>

      <TextField
        v-model="representative.GivenName"
        :current-value="state.representative.GivenName"
        model="representative.GivenName"
        placeholder="Uveďte meno zástupcu"
        label="Meno zástupcu"
      />

      <TextField
        v-model="representative.FamilyName"
        :current-value="state.representative.FamilyName"
        model="representative.FamilyName"
        placeholder="Uveďte priezvisko zástupcu"
        label="Priezvisko zástupcu"
      />

      <DateField
        v-model="representative.DateOfBirth"
        :current-value="state.representative.DateOfBirth"
        model="representative.DateOfBirth"
        label="Dátum narodenia"
        placeholder="Dátum narodenia"
        :input-short="true"
      />

      <legend class="govuk-fieldset__legend govuk-fieldset__legend--s">
        Adresa zákonného zástupcu
      </legend>

      <TextField
        v-model="representative.StreetName"
        :current-value="state.representative.StreetName"
        model="representative.StreetName"
        placeholder="Uveďte názov ulice"
        label="Názov ulice"
      />

      <TextField
        v-model="representative.BuildingNumber"
        :current-value="state.representative.BuildingNumber"
        model="representative.BuildingNumber"
        label="Orientačné číslo"
        placeholder="Uveďte orientačné číslo"
        :input-short="true"
      />

      <TextField
        v-model="representative.PropertyRegistrationNumber"
        :current-value="state.representative.PropertyRegistrationNumber"
        model="representative.PropertyRegistrationNumber"
        label="Súpisné číslo"
        placeholder="Uveďte súpisné číslo"
        :input-short="true"
      />

      <TextField
        v-model="representative.PostalCode"
        :current-value="state.representative.PostalCode"
        model="representative.PostalCode"
        label="Psč"
        placeholder="Psč obce"
        :input-short="true"
      />

      <TextField
        v-model="representative.Municipality"
        :current-value="state.representative.Municipality"
        model="representative.Municipality"
        label="Obec"
        placeholder="Názov obce"
      />

      <TextField
        v-model="representative.PhoneNumber"
        :current-value="state.representative.PhoneNumber"
        model="representative.PhoneNumber"
        placeholder="Uveďte telefónne číslo"
        label="Telefónne číslo zástupcu"
        :input-short="true"
      />

      <TextField
        v-model="representative.Email"
        :current-value="state.representative.Email"
        model="representative.Email"
        placeholder="Uveďte email zákonného zástupcu"
        label="Email zákonného zástupcu"
        :input-short="true"
      />
    </div>
  </div>
</template>
