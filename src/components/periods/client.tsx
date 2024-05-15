"use client";
import { Container, Col, Row } from "react-bootstrap";
import { PeriodsTable } from "./table";

export function PeriodsClient({ periods }) {
  return (
    <Container fluid>
      <h2>Periodos</h2>
      <hr />
      <Row>
        <Col md={10}>
          <PeriodsTable periods={periods} />
        </Col>
      </Row>
    </Container>
  );
}
