import Accordion from "react-bootstrap/Accordion";

export default function NovenasList(props) {
  return (
    <>
      {props.data.map((novena) =>
        <Accordion.Item eventKey={novena.title}>
          <Accordion.Header>
            {novena.title}
          </Accordion.Header>
          <Accordion.Body>
            <div className="fw-bold mb-3">Start Date: {novena.start}</div>
            <div className="fst-italic mb-3">{novena.text}</div>
            <div className="fw-bold mb-2">Feast/Event: {novena.event}</div>
            <div className="fw-bold">Feast/Event Date: {novena.eventDate}</div>
          </Accordion.Body>
        </Accordion.Item>
      )}
    </>
  );
}