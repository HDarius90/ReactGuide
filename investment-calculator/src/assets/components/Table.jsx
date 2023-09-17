import TableHead from "./TableHead";
import TableBody from "./TableBody";
import style from './Table.module.css'

export default function Table({ calculatedData }) {
  return (
    <table className={style.result}>
      <TableHead />
      {calculatedData.map((lineOfData, index) => {
        return <TableBody key={index} data={lineOfData}/>;
      })}
    </table>
  );
}
