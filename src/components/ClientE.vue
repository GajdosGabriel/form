<script setup>
import { reactive } from "vue";
import useClient from "../composables/Client.js";
import TextField from "./inputs/TextField.vue";

const { state, setForm, getForm, getvalidatedErrors } = useClient();

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

  <div style="margin-top: 50px">
    <div class="govuk-heading-m">E) Rodinná a sociálna situácia žiadateľa</div>

    <p class="govuk-body"></p>

    <fieldset class="govuk-fieldset" style="margin-bottom: 30px">
      <div
        id="changed-name-hint"
        class="govuk-label govuk-label--s"
        style="margin-bottom: 30px"
      >
        Poberáte dávku a príspevky v hmotnej núdzi?
      </div>
      <div class="govuk-radios govuk-radios--inline" data-module="govuk-radios">
        <div class="govuk-radios__item">
          <input
            class="govuk-radios__input"
            id="MaterialNeedBenefit-0"
            v-model="form.MaterialNeedBenefit"
            type="radio"
            :value="1"
          /><label
            class="govuk-label govuk-radios__label"
            for="MaterialNeedBenefit-0"
          >
            Nie
          </label>
        </div>
        <div class="govuk-radios__item">
          <input
            class="govuk-radios__input"
            id="MaterialNeedBenefit-1"
            v-model="form.MaterialNeedBenefit"
            type="radio"
            :value="0"
            checked
          /><label
            class="govuk-label govuk-radios__label"
            for="MaterialNeedBenefit-1"
          >
            Áno
          </label>
        </div>
      </div>
    </fieldset>

    <div
      class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
      v-if="form.MaterialNeedBenefit"
    >
      <div class="govuk-heading-m">E.1 Príjmové pomery žiadateľa</div>

      <details class="govuk-details" data-module="govuk-details">
        <summary class="govuk-details__summary">
          <span class="govuk-details__summary-text"> Poznámka </span>
        </summary>
        <div class="govuk-details__text">
          K žiadosti priložte doklady o príjme z mesiaca, v ktorom podávate
          žiadosť, a za 6 mesiacov pred jej podaním!
        </div>
      </details>
    </div>
  </div>
</template>
