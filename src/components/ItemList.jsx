import React from "react";
import { Col, Row } from "react-bootstrap";
import Item from "./Item";

function ItemList({ items }) {
  return (
    <Row className="g-3">
      {items.length > 0 &&
        items.map((item) => (
          <Col
            key={item.id}
            xs={12}
            md={6}
            lg={4}
            xl={3}
            className="d-flex justify-content-center"
          >
            <Item item={item} />
          </Col>
        ))}
    </Row>
  );
}

export default ItemList;
