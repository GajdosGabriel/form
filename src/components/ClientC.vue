<script setup>
import { reactive, watch } from "vue";
import useClient from "../composables/Client.js";
import CheckboxField from "./inputs/CheckboxField.vue";

const { setForm } = useClient();
const form = reactive({});


watch(form, () => {
  setForm(form);
});
</script>

<template>
  <div style="margin-top: 50px">
    <div>
      <div class="govuk-heading-m">C) Uveďte, o akú právnu pomoc žiadate</div>
    </div>

    <details class="govuk-details" data-module="govuk-details">
      <summary class="govuk-details__summary"><span class="govuk-details__summary-text"> Viac informácií </span></summary>
      <div class="govuk-details__text"> Označte krížikom, jednu alebo aj viac možností. </div>
    </details>


    <div class="govuk-form-group">
      <fieldset class="govuk-fieldset" aria-describedby="with-id-and-name-hint">
        <div class="govuk-checkboxes">
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="LegalAidType1" v-model="form.LegalAidType1" type="checkbox" value="1">
            <label class="govuk-label govuk-checkboxes__label" for="LegalAidType1">
              Právne poradenstvo
            </label>
          </div>
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="LegalAidType2" v-model="form.LegalAidType2" type="checkbox" value="1">
            <label class="govuk-label govuk-checkboxes__label" for="LegalAidType2">
              Mediácia (mimosúdne riešenie sporu dohodou)
            </label>
          </div>
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="LegalAidType3" v-model="form.LegalAidType3" type="checkbox" value="1">
            <label class="govuk-label govuk-checkboxes__label" for="LegalAidType3">
              Právna pomoc a zastupovanie v súdnom konaní vrátane jeho začatia
            </label>
          </div>
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="LegalAidType4" v-model="form.LegalAidType4" type="checkbox" value="1">
            <label class="govuk-label govuk-checkboxes__label" for="LegalAidType4">
              Právna pomoc a zastupovanie v rámci už prebiehajúceho súdneho konania
            </label>
          </div>
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="LegalAidType5" v-model="form.LegalAidType5" type="checkbox" value="1">
            <label class="govuk-label govuk-checkboxes__label" for="LegalAidType5">
              Právna pomoc a zastupovanie v rámci súdneho konania, ktoré sa týka už vydaného súdneho rozhodnutia
            </label>
          </div>
        </div>
      </fieldset>
    </div>

  </div>
</template>
