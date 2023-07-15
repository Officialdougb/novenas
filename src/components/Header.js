export default function Header(props) {
  return (
    <div className={"bg-danger " + props.fontClass}>
      <h1>Novena</h1>
      <p>A Saint Supplement</p>
    </div>
  );
}