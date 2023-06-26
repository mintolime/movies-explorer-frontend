import React from "react";
import { regExpEmail, regExpName } from "../utils/constants";

export default function useFormAndValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setIsValid(e.target.closest("form").checkValidity());

    // Валидация поля "Имя"
    if (name === "name") {
      const isValidName = regExpName.test(value);
      setErrors({
        ...errors,
        [name]: isValidName ? "" : "Введите корректное имя",
      });
    }
    // Валидация поля "Email"
    else if (name === "email") {
      const isValidEmail = regExpEmail.test(String(value).toLowerCase());
      setErrors({
        ...errors,
        [name]: isValidEmail ? "" : "Введите корректный email",
      });
    }
    // в случае других ошибок задается ошибка валидации от браузера
    else {
      setErrors({ ...errors, [name]: e.target.validationMessage });
    }
  };

  const resetForm = React.useCallback(
    (newValues = {}, newErrors = {}, newIsValid = true) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  };
}
