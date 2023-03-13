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
import validationList from "./validations/ValidationList.vue";

import FamilyChildren from "./ClientFamily/FamilyChildren.vue";

const {
  state,
  getValidate,
  getForm,
  getRepresentative,
  getLegalRepresentative,
  getFamily,
  getChildren,
  createXml,
  setDemoDataForm,
} = useClient();

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


    <family-children></family-children>



    <main class="govuk-main-wrapper" id="main-content" role="main">
      <!-- Fpr testing -->
      <div style="margin-bottom: 30px">
        <span
          style="background-color: grey; color: whitesmoke; padding: 7px"
          @click="copyXml"
          >Copy Xml</span
        >
      </div>

      <div style="margin-bottom: 30px">
        <span
          style="background-color: grey; color: whitesmoke; padding: 7px"
          @click="pushDemoDataForm"
          >SetForm Demo data</span
        >
      </div>

      <div style="margin-bottom: 30px">
        <span style="background-color: aqua; padding: 7px">Form</span>
        {{ getForm }}
      </div>

      <div style="margin-bottom: 30px" @click="clickOnNext">
        <span style="background-color: aqua; padding: 7px"
          >LegalReprezentative</span
        >
        {{ getLegalRepresentative }}
      </div>

      <div style="margin-bottom: 30px" @click="clickOnNext">
        <span style="background-color: aqua; padding: 7px">Reprezentative</span>
        {{ getRepresentative }}
      </div>

      <div style="margin-bottom: 30px" @click="clickOnNext">
        <span style="background-color: aqua; padding: 7px">Family</span>
        {{ getFamily }}
      </div>

      <div style="margin-bottom: 30px" @click="clickOnNext">
        <span style="background-color: aqua; padding: 7px">Children</span>
        {{ getChildren }}
      </div>

      <!-- Errors sumaary -->
      <validationList></validationList>
      <!-- End Errors sumaary -->

      <form action="/" @submit.prevent="onSubmit">
        <ClientA1></ClientA1>
        <ClientA2></ClientA2>
        <ClientA3></ClientA3>
        <ClientB></ClientB>
        <ClientC></ClientC>
        <ClientE></ClientE>
        <!-- <ClientF></ClientF> -->
        <ClientG></ClientG>
        <!-- <ClientH></ClientH> -->

        <button type="submit" class="govuk-button" data-module="govuk-button">
          Save and continue
        </button>
      </form>
    </main>
  </div>
</template>
