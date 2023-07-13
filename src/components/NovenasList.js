import Accordion from "react-bootstrap/Accordion";

export default function NovenasList(props) {
  return (
    <>
      <style type="text/css">
        {`
          ul,li {list-style:none;}
        `}
      </style>

      {props.data.map((novena) =>
        <Accordion.Item eventKey={novena.title}>
          <Accordion.Header>
            {novena.title}
          </Accordion.Header>
          <Accordion.Body>
            Start Date: {novena.start}<br />
            {novena.text}<br />
            Feast/Event: {novena.event}<br />
            Feast/Event Date: {novena.eventDate}
          </Accordion.Body>
        </Accordion.Item>
      )}
    </>
  );
}