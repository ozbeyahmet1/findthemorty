import React from "react";
import { useSelector } from "react-redux";
import CharacterCard from "@/components/characterCard";
import MultipleSelect from "@/components/multiSelect";
import { addCharToPersist } from "@/store";

const CardsContainer = React.forwardRef<HTMLDivElement>((_, ref) => {
  const searchCard = useSelector(addCharToPersist);
  return (
    <div className="container mx-auto pt-10 pb-28" ref={ref}>
      <h1 className="text-xl font-semibold mb-4">Search and Find Rick and Morty Charachters</h1>
      <MultipleSelect />
      <h1 className="text-xl font-semibold my-4">Your Favorites</h1>
      {searchCard?.characters.length === 0 && <h2>Favorite character not found. Start adding one soon.</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {searchCard?.characters.map((character) => {
          return <CharacterCard data={character} key={character.name} />;
        })}
      </div>
    </div>
  );
});

CardsContainer.displayName = "CardsContainer"; // Add display name to the component

export default CardsContainer;
