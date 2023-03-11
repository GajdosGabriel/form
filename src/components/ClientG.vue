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
  <div style="margin-top: 50px;">
    <div>
      <div class="govuk-heading-m">
        G) Čestné vyhlásenie o pravdivosti a úplnosti údajov
      </div>
    </div>

    <TextField
        v-model="form.CompletionPlace"
        :current-value="getForm.CompletionPlace"
        label="Miesto"
        placeholder="Miesto podania"
        :input-short="true"
      />


      <DateField
        v-model="form.CompletionDate"
        :current-value="getForm.CompletionDate"
        label="Dňa"
        placeholder="Deň podania"
        :input-short="true"
      />
  </div>
</template>
