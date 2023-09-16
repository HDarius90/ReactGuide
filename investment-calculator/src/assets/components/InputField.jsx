import Label from "./Label";
export default function InputField({ value, label, changeHandler, name }) {
  return (
    <p>
      <Label htmlFor={label.id} text={label.text} />
      <input
        type="number"
        id={label.id}
        name={name}
        value={value}
        onChange={changeHandler}
      />
    </p>
  );
}
