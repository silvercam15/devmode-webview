import { Pagination } from "@mui/material";
import * as React from "react";
import axios from "axios";
import SpanCardComponent from "../spanCard/spanCardComponent";
import "./spanPageContents.css";
const testData = require("./testData.json");
const { useEffect, useState } = React;

export default function SpanPageContentsComponent() {
  const [spans, setSpans] = useState(testData);

  useEffect(() => {
    getSpans().then((spans) => setSpans(spans));
  }, []);

  async function getSpans() {
    const result = await axios.get("/spans");
    console.log("got spans from api!");
    console.log(result.data);
    return Object.values(result.data);
  }

  return (
    <div className="contents">
      <Pagination count={10} size="large" />

      {spans.map((data: any) => (
        <SpanCardComponent data={data} />
      ))}
    </div>
  );
}
