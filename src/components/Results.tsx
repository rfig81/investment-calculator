import { CalculatorValues } from "../types";
import { calculateInvestmentResults, formatter } from "../util/investment";

const Results = ({ values }: { values: CalculatorValues }) => {
  const initialInvestment = values.initialInvestment;
  const results = calculateInvestmentResults(values);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map(
          ({ year, interest, valueEndOfYear, annualInvestment }, i) => {
            const totalInterest =
              valueEndOfYear - annualInvestment * year - initialInvestment;
            const totalAmountInvested = valueEndOfYear - totalInterest;
            return (
              <tr key={i}>
                <td>{year}</td>
                <td>{formatter.format(valueEndOfYear)}</td>
                <td>{formatter.format(interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default Results;
