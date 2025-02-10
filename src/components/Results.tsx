import { CalculatorValues } from "../types";
import { calculateInvestmentResults, formatter } from "../util/investment";

const Results = ({
  calculatorValues,
}: {
  calculatorValues: CalculatorValues;
}) => {
  const results = calculateInvestmentResults(calculatorValues);
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
          (
            { year, investmentValue, interest, totalInterest, investedCapital },
            i
          ) => (
            <tr key={i}>
              <td>{year}</td>
              <td>{formatter.format(investmentValue)}</td>
              <td>{formatter.format(interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default Results;
