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
  <div style="margin-top: 50px;">
    <div>
      <div class="govuk-heading-m">
        G) Čestné vyhlásenie o pravdivosti a úplnosti údajov
      </div>
    </div>

    <TextField
        v-model="form.CompletionPlace"
        :current-value="state.form.CompletionPlace"
        label="Miesto"
        placeholder="Miesto podania"
        :input-short="true"
      />

    <div class="govuk-form-group">
      <label class="govuk-label govuk-label--s" for="CompletionDate">
        Dňa </label><span id="input-with-error-message-error" class="govuk-error-message"></span><input
        class="govuk-input govuk-input--width-10" id="CompletionDate" type="date" label="Dňa"
        v-model="form.CompletionDate" />
    </div>
  </div>
</template>
