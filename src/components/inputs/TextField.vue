<script setup>
import { onMounted, ref, watch, onBeforeUnmount } from "vue";
import useFormValidation from "../validations/useFormValidation";
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
  model: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: true,
  }
});

let input = ref(props.currentValue);
const { validateNameField, errors } = useFormValidation();

onMounted(() => {
  validateInput();
});

watch(
  props,
  () => {
    input = ref(props.currentValue);
    validateInput();
  });

const validateInput = () => {
  if (!props.required) return;
  validateNameField(props.label, props.model, input.value);
};

onBeforeUnmount(() => {
  delete errors[props.model]
})
</script>

<template>
  <div class="govuk-form-group" :id="model">
    <label class="govuk-label govuk-label--s" :for="label" v-text="label">
    </label>

    <span class="govuk-error-message">
      {{ errors[model] ? "Položka sa požaduje" : errors[model] }}
      <!-- {{ input == "" ? "Položka musí byť vyplnená" : errors[key] }} -->
    </span>
    <input type="text" class="govuk-input" :class="{
      // 'govuk-input--error': errors[key] ,
      'govuk-input--width-10': inputShort,
    }" :id="label" v-model.trim="input" :placeholder="placeholder" @keyup="validateInput" @blue="validateInput"
      @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>
