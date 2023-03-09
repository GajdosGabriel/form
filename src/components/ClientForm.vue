<script setup>
import ClientA1 from "./ClientA1.vue";
import ClientA2 from "./ClientA2.vue";
import ClientA3 from "./ClientA3.vue";
import ClientB from "./ClientB.vue";
import ClientC from "./ClientC.vue";
import ClientE from "./ClientE.vue";
import ClientF from "./ClientF.vue";
import ClientG from "./ClientG.vue";
import ClientH from "./ClientH.vue";
import useClient from "../composables/Client.js";

import useFormValidation from "./inputs/useFormValidation";

const {state, getValidate, getForm, getRepresentative, getLegalRepresentative, createXml, setDemoDataForm } = useClient();

const { errors } = useFormValidation();

const onSubmit = () => {
  getValidate();
};

const copyXml = () => {
  createXml();
};

const pushDemoDataForm = () => {
  setDemoDataForm();
};


</script>

<template>
  <div class="govuk-width-container">
    <h2 class="govuk-heading-l">ŽIADOSŤ O POSKYTNUTIE PRÁVNEJ POMOCI</h2>
    <p class="govuk-body">
      podľa zákona č. 327/2005 Z. z. o poskytovaní právnej pomoci osobám v
      materiálnej núdzi a o zmene a doplnení zákona č. 586/2003 Z. z. o
      advokácii a o zmene a doplnení zákona č. 455/1991 Zb. o živnostenskom
      podnikaní (živnostenský zákon) v znení neskorších predpisov v znení zákona
      č. 8/2005 Z. z. v znení neskorších predpisov
    </p>
    <main class="govuk-main-wrapper" id="main-content" role="main">
      <!-- Fpr testing -->
      <div style="margin-bottom: 30px">
        <span style="background-color: grey; color: whitesmoke; padding: 7px" @click="copyXml">Copy Xml</span>
      </div>

      <div style="margin-bottom: 30px">
        <span style="background-color: grey; color: whitesmoke; padding: 7px" @click="pushDemoDataForm">Form Demo data</span>
      </div>



      <div style="margin-bottom: 30px">
        <span style="background-color: aqua; padding: 7px">Form</span>
        {{ getForm }}
      </div>

      <div style="margin-bottom: 30px" @click="clickOnNext">
        <span style="background-color: aqua; padding: 7px">LegalReprezentative</span>
        {{ getLegalRepresentative }}
      </div>

      <div style="margin-bottom: 30px" @click="clickOnNext">
        <span style="background-color: aqua; padding: 7px">Reprezentative</span>
        {{ getRepresentative }}
      </div>

      <!-- Errors sumaary -->
      <div
        class="govuk-error-summary"
        data-module="govuk-error-summary"
        v-if="Object.keys(errors).length != 0"
      >
        <div role="alert">
          <h2 class="govuk-error-summary__title">
            Validačné chyby / Required inputs
          </h2>
          <div class="govuk-error-summary__body">
            <ul class="govuk-list govuk-error-summary__list">
              <li v-for="(error, index) in errors" :key="index">
                <a href="#">{{ error }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- End Errors sumaary -->

      <form action="/" @submit.prevent="onSubmit">
        <ClientA1></ClientA1>
        <ClientA2></ClientA2>
        <ClientA3></ClientA3>
        <!-- <ClientB></ClientB> -->
        <ClientC></ClientC>
        <!-- <ClientE></ClientE> -->
        <!-- <ClientF></ClientF> -->
        <!-- <ClientG></ClientG> -->
        <!-- <ClientH></ClientH> -->

        <button type="submit" class="govuk-button" data-module="govuk-button">
          Save and continue
        </button>
      </form>
    </main>
  </div>
</template>
