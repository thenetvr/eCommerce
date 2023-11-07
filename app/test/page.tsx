import React from "react";
import { Button } from "@/components/ui/button";
import { ToastDemo } from "@/components/toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Alert from "@/components/Alert";

export default function Test() {
  const objectsArray = [
    {
      title: "Object 1",
      description: "This is the description for Object 1.",
    },
    {
      title: "Object 2",
      description: "This is the description for Object 2.",
    },
    {
      title: "Object 3",
      description: "This is the description for Object 3.",
    },
    {
      title: "Object 4",
      description: "This is the description for Object 4.",
    },
    {
      title: "Object 5",
      description: "This is the description for Object 5.",
    },
  ];

  return (
    <div>
      <Button>Click Me</Button>
      <ToastDemo />

      <div className="w-1/3 rounded-lg bg-sky-300 p-3">
        {objectsArray.map((object) => (
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>{object.title}</AccordionTrigger>
              <AccordionContent>{object.description}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
      <Alert
        trigger="Open bro"
        title="this is a title for alert"
        description="This action cannot be undone. This will permanently delete your
            account and remove your data from our servers."
      />
    </div>
  );
}
