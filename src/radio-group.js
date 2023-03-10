import React, { useState } from "react";
import "./radio-group.css";
import "./button-styles.css";

const RadioGroup = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedOption) {
      setError("Please make a selection");
      document.getElementById("cat").focus();
    } else {
      setError("");
    }
  };

  const handleReset = () => {
    setSelectedOption("");
    setError("");
  };

  return (
    <form>
      <fieldset>
        <legend>
          <h2>My Favourite Animal</h2>
        </legend>
        <input
          type="radio"
          id="cat"
          name="animal"
          value="cat"
          checked={selectedOption === "cat"}
          onChange={(e) => setSelectedOption(e.target.value)}
          aria-describedby={error ? "error-message" : ""}
        />
        <label htmlFor="cat">Cat</label>
        <br />
        <input
          type="radio"
          id="dog"
          name="animal"
          value="dog"
          checked={selectedOption === "dog"}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
        <label htmlFor="dog">Dog</label>
        <br />
        <input
          type="radio"
          id="horse"
          name="animal"
          value="horse"
          checked={selectedOption === "horse"}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
        <label htmlFor="horse">Horse</label>
      </fieldset>
      <div id="error-message" style={{ color: "red" }}>
        {error}
      </div>
      <br />
      <button className="btn--edit" type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <button className="btn--save" type="reset" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default RadioGroup;
