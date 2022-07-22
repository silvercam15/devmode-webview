import { Autocomplete, Button, Checkbox, TextField, Typography } from "@mui/material";
import * as React from "react";
import './sideBarComponent.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


function SideBarComponent() {
  const testData = require('./testData.json');

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
let traceIds: any[] = [];
testData.map((data:any)=> (
  traceIds.push(data.trace_id)
))

  return( 
<div className="sidebar">
  <div className='filters'>
  <h3 className="w3-bar-item">DevMode</h3>
  <Button variant="contained">Refresh</Button>
  <h3>Filters</h3>
  <TextField label="Trace id" variant="filled" color="success" focused className="filter" />
  <TextField label="Parent id" variant="filled" color="success" focused />
  </div>

</div>

)
}

export default SideBarComponent;