import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMore } from "@mui/icons-material";
import { RootDisplay } from "../RootDisplay";
import { AccordionProps } from "../types";

export const ItemAccordion = ({ item, currentRoot }: AccordionProps) => (
    <div>
      <Accordion style={{ background: "#F8F9FA", margin: "10px" }}>
        <AccordionSummary
          aria-controls="panel1a-content"
          expandIcon={<ExpandMore />}
          id="panel1a-header"
        >
            <p>{currentRoot === "films" ? item.title : item.name}</p>
        </AccordionSummary>
        <AccordionDetails>
            {<RootDisplay currentRoot={currentRoot} item={item} />}
        </AccordionDetails>
      </Accordion>
    </div>
  );
