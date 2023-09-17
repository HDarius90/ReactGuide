export default function TableBody({ data }) {
  return (
    <tbody>
      <tr>
        <td>{data.year}</td>
        <td>${data.savingsEndOfYear.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}</td>
        <td>${data.yearlyInterest.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}</td>
        <td>${data.totalInterest.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}</td>
        <td>${data.investedCapital.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}</td>
      </tr>
    </tbody>
  );
}
