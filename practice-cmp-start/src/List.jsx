export default function List(props) {
  const id = props.id;
  return <ul id={id}>{props.children}</ul>;
}
