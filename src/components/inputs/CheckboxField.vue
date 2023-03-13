<script setup>
import { onMounted, ref, watch, onBeforeUnmount } from "vue";
import useFormValidation from "../validations/useFormValidation";
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  values: {
    type: Array,
    required: true,
  },
  names: {
    type: Array,
    required: true,
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
  },
});

let input = ref(props.currentValue);
const { validateNameField, errors } = useFormValidation();

onMounted(() => {
  validateInput();
});

watch(props, () => {
  input = ref(props.currentValue);
  validateInput();
});

const validateInput = () => {
  if (!props.required) return;
  validateNameField(props.label, props.model, input.value);
};

onBeforeUnmount(() => {
  delete errors[props.model];
});
</script>

<template>
  <div class="govuk-form-group" :id="model">
    <fieldset class="govuk-fieldset">
      <legend
        class="govuk-fieldset__legend govuk-label--s"
        :for="label"
        v-text="label"
      ></legend>

      <span class="govuk-error-message">
        {{ errors[model] ? "Položka sa požaduje" : errors[model] }}
      </span>

      <div class="govuk-radios govuk-radios--inline">
        <div class="govuk-radios__item">
          <input
            class="govuk-radios__input"
            type="radio"
            :value="values[0]"
            :checked="currentValue === values[0]"
            :id="values[0]"
            v-model.trim="input"
            @keyup="validateInput"
            @blue="validateInput"
            @input="$emit('update:modelValue', $event.target.value)"
          />
          <label
            class="govuk-label govuk-radios__label"
            :for="values[0]"
            v-text="names[0]"
          ></label>
        </div>
        <div class="govuk-radios__item">
          <input
            class="govuk-radios__input"
            type="radio"
            :value="values[1]"
            :checked="currentValue === values[1]"
            :id="values[1]"
            v-model.trim="input"
            @keyup="validateInput"
            @blue="validateInput"
            @input="$emit('update:modelValue', $event.target.value)"
          />
          <label
            class="govuk-label govuk-radios__label"
            :for="values[1]"
            v-text="names[1]"
          >
          </label>
        </div>
      </div>
    </fieldset>
  </div>
</template>
