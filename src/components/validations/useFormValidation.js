import { reactive } from "vue";
const errors = reactive({});
import useValidators from "./Validators";

export default function useFormValidation() {
  const { isEmpty, maxLength, isEmail } = useValidators();

  const validateNameField = (fieldName, fieldModel, fieldValue) => {
    errors[fieldModel] = !fieldValue
      ? isEmpty(fieldName, fieldValue)
      : maxLength(fieldName, fieldValue, 240);
  };

  const validateEmailField = (fieldName, fieldValue) => {
    errors[fieldName] = !fieldValue
      ? isEmpty(fieldName, fieldValue)
      : isEmail(fieldName, fieldValue);
  };
  return { errors, validateNameField, validateEmailField };
}
