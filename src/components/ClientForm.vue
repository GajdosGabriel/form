<script setup>
import FormA1 from "./FormA1.vue";
import FormA2 from "./FormA2.vue";
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
      <!-- Errors sumaary -->
      <!-- <div class="govuk-error-summary" data-module="govuk-error-summary">
          <div role="alert">
            <h2 class="govuk-error-summary__title">
              There is a problem
            </h2>
            <div class="govuk-error-summary__body">
              <ul class="govuk-list govuk-error-summary__list">
                <li>
                    <a href="#">The date your passport was issued must be in the past</a>
                  </li>
                  <li>
                    <a href="#">Enter a postcode, like AA1 1AA</a>
                  </li>
                </ul>
              </div>
            </div>
          </div> -->
      <!-- End Errors sumaary -->

      <form action="/" @submit.prevent="onSubmit">
        <FormA2></FormA2>
        <FormA1></FormA1>
      </form>
    </main>
  </div>
</template>
