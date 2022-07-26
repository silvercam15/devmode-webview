import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./styles.css";
export default function SpanCardComponent(data) {
    var cardData = data.data;
    console.log(cardData);
    var start = new Date(cardData.start_time * 1000);
    var end = new Date(cardData.end_time * 1000);
    var duration = new Date(cardData.end_time - cardData.start_time * 1000);
    return (React.createElement(Card, { sx: { minWidth: 275 } },
        React.createElement("div", { className: "card" },
            React.createElement("div", null,
                React.createElement(Typography, { className: "name" }, cardData.name),
                React.createElement("div", { className: "cardTimes" },
                    React.createElement(Typography, { sx: { fontSize: 14 }, color: "text.secondary", gutterBottom: true },
                        "Start: ",
                        start.toTimeString()),
                    React.createElement(Typography, { sx: { fontSize: 14 }, color: "text.secondary", gutterBottom: true },
                        "End: ",
                        end.toTimeString()),
                    React.createElement(Typography, { sx: { fontSize: 14 }, color: "text.secondary", gutterBottom: true },
                        "Duration: ",
                        duration.toTimeString())),
                React.createElement(Typography, { sx: { mb: 1.5 }, color: "text.secondary" },
                    "trace id: ",
                    cardData.trace_id),
                React.createElement(Typography, { sx: { mb: 1.5 }, color: "text.secondary" },
                    "span id: ",
                    cardData.span_id),
                React.createElement(Typography, { sx: { mb: 1.5 }, color: "text.secondary" },
                    "parent: ",
                    cardData.parent_id)),
            React.createElement("div", { className: "accordion" },
                cardData.attributes && (React.createElement(Accordion, null,
                    React.createElement(AccordionSummary, { expandIcon: React.createElement(ExpandMoreIcon, null), "aria-controls": "panel1a-content", id: "panel1a-header" },
                        React.createElement(Typography, null, "Attributes")),
                    React.createElement(AccordionDetails, null, Object.values(cardData.attributes).map(function (attribute) { return (React.createElement(Typography, null, attribute)); })))),
                cardData.resource_attributes && (React.createElement(Accordion, null,
                    React.createElement(AccordionSummary, { expandIcon: React.createElement(ExpandMoreIcon, null), "aria-controls": "panel2a-content", id: "panel2a-header" },
                        React.createElement(Typography, null, "Resources")),
                    React.createElement(AccordionDetails, null, Object.values(cardData.resource_attributes).map(function (attribute) { return (React.createElement(Typography, null, attribute)); }))))))));
}
