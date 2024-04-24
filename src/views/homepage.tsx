import * as React from "react";
import CardsContainer from "@/containers/cards";
import HeroContainer from "@/containers/hero";

export default function HomepageView() {
  return (
    <div>
      <HeroContainer />
      <CardsContainer />
    </div>
  );
}
