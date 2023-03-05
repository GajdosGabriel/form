import { reactive } from "vue";
const errors = reactive({});
import useValidators from "./Validators";

export default function useFormValidation() {
  const { isEmpty, minLength, isEmail } = useValidators();

  const validateNameField = (fieldName, fieldValue) => {
    errors[fieldName] = !fieldValue
      ? isEmpty(fieldName, fieldValue)
      : minLength(fieldName, fieldValue, 4);
  };

  const validateEmailField = (fieldName, fieldValue) => {
    errors[fieldName] = !fieldValue
      ? isEmpty(fieldName, fieldValue)
      : isEmail(fieldName, fieldValue);
  };
  return { errors, validateNameField, validateEmailField };
}
