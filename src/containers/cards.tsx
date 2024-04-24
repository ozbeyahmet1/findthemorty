import * as React from "react";
import MultipleSelect from "@/components/multiSelect";

export default function CardsContainer() {
  return (
    <div className="container mx-auto pt-10">
      <h1 className="text-xl font-semibold mb-4">Search and Find Rick and Morty Charachters</h1>
      <MultipleSelect />
    </div>
  );
}
