<script setup>
import { onMounted, ref } from "vue";
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
  currentValue: {
    type: String,
    default: "",
  },
});

const input = ref(props.currentValue);
const { validateNameField, errors } = useFormValidation();

var key = props.label;

onMounted(() => {
  validateInput();
});

const validateInput = () => {
  validateNameField(props.label, input.value);
};
</script>

<template>
  <div class="govuk-form-group">
    <label class="govuk-label govuk-label--s" :for="label" v-text="label">
    </label>

    <span class="govuk-error-message">
      {{ errors[key] ? "Položka sa požaduje" : errors[key] }}
       <!-- {{ input == "" ? "Položka musí byť vyplnená" : errors[key] }} -->
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
    />
  </div>
</template>
