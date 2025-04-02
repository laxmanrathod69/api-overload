import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ACCORDION } from "@/constants";
import { useState } from "react";

export const FAQs = () => {
  const [expanded, setExpanded] = useState<string>("");

  return (
    <div className="grid p-8 gap-5 lg:flex justify-between w-full md:px-28 md:py-16 lg:pb-28  lg:pt-24 bg-neutral-950/80 border-t border-gray-900">
      <div className="flex flex-col text-lg md:xl lg:text-2xl font-semibold md:w-1/2">
        <h1 className="text-muted-foreground">Frequently Asked</h1>
        <h1 className="text-gray-200">Questions</h1>
      </div>

      <Accordion type="multiple" className="w-full">
        {ACCORDION.map(({ id, question, ans }) => (
          <AccordionItem
            key={id}
            value={id}
            className="border-gray-700"
            onClick={() => setExpanded(expanded === id ? "" : id)}
          >
            <AccordionTrigger
              className={`hover:no-underline hover:text-white/90 leading-6 text-base lg:text-lg font-semibold text-white/60 transition-all ease-in-out duration-300 w-full ${
                expanded === id && "text-white/90"
              }`}
            >
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-sm lg:text-base font-medium md:leading-8 text-gray-400">
              {ans}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
