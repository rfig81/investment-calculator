import { useState } from "react";

import Calculator from "./components/Calculator";
import Results from "./components/Results.tsx";

import { CalculatorValues } from "./types.tsx";

const validateInputs = (calculatorValues: CalculatorValues) => {
  const { duration } = calculatorValues;
  if (duration < 1)
    return {
      isInputValid: false,
      validationMessage: "Please enter a duration greater than zero.",
    };

  if (duration > 100)
    return {
      isInputValid: false,
      validationMessage: "Please enter a number smaller than one hundred.",
    };
  return { isInputValid: true };
};

function App() {
  const [calculatorValues, setCalculatorValues] = useState({
    initialInvestment: "15000",
    annualInvestment: "1200",
    expectedReturn: "6",
    duration: "10",
  });

  const parsedValues = {
    initialInvestment: +calculatorValues.initialInvestment,
    annualInvestment: +calculatorValues.annualInvestment,
    expectedReturn: +calculatorValues.expectedReturn,
    duration: +calculatorValues.duration,
  };
  const { isInputValid, validationMessage } = validateInputs(parsedValues);

  const handleCalculatorChanges = (
    inputIdentifier: string,
    newValue: string
  ) => {
    setCalculatorValues((prevValues) => ({
      ...prevValues,
      [inputIdentifier]: /^0+\d+$/.test(newValue) //Check for leading zeros and remove them
        ? newValue.replace(/^0+/, "")
        : newValue,
    }));
  };

  return (
    <main>
      <Calculator
        values={calculatorValues}
        onChange={handleCalculatorChanges}
      />
      {!isInputValid && <p className="center">{validationMessage}</p>}
      {isInputValid && <Results values={parsedValues} />}
    </main>
  );
}

export default App;
