import React from "react";
import { Col } from "react-bootstrap";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpDown, faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";

const DataDiv = ({ header, num, compare, bacground }) => {
  return (
    <Col md={3}>
      <div className={bacground}>
        <div className="dataHeader">{header}</div>
        <div className="dataNum">{num}</div>
        <div className="dataCompare green">
          <FontAwesomeIcon icon={faArrowsUpDown} />
          {compare}
        </div>
      </div>
    </Col>
  );
};

export default DataDiv;
