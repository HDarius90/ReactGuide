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

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    console.log(yearlyData);
  };

  const [inputData, setInputData] = useState("");

  const updateTable = (data) => {
    setInputData(calculateHandler(data));
    console.log(inputData);
  };

  return (
    <div>
      <Header logo={logo} />
      <Form updateTable={updateTable} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <Table />
    </div>
  );
}

export default App;
