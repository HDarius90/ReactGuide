import { useState } from "react";
import InputField from "./InputField";
import style from "./Form.module.css";

export default function From({ updateTable }) {
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
    for (const key in formData) {
      if (formData[key] === "") {
        console.log("data is missing");
        return;
      }
    }
    updateTable(formData);
  };

  return (
    <form className={style.form} onSubmit={formSubmitHandler}>
      <div className={style["input-group"]}>
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
      <div className={style["input-group"]}>
        <InputField
          changeHandler={handleChange}
          value={formData.expectedIntrestPersent}
          name="expectedIntrestPersent"
          label={{
            id: "expected-return",
            text: "Expected Interest (%, per year)",
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
      <p className={style.actions}>
        <button className={style.buttonAlt} type="reset" onClick={resetForm}>
          Reset
        </button>
        <button className={style.button} type="submit">
          Calculate
        </button>
      </p>
    </form>
  );
}
