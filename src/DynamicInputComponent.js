import React from "react";

const DynamicInputComponent = (props) => {
  let {
    scenario,
    inputType,
    inputTitle,
    value,
    onChange,
    inputStyle,
    required,
    disable,
    customChangeFunction,
    holder,
    labelStyle,
    errorMessage,
    error,
    maxLength,
    minLength,
    options,
    regexPattern,
  } = props;

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (customChangeFunction) {
      customChangeFunction(newValue);
    } else {
      onChange(newValue);
    }
  };

  let inputField;

  switch (scenario) {
    case "create":
      inputField = (
        <input
          type={inputType}
          value={value}
          onChange={handleChange}
          placeholder={holder}
          style={inputStyle}
          disabled={disable}
          required={required}
          maxLength={maxLength}
          minLength={minLength}
          pattern={regexPattern}
        />
      );
      break;

    case "edit":
      inputField = (
        <input
          type={inputType}
          value={value}
          onChange={handleChange}
          placeholder={holder}
          style={inputStyle}
          disabled={disable}
          required={required}
          maxLength={maxLength}
          minLength={minLength}
          pattern={regexPattern}
        />
      );
      break;

    case "disable":
      inputField = (
        <input
          type={inputType}
          value={value}
          style={inputStyle}
          disabled={disable}
        />
      );
      break;

    default:
      inputField = (
        <input
          type={inputType}
          value={value}
          onChange={handleChange}
          placeholder={holder}
          style={inputStyle}
          disabled={disable}
          required={required}
          maxLength={maxLength}
          minLength={minLength}
          pattern={regexPattern}
        />
      );
  }

  switch (inputType) {
    case "select":
      inputField = (
        <select
          value={value}
          onChange={handleChange}
          style={inputStyle}
          disabled={disable}
          required={required}
        >
          {options?.map((item, i) => {
            return (
              <option key={i} value={item?.value}>
                {item?.label}
              </option>
            );
          })}
        </select>
      );
      break;

    case "number":
      <input
        type="number"
        value={value}
        onChange={handleChange}
        placeholder={holder}
        style={inputStyle}
        disabled={disable}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
        pattern={regexPattern}
      />;

      break;

    case "checkbox":
      inputField = (
        <input
          type="checkbox"
          checked={value}
          onChange={handleChange}
          disabled={disable}
        />
      );
      break;

    case "currancy":
      const formattedCurrency = new Intl.NumberFormat("en-US", {
        style: "currancy",
        currancy: "USD",
      });
      inputField = (
        <input
          type="text"
          value={formattedCurrency}
          onChange={handleChange}
          style={inputStyle}
          disabled={disable}
          placeholder={holder}
          required={required}
          maxLength={maxLength}
          minLength={minLength}
          pattern={regexPattern}
        />
      );
      break;

    case "password":
      inputField = (
        <input
          type="password"
          value={value}
          onChange={handleChange}
          style={inputStyle}
          disabled={disable}
          placeholder={holder}
          required={required}
          maxLength={maxLength}
          minLength={minLength}
          pattern={regexPattern}
        />
      );
      break;

    default:
      inputField = (
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={holder}
          style={inputStyle}
          disabled={disable}
          required={required}
          maxLength={maxLength}
          minLength={minLength}
          pattern={regexPattern}
        />
      );
      break;
  }
  return (
    <div>
      <label style={labelStyle}>{inputTitle} </label>
      {inputField}
      {error && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default DynamicInputComponent;
