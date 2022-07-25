import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './styles.css';
export default function SpanCardComponent(data) {
    var start = new Date(data.data.start_time * 1000);
    var end = new Date(data.data.end_time * 1000);
    var duration = new Date(data.data.end_time - data.data.start_time * 1000);
    return (React.createElement(Card, { sx: { minWidth: 275 } },
        React.createElement("div", { className: 'card' },
            React.createElement("div", null,
                React.createElement(Typography, { className: 'name' }, data.data.name),
                React.createElement("div", { className: 'cardTimes' },
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
                    data.data.trace_id),
                React.createElement(Typography, { sx: { mb: 1.5 }, color: "text.secondary" },
                    "span id: ",
                    data.data.span_id),
                React.createElement(Typography, { sx: { mb: 1.5 }, color: "text.secondary" },
                    "parent: ",
                    data.data.parent_id)),
            React.createElement("div", { className: 'accordion' },
                data.data.attributes && React.createElement(Accordion, null,
                    React.createElement(AccordionSummary, { expandIcon: React.createElement(ExpandMoreIcon, null), "aria-controls": "panel1a-content", id: "panel1a-header" },
                        React.createElement(Typography, null, "Attributes")),
                    React.createElement(AccordionDetails, null,
                        React.createElement(Typography, null, data.data.attributes))),
                data.data.resource_attributes && React.createElement(Accordion, null,
                    React.createElement(AccordionSummary, { expandIcon: React.createElement(ExpandMoreIcon, null), "aria-controls": "panel2a-content", id: "panel2a-header" },
                        React.createElement(Typography, null, "Resources")),
                    React.createElement(AccordionDetails, null,
                        React.createElement(Typography, null, data.data.resource_attributes)))))));
}
