<script setup>
import { reactive, watch } from "vue";
import useClient from "../composables/Client.js";
import TextField from "./inputs/TextField.vue";
import DateField from "./inputs/DateField.vue";

const { setForm, getForm } = useClient();
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
      <summary class="govuk-details__summary">
        <span class="govuk-details__summary-text"> Viac informácií </span>
      </summary>
      <div class="govuk-details__text">
        Označte krížikom, jednu alebo aj viac možností.
      </div>
    </details>

    <div class="govuk-form-group">
      <fieldset class="govuk-fieldset" aria-describedby="with-id-and-name-hint">
        <div class="govuk-checkboxes">
          <div class="govuk-checkboxes__item">
            <input
              class="govuk-checkboxes__input"
              id="LegalAidType1"
              v-model="form.LegalAidType1"
              type="checkbox"
              value="1"
            />
            <label
              class="govuk-label govuk-checkboxes__label"
              for="LegalAidType1"
            >
              Právne poradenstvo
            </label>
          </div>
          <div class="govuk-checkboxes__item">
            <input
              class="govuk-checkboxes__input"
              id="LegalAidType2"
              v-model="form.LegalAidType2"
              type="checkbox"
              value="1"
            />
            <label
              class="govuk-label govuk-checkboxes__label"
              for="LegalAidType2"
            >
              Mediácia (mimosúdne riešenie sporu dohodou)
            </label>
          </div>
          <div class="govuk-checkboxes__item">
            <input
              class="govuk-checkboxes__input"
              id="LegalAidType3"
              v-model="form.LegalAidType3"
              type="checkbox"
              value="1"
            />
            <label
              class="govuk-label govuk-checkboxes__label"
              for="LegalAidType3"
            >
              Právna pomoc a zastupovanie v súdnom konaní vrátane jeho začatia
            </label>
          </div>
          <div class="govuk-checkboxes__item">
            <input
              class="govuk-checkboxes__input"
              id="LegalAidType4"
              v-model="form.LegalAidType4"
              type="checkbox"
              value="1"
            />
            <label
              class="govuk-label govuk-checkboxes__label"
              for="LegalAidType4"
            >
              Právna pomoc a zastupovanie v rámci už prebiehajúceho súdneho
              konania
            </label>
          </div>

          <div
            class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
            v-if="form.LegalAidType4"
          >
            <TextField
              v-model="form.CourtName"
              placeholder="Príslušný súd"
              label="Príslušný súd"
            />
            <TextField
              v-model="form.ReferenceNumber"
              placeholder="Spisová značka"
              label="Spisová značka"
            />

            <DateField
              v-model="form.HearingDate"
              :current-value="form.HearingDate"
              label="Dátum najbližšieho pojednávania"
              placeholder="Dátum najbližšieho pojednávania"
              :input-short="true"
            />

            <fieldset class="govuk-fieldset" style="margin-top: 20px">
              <legend class="govuk-fieldset__legend govuk-label--s">
                V konaní ste
              </legend>
              <div class="govuk-radios govuk-radios--inline">
                <div class="govuk-radios__item">
                  <input
                    class="govuk-radios__input"
                    type="radio"
                    :value="'NAVRHOVATEL'"
                    v-model="form.ComplainantRespondent"
                    required
                  />
                  <label class="govuk-label govuk-radios__label" for="m">
                    Navrhovateľ
                  </label>
                </div>
                <div class="govuk-radios__item">
                  <input
                    class="govuk-radios__input"
                    type="radio"
                    v-model="form.ComplainantRespondent"
                    :value="'ODPORCA'"
                    required
                  />
                  <label class="govuk-label govuk-radios__label" for="w">
                    Odporca</label
                  >
                </div>
              </div>
            </fieldset>
          </div>

          <div class="govuk-checkboxes__item">
            <input
              class="govuk-checkboxes__input"
              id="LegalAidType5"
              v-model="form.LegalAidType5"
              type="checkbox"
              value="1"
            />
            <label
              class="govuk-label govuk-checkboxes__label"
              for="LegalAidType5"
            >
              Právna pomoc a zastupovanie v rámci súdneho konania, ktoré sa týka
              už vydaného súdneho rozhodnutia
            </label>
          </div>

          <div
            class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
            v-if="form.LegalAidType5"
          >
            <TextField
              v-model="form.CourtName5"
              placeholder="Príslušný súd"
              label="Príslušný súd"
            />
            <TextField
              v-model="form.ReferenceNumber5"
              placeholder="Spisová značka"
              label="Spisová značka"
            />

            <fieldset class="govuk-fieldset" style="margin-top: 30px">
              <legend class="govuk-fieldset__legend govuk-label--s">
                Povaha prípadu
              </legend>
              <div class="govuk-radios">
                <div class="govuk-radios__item">
                  <input
                    class="govuk-radios__input"
                    type="radio"
                    id="CaseNatureCode1"
                    :value="'ODVOLANIE_PROTI_ROZHODNUTIU'"
                    v-model="form.CaseNatureCode"
                    required
                  />
                  <label
                    class="govuk-label govuk-radios__label"
                    for="CaseNatureCode1"
                  >
                    Odvolanie, iný opravný prostriedok
                  </label>
                </div>

                <div
                  class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
                  style="background-color: #f4f4f4"
                  v-if="form.CaseNatureCode == 'ODVOLANIE_PROTI_ROZHODNUTIU'"
                >
                  <DateField
                    v-model="form.JudicalDecisionDate"
                    :current-value="form.JudicalDecisionDate"
                    label="Dátum doručenia rozhodnutia"
                    placeholder="Dátum doručenia rozhodnutia"
                    :input-short="true"
                  />

                  <fieldset class="govuk-fieldset" style="margin-top: 30px">
                    <legend class="govuk-fieldset__legend govuk-label--s">
                      V konaní ste
                    </legend>
                    <div class="govuk-radios govuk-radios--inline">
                      <div class="govuk-radios__item">
                        <input
                          class="govuk-radios__input"
                          type="radio"
                          id="ComplainantRespondent0"
                          :value="'NAVRHOVATEL'"
                          v-model="form.ComplainantRespondent"
                          required
                        />
                        <label
                          class="govuk-label govuk-radios__label"
                          for="ComplainantRespondent0"
                        >
                          Navrhovateľ
                        </label>
                      </div>
                      <div class="govuk-radios__item">
                        <input
                          class="govuk-radios__input"
                          type="radio"
                          id="ComplainantRespondent1"
                          v-model="form.ComplainantRespondent"
                          :value="'ODPORCA'"
                          required
                        />
                        <label
                          class="govuk-label govuk-radios__label"
                          for="ComplainantRespondent1"
                        >
                          Odporca
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div class="govuk-radios__item">
                  <input
                    class="govuk-radios__input"
                    type="radio"
                    id="CaseNatureCode2"
                    v-model="form.CaseNatureCode"
                    :value="'VYKON_ROZHODNUTIA_EXEKUCIA'"
                    required
                  />
                  <label
                    class="govuk-label govuk-radios__label"
                    for="CaseNatureCode2"
                  >
                    Výkon rozhodnutia, exekúcia
                  </label>
                </div>
              </div>
            </fieldset>

            <div
              class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden"
              style="background-color: #f4f4f4"
              v-if="form.CaseNatureCode == 'VYKON_ROZHODNUTIA_EXEKUCIA'"
            >
              <fieldset class="govuk-fieldset">
                <legend class="govuk-fieldset__legend govuk-label--s">
                  V konaní ste
                </legend>
                <div class="govuk-radios govuk-radios--inline">
                  <div class="govuk-radios__item">
                    <input
                      class="govuk-radios__input"
                      type="radio"
                      id="ComplainantRespondent0"
                      :value="'OPRAVNENY'"
                      v-model="form.ComplainantRespondent"
                      required
                    />
                    <label
                      class="govuk-label govuk-radios__label"
                      for="ComplainantRespondent0"
                    >
                      Oprávnený
                    </label>
                  </div>
                  <div class="govuk-radios__item">
                    <input
                      class="govuk-radios__input"
                      type="radio"
                      id="ComplainantRespondent1"
                      v-model="form.ComplainantRespondent"
                      :value="'POVINNY'"
                      required
                    />
                    <label
                      class="govuk-label govuk-radios__label"
                      for="ComplainantRespondent1"
                    >
                      Povinný
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</template>
