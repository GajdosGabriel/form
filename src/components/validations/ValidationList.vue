<script setup>
import useFormValidation from "./useFormValidation";

const { errors } = useFormValidation();
</script>

<template>
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
</template>
