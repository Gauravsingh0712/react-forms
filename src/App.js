import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({ firstName: "" });
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  }
  console.log(formData);
  return (
    <div className="flex flex-col items-center mt-2">
      <form>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Gaurav"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline"
        />
      </form>
    </div>
  );
};

export default App;
