<script setup>
import { reactive } from "vue";
import useClient from "../composables/Client.js";
import TextField from "./inputs/TextField.vue";

const { setRepresentative, getRepresentative } = useClient();
const representative = reactive({});

watch(representative, () => {
  setRepresentative(representative);
});
</script>

<template>
  <div style="margin-top: 50px">
    <div class="govuk-heading-m">
      A3) Údaje o splnomocnencovi žiadateľa pre účely nárokového konania
    </div>

    <p class="govuk-body">(v prílohe priložte plnomocenstvo)</p>

    <fieldset class="govuk-fieldset" style="margin-bottom: 30px">
      <div
        id="changed-name-hint"
        class="govuk-label govuk-label--s"
        style="margin-bottom: 30px"
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
        Údaje o zástupcovi
      </legend>

      <TextField
        v-model="representative.GivenName"
        placeholder="Uveďte zástupcu"
        label="Meno zástupcu"
      />

      <TextField
        v-model="representative.FamilyName"
        placeholder="Uveďte priezvisko zástupcu"
        label="Priezvisko zástupcu"
      />

      <div class="govuk-form-group">
        <label
          class="govuk-label govuk-label--s"
          for="RepresentativeDateOfBirth"
        >
          Dátum narodenia
        </label>
        <input
          class="govuk-input govuk-input--width-10"
          id="LegalRepresentativeDateOfBirth"
          v-model="representative.DateOfBirth"
          placeholder="Dátum
              narodenia"
          required
          type="date"
        />
      </div>

      <legend class="govuk-fieldset__legend govuk-fieldset__legend--s">
        Adresa zákonného zástupcu
      </legend>

      <TextField
        v-model="representative.StreetName"
        placeholder="Uveďte názov ulice"
        label="Názov ulice"
      />

      <TextField
        v-model="representative.BuildingNumber"
        label="Orientačné číslo"
        placeholder="Uveďte orientačné číslo"
        :input-short="true"
      />

      <TextField
        v-model="representative.PropertyRegistrationNumber"
        label="Súpisné číslo"
        placeholder="Uveďte súpisné číslo"
        :input-short="true"
      />

      <TextField
        v-model="representative.PostalCode"
        label="Psč"
        placeholder="Psč obce"
        :input-short="true"
      />

      <TextField
        v-model="representative.Municipality"
        label="Obec"
        placeholder="Názov obce"
      />

      <TextField
        v-model="representative.PhoneNumber"
        placeholder="Uveďte telefónne číslo"
        label="Telefónne číslo zástupcu"
      />

      <TextField
        v-model="representative.Email"
        placeholder="Uveďte email zákonného zástupcu"
        label="Email zákonného zástupcu"
      />
    </div>
  </div>
</template>
