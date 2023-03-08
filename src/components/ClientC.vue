<script setup>
import { reactive, watch } from "vue";
import useClient from "../composables/Client.js";
import TextField from "./inputs/TextField.vue";

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
            <input class="govuk-checkboxes__input" id="LegalAidType1" v-model="form.LegalAidType1" type="checkbox"
              value="1">
            <label class="govuk-label govuk-checkboxes__label" for="LegalAidType1">
              Právne poradenstvo
            </label>
          </div>
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="LegalAidType2" v-model="form.LegalAidType2" type="checkbox"
              value="1">
            <label class="govuk-label govuk-checkboxes__label" for="LegalAidType2">
              Mediácia (mimosúdne riešenie sporu dohodou)
            </label>
          </div>
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="LegalAidType3" v-model="form.LegalAidType3" type="checkbox"
              value="1">
            <label class="govuk-label govuk-checkboxes__label" for="LegalAidType3">
              Právna pomoc a zastupovanie v súdnom konaní vrátane jeho začatia
            </label>
          </div>
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="LegalAidType4" v-model="form.LegalAidType4" type="checkbox"
              value="1">
            <label class="govuk-label govuk-checkboxes__label" for="LegalAidType4">
              Právna pomoc a zastupovanie v rámci už prebiehajúceho súdneho konania
            </label>
          </div>



          <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" v-if="form.LegalAidType4">

            <TextField v-model="form.CourtName" placeholder="Príslušný súd" label="Príslušný súd" />
            <TextField v-model="form.ReferenceNumber" placeholder="Spisová značka" label="Spisová značka" />

            <div class="govuk-form-group">
              <label class="govuk-label govuk-label--s" for="HearingDate">
                Dátum najbližšieho pojednávania
              </label>
              <input class="govuk-input govuk-input--width-10" id="HearingDate" type="date" label="Dňa"
                v-model="form.HearingDate" />
            </div>


            <fieldset class="govuk-fieldset" style="margin-top: 20px">
              <legend class="govuk-fieldset__legend govuk-label--s">
                V konaní ste
              </legend>
              <div class="govuk-radios govuk-radios--inline">
                <div class="govuk-radios__item">
                  <input class="govuk-radios__input" type="radio" :value="0" v-model="form.ComplainantRespondent"
                    required checked />
                  <label class="govuk-label govuk-radios__label" for="m"> Navrhovateľ </label>
                </div>
                <div class="govuk-radios__item">
                  <input class="govuk-radios__input" type="radio" v-model="form.ComplainantRespondent" :value="1"
                    required />
                  <label class="govuk-label govuk-radios__label" for="w"> Odporca</label>
                </div>
              </div>
            </fieldset>
          </div>


          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="LegalAidType5" v-model="form.LegalAidType5" type="checkbox"
              value="1">
            <label class="govuk-label govuk-checkboxes__label" for="LegalAidType5">
              Právna pomoc a zastupovanie v rámci súdneho konania, ktoré sa týka už vydaného súdneho rozhodnutia
            </label>
          </div>
        </div>
      </fieldset>
    </div>

  </div>
</template>
