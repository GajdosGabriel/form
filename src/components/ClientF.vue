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
      <div class="govuk-heading-m">F) Doplňujúce informácie</div>
    </div>

    <div class="text-sm font-medium text-gray-900 mr-2 block">
      <label class="govuk-label govuk-label--s" for="AdditionalInfo">
        Doplňujúce informácie </label><textarea class="govuk-textarea" v-model="form.AdditionalInfo" rows="5"
        id="AdditionalInfo" placeholder="Doplňujúce údaje ...">
        </textarea>
    </div>
  </div>
</template>
