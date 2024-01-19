import React from 'react'
import { Dropdown, DropdownTrigger, Button, DropdownItem, DropdownMenu } from "@nextui-org/react"
import { useState } from 'react'

const Dropdonwn = () => {

  const [selectedItem, setSelectedItem] = React.useState<any>(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedItem).join(", ").replaceAll("_", " "),
    [selectedItem]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="capitalize"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedItem}
        onSelectionChange={selectedItem}
      >
        <DropdownItem key="text">Text</DropdownItem>
        <DropdownItem key="number">Number</DropdownItem>
        <DropdownItem key="date">Date</DropdownItem>
        <DropdownItem key="single_date">Single Date</DropdownItem>
        <DropdownItem key="iteration">Iteration</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Dropdonwn