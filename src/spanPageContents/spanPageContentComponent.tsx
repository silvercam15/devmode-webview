import { Pagination } from "@mui/material";
import * as React from "react";
import axios from "axios";
import SpanCardComponent from "../spanCard/spanCardComponent";
import "./spanPageContents.css";
import Span from "../models/span";
const testData = require("./testData.json");
const { useEffect, useState } = React;

export default function SpanPageContentsComponent() {
  const testSpans = testData.map((data: any) => data as Span);
  const [spans, setSpans] = useState(testSpans);

  useEffect(() => {
    getSpans()
      .then((spanData) => spanData.map((data: any) => data as Span))
      .then((spans) => setSpans(spans));
  }, []);

  async function getSpans() {
    const result = await axios.get("/spans");
    return Object.values(result.data);
  }

  return (
    <div className="contents">
      <Pagination count={10} size="large" />

      {spans.map((span: Span) => (
        <SpanCardComponent span={span} />
      ))}
    </div>
  );
}
