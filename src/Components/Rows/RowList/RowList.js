import React from "react";
import Row from "../Row/Row";
import "./RowList.css";
import requests from "../../../Utils/Requests";

const RowList = () => {
  return (
    <div className="row-list">
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
    </div>
  );
};
export default RowList;
