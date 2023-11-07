import React from "react";
// button
import { Button } from "@/components/ui/button";
// toast
import { ToastDemo } from "@/components/toast";
// accordion
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// alert
import Alert from "@/components/Alert";
// popover
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// command
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
// combo box
import { ComboboxDemo } from "@/components/combo";

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
      {/* toast */}
      <ToastDemo />

      {/* accordion */}
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
      {/* alert */}
      <Alert
        trigger="Open Alert"
        title="this is a title for alert"
        description="This action cannot be undone. This will permanently delete your
            account and remove your data from our servers."
      />
      {/* popover */}
      <div className="bg-sky-500 inline p-3 m-5 rounded">
        <Popover>
          <PopoverTrigger>Open Popover</PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
      </div>
      {/* command */}
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>Profile</CommandItem>
            <CommandItem>Billing</CommandItem>
            <CommandItem>Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
      {/* combo box */}
      <ComboboxDemo />
    </div>
  );
}
