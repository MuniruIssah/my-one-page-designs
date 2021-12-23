import { Row, Col } from "antd";
import React from "react";
import "./styles.scss";

const TwoColumnCardsSection = ({ image, children }) => {
  return (
      <Row className="twoColumnSection">
        <Col md={12} xs={0}>
          <div
            className="twoColumnSectionImage"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </Col>
        <Col md={12} xs={24}>
          <div className="twoColumnSectionInfo">{children}</div>
        </Col>
      </Row>
  );
};

export default TwoColumnCardsSection;
