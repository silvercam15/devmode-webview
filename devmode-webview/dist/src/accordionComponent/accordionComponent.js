import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function AccordionComponent() {
    return (React.createElement("div", null,
        React.createElement(Accordion, null,
            React.createElement(AccordionSummary, { expandIcon: React.createElement(ExpandMoreIcon, null), "aria-controls": "panel1a-content", id: "panel1a-header" },
                React.createElement(Typography, null, "Accordion 1")),
            React.createElement(AccordionDetails, null,
                React.createElement(Typography, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))),
        React.createElement(Accordion, null,
            React.createElement(AccordionSummary, { expandIcon: React.createElement(ExpandMoreIcon, null), "aria-controls": "panel2a-content", id: "panel2a-header" },
                React.createElement(Typography, null, "Accordion 2")),
            React.createElement(AccordionDetails, null,
                React.createElement(Typography, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")))));
}
