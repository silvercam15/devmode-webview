import { Button, TextField, } from "@mui/material";
import * as React from "react";
import "./sideBarComponent.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
function SideBarComponent() {
    var testData = require("./testData.json");
    var icon = React.createElement(CheckBoxOutlineBlankIcon, { fontSize: "small" });
    var checkedIcon = React.createElement(CheckBoxIcon, { fontSize: "small" });
    var traceIds = [];
    testData.map(function (data) { return traceIds.push(data.trace_id); });
    return (React.createElement("div", { className: "sidebar" },
        React.createElement("div", { className: "filters" },
            React.createElement("h3", { className: "w3-bar-item" }, "DevMode"),
            React.createElement(Button, { variant: "contained" }, "Refresh"),
            React.createElement("h3", null, "Filters"),
            React.createElement(TextField, { label: "Trace id", variant: "filled", color: "success", focused: true, className: "filter" }),
            React.createElement(TextField, { label: "Parent id", variant: "filled", color: "success", focused: true, className: "filter" }))));
}
export default SideBarComponent;
