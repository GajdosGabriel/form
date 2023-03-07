<script setup>
import { reactive } from "vue";
import useClient from "../composables/Client.js";
import TextField from "./inputs/TextField.vue";

const { setLegalRepresentative, getLegalRepresentative } = useClient();

const legalRepresentative = reactive({});

const clickOnNext = () => {
  setLegalRepresentative(legalRepresentative);
};
</script>

<template>
  <div style="margin-bottom: 30px" @click="clickOnNext">
    <span style="background-color: aqua; padding: 7px">Click</span>
    {{ getLegalRepresentative }}
  </div>

  <div style="margin-top: 50px">
    <div class="govuk-heading-m">
      A2) Údaje o zákonnom zástupcovi/opatrovníkovi žiadateľa
    </div>

    <p class="govuk-body">
      (ak je žiadateľ neplnoletý alebo nespôsobilý na právne úkony)
    </p>

    <fieldset class="govuk-fieldset" style="margin-bottom: 30px">
      <div
        id="changed-name-hint"
        class="govuk-label govuk-label--s"
        style="margin-bottom: 30px"
      >
        Vyplnili ste v bode A.1 údaje o žiadateľovi, ktorý má menej ako 18 rokov
        alebo osobu, ktorá bola na základe rozhodnutia súdu obmedzená na právne
        úkony?
      </div>
      <div class="govuk-radios govuk-radios--inline" data-module="govuk-radios">
        <div class="govuk-radios__item">
          <input
            class="govuk-radios__input"
            id="booleanLegalRepresentative-0"
            v-model="legalRepresentative.boolean"
            type="radio"
            :value="0"
            checked
          /><label
            class="govuk-label govuk-radios__label"
            for="booleanLegalRepresentative-0"
          >
            Nie
          </label>
        </div>
        <div class="govuk-radios__item">
          <input
            class="govuk-radios__input"
            id="booleanLegalRepresentative-1"
            v-model="legalRepresentative.boolean"
            type="radio"
            :value="1"
          /><label
            class="govuk-label govuk-radios__label"
            for="booleanLegalRepresentative-1"
          >
            Áno
          </label>
        </div>
      </div>
    </fieldset>

    <div
      class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
      v-if="legalRepresentative.boolean"
    >
      <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
        Údaje o zástupcovi/opatrovníkovi
      </legend>

      <TextField
        v-model="legalRepresentative.GivenName"
        placeholder="Uveďte zákonného zástupcu"
        label="Meno zákonného zástupcu"
      />

      <TextField
        v-model="legalRepresentative.FamilyName"
        placeholder="Uveďte priezvisko zákonného zástupcu"
        label="Priezvisko zákonného zástupcu"
      />

      <div class="govuk-form-group">
        <label
          class="govuk-label govuk-label--s"
          for="LegalRepresentativeDateOfBirth"
        >
          Dátum narodenia
        </label>
        <input
          class="govuk-input govuk-input--width-10"
          id="LegalRepresentativeDateOfBirth"
          v-model="legalRepresentative.DateOfBirth"
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
        v-model="legalRepresentative.StreetName"
        placeholder="Uveďte názov ulice"
        label="Názov ulice"
      />

      <TextField
        v-model="legalRepresentative.BuildingNumber"
        label="Orientačné číslo"
        placeholder="Uveďte orientačné číslo"
        :input-short="true"
      />

      <TextField
        v-model="legalRepresentative.PropertyRegistrationNumber"
        label="Súpisné číslo"
        placeholder="Uveďte súpisné číslo"
        :input-short="true"
      />

      <TextField
        v-model="legalRepresentative.PostalCode"
        label="Psč"
        placeholder="Psč obce"
        :input-short="true"
      />

      <TextField
        v-model="legalRepresentative.Municipality"
        label="Obec"
        placeholder="Názov obce"
      />

      <TextField
        v-model="legalRepresentative.PhoneNumber"
        placeholder="Uveďte telefónne číslo"
        label="Telefónne číslo zástupcu"
      />

      <TextField
        v-model="legalRepresentative.Email"
        placeholder="Uveďte email zákonného zástupcu"
        label="Email zákonného zástupcu"
      />
    </div>
  </div>
</template>
