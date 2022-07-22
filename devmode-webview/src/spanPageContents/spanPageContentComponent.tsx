import { Pagination } from "@mui/material";
import * as React from "react";
import SpanCardComponent from "../spanCard/dist/spanCardComponent";
import './spanPageContents.css'

export default function SpanPageContentsComponent() {
    const testData = require('./testData.json');
    
    return (
        <div className="contents">
<           Pagination count={10} size="large" />

            {testData.map((data:any) => (
            <SpanCardComponent data={data}/>
            ))}
        
        </div>
    )
};