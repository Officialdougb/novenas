export default function NovenasList(props) {
  return (
    <>
      {props.data.map((novena) =>
        <li key={novena.title}>
          {novena.title}<br />
          {novena.text}<br />
          Feast/Event: {novena.event}<br />
          Feast/Event Date: {novena.eventDate}
        </li>
      )}
    </>
  );
}