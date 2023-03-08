<script setup>
import { ref, onMounted } from "vue";
import useFormValidation from "./useFormValidation";
const props = defineProps({
  label: {
    type: String,
    required: true,
  }
});


const input = ref("");

</script>

<template>
  <!-- <div class="govuk-form-group govuk-checkboxes--small"> -->
  <div class="govuk-form-group">
    <div class="govuk-checkboxes__item">
      <input class="govuk-checkboxes__input" :id="label" v-model="input" type="checkbox"
        value="21" @input="$emit('update:modelValue', $event.target.value)">

      <label class="govuk-label govuk-checkboxes__label" :for="label" v-text="label">
      </label>
    </div>
  </div>
</template>
