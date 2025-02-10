import { useState } from "react";

const Calculator = ({
  onInputChange,
}: {
  onInputChange: (inputValue: { [key: string]: number }) => void;
}) => {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [annualInvestment, setAnnualInvestment] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  const handleInitialInvestmentChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInitialInvestment(event.target.value);
    onInputChange({ initialInvestment: Number(event.target.value) });
  };
  const handleAnnualInvestmentChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAnnualInvestment(event.target.value);
    onInputChange({ annualInvestment: Number(event.target.value) });
  };
  const handleExpectedReturnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setExpectedReturn(event.target.value);
    onInputChange({ expectedReturn: Number(event.target.value) });
  };
  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(event.target.value);
    onInputChange({ duration: Number(event.target.value) });
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <label>
          Initial Investment
          <input
            type="number"
            value={initialInvestment}
            onChange={handleInitialInvestmentChange}
          />
        </label>
        <label>
          Annual Investment
          <input
            type="number"
            value={annualInvestment}
            onChange={handleAnnualInvestmentChange}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Expected Return
          <input
            type="number"
            value={expectedReturn}
            onChange={handleExpectedReturnChange}
          />
        </label>
        <label>
          Duration
          <input
            type="number"
            value={duration}
            onChange={handleDurationChange}
          />
        </label>
      </div>
    </section>
  );
};

export default Calculator;
