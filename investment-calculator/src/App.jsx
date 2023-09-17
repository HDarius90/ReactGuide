import logo from "./assets/investment-calculator-logo.png";
import Header from "./assets/components/Header";
import Form from "./assets/components/Form";
import Table from "./assets/components/Table";
import { useState } from "react";

function App() {
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["capital"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearlySavingAmount"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expectedIntrestPersent"] / 100;
    const duration = +userInput["investmentDurationInYears"];
    let totalInterest = 0;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      totalInterest += yearlyInterest;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest: totalInterest,
        investedCapital: currentSavings - totalInterest,
      });
    }

    return yearlyData;
  };

  const [calculatedData, setCalculatedData] = useState("");

  const updateTable = (data) => {
    setCalculatedData(calculateHandler(data));
  };

  return (
    <div>
      <Header logo={logo} />
      <Form updateTable={updateTable} />

      {calculatedData ? (
        <Table calculatedData={calculatedData} />
      ) : (
        <div style={{ textAlign: 'center' }}>No investment callculated yet.</div>
      )}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
