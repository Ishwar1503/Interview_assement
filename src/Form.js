import React, { useState } from "react";
import DynamicInputComponent from "./DynamicInputComponent";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: 56,
    checked: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(userData);
  };

  const handleChange = (fieldName, value) => {
    setUserData({ ...userData, [fieldName]: value });
  };
  return (
    <div>
      <h4>User Form</h4>

      <form onSubmit={handleSubmit}>
        <DynamicInputComponent
          scenario="edit"
          inputType="text"
          inputTitle="Name"
          required={"required"}
          value={userData?.name}
          onChange={(value) => handleChange("name", value)}
          holder="Enter Your Name"
        />

        <DynamicInputComponent
          scenario="edit"
          inputType="email"
          inputTitle="Email"
          value={userData?.email}
          onChange={(value) => handleChange("email", value)}
          holder="Enter Your Email"
        />

        <DynamicInputComponent
          scenario="disable"
          inputType="number"
          inputTitle="Age"
          value={userData?.age}
          onChange={(value) => handleChange("age", value)}
          holder="Enter Your Age"
        />

        <DynamicInputComponent
          scenario="edit"
          inputType="checkbox"
          inputTitle="Checked"
          value={userData?.checked}
          onChange={(value) => handleChange("checked", value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
