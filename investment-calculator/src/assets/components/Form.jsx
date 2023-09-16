import { useState } from "react";
import InputField from "./InputField";

export default function From() {
  const [formData, setFormData] = useState({
    capital: "",
    yearlySavingAmount: "",
    expectedIntrestPersent: "",
    investmentDurationInYears: "",
  });

  const resetForm = () => {
    setFormData({
      capital: "",
      yearlySavingAmount: "",
      expectedIntrestPersent: "",
      investmentDurationInYears: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  
  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <div className="input-group">
        <InputField
          value={formData.capital}
          changeHandler={handleChange}
          name="capital"
          label={{
            id: "current-savings",
            text: "Current Savings ($)",
          }}
        />
        <InputField
          changeHandler={handleChange}
          value={formData.yearlySavingAmount}
          name="yearlySavingAmount"
          label={{
            id: "yearly-contribution",
            text: "Yearly Savings ($)",
          }}
        />
      </div>
      <div className="input-group">
        <InputField
          changeHandler={handleChange}
          value={formData.expectedIntrestPersent}
          name="expectedIntrestPersent"
          label={{
            id: "expected-return",
            text: "Investment Duration (years)",
          }}
        />
        <InputField
          changeHandler={handleChange}
          value={formData.investmentDurationInYears}
          name="investmentDurationInYears"
          label={{
            id: "duration",
            text: "Investment Duration (years)",
          }}
        />
      </div>
      <div className="actions">
        <button className="button buttonAlt" type="button" onClick={resetForm}>
          Reset
        </button>
        <button className="button">Submit</button>
      </div>
    </form>
  );
}
