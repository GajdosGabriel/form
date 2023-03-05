<script setup>
import { ref } from "vue";
import useFormValidation from "./useFormValidation";
defineProps({
  title: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  validateMsg: {
    type: String,
    default: "Položka musí byť vyplnená",
  },
  inputShort: {
    type: Boolean,
    default: false,
  },
});

const input = ref("");

const { validateNameField, errors } = useFormValidation();
    const validateInput = () => {
      validateNameField("name", input.value);
    };
</script>

<template>
  <div class="govuk-form-group">
    <label class="govuk-label govuk-label--s" :for="title" v-text="title">
    </label>
    <span class="govuk-error-message"> {{ input == '' ? validateMsg : "" }} </span>
    <input
      type="text"
      class="govuk-input"
      :class="{
        'govuk-input--error': input == '',
        'govuk-input--width-10': inputShort,
      }"
      :id="title"
      v-model.trim="input"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      required
    />
  </div>
</template>
