export default function Label({ text, id }) {
  return <label htmlFor={id}>{text}</label>;
}
