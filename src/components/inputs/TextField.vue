<script setup>
import { ref } from "vue";
import useFormValidation from "./useFormValidation";
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  inputShort: {
    type: Boolean,
    default: false,
  },
});

const input = ref("");
const { validateNameField, errors } = useFormValidation();

const validateInput = () => {
  validateNameField(props.label, input.value);
};
</script>

<template>
  <div class="govuk-form-group">
    <label class="govuk-label govuk-label--s" :for="label" v-text="label">
    </label>
    <span class="govuk-error-message" v-for="(error, index) in errors" :key="index">
      <!-- https://www.tutorialspoint.com/how-to-set-a-string-as-a-key-for-an-object-javascript -->
      <!-- {{ errors }}  -->
     {{ Object.entries(error) }}
      <!-- {{ input == "" ? "Položka musí byť vyplnená" : errors }} -->
    </span>
    <input
      type="text"
      class="govuk-input"
      :class="{
        'govuk-input--error': input == '',
        'govuk-input--width-10': inputShort,
      }"
      :id="label"
      v-model.trim="input"
      :placeholder="placeholder"
      @keyup="validateInput"
      @blue="validateInput"
      @input="$emit('update:modelValue', $event.target.value)"
      required
    />
  </div>
</template>
