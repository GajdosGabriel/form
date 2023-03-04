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



  <div class="govuk-form-group">
    <label class="govuk-label govuk-label--s" for="FamilyName">
      Priezvisko
    </label>
    <span id="input-with-error-message-error" class="govuk-error-message">
    </span>
    <input
      type="text"
      class="govuk-input"
      :class="{ 'govuk-input--error': !form.FamilyName }"
      id="FamilyName"
      v-model="form.FamilyName"
      placeholder="Priezvisko"
      required
    />
  </div>



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
    <div class="govuk-form-group">
      <label class="govuk-label govuk-label--s" for="GivenFamilyName">
        Rodné priezvisko
      </label>
      <span id="input-with-error-message-error" class="govuk-error-message">
      </span>
      <input
        type="text"
        class="govuk-input"
        :class="{ 'govuk-input--error': !form.GivenFamilyName }"
        id="GivenFamilyName"
        v-model="form.GivenFamilyName"
        placeholder="Rodné priezvisko"
        required
      />
    </div>
  </div>

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

  <div class="govuk-form-group">
    <fieldset class="govuk-fieldset">
      <legend class="govuk-fieldset__legend govuk-label--s">Stav</legend>
      <div class="govuk-radios govuk-radios">
        <div class="govuk-radios__item">
          <input
            class="govuk-radios__input"
            type="radio"
            name="MaritalStatus"
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
  <!-- {{-- End Personal info --}} -->
  
  <!-- {{-- Part Resident address --}} -->
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
    Adresa trvalého pobytu
  </legend>

  <div class="govuk-form-group">
    <label class="govuk-label govuk-label--s" for="GivenName"> Meno </label>
    <span id="input-with-error-message-error" class="govuk-error-message">
    </span>
    <input
      type="text"
      class="govuk-input"
      :class="{ 'govuk-input--error': !form.GivenName }"
      id="GivenName"
      v-model="form.GivenName"
      placeholder="Meno"
      required
    />
  </div>

  <div class="govuk-form-group govuk-input--width-10">
    <label class="govuk-label govuk-label--s" for="IdentifierValue">
      Rodné číslo
    </label>
    <span id="input-with-error-message-error" class="govuk-error-message">
    </span>
    <input
      type="text"
      class="govuk-input"
      :class="{ 'govuk-input--error': !form.IdentifierValue }"
      id="IdentifierValue"
      v-model="form.IdentifierValue"
      placeholder="Rodné číslo"
      required
    />
  </div>

  <div class="govuk-form-group govuk-input--width-10">
    <label class="govuk-label govuk-label--s" for="Nationality">
      Štátna príslušnosť
    </label>
    <span id="input-with-error-message-error" class="govuk-error-message">
    </span>
    <input
      type="text"
      class="govuk-input"
      :class="{ 'govuk-input--error': !form.Nationality }"
      id="Nationality"
      v-model="form.Nationality"
      placeholder="Štátna príslušnosť"
      required
    />
  </div>

  <div class="govuk-form-group">
    <label class="govuk-label govuk-label--s" for="StreetName">
      Názov ulice
    </label>
    <span id="input-with-error-message-error" class="govuk-error-message">
    </span>
    <input
      type="text"
      class="govuk-input"
      :class="{ 'govuk-input--error': !form.StreetName }"
      id="StreetName"
      v-model="form.StreetName"
      placeholder="Názov ulice"
      required
    />
  </div>

  <div class="govuk-form-group">
    <label class="govuk-label govuk-label--s" for="BuildingNumber">
      Orientačné číslo
    </label>
    <span id="input-with-error-message-error" class="govuk-error-message">
    </span>
    <input
      type="text"
      class="govuk-input govuk-input--width-10"
      :class="{ 'govuk-input--error': !form.BuildingNumber }"
      id="BuildingNumber"
      v-model="form.BuildingNumber"
      placeholder="Orientačné číslo"
      required
    />
  </div>

  <!-- {{-- End Personal info II. --}} -->
</template>
