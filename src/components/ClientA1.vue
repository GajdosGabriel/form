<script setup>
import { ref, reactive } from "vue";
import useClient from "../composables/Client.js";
import TextField from "./inputs/TextField.vue";

const { state, setForm, getForm, getvalidatedErrors } = useClient();

const errorsClass = {
  span: "govuk-error-message",
  input: "govuk-input--error",
  required: "govuk-input--error",
};

const form = reactive({});

const clickOnNext = () => {
  setForm(form);
};
</script>

<template>
  <div style="margin-bottom: 30px" @click="clickOnNext">
    <span style="background-color: aqua; padding: 7px">Click</span>
    {{ getForm }}
  </div>

  <TextField
    v-model="form.FamilyName"
    placeholder="Uveďte vaše prizvisko"
    label="Priezvisko"
  />

  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend govuk-label--s">
      Je Vaše priezvisko iné ako rodné?
    </legend>
    <div class="govuk-radios govuk-radios--inline">
      <div class="govuk-radios__item">
        <input
          class="govuk-radios__input"
          type="radio"
          :value="0"
          v-model="form.booleanGivenFamilyName"
          required
          checked
        />
        <label class="govuk-label govuk-radios__label" for="m"> Nie </label>
      </div>
      <div class="govuk-radios__item">
        <input
          class="govuk-radios__input"
          type="radio"
          v-model="form.booleanGivenFamilyName"
          :value="1"
          required
        />
        <label class="govuk-label govuk-radios__label" for="w"> Áno </label>
      </div>
    </div>
  </fieldset>

  <div
    class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
    v-if="form.booleanGivenFamilyName"
  >
    <TextField
      v-model="form.GivenFamilyName"
      placeholder="Uveďte vaše rodné priezvisko"
      label="Rodné priezvisko"
    />

  </div>

  <TextField
    v-model="form.GivenName"
    placeholder="Uveďte vaše meno"
    label="Meno"
  />

  <div class="govuk-form-group">
    <fieldset class="govuk-fieldset">
      <legend class="govuk-fieldset__legend govuk-label--s">Pohlavie</legend>
      <div class="govuk-radios govuk-radios--inline">
        <div class="govuk-radios__item">
          <input
            class="govuk-radios__input"
            type="radio"
            v-model="form.Sex"
            name="Sex"
            id="MUZ"
            value="MUZ"
            required
          />
          <label class="govuk-label govuk-radios__label" for="MUZ"> Muž </label>
        </div>
        <div class="govuk-radios__item">
          <input
            class="govuk-radios__input"
            type="radio"
            v-model="form.Sex"
            name="Sex"
            id="ZENA"
            value="ZENA"
            required
          />
          <label class="govuk-label govuk-radios__label" for="ZENA">
            Žena
          </label>
        </div>
      </div>
    </fieldset>
  </div>

  <TextField
    v-model="form.IdentifierValue"
    placeholder="Uveďte vaše  rodné číslo"
    label=" Rodné číslo"
    :input-short="true"
  />

  <TextField
    v-model="form.Nationality"
    placeholder="Uveďte vašu štátnu príslušnosť"
    label="Štátna príslušnosť"
    :input-short="true"
  />
  <div class="govuk-form-group">
    <fieldset class="govuk-fieldset">
      <legend class="govuk-fieldset__legend govuk-label--s">Stav</legend>
      <div class="govuk-radios govuk-radios">
        <div class="govuk-radios__item">
          <input
            class="govuk-radios__input"
            type="radio"
            name="MaritalStatus"
            v-model="form.MaritalStatus"
            id="1"
            value="1"
            required
          />
          <label class="govuk-label govuk-radios__label" for="1">
            Slobodný/á
          </label>
        </div>
        <div class="govuk-radios__item">
          <input
            class="govuk-radios__input"
            type="radio"
            name="MaritalStatus"
            v-model="form.MaritalStatus"
            id="2"
            value="2"
            required
          />
          <label class="govuk-label govuk-radios__label" for="2">
            Vydatá/ženaty
          </label>
        </div>
        <div class="govuk-radios__item">
          <input
            class="govuk-radios__input"
            type="radio"
            name="MaritalStatus"
            v-model="form.MaritalStatus"
            id="3"
            value="3"
            required
          />
          <label class="govuk-label govuk-radios__label" for="3">
            Ovdovená/ý
          </label>
        </div>
        <div class="govuk-radios__item">
          <input
            class="govuk-radios__input"
            type="radio"
            name="MaritalStatus"
            v-model="form.MaritalStatus"
            id="4"
            value="4"
            required
          />
          <label class="govuk-label govuk-radios__label" for="4">
            Rozvedená/ý
          </label>
        </div>
        <div class="govuk-radios__item">
          <input
            class="govuk-radios__input"
            type="radio"
            name="MaritalStatus"
            v-model="form.MaritalStatus"
            id="5"
            value="5"
            required
          />
          <label class="govuk-label govuk-radios__label" for="5">
            Odlúčená/ý
          </label>
        </div>
      </div>
    </fieldset>
  </div>

  <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
    Adresa trvalého pobytu
  </legend>

  <TextField
    v-model="form.StreetName"
    placeholder="Uveďte názov ulice"
    label="Názov ulice"
  />

  <TextField
    v-model="form.BuildingNumber"
    placeholder="Uveďte orientačné číslo"
    label="Orientačné číslo"
    :input-short="true"
  />

 </template>
