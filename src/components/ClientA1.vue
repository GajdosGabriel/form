<script setup>
import { reactive, watch } from "vue";
import useClient from "../composables/Client.js";
import TextField from "./inputs/TextField.vue";
import CheckboxField from "./inputs/CheckboxField.vue";

const { state, setForm, getForm, getvalidatedErrors } = useClient();

const form = reactive({});

watch(form, () => {
  setForm(form);
});
</script>

<template>
  <TextField
    v-model="form.FamilyName"
    :current-value="getForm.FamilyName"
    model="form.FamilyName"
    placeholder="Uveďte vaše prizvisko"
    label="Priezvisko"
  />

  <fieldset class="govuk-fieldset" style="margin-bottom: 20px">
    <legend class="govuk-fieldset__legend govuk-label--s">
      Je Vaše priezvisko iné ako rodné?
    </legend>
    <div class="govuk-radios govuk-radios--inline">
      <div class="govuk-radios__item">
        <input
          class="govuk-radios__input"
          type="radio"
          :value="0"
          v-model="getForm.booleanGivenFamilyName"
          checked
          required
        />
        <label class="govuk-label govuk-radios__label" for="m"> Nie </label>
      </div>
      <div class="govuk-radios__item">
        <input
          class="govuk-radios__input"
          type="radio"
          v-model="getForm.booleanGivenFamilyName"
          :value="1"
          :checked="getForm.booleanGivenFamilyName"
          required
        />
        <label class="govuk-label govuk-radios__label" for="w"> Áno </label>
      </div>
    </div>
  </fieldset>

  <div
    class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
    v-if="getForm.booleanGivenFamilyName"
  >
    <TextField
      v-model="getForm.GivenFamilyName"
      :current-value="getForm.GivenFamilyName"
      model="form.GivenFamilyName"
      placeholder="Uveďte vaše rodné priezvisko"
      label="Rodné priezvisko"
    />
  </div>

  <TextField
    v-model="getForm.GivenName"
    :current-value="getForm.GivenName"
    model="form.GivenName"
    placeholder="Uveďte vaše meno"
    label="Meno"
  />

  <CheckboxField
    v-model="getForm.Sex"
    :current-value="getForm.Sex"
    model="form.Sex"
    :values="['MUZ', 'ZENA']"
    :names="['Muž', 'Žena']"
    label="Pohlavie"
  />

  <TextField
    v-model="form.IdentifierValue"
    :current-value="getForm.IdentifierValue"
    model="form.IdentifierValue"
    placeholder="Uveďte vaše rodné číslo"
    label="Rodné číslo"
    :input-short="true"
  />

  <TextField
    v-model="form.Nationality"
    :current-value="getForm.Nationality"
    model="form.Nationality"
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
            :value="1"
            :checked="getForm.MaritalStatus === '1'"
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
            :value="2"
            :checked="getForm.MaritalStatus === '2'"
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
            :value="3"
            :checked="getForm.MaritalStatus === '3'"
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
            :value="4"
            :checked="getForm.MaritalStatus === '4'"
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
            :value="5"
            :checked="getForm.MaritalStatus === '5'"
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
    :current-value="getForm.StreetName"
    model="form.StreetName"
    placeholder="Uveďte názov ulice"
    label="Názov ulice"
  />

  <TextField
    v-model="form.BuildingNumber"
    :current-value="getForm.BuildingNumber"
    model="form.BuildingNumber"
    label="Orientačné číslo"
    placeholder="Uveďte orientačné číslo"
    :input-short="true"
  />

  <TextField
    v-model="form.PropertyRegistrationNumber"
    :current-value="getForm.PropertyRegistrationNumber"
    model="form.PropertyRegistrationNumber"
    label="Súpisné číslo"
    placeholder="Uveďte súpisné číslo"
    :input-short="true"
  />

  <TextField
    v-model="form.PostalCode"
    :current-value="getForm.PostalCode"
    model="form.PostalCode"
    label="Psč"
    placeholder="Psč obce"
    :input-short="true"
  />

  <TextField v-model="form.Municipal" :current-value="getForm.Municipal" model="form.Municipal" label="Obec" placeholder="Názov obce" />

  <fieldset class="govuk-fieldset" style="margin-bottom: 20px">
    <legend class="govuk-fieldset__legend govuk-label--s">
      Uviesť korenšpondenčnú adresu, na zasielanie písomnosti?
    </legend>
    <div class="govuk-radios govuk-radios--inline">
      <div class="govuk-radios__item">
        <input
          class="govuk-radios__input"
          type="radio"
          id="booleanCorrespondence-0"
          :value="0"
          v-model="form.booleanCorrespondence"
          required
          checked
        />
        <label
          class="govuk-label govuk-radios__label"
          for="booleanCorrespondence-0"
        >
          Nie
        </label>
      </div>
      <div class="govuk-radios__item">
        <input
          class="govuk-radios__input"
          type="radio"
          id="booleanCorrespondence-1"
          v-model="form.booleanCorrespondence"
          :value="1"
          required
        />
        <label
          class="govuk-label govuk-radios__label"
          for="booleantemCorrespondence-1"
        >
          Áno
        </label>
      </div>
    </div>
  </fieldset>

  <div
    class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
    v-if="form.booleanCorrespondence"
  >
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
      Korenšpondenčná adresa
    </legend>

    <TextField
      v-model="form.CorrespondenceStreetName"
      :current-value="getForm.CorrespondenceStreetName"
      model="form.CorrespondenceStreetName"
      placeholder="Uveďte názov ulice"
      label="Názov ulice"
    />

    <TextField
      v-model="form.CorrespondenceBuildingNumber"
      :current-value="getForm.CorrespondenceBuildingNumber"
      model="form.CorrespondenceBuildingNumber"
      label="Orientačné číslo"
      placeholder="Uveďte orientačné číslo"
      :input-short="true"
    />

    <TextField
      v-model="form.CorrespondencePropertyRegistrationNumber"
      :current-value="getForm.CorrespondencePropertyRegistrationNumber"
      model="form.CorrespondencePropertyRegistrationNumber"
      label="Súpisné číslo"
      placeholder="Uveďte súpisné číslo"
      :input-short="true"
    />

    <TextField
      v-model="form.CorrespondencePostalCode"
      :current-value="getForm.CorrespondencePostalCode"
      model="form.CorrespondencePostalCode"
      label="Psč"
      placeholder="Psč obce"
      :input-short="true"
    />

    <TextField
      v-model="form.CorrespondenceMunicipality"
      :current-value="getForm.CorrespondenceMunicipality"
      model="form.CorrespondenceMunicipality"
      label="Obec"
      placeholder="Názov obce"
    />
  </div>

  <TextField
    v-model="form.PhoneNumber"
    :current-value="getForm.PhoneNumber"
    model="form.PhoneNumber"
    placeholder="Uveďte telefónne číslo"
    label="Telefónne číslo"
    :input-short="true"
  />

  <TextField
    v-model="form.Email"
    :current-value="getForm.Email"
    model="form.Email"
    placeholder="Uveďte svoj email"
    label="Email"
    :input-short="true"
  />

  <!-- End A1 -->
</template>
