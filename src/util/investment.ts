import { CalculatorValues } from "../types";
// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}: CalculatorValues) {
  const annualData = [];
  let investmentValue = initialInvestment;
  let investedCapital = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    const totalInterest: number =
      i === 0
        ? interestEarnedInYear
        : annualData[i - 1].totalInterest + interestEarnedInYear;
    investmentValue += interestEarnedInYear + annualInvestment;
    investedCapital += annualInvestment;
    annualData.push({
      year: i + 1, // year identifier
      investmentValue: investmentValue, // investment value at the end of year
      interest: interestEarnedInYear, // the amount of interest earned in this year
      totalInterest, // the amount of interest earned in year + the amount accumulated from years before
      investedCapital, // the accumulated amount invested each year
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
