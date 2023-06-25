import React from "react";
import { regExpEmail } from "../utils/constants";

export default function useFormAndValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [isValidEmail, setIsValidEmail] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest("form").checkValidity());
    setIsValidEmail(regExpEmail.test(values));
  };

  const resetForm = React.useCallback(
    (
      newValues = {},
      newErrors = {},
      newIsValid = true,
      newIsValidEmail = false
    ) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
      setIsValidEmail(newIsValidEmail);
    },
    [setValues, setErrors, setIsValid]
  );

  // для валидации почты
  // const EmailValidator = (values) => {
  //   React.useEffect(() => {
  //     if (!values) {
  //       return;
  //     }
  //     setIsValidEmail(regExpEmail.test(values));
  //   }, [values]);

  //   return isValidEmail;
  // };

  return {
    values,
    handleChange,
    errors,
    isValid,
    isValidEmail,
    resetForm,
    setValues,
    setIsValid,
  };
}
