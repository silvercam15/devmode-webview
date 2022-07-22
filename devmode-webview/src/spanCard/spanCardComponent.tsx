import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './styles.css'


export default function SpanCardComponent(data:any) {
    const start = new Date(data.data.start_time * 1000)
    const end = new Date(data.data.end_time * 1000)
    const duration = new Date(data.data.end_time - data.data.start_time * 1000)
  return (
    <Card sx={{ minWidth: 275 }}>
    <div className='card'>
      <div>
      <Typography className='name'>
            {data.data.name}
            </Typography>
          <div className='cardTimes'>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Start: {start.toTimeString()}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            End: {end.toTimeString()}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Duration: {duration.toTimeString()}
            </Typography>
        </div>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          trace id: {data.data.trace_id}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          span id: {data.data.span_id}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          parent: {data.data.parent_id}
          </Typography>
      </div>
    <div className='accordion'>
      {data.data.attributes && <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Attributes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {data.data.attributes}
          </Typography>
        </AccordionDetails>
      </Accordion> }
      {data.data.resource_attributes && <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Resources</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {data.data.resource_attributes}
          </Typography>
        </AccordionDetails>
      </Accordion>}
    </div>
    </div>
    </Card>
  );
}
