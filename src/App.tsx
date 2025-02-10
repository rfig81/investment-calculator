import { useState } from "react";

import Calculator from "./components/Calculator";
import Results from "./components/Results.tsx";

const CALCULATOR_INITIAL_VALUES = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [calculatorValues, setCalculatorValues] = useState(
    CALCULATOR_INITIAL_VALUES
  );

  const handleCalculatorInputChanges = (inputValue: {
    [key: string]: number;
  }) => {
    setCalculatorValues((prevValues) => {
      const [key] = Object.keys(inputValue);
      return { ...prevValues, [key]: inputValue[key] };
    });
  };

  return (
    <main>
      <Calculator onInputChange={handleCalculatorInputChanges} />
      <Results calculatorValues={calculatorValues} />
    </main>
  );
}

export default App;
