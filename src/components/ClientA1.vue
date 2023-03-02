<script setup>
import { ref } from "vue";
defineProps({
  // msg: {
  //   type: String,
  //   required: true
  // }
});

const errorsClass = {
  span: "govuk-error-message",
  input: "govuk-input--error",
  required: "govuk-input--error",
};

const FamilyName = ref("");
const booleanGivenFamilyName = ref(false);
const temporary_residence = ref(false);
const GivenName = ref("");
const GivenFamilyName = ref("");
const IdentifierValue = ref("");
const Nationality = ref("");
const StreetName = ref("");
const BuildingNumber = ref("");
const PropertyRegistrationNumber = ref("");
const PostalCode = ref("");
const Municipality = ref("");
const Sex = ref("");
const temporary_StreetName = ref("");
const temporary_BuildingNumber = ref("");
const temporary_PropertyRegistrationNumber = ref("");
const temporary_PostalCode = ref("");
const temporary_Municipality = ref("");
const phone_number = ref("");
const email = ref("");
</script>

<template>
  <div class="govuk-form-group">
    <label class="govuk-label govuk-label--s" for="FamilyName">
      Priezvisko
    </label>
    <span id="input-with-error-message-error" class="govuk-error-message">
    </span>
    <input
      type="text"
      class="govuk-input"
      :class="{ 'govuk-input--error': FamilyName.length == 0 }"
      id="FamilyName"
      name="FamilyName"
      v-model="FamilyName"
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
          v-model="booleanGivenFamilyName"
          required
          checked
        />
        <label class="govuk-label govuk-radios__label" for="m"> Nie </label>
      </div>
      <div class="govuk-radios__item">
        <input
          class="govuk-radios__input"
          type="radio"
          v-model="booleanGivenFamilyName"
          :value="1"
          required
        />
        <label class="govuk-label govuk-radios__label" for="w"> Áno </label>
      </div>
    </div>
  </fieldset>

  <div
    class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
    v-if="booleanGivenFamilyName"
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
        :class="{ 'govuk-input--error': GivenFamilyName == '' }"
        id="GivenFamilyName"
        v-model="GivenFamilyName"
        placeholder="Rodné priezvisko"
        required
      />
    </div>
  </div>

  <div class="govuk-form-group">
    <label class="govuk-label govuk-label--s" for="GivenName"> Meno </label>
    <span id="input-with-error-message-error" class="govuk-error-message">
    </span>
    <input
      type="text"
      class="govuk-input"
      :class="{ 'govuk-input--error': GivenName.length == 0 }"
      id="GivenName"
      v-model="GivenName"
      placeholder="Meno"
      required
    />
  </div>

  <div class="govuk-form-group">
    <fieldset class="govuk-fieldset">
      <legend class="govuk-fieldset__legend govuk-label--s">Pohlavie</legend>
      <div class="govuk-radios govuk-radios--inline">
        <div class="govuk-radios__item">
          <input
            class="govuk-radios__input"
            type="radio"
            v-model="Sex"
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
            v-model="Sex"
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

  <div class="govuk-form-group govuk-input--width-10">
    <label class="govuk-label govuk-label--s" for="IdentifierValue">
      Rodné číslo
    </label>
    <span id="input-with-error-message-error" class="govuk-error-message">
    </span>
    <input
      type="text"
      class="govuk-input"
      :class="{ 'govuk-input--error': IdentifierValue == '' }"
      id="IdentifierValue"
      v-model="IdentifierValue"
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
      :class="{ 'govuk-input--error': Nationality == '' }"
      id="Nationality"
      v-model="Nationality"
      placeholder="Štátna príslušnosť"
      required
    />
  </div>

  <div class="govuk-form-group">
    <fieldset class="govuk-fieldset" aria-describedby="example-hint">
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
    <label class="govuk-label govuk-label--s" for="StreetName">
      Názov ulice
    </label>
    <span id="input-with-error-message-error" class="govuk-error-message">
    </span>
    <input
      type="text"
      class="govuk-input"
      :class="{ 'govuk-input--error': StreetName == '' }"
      id="StreetName"
      v-model="StreetName"
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
      :class="{ 'govuk-input--error': BuildingNumber == '' }"
      id="BuildingNumber"
      v-model="BuildingNumber"
      placeholder="Orientačné číslo"
      required
    />
  </div>

  <div class="govuk-form-group">
    <label class="govuk-label govuk-label--s" for="PropertyRegistrationNumber">
      Súpisné číslo
    </label>
    <span id="input-with-error-message-error" class="govuk-error-message">
    </span>
    <input
      type="text"
      class="govuk-input govuk-input--width-10"
      :class="{ 'govuk-input--error': PropertyRegistrationNumber == '' }"
      id="PropertyRegistrationNumber"
      v-model="PropertyRegistrationNumber"
      placeholder="Súpisné číslo"
      required
    />
  </div>
  <div class="govuk-form-group">
    <label class="govuk-label govuk-label--s" for="PostalCode"> PSČ </label>
    <span id="input-with-error-message-error" class="govuk-error-message">
    </span>
    <input
      type="text"
      class="govuk-input govuk-input--width-10"
      :class="{ 'govuk-input--error': PostalCode == '' }"
      id="PostalCode"
      v-model="PostalCode"
      placeholder="Poštové smerovacie číslo"
      required
    />
  </div>
  <div class="govuk-form-group">
    <label class="govuk-label govuk-label--s" for="Municipality"> Obec </label>
    <span id="input-with-error-message-error" class="govuk-error-message">
    </span>
    <input
      type="text"
      class="govuk-input"
      :class="{ 'govuk-input--error': Municipality == '' }"
      id="Municipality"
      v-model="Municipality"
      placeholder="Názov obce"
      required
    />
  </div>
  <!-- {{-- End Resident address --}} -->
  <!-- {{-- Part Temporary address --}} -->
  <fieldset class="govuk-fieldset">
    <div id="changed-name-hint" class="govuk-label govuk-label--s">
      Uviesť korenšpondenčnú adresu, na zasielanie písomnosti?
    </div>
    <div class="govuk-radios govuk-radios--inline" data-module="govuk-radios">
      <div class="govuk-radios__item">
        <input
          class="govuk-radios__input"
          id="temporary_residence-0"
          checked
          v-model="temporary_residence"
          type="radio"
          :value="0"
        />
        <label
          class="govuk-label govuk-radios__label"
          for="temporary_residence-0"
        >
          Nie
        </label>
      </div>
      <div class="govuk-radios__item">
        <input
          class="govuk-radios__input"
          id="temporary_residence-1"
          v-model="temporary_residence"
          type="radio"
          :value="1"
        />
        <label
          class="govuk-label govuk-radios__label"
          for="temporary_residence-1"
        >
          Áno
        </label>
      </div>
    </div>
  </fieldset>
  <div
    class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
    v-if="temporary_residence"
  >
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
      Korenšpondenčná adresa
    </legend>
    <div class="govuk-form-group">
      <label class="govuk-label govuk-label--s" for="temporary_StreetName">
        Názov ulice
      </label>
      <span id="input-with-error-message-error" class="govuk-error-message">
      </span>
      <input
        type="text"
        class="govuk-input"
        :class="{ 'govuk-input--error': temporary_StreetName == '' }"
        id="temporary_StreetName"
        v-model="temporary_StreetName"
        placeholder="Názov ulice"
        required
      />
    </div>
    <div class="govuk-form-group">
      <label class="govuk-label govuk-label--s" for="temporary_BuildingNumber">
        Orientačné číslo
      </label>
      <span id="input-with-error-message-error" class="govuk-error-message">
      </span>
      <input
        class="govuk-input govuk-input--width-10"
        :class="{ 'govuk-input--error': temporary_BuildingNumber == '' }"
        id="temporary_BuildingNumber"
        v-model="temporary_BuildingNumber"
        type="text"
        placeholder="Popisné číslo"
        required
      />
    </div>
    <div class="govuk-form-group">
      <label
        class="govuk-label govuk-label--s"
        for="temporary_PropertyRegistrationNumber"
      >
        Súpisné číslo
      </label>
      <span id="input-with-error-message-error" class="govuk-error-message">
      </span>
      <input
        class="govuk-input govuk-input--width-10"
        :class="{
          'govuk-input--error': temporary_PropertyRegistrationNumber == '',
        }"
        id="temporary_PropertyRegistrationNumber"
        v-model="temporary_PropertyRegistrationNumber"
        type="text"
        placeholder="Súpisné číslo"
        required
      />
    </div>
    <div class="govuk-form-group">
      <label class="govuk-label govuk-label--s" for="temporary_PostalCode">
        Psč
      </label>
      <span id="input-with-error-message-error" class="govuk-error-message">
      </span>
      <input
        class="govuk-input govuk-input--width-10"
        :class="{ 'govuk-input--error': temporary_PostalCode == '' }"
        id="temporary_PostalCode"
        v-model="temporary_PostalCode"
        placeholder="Psč obce"
        type="text"
        required
      />
    </div>
    <div class="govuk-form-group">
      <label class="govuk-label govuk-label--s" for="temporary_Municipality">
        Obec
      </label>
      <span id="input-with-error-message-error" class="govuk-error-message">
      </span>
      <input
        type="text"
        class="govuk-input govuk-input--width-10"
        :class="{ 'govuk-input--error': temporary_Municipality == '' }"
        id="temporary_Municipality"
        v-model="temporary_Municipality"
        placeholder="Názov obce"
        required
      />
    </div>
  </div>
  <!-- {{-- End Temporary address --}} -->
  <!-- {{-- Part Personal info II. --}} -->
  <div class="govuk-form-group">
    <label class="govuk-label govuk-label--s" for="phone_number">
      Telefónne číslo
    </label>
    <span id="input-with-error-message-error" class="govuk-error-message">
    </span>
    <input
      type="text"
      class="govuk-input govuk-input--width-10"
      :class="{ 'govuk-input--error': phone_number == '' }"
      id="phone_number"
      v-model="phone_number"
      placeholder="Telefónne číslo"
      required
    />
  </div>
  <div class="govuk-form-group">
    <label class="govuk-label govuk-label--s" for="email"> Email </label>
    <span id="input-with-error-message-error" class="govuk-error-message">
    </span>
    <input
      type="text"
      class="govuk-input govuk-input--width-10"
      :class="{ 'govuk-input--error': email == '' }"
      id="email"
      v-model="email"
      placeholder="Email"
      required
    />
  </div>
  <!-- {{-- End Personal info II. --}} -->


</template>
