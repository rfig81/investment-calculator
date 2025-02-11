const preventInvalidKeys = (event: React.KeyboardEvent<HTMLInputElement>) => {
  // Allow Backspace, Delete, Arrow Keys, and Tab
  if (
    ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(
      event.key
    )
  )
    return;

  // Prevent non-numeric characters
  if (!/^\d$/.test(event.key)) event.preventDefault();

  // Prevent zero when input is empty
  if (!event.currentTarget.value && event.key === "0") event.preventDefault();
};

const Calculator = ({
  values,
  onChange,
}: {
  values: {
    initialInvestment: string;
    annualInvestment: string;
    expectedReturn: string;
    duration: string;
  };
  onChange: (inputIdentifier: string, newValue: string) => void;
}) => {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    values;

  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            value={initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
            onKeyDown={(event) => preventInvalidKeys(event)}
          />
        </div>
        <div>
          <label>Annual Investment</label>
          <input
            type="number"
            value={annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
            onKeyDown={(event) => preventInvalidKeys(event)}
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>Expected Return</label>
          <input
            type="number"
            value={expectedReturn}
            onChange={(event) => onChange("expectedReturn", event.target.value)}
            onKeyDown={(event) => preventInvalidKeys(event)}
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            value={duration}
            onChange={(event) => onChange("duration", event.target.value)}
            onKeyDown={(event) => preventInvalidKeys(event)}
            onKeyUp={(event) => event.preventDefault()}
          />
        </div>
      </div>
    </section>
  );
};

export default Calculator;
